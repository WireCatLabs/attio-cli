import { CliError } from "@wirecat/cli-base"
import { crmSourceFromManifest } from "@wirecat/cli-core/crm"
import { expect, it, vi } from "vitest"
import { API } from "./config.js"
import { HOOK_OPTIONS, SOURCE } from "./generated/wirecat-config.js"

const at = { active_from: "2026-01-01T00:00:00.000Z", active_until: null }

// Records as Attio's records query answers them: each attribute a list of typed entries, the current ones only.
const person = {
  id: { workspace_id: "w1", object_id: "o1", record_id: "p1" },
  created_at: "2026-02-03T10:00:00.000Z",
  web_url: "https://app.attio.com/acme/person/p1",
  values: {
    name: [{ ...at, attribute_type: "personal-name", full_name: "Ann Lee", first_name: "Ann", last_name: "Lee" }],
    email_addresses: [{ ...at, attribute_type: "email-address", email_address: "ann@acme.test" }],
    phone_numbers: [],
    job_title: [{ ...at, attribute_type: "text", value: "CTO" }],
    company: [{ ...at, attribute_type: "record-reference", target_object: "companies", target_record_id: "c1" }],
  },
}

const deal = {
  id: { workspace_id: "w1", object_id: "o3", record_id: "d1" },
  created_at: "2026-03-01T09:00:00.000Z",
  web_url: "https://app.attio.com/acme/deals/d1",
  values: {
    name: [{ ...at, attribute_type: "text", value: "Kitchen for Example" }],
    stage: [{ ...at, attribute_type: "status", status: { id: { status_id: "s2" }, title: "In Progress" } }],
    value: [{ ...at, attribute_type: "currency", currency_value: 15000, currency_code: "EUR" }],
    owner: [
      {
        ...at,
        attribute_type: "actor-reference",
        referenced_actor_type: "workspace-member",
        referenced_actor_id: "m1",
      },
    ],
    associated_company: [
      { ...at, attribute_type: "record-reference", target_object: "companies", target_record_id: "c1" },
    ],
    associated_people: [{ ...at, attribute_type: "record-reference", target_object: "people", target_record_id: "p1" }],
    priority: [
      { ...at, active_until: "2026-02-01T00:00:00.000Z", attribute_type: "select", option: { title: "Low" } },
      { ...at, attribute_type: "select", option: { title: "High" } },
    ],
  },
}

const company = {
  id: { workspace_id: "w1", object_id: "o2", record_id: "c1" },
  created_at: "2026-01-10T08:00:00.000Z",
  web_url: "https://app.attio.com/acme/company/c1",
  values: {
    name: [{ ...at, attribute_type: "text", value: "Example Kitchens" }],
    domains: [{ ...at, attribute_type: "domain", domain: "example.test", root_domain: "example.test" }],
    team: [{ ...at, attribute_type: "record-reference", target_object: "people", target_record_id: "p1" }],
    description: [{ ...at, attribute_type: "text", value: "Kitchens for bakeries in Valencia" }],
  },
}

const statuses = [
  { id: { status_id: "s1" }, title: "Lead", celebration_enabled: false },
  { id: { status_id: "s2" }, title: "In Progress", celebration_enabled: false },
  { id: { status_id: "s3" }, title: "Won 🎉", celebration_enabled: true },
  { id: { status_id: "s4" }, title: "Lost", celebration_enabled: false },
  { id: { status_id: "s5" }, title: "Closed won", celebration_enabled: false },
]

const note = {
  id: { workspace_id: "w1", note_id: "n1" },
  parent_object: "deals",
  parent_record_id: "d1",
  title: "Terms",
  content_plaintext: "They want a 10% discount",
  created_by_actor: { type: "workspace-member", id: "m1" },
  created_at: "2026-03-02T09:00:00.000Z",
}

const task = {
  id: { workspace_id: "w1", task_id: "t1" },
  content_plaintext: "Send the addendum",
  is_completed: false,
  completed_at: null,
  deadline_at: "2026-03-10T11:00:00.000Z",
  linked_records: [
    { target_object_id: "o3", target_record_id: "d1" },
    { target_object_id: "o9", target_record_id: "x1" },
  ],
  assignees: [{ referenced_actor_type: "workspace-member", referenced_actor_id: "m1" }],
  created_at: "2026-03-03T09:00:00.000Z",
}

const objects = [
  { id: { object_id: "o3" }, api_slug: "deals" },
  { id: { object_id: "o9" }, api_slug: "invoices" },
]

const RECORDS = { deals: deal, companies: company, people: person } as Record<string, unknown>

type Call = { operation: string; object: unknown; body: unknown }

const source = (calls: Call[] = []) =>
  crmSourceFromManifest(SOURCE, {
    api: API.manifest,
    call: async (operation, request) => {
      const body = typeof request.body === "string" ? JSON.parse(request.body) : request.body
      calls.push({ operation, object: request.path.object, body })
      if (operation === "getV2ByTargetByIdentifierAttributesByAttributeStatuses") return { data: statuses }
      // Attributes page by offset: the second page is empty.
      if (operation === "getV2ByTargetByIdentifierAttributes")
        return request.path.identifier === "deals" && !Number(request.query.offset)
          ? { data: [{ api_slug: "priority", title: "Priority", type: "select", is_system_attribute: false }] }
          : { data: [] }
      // A person or a company is copied as a deal names it, each read by id.
      if (operation === "getV2ObjectsByObjectRecordsByRecordId") return { data: RECORDS[String(request.path.object)] }
      if (operation === "getV2Notes") return { data: Number(request.query.offset) ? [] : [note] }
      if (operation === "getV2Objects") return { data: objects }
      if (operation === "getV2Tasks") return { data: [task] }
      expect(operation).toBe("postV2ObjectsByObjectRecordsQuery")
      return { data: Number(body?.offset) ? [] : [RECORDS[String(request.path.object)]] }
    },
    ...HOOK_OPTIONS,
  })

it("copies the person a deal names, mapped from Attio", async () => {
  const calls: Call[] = []
  const page = await source(calls).changes("person", null)
  expect(calls).toContainEqual(
    expect.objectContaining({ operation: "getV2ObjectsByObjectRecordsByRecordId", object: "people" }),
  )
  expect(calls).not.toContainEqual(
    expect.objectContaining({ operation: "postV2ObjectsByObjectRecordsQuery", object: "people" }),
  )
  expect("items" in page && page.items).toEqual([
    expect.objectContaining({
      externalId: "p1",
      name: "Ann Lee",
      firstName: "Ann",
      lastName: "Lee",
      emails: ["ann@acme.test"],
      email: "ann@acme.test",
      position: "CTO",
      organizations: [{ externalId: "c1" }],
      createdAt: Date.parse("2026-02-03T10:00:00.000Z"),
    }),
  ])
})

it("maps an Attio deal with its stage, amount, owner, links and own field's current value", async () => {
  const page = await source().changes("deal", null)
  expect("items" in page && page.items).toEqual([
    expect.objectContaining({
      externalId: "d1",
      title: "Kitchen for Example",
      pipeline: "deals",
      stage: "s2",
      closedDate: "2026-01-01",
      organization: "c1",
      people: [{ externalId: "p1", role: "contact" }],
      assignee: "m1",
      amount: "15000",
      currency: "EUR",
      createdAt: Date.parse("2026-03-01T09:00:00.000Z"),
      url: "https://app.attio.com/acme/deals/d1",
      metadata: { priority: { label: "Priority", value: "High" } },
    }),
  ])
})

it("reads Attio's one deal pipeline: won where it celebrates or by the title, lost by the title", async () => {
  const [pipeline] = await source().pipelines("deal")
  expect(pipeline?.stages.map(({ name, outcome }) => [name, outcome])).toEqual([
    ["Lead", "open"],
    ["In Progress", "open"],
    ["Won 🎉", "won"],
    ["Lost", "lost"],
    ["Closed won", "won"],
  ])
})

it("copies the company a deal names, with its domain, team and description", async () => {
  const calls: Call[] = []
  const page = await source(calls).changes("organization", null)
  expect(calls).not.toContainEqual(
    expect.objectContaining({ operation: "postV2ObjectsByObjectRecordsQuery", object: "companies" }),
  )
  expect("items" in page && page.items).toEqual([
    expect.objectContaining({
      externalId: "c1",
      name: "Example Kitchens",
      url: "example.test",
      people: ["p1"],
      createdAt: Date.parse("2026-01-10T08:00:00.000Z"),
      metadata: { description: { label: "Description", value: "Kitchens for bakeries in Valencia" } },
    }),
  ])
})

it("lists people live, newest first: words search names and emails, none list them all", async () => {
  const calls: Call[] = []
  const live = source(calls)
  const found = await live.list?.("person", { conditions: [], text: "ann", limit: 10 })
  expect(found?.items.map((one) => one.externalId)).toEqual(["p1"])
  const query = () => calls.find((one) => one.operation === "postV2ObjectsByObjectRecordsQuery")?.body
  expect(query()).toMatchObject({
    sorts: [{ direction: "desc", attribute: "created_at" }],
    filter: {
      $or: [
        { name: { full_name: { $contains: "ann" } } },
        { email_addresses: { email_address: { $contains: "ann" } } },
      ],
    },
  })
  calls.length = 0
  await live.list?.("person", { conditions: [], limit: 10 })
  expect(query()).not.toHaveProperty("filter")
  expect(query()).toMatchObject({ sorts: [{ direction: "desc", attribute: "created_at" }] })
})

it("reads Attio's notes and then its tasks as activities on the records they hang on", async () => {
  const live = source()
  const notes = await live.activities?.(0)
  expect(notes).toEqual({
    hasMore: true,
    nextCursor: "tasks:0",
    items: [
      {
        externalId: "note:n1",
        kind: "comment",
        subject: "Terms",
        body: "They want a 10% discount",
        done: true,
        assignee: "m1",
        createdAt: Date.parse("2026-03-02T09:00:00.000Z"),
        updatedAt: Date.parse("2026-03-02T09:00:00.000Z"),
        on: [{ kind: "deal", externalId: "d1" }],
      },
    ],
  })
  const tasks = await live.activities?.(0, notes?.nextCursor)
  expect(tasks).toEqual({
    hasMore: false,
    items: [
      expect.objectContaining({
        externalId: "task:t1",
        kind: "task",
        subject: "Send the addendum",
        dueAt: Date.parse("2026-03-10T11:00:00.000Z"),
        done: false,
        assignee: "m1",
        on: [{ kind: "deal", externalId: "d1" }],
      }),
    ],
  })
})

it("pages a full list of notes, keeps a note on another object off every record, and reads a done task", async () => {
  const notes = Array.from({ length: 50 }, (_, i) => ({
    ...note,
    id: { workspace_id: "w1", note_id: `n${i}` },
    parent_object: i ? "deals" : "invoices",
    content_plaintext: i ? note.content_plaintext : "",
    created_by_actor: { type: "api-token", id: "k1" },
  }))
  const done = { ...task, is_completed: true, completed_at: "2026-03-09T12:00:00.000Z", assignees: [] }
  const live = crmSourceFromManifest(SOURCE, {
    api: API.manifest,
    call: async (operation, request) => {
      if (operation === "getV2Notes") return { data: notes }
      if (operation === "getV2Objects") return { data: objects }
      return { data: Number(request.query.offset) ? [done] : Array.from({ length: 200 }, () => done) }
    },
    ...HOOK_OPTIONS,
  })
  const first = await live.activities?.(0)
  expect(first).toMatchObject({ hasMore: true, nextCursor: "notes:50" })
  expect(first?.items[0]).toMatchObject({ body: null, assignee: null, on: [] })
  expect(await live.activities?.(0, "tasks:0")).toMatchObject({ hasMore: true, nextCursor: "tasks:200" })
  const last = await live.activities?.(0, "tasks:200")
  expect(last?.hasMore).toBe(false)
  expect(last?.items[0]).toMatchObject({
    done: true,
    assignee: null,
    updatedAt: Date.parse("2026-03-09T12:00:00.000Z"),
  })
})

it("reads the notes when the token may not read tasks, and says what it could not read", async () => {
  const live = crmSourceFromManifest(SOURCE, {
    api: API.manifest,
    call: async (operation) => {
      if (operation === "getV2Notes") return { data: [note] }
      throw new CliError("permission_error", "missing scope", { scope: "task:read" })
    },
    ...HOOK_OPTIONS,
  })
  const context = { spend: vi.fn(), gap: vi.fn() }
  expect((await live.activities?.(0, undefined, context))?.items).toHaveLength(1)
  expect(await live.activities?.(0, "tasks:0", context)).toEqual({ items: [], hasMore: false })
  expect(context.gap).toHaveBeenCalledWith(expect.objectContaining({ kind: "activities", scope: "task:read" }))
})
