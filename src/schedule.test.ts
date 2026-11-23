import { mkdtempSync, readFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { delimiter, isAbsolute, join } from "node:path"
import { describe, expect, it } from "vitest"
import { run } from "./program.js"
import { FAKE_API_TOKEN } from "./testing/fake-api.js"
import { signedIn } from "./testing/harness.js"

/** A machine whose `systemctl` only records what it was asked, so no test installs a real timer. */
const harness = (extra: NodeJS.ProcessEnv = {}) => {
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
    ...extra,
  }
  const ran: string[][] = []
  const system = {
    platform: "linux" as const,
    uid: 501,
    entry: ["/opt/node", "/opt/attio/dist/bin/attio.js"],
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
  const timer = join(root, "home", ".config", "systemd", "user", "attio-schedule-crm.timer")
  return { attio, ran, file, timer }
}

describe("attio schedule", () => {
  it("installs an hourly sync of the profile as a systemd user timer", async () => {
    const { attio, ran, file, timer } = harness()
    const added = await attio("personal", "schedule", "command", "crm", "--every", "1h", "--", "sync")
    expect(added.code, added.err).toBe(0)
    expect(JSON.parse(readFileSync(file, "utf8"))).toMatchObject({
      kind: "command",
      argv: ["sync"],
      when: { every: 60 },
      environment: { WCATTIO_PROFILE: "personal" },
    })
    expect(readFileSync(timer, "utf8")).toContain("OnUnitInactiveSec=60min")
    expect(ran.map((argv) => argv.join(" "))).toEqual([
      "systemctl --user daemon-reload",
      "systemctl --user enable --now attio-schedule-crm.timer",
    ])
  })

  it("lists the sync schedule, then removes it", async () => {
    const { attio } = harness()
    await attio("personal", "schedule", "command", "crm", "--every", "1h", "--", "sync")
    expect((await attio("personal", "schedule", "list", "--json")).out).toContain('"crm"')
    expect((await attio("personal", "schedule", "remove", "crm")).code).toBe(0)
    expect((await attio("personal", "schedule", "list", "--json")).out).not.toContain('"crm"')
  })

  it("keeps the token out of the schedule file and the timer, even from WCATTIO_TOKEN", async () => {
    const { attio, file, timer } = harness({ WCATTIO_TOKEN: FAKE_API_TOKEN })
    expect((await attio("personal", "schedule", "command", "crm", "--every", "1h", "--", "sync")).code).toBe(0)
    expect(readFileSync(file, "utf8")).not.toContain(FAKE_API_TOKEN)
    expect(readFileSync(timer, "utf8")).not.toContain(FAKE_API_TOKEN)
  })
})
