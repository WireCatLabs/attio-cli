import { memoryKeyring } from "@wirecat/cli-base"
import type { CrmManifestFake } from "@wirecat/cli-core/crm/testing"
import { FAKE_MANIFEST_TOKEN } from "@wirecat/cli-core/crm/testing"
import { afterEach, expect, it } from "vitest"
import { crmFake, signInAndCrm } from "./testing/crm-service.js"
import { runCli } from "./testing/harness.js"

const fakes: CrmManifestFake[] = []

afterEach(() => {
  expect(fakes.splice(0).flatMap((fake) => fake.refusals)).toEqual([])
})

// The fake takes any value shape the config names, so what Attio's docs require is checked on the body sent.
const sent = (fake: CrmManifestFake, operation: string) =>
  fake.calls.filter((call) => call.operation === operation).map((call) => call.body)
const CREATE = "postV2ObjectsByObjectRecords"
const PUT = "putV2ObjectsByObjectRecordsByRecordId"

const synced = async () => {
  const keyring = memoryKeyring()
  const source = crmFake()
  fakes.push(source)
  const service = signInAndCrm(source)
  await runCli(["personal", "session", "start", "--json"], { keyring, service, stdin: FAKE_MANIFEST_TOKEN })
  expect((await runCli(["personal", "sync", "--json"], { keyring, service })).code).toBe(0)
  const attio = (args: string[]) => runCli(["personal", ...args, "--json"], { keyring, service })
  const pipelines = (await attio(["pipelines", "list"])).json().items as {
    stages: { name: string; outcome: string }[]
  }[]
  const open = (pipelines[0]?.stages ?? []).filter((stage) => stage.outcome === "open").map((stage) => stage.name)
  return { attio, open, source }
}

const refused = (answer: { json: () => unknown }, code: string) =>
  expect(answer.json()).toMatchObject({ error: { code } })

it("a deal is created, changed, moved, closed and deleted, each with --yes", async () => {
  const { attio, open, source } = await synced()
  const made = await attio([
    "deals",
    "create",
    "--title",
    "Example deal",
    "--pipeline",
    "Deals",
    "--stage",
    String(open[0]),
    "--amount",
    "1500.5",
    "--currency",
    "EUR",
    "--field",
    "deal_field_1=Example",
    "--yes",
  ])
  expect(made.code, made.err).toBe(0)
  const deal = (made.json() as { item: { deal: { ref: string; title: string } } }).item.deal
  expect(deal.title).toBe("Example deal")
  // Attio refuses a deal with no owner: one left out is the member who made the token.
  expect(sent(source, CREATE).at(-1)).toMatchObject({
    data: {
      values: { owner: [{ referenced_actor_type: "workspace-member", referenced_actor_id: expect.any(String) }] },
    },
  })
  const updated = await attio([
    "deals",
    "update",
    deal.ref,
    "--pipeline",
    "Deals",
    "--stage",
    String(open[1]),
    "--amount",
    "20",
    "--currency",
    "EUR",
    "--field",
    "deal_field_1=Other",
    "--yes",
  ])
  expect(updated.code, updated.err).toBe(0)
  expect((await attio(["deals", "move", deal.ref, String(open[0]), "--yes"])).code).toBe(0)
  expect((await attio(["deals", "close", deal.ref, "won", "--yes"])).code).toBe(0)
  expect((await attio(["deals", "delete", deal.ref, "--yes"])).code).toBe(0)
})

it("what Attio has no place for is refused before anything is sent", async () => {
  const { attio, open } = await synced()
  const made = await attio(["deals", "create", "--title", "Example deal", "--stage", String(open[0]), "--yes"])
  const { ref } = (made.json() as { item: { deal: { ref: string } } }).item.deal
  // The deal value's currency is the workspace's own.
  refused(await attio(["deals", "update", ref, "--amount", "5", "--currency", "USD", "--yes"]), "validation_error")
  refused(await attio(["deals", "update", ref, "--close-date", "2026-12-01", "--yes"]), "validation_error")
  refused(
    await attio(["deals", "create", "--title", "Dated", "--close-date", "2026-12-01", "--yes"]),
    "validation_error",
  )
  refused(await attio(["deals", "close", ref, "lost", "--reason", "Price", "--yes"]), "validation_error")
  // Another member as the owner waits until the owner allows it.
  refused(await attio(["deals", "update", ref, "--owner", "7001", "--yes"]), "permission_error")
  refused(await attio(["deals", "create", "--title", "Owned", "--owner", "7001", "--yes"]), "permission_error")
})

it("a person is created and changed; a name part changed alone keeps the other", async () => {
  const { attio, source } = await synced()
  const made = await attio([
    "people",
    "create",
    "--first-name",
    "Anna",
    "--last-name",
    "Example",
    "--position",
    "Buyer",
    "--email",
    "anna@example.com",
    "--phone",
    "+34600000001",
    "--field",
    "person_field_1=Example",
    "--yes",
  ])
  expect(made.code, made.err).toBe(0)
  expect(sent(source, CREATE).at(-1)).toMatchObject({
    data: {
      values: {
        name: [{ first_name: "Anna", last_name: "Example", full_name: "Anna Example" }],
        phone_numbers: [{ original_phone_number: "+34600000001", country_code: null }],
      },
    },
  })
  const { id } = (made.json() as { item: { person: { id: string } } }).item.person
  const renamed = await attio(["people", "update", id, "--first-name", "Ann", "--yes"])
  expect(renamed.code, renamed.err).toBe(0)
  expect((renamed.json() as { item: { person: object } }).item.person).toMatchObject({
    first_name: "Ann",
    last_name: "Example",
  })
  const changed = await attio([
    "people",
    "update",
    id,
    "--name",
    "Anna Other",
    "--last-name",
    "Other",
    "--position",
    "Lead buyer",
    "--email",
    "anna@example.org",
    "--phone",
    "+34600000002",
    "--field",
    "person_field_1=Other",
    "--yes",
  ])
  expect(changed.code, changed.err).toBe(0)
  const named = await attio(["people", "create", "--name", "Marco Example", "--yes"])
  expect(named.code, named.err).toBe(0)
  // Attio takes a name only with all three parts, so one left out is sent empty.
  expect((await attio(["people", "update", id, "--name", "Madonna", "--yes"])).code).toBe(0)
  expect(sent(source, PUT).at(-1)).toMatchObject({
    data: { values: { name: [{ first_name: "Madonna", last_name: "", full_name: "Madonna" }] } },
  })
  refused(await attio(["people", "create", "--name", "Owned", "--owner", "7001", "--yes"]), "permission_error")
  refused(await attio(["people", "update", id, "--owner", "7001", "--yes"]), "permission_error")
})

it("account remove signs out and keeps or deletes the local copy", async () => {
  const { attio } = await synced()
  expect((await attio(["account", "remove", "--delete-data", "--dry-run"])).code).toBe(0)
  const kept = await attio(["account", "remove", "--keep-data", "--yes"])
  expect(kept.code, kept.err).toBe(0)
  const again = await synced()
  const removed = await again.attio(["account", "remove", "--delete-data", "--yes"])
  expect(removed.code, removed.err).toBe(0)
})
