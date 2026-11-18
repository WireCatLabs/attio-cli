import { mkdtempSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { memoryKeyring } from "@wirecat/cli-base"
import { parseCrmManifest } from "@wirecat/cli-core/crm"
import {
  type CrmManifestFake,
  crmManifestFake,
  crmManifestFixture,
  crmSourceContract,
  crmSyncContract,
  FAKE_MANIFEST_TOKEN,
} from "@wirecat/cli-core/crm/testing"
import { type MessageStore, openStore } from "@wirecat/cli-core/store"
import { afterEach, describe, expect, it } from "vitest"
import { API } from "./config.js"
import { definitions } from "./generated/definitions.js"
import { HOOKS, SOURCE } from "./generated/wirecat-config.js"
import { fakeServiceApi } from "./testing/fake-api.js"
import { runCli } from "./testing/harness.js"

const manifest = parseCrmManifest(SOURCE, API.manifest)
const fakes: CrmManifestFake[] = []
const stores: MessageStore[] = []

afterEach(async () => {
  // A call the fake refused is one the API description does not allow: the source would fail on the real service.
  expect(fakes.splice(0).flatMap((fake) => fake.refusals)).toEqual([])
  await Promise.all(stores.splice(0).map((store) => store.close()))
})

describe("crmSourceContract over a fake of the API, from wirecat.config.ts", () => {
  for (const { name, run } of crmSourceContract(() => {
    const fixture = crmManifestFixture(manifest, { api: API.manifest, definitions, ...(HOOKS ? { hooks: HOOKS } : {}) })
    fakes.push(fixture.fake)
    return fixture
  }))
    it(name, run)
})

describe("crmSyncContract over a store", () => {
  for (const { name, run } of crmSyncContract(async () => {
    const store = await openStore({ path: join(mkdtempSync(join(tmpdir(), "crm-sync-")), "store.db") })
    stores.push(store)
    return { store, account: { provider: String(SOURCE?.provider), account: "example.test" } }
  }))
    it(name, run)
})

// The sign-in check goes to the fake of the whole API; the source's reads go to the manifest's fake, which pages to an
// end: the API's fake answers every page of an offset list with a row, so a sync would read until its budget.
it("sync through this CLI keeps the rows under the account session start checked", async () => {
  const keyring = memoryKeyring()
  const api = fakeServiceApi(FAKE_MANIFEST_TOKEN)
  const source = crmManifestFake(manifest, { api: API.manifest, definitions })
  fakes.push(source)
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
  expect(started.code, started.err).toBe(0)
  const synced = await runCli(["personal", "sync", "--json"], { keyring, service })
  expect(synced.code, synced.err).toBe(0)
  const item = synced.json().item as { complete: boolean; synced: { kind: string; saved: number }[] }
  expect(item.complete).toBe(true)
  expect(item.synced.map(({ kind, saved }) => [kind, saved])).toEqual([
    ["organization", 3],
    ["person", 3],
  ])
  const status = await runCli(["personal", "store", "status", "--json"], { keyring, service })
  expect(status.code, status.err).toBe(0)
  const stored = (status.json().items as { kind: string; stored: number }[]).filter(({ stored }) => stored > 0)
  expect(stored.map(({ kind, stored }) => [kind, stored])).toEqual([
    ["organization", 3],
    ["person", 3],
  ])
  expect(api.refusals).toEqual([])
})
