import { mkdtempSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { memoryKeyring } from "@wirecat/cli-base"
import { parseCrmManifest } from "@wirecat/cli-core/crm"
import {
  type CrmManifestFake,
  crmManifestFixture,
  crmManifestWriteContract,
  crmSourceContract,
  crmSyncContract,
  FAKE_MANIFEST_TOKEN,
} from "@wirecat/cli-core/crm/testing"
import { type MessageStore, openStore } from "@wirecat/cli-core/store"
import { afterEach, describe, expect, it } from "vitest"
import { API } from "./config.js"
import { definitions } from "./generated/definitions.js"
import { HOOK_OPTIONS, SOURCE } from "./generated/wirecat-config.js"
import { crmFake, signInAndCrm } from "./testing/crm-service.js"
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
    const fixture = crmManifestFixture(manifest, { api: API.manifest, definitions, ...HOOK_OPTIONS })
    fakes.push(fixture.fake)
    return fixture
  }))
    it(name, run)
})

describe("crmWriteContract over a fake of the API, from wirecat.config.ts", () => {
  for (const { name, run } of crmManifestWriteContract(manifest, { api: API.manifest, definitions, ...HOOK_OPTIONS }))
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

it("sync through this CLI keeps the rows under the account session start checked", async () => {
  const keyring = memoryKeyring()
  const source = crmFake()
  fakes.push(source)
  const service = signInAndCrm(source)
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
    ["deal", 3],
  ])
  const status = await runCli(["personal", "store", "status", "--json"], { keyring, service })
  expect(status.code, status.err).toBe(0)
  const stored = Object.fromEntries(
    (status.json().items as { kind: string; stored: number }[]).map(({ kind, stored }) => [kind, stored]),
  )
  // The fake's 3 people, and the 3 people its deals name by ids it never lists, kept as cli-core keeps a deal's
  // people (person ties). A deal's company the fake never lists stays a reference on the deal.
  expect(stored).toEqual({ organization: 3, person: 6, deal: 3, lead: 0 })

  expect(service.signIn.refusals).toEqual([])
})

it("a change to Attio asks first: without a terminal it waits for --yes, and nothing is sent", async () => {
  const keyring = memoryKeyring()
  const source = crmFake()
  fakes.push(source)
  const service = signInAndCrm(source)
  await runCli(["personal", "session", "start", "--json"], { keyring, service, stdin: FAKE_MANIFEST_TOKEN })
  await runCli(["personal", "sync", "--json"], { keyring, service })
  const before = source.calls.length
  const asked = await runCli(["personal", "deals", "update", "deal:1", "--title", "Renamed", "--json"], {
    keyring,
    service,
  })
  expect(asked.json()).toMatchObject({ error: { code: "confirmation_required" } })
  expect(source.calls.slice(before).filter((call) => call.method !== "GET")).toEqual([])
  const done = await runCli(["personal", "deals", "update", "deal:1", "--title", "Renamed", "--yes", "--json"], {
    keyring,
    service,
  })
  expect(done.code, done.err).toBe(0)
  expect((done.json() as { item: { deal: object } }).item.deal).toMatchObject({ title: "Renamed" })
})

it("api at readonly stops a deal write too: it sends through the same Attio operation", async () => {
  const keyring = memoryKeyring()
  const source = crmFake()
  fakes.push(source)
  const service = signInAndCrm(source)
  await runCli(["personal", "session", "start", "--json"], { keyring, service, stdin: FAKE_MANIFEST_TOKEN })
  await runCli(["personal", "sync", "--json"], { keyring, service })
  const set = await runCli(["personal", "config", "set", "permissions.api", "readonly", "--json"], { keyring })
  expect(set.code, set.err).toBe(0)
  const refused = await runCli(["personal", "deals", "update", "deal:1", "--title", "Renamed", "--yes", "--json"], {
    keyring,
    service,
  })
  expect(refused.json()).toMatchObject({ error: { code: "permission_error" } })
})
