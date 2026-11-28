import { memoryKeyring } from "@wirecat/cli-base"
import { type CrmManifestFake, FAKE_MANIFEST_TOKEN } from "@wirecat/cli-core/testing"
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

// Notes, tasks and the objects list are not the manifest's records. They are answered here as Attio answers them,
// from the request, since the spec's samples carry no real dates.
const notesAndTasks: { path: string; body: unknown }[] = []
const AT = "2026-11-25T09:00:00.000Z"
const DEALS_OBJECT = "0b7d3c1e-0000-4000-8000-000000000001"
type Sent = Record<string, unknown> & { linked_records?: { target_record_id: string }[] }
const taskOf = (id: string, data: Sent, done: boolean) => ({
  id: { task_id: id },
  content_plaintext: data.content ?? "Example",
  is_completed: done,
  deadline_at: data.deadline_at ?? null,
  linked_records: (data.linked_records ?? []).map((one) => ({
    target_object_id: DEALS_OBJECT,
    target_record_id: one.target_record_id,
  })),
  assignees: [],
  created_at: AT,
})
const answerActivity = (path: string, method: string, data: Sent): unknown => {
  if (path === "/v2/objects") return { data: [{ id: { object_id: DEALS_OBJECT }, api_slug: "deals" }] }
  if (path === "/v2/notes")
    return {
      data: {
        id: { note_id: "n1" },
        parent_object: data.parent_object,
        parent_record_id: data.parent_record_id,
        title: data.title,
        content_plaintext: data.content,
        created_at: AT,
      },
    }
  if (path === "/v2/tasks") return { data: taskOf("t1", data, false) }
  if (method === "PATCH") return { data: taskOf(path.split("/").at(-1) as string, data, true) }
  return undefined
}

const synced = async () => {
  const keyring = memoryKeyring()
  const source = crmFake()
  fakes.push(source)
  const crm = signInAndCrm(source)
  const service = {
    ...crm,
    fetch: (input: string | URL | Request, init?: RequestInit) => {
      const url = new URL(input instanceof Request ? input.url : input)
      const method = init?.method ?? "GET"
      const body = JSON.parse(String(init?.body ?? "null")) as { data?: Sent } | null
      const answer = answerActivity(url.pathname, method, body?.data ?? {})
      if (answer === undefined) return crm.fetch(input, init)
      if (method !== "GET") notesAndTasks.push({ path: url.pathname, body })
      return Promise.resolve(Response.json(answer))
    },
  }
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
  refused(await attio(["people", "create", "--name", "Owned", "--owner", "7001", "--yes"]), "validation_error")
  refused(await attio(["people", "update", id, "--owner", "7001", "--yes"]), "validation_error")
})

it("a note and a task go on a deal, each asking first, and the task is marked done", async () => {
  const { attio, open } = await synced()
  notesAndTasks.length = 0
  const made = await attio(["deals", "create", "--title", "Example deal", "--stage", String(open[0]), "--yes"])
  const { ref, external_id: id } = (made.json() as { item: { deal: { ref: string; external_id: string } } }).item.deal
  const asked = await attio(["activities", "create", "comment", "--subject", ref, "--text", "Called"])
  refused(asked, "confirmation_required")
  expect(notesAndTasks).toEqual([])
  const note = await attio(["activities", "create", "comment", "--subject", ref, "--text", "Called", "--yes"])
  expect(note.code, note.err).toBe(0)
  // The same id a sync gives it, so a later full list of notes keeps it.
  expect((note.json() as { item: { activity: object } }).item.activity).toMatchObject({
    external_id: "note:n1",
    on: [{ kind: "deal", ref }],
  })
  expect(notesAndTasks.at(-1)).toEqual({
    path: "/v2/notes",
    body: { data: { parent_object: "deals", parent_record_id: id, title: "", format: "plaintext", content: "Called" } },
  })
  const task = await attio([
    "activities",
    "create",
    "task",
    "--subject",
    ref,
    "--title",
    "Send the offer",
    "--text",
    "With the discount",
    "--due",
    "2026-12-01T10:00:00Z",
    "--yes",
  ])
  expect(task.code, task.err).toBe(0)
  expect(notesAndTasks.at(-1)).toEqual({
    path: "/v2/tasks",
    body: {
      data: {
        content: "Send the offer\n\nWith the discount",
        format: "plaintext",
        deadline_at: "2026-12-01T10:00:00.000Z",
        is_completed: false,
        linked_records: [{ target_object: "deals", target_record_id: id }],
        assignees: [],
      },
    },
  })
  // Another member as the assignee waits until the owner allows it, as for a deal.
  const owned = ["activities", "create", "task", "--subject", ref, "--title", "Theirs", "--owner", "7001", "--yes"]
  refused(await attio(owned), "permission_error")
  const { external_id } = (task.json() as { item: { activity: { external_id: string } } }).item.activity
  expect(external_id).toMatch(/^task:/)
  const done = await attio(["activities", "close", external_id, "--yes"])
  expect(done.code, done.err).toBe(0)
  expect(notesAndTasks.at(-1)).toEqual({
    path: `/v2/tasks/${external_id.slice("task:".length)}`,
    body: { data: { is_completed: true } },
  })
  // The copy keeps them only with the owner's activities setting on, which is off here.
  const listed = await attio(["activities", "list", "--limit", "5"])
  expect(listed.code, listed.err).toBe(0)
  expect(listed.json()).toMatchObject({ items: [] })
})

it("a note on two records, or a note marked done, is refused before anything is sent", async () => {
  const { attio, open } = await synced()
  const made = await attio(["deals", "create", "--title", "Example deal", "--stage", String(open[0]), "--yes"])
  const { ref } = (made.json() as { item: { deal: { ref: string } } }).item.deal
  const people = (await attio(["people", "create", "--name", "Anna Example", "--yes"])).json() as {
    item: { person: { id: string } }
  }
  notesAndTasks.length = 0
  const two = ["--subject", ref, "--subject", `person:crm:${people.item.person.id}`]
  refused(await attio(["activities", "create", "comment", ...two, "--text", "Called", "--yes"]), "validation_error")
  refused(await attio(["activities", "close", "note:n1", "--yes"]), "validation_error")
  expect(notesAndTasks).toEqual([])
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
