import { existsSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { delimiter, isAbsolute, join } from "node:path"
import { describe, expect, it } from "vitest"
import { run } from "./program.js"
import { FAKE_API_TOKEN } from "./testing/fake-api.js"
import { signedIn } from "./testing/harness.js"

/** A machine whose `systemctl` only records what it was asked, so no test installs a real timer. */
const harness = (entry = ["/opt/node", "/opt/attio/dist/bin/attio.js"]) => {
  const root = mkdtempSync(join(tmpdir(), "schedule-"))
  const env: NodeJS.ProcessEnv = {
    ...process.env,
    // pnpm puts ./node_modules/.bin on PATH, and a schedule refuses a relative entry.
    PATH: (process.env.PATH ?? "")
      .split(delimiter)
      .filter((dir) => isAbsolute(dir))
      .join(delimiter),
    HOME: join(root, "home"),
    XDG_CONFIG_HOME: join(root, "home", ".config"),
    WCATTIO_STATE_DIR: join(root, "state"),
    MESSAGING_STORE: join(root, "store.db"),
  }
  const ran: string[][] = []
  const system = {
    platform: "linux" as const,
    uid: 501,
    entry,
    run: async (argv: string[]) => {
      ran.push(argv)
      return { code: 0, stdout: "", stderr: "" }
    },
    spawn: () => 0,
    pause: async () => {},
  }
  const attio = async (...argv: string[]) => {
    const out: string[] = []
    const err: string[] = []
    const code = await run(argv, {
      streams: { data: (text) => out.push(text), diagnostic: (text) => err.push(text) },
      tty: false,
      env,
      keyring: signedIn(),
      system,
    } as Parameters<typeof run>[1])
    return { code, out: out.join(""), err: err.join("\n") }
  }
  const file = join(root, "state", "schedules", "crm", "schedule.json")
  const units = join(root, "home", ".config", "systemd", "user")
  return { attio, env, ran, root, file, units }
}

describe("attio schedule", () => {
  it("installs an hourly sync of the profile as a systemd user timer", async () => {
    const { attio, ran, file, units } = harness()
    const added = await attio("personal", "schedule", "command", "crm", "--every", "1h", "--", "sync")
    expect(added.code, added.err).toBe(0)
    expect(JSON.parse(readFileSync(file, "utf8"))).toMatchObject({
      kind: "command",
      argv: ["sync"],
      when: { every: 60 },
      environment: { WCATTIO_PROFILE: "personal" },
    })
    expect(readFileSync(join(units, "attio-schedule-crm.timer"), "utf8")).toContain("OnUnitInactiveSec=60min")
    expect(ran.map((argv) => argv.join(" "))).toEqual([
      "systemctl --user daemon-reload",
      "systemctl --user enable --now attio-schedule-crm.timer",
    ])
  })

  it("installs the CRM morning digest as a daily command schedule of changes list --format report", async () => {
    const { attio, root } = harness()
    const argv = ["changes", "list", "--format", "report"]
    const added = await attio("personal", "schedule", "command", "crm-digest", "--at", "08:00", "--", ...argv)
    expect(added.code, added.err).toBe(0)
    const file = join(root, "state", "schedules", "crm-digest", "schedule.json")
    expect(JSON.parse(readFileSync(file, "utf8"))).toMatchObject({
      kind: "command",
      argv,
      environment: { WCATTIO_PROFILE: "personal" },
    })
  })

  it("lists the sync schedule, then removes it and its timer", async () => {
    const { attio, ran } = harness()
    await attio("personal", "schedule", "command", "crm", "--every", "1h", "--", "sync")
    const listed = await attio("personal", "schedule", "list", "--json")
    expect(listed.code, listed.err).toBe(0)
    expect(listed.out).toContain('"crm"')
    expect((await attio("personal", "schedule", "remove", "crm")).code).toBe(0)
    expect(ran.map((argv) => argv.join(" "))).toContain("systemctl --user disable --now attio-schedule-crm.timer")
    expect((await attio("personal", "schedule", "list", "--json")).out).not.toContain('"crm"')
  })

  it("keeps the token out of the schedule file and its units, even from WCATTIO_TOKEN", async () => {
    const { attio, env, file, units } = harness()
    env.WCATTIO_TOKEN = FAKE_API_TOKEN
    expect((await attio("personal", "schedule", "command", "crm", "--every", "1h", "--", "sync")).code).toBe(0)
    expect(readFileSync(file, "utf8")).not.toContain(FAKE_API_TOKEN)
    for (const unit of ["attio-schedule-crm.timer", "attio-schedule-crm.service"])
      expect(readFileSync(join(units, unit), "utf8")).not.toContain(FAKE_API_TOKEN)
  })

  it("refuses to install, remove, run or exec a schedule under WCATTIO_READ_ONLY", async () => {
    const { attio, env, ran, file } = harness()
    env.WCATTIO_READ_ONLY = "1"
    expect((await attio("personal", "schedule", "command", "crm", "--every", "1h", "--", "sync")).code).not.toBe(0)
    expect(ran).toEqual([])
    delete env.WCATTIO_READ_ONLY
    await attio("personal", "schedule", "command", "crm", "--every", "1h", "--", "sync")
    env.WCATTIO_READ_ONLY = "1"
    for (const words of [
      ["remove", "crm"],
      ["run", "crm"],
    ]) {
      const refused = await attio("personal", "schedule", ...words, "--json")
      expect(JSON.parse(refused.err).error.code, words.join(" ")).toBe("permission_error")
    }
    expect(JSON.parse((await attio("schedule", "exec", file, "--json")).err).error.code).toBe("permission_error")
    expect(existsSync(join(file, "..", "last.json"))).toBe(false)
  })

  it.skipIf(process.platform === "win32")(
    "the timer's schedule exec and schedule run start sync for the profile, with no terminal and no --yes",
    async () => {
      const root = mkdtempSync(join(tmpdir(), "entry-"))
      const seen = join(root, "seen.json")
      const script = join(root, "fake-attio.js")
      writeFileSync(
        script,
        `require("fs").writeFileSync(${JSON.stringify(seen)}, JSON.stringify({ argv: process.argv.slice(2), profile: process.env.WCATTIO_PROFILE }))\n`,
      )
      const { attio, file } = harness([process.execPath, script])
      await attio("personal", "schedule", "command", "crm", "--every", "1h", "--", "sync")
      const exec = await attio("schedule", "exec", file)
      expect(exec.code, exec.err).toBe(0)
      expect(JSON.parse(readFileSync(seen, "utf8"))).toEqual({ argv: ["sync"], profile: "personal" })
      expect(JSON.parse(readFileSync(join(file, "..", "last.json"), "utf8")).exitCode).toBe(0)
      const ran = await attio("personal", "schedule", "run", "crm")
      expect(ran.code, ran.err).toBe(0)
    },
  )

  it("keeps only the words, the profile and folder paths in the schedule file", async () => {
    const { attio, file } = harness()
    await attio("personal", "schedule", "command", "crm", "--every", "1h", "--", "sync")
    const written = JSON.parse(readFileSync(file, "utf8")) as { environment: Record<string, string> }
    expect(Object.keys(written.environment).sort()).toEqual([
      "MESSAGING_STORE",
      "PATH",
      "WCATTIO_CONFIG_DIR",
      "WCATTIO_PROFILE",
      "WCATTIO_STATE_DIR",
    ])
  })
})
