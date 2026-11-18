import { crmSourceFromManifest } from "@wirecat/cli-core/crm"
import { expect, it } from "vitest"
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
    priority: [{ ...at, attribute_type: "select", option: { title: "High" } }],
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
  },
}

const statuses = [
  { id: { status_id: "s1" }, title: "Lead", celebration_enabled: false },
  { id: { status_id: "s2" }, title: "In Progress", celebration_enabled: false },
  { id: { status_id: "s3" }, title: "Won 🎉", celebration_enabled: true },
  { id: { status_id: "s4" }, title: "Lost", celebration_enabled: false },
]

const RECORDS = { deals: deal, companies: company, people: person } as Record<string, unknown>

const source = (calls: { operation: string; body: unknown }[] = []) =>
  crmSourceFromManifest(SOURCE, {
    api: API.manifest,
    call: async (operation, request) => {
      const body = typeof request.body === "string" ? JSON.parse(request.body) : request.body
      calls.push({ operation, body })
      if (operation === "getV2ByTargetByIdentifierAttributesByAttributeStatuses") return { data: statuses }
      // Attributes page by offset: the second page is empty.
      if (operation === "getV2ByTargetByIdentifierAttributes")
        return request.path.identifier === "deals" && !Number(request.query.offset)
          ? { data: [{ api_slug: "priority", title: "Priority", type: "select", is_system_attribute: false }] }
          : { data: [] }
      // A person or a company is copied as a deal names it, each read by id.
      if (operation === "getV2ObjectsByObjectRecordsByRecordId") return { data: RECORDS[String(request.path.object)] }
      expect(operation).toBe("postV2ObjectsByObjectRecordsQuery")
      return { data: Number(body?.offset) ? [] : [RECORDS[String(request.path.object)]] }
    },
    ...HOOK_OPTIONS,
  })

it("copies the person a deal names, mapped from Attio", async () => {
  const page = await source().changes("person", null)
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

it("maps an Attio deal with its stage, amount, owner, links and own field", async () => {
  const page = await source().changes("deal", null)
  expect("items" in page && page.items).toEqual([
    expect.objectContaining({
      externalId: "d1",
      title: "Kitchen for Example",
      pipeline: "deals",
      stage: "s2",
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

it("reads Attio's one deal pipeline: won where it celebrates, lost by the title", async () => {
  const [pipeline] = await source().pipelines("deal")
  expect(pipeline?.stages.map(({ name, outcome }) => [name, outcome])).toEqual([
    ["Lead", "open"],
    ["In Progress", "open"],
    ["Won 🎉", "won"],
    ["Lost", "lost"],
  ])
})

it("copies the company a deal names, with its domain and team", async () => {
  const page = await source().changes("organization", null)
  expect("items" in page && page.items).toEqual([
    expect.objectContaining({
      externalId: "c1",
      name: "Example Kitchens",
      url: "example.test",
      people: ["p1"],
      createdAt: Date.parse("2026-01-10T08:00:00.000Z"),
    }),
  ])
})

it("lists people live, newest first: words search names and emails, none list them all", async () => {
  const calls: { operation: string; body: unknown }[] = []
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
