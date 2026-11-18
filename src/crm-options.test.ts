import { memoryKeyring } from "@wirecat/cli-base"
import { parseCrmManifest } from "@wirecat/cli-core/crm"
import { crmManifestFake, FAKE_MANIFEST_TOKEN } from "@wirecat/cli-core/crm/testing"
import { expect, it } from "vitest"
import { API } from "./config.js"
import { definitions } from "./generated/definitions.js"
import { SOURCE } from "./generated/wirecat-config.js"
import { fakeServiceApi } from "./testing/fake-api.js"
import { runCli } from "./testing/harness.js"

// The sign-in check goes to the fake of the whole API, the source's reads to the manifest's fake, which ends its lists.
const signedInAndSynced = async () => {
  const keyring = memoryKeyring()
  const api = fakeServiceApi(FAKE_MANIFEST_TOKEN)
  const source = crmManifestFake(parseCrmManifest(SOURCE, API.manifest), { api: API.manifest, definitions })
  const service = {
    fetch: (input: string | URL | Request, init?: RequestInit) =>
      new URL(input instanceof Request ? input.url : input).pathname === "/v2/self"
        ? api.fetch(input, init)
        : source.fetch(input, init),
  }
  const started = await runCli(["personal", "session", "start", "--json"], {
    keyring,
    service,
    stdin: FAKE_MANIFEST_TOKEN,
  })
  if (started.code !== 0) throw new Error(`session start failed: ${started.err}`)
  const synced = await runCli(["personal", "sync", "--rescan", "--max-pages", "50", "--json"], { keyring, service })
  if (synced.code !== 0) throw new Error(`sync failed: ${synced.err}`)
  const ran = (argv: string[]) =>
    runCli(["personal", ...argv, ...(argv.includes("--format") ? [] : ["--json"])], { keyring, service })
  const firstRef = async (kind: string) => {
    const listed = (await ran([kind, "list"])).json() as { items: { ref?: string; id?: string }[] }
    const one = listed.items[0]
    if (!one) throw new Error(`no ${kind}`)
    return String(one.ref ?? one.id)
  }
  return { ran, source, firstRef }
}

it("every option of the CRM commands runs against the fake workspace", async () => {
  const { ran, source, firstRef } = await signedInAndSynced()
  const refs = {
    deal: await firstRef("deals"),
    person: await firstRef("people"),
    organization: await firstRef("organizations"),
    user: await firstRef("users"),
  }
  for (const argv of [
    ["deals", "list", "--limit", "1", "--page", "2"],
    ["deals", "list", "--format", "csv"],
    ["deals", "show", refs.deal],
    ["pipelines", "list"],
    ["stages", "list"],
    ["pipelines", "show", "Deals"],
    ["pipelines", "show", "Deals", "--since-time", "2026-01-01", "--until-time", "2026-12-31"],
    ["people", "list", "--limit", "1", "--page", "2"],
    ["people", "list", "name", "--format", "csv"],
    ["people", "show", refs.person],
    ["organizations", "list", "--limit", "1", "--page", "1"],
    ["organizations", "list", "--format", "csv"],
    ["organizations", "show", refs.organization],
    ["users", "list", "--limit", "1", "--page", "2"],
    ["users", "show", refs.user],
    ["fields", "list", "deals", "--limit", "5", "--page", "1"],
    ["fields", "list", "people", "--all"],
    ["changes", "list", "--format", "csv"],
    ["search", "all", "name", "--only", "crm", "--limit", "5", "--page", "1", "--exact", "--timezone", "UTC"],
    ["search", "all", "name", "--source", "attio"],
  ]) {
    const answer = await ran(argv)
    expect(answer.code, `${argv.join(" ")}: ${answer.err}`).toBe(0)
  }
  expect(source.refusals).toEqual([])
})

it("changes list pages with --limit and --cursor", async () => {
  const { ran } = await signedInAndSynced()
  const first = await ran(["changes", "list", "at>=3650d", "--limit", "1"])
  expect(first.code, first.err).toBe(0)
  const next = (first.json().page as { next_cursor?: string } | undefined)?.next_cursor
  expect(next).toEqual(expect.any(String))
  const second = await ran(["changes", "list", "at>=3650d", "--limit", "1", "--cursor", String(next)])
  expect(second.code, second.err).toBe(0)
})
