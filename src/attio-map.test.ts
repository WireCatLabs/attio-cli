import { crmSourceFromManifest } from "@wirecat/cli-core/crm"
import { expect, it } from "vitest"
import { API } from "./config.js"
import { HOOKS, SOURCE } from "./generated/wirecat-config.js"

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

const statuses = [
  { id: { status_id: "s1" }, title: "Lead", celebration_enabled: false },
  { id: { status_id: "s2" }, title: "In Progress", celebration_enabled: false },
  { id: { status_id: "s3" }, title: "Won 🎉", celebration_enabled: true },
  { id: { status_id: "s4" }, title: "Lost", celebration_enabled: false },
]

const source = () =>
  crmSourceFromManifest(SOURCE, {
    api: API.manifest,
    call: async (operation, request) => {
      if (operation === "getV2ByTargetByIdentifierAttributesByAttributeStatuses") return { data: statuses }
      // Attributes page by offset: the second page is empty.
      if (operation === "getV2ByTargetByIdentifierAttributes")
        return request.path.identifier === "deals" && !Number(request.query.offset)
          ? { data: [{ api_slug: "priority", title: "Priority", type: "select", is_system_attribute: false }] }
          : { data: [] }
      expect(operation).toBe("postV2ObjectsByObjectRecordsQuery")
      return { data: [request.path.object === "deals" ? deal : person] }
    },
    ...(HOOKS ? { hooks: HOOKS } : {}),
  })

it("maps an Attio person", async () => {
  const page = await source().changes("person", null)
  expect("items" in page && page.items).toEqual([
    expect.objectContaining({
      externalId: "p1",
      name: "Ann Lee",
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
