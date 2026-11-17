import { crmSourceFromManifest } from "@wirecat/cli-core/crm"
import { expect, it } from "vitest"
import { API } from "./config.js"
import { HOOKS, SOURCE } from "./generated/wirecat-config.js"

const current = { active_from: "2026-01-01T00:00:00.000Z", active_until: null }
const replaced = { active_from: "2025-01-01T00:00:00.000Z", active_until: "2026-01-01T00:00:00.000Z" }

// One record as Attio's records query answers it: each attribute a list of values, a replaced one with active_until.
const person = {
  id: { workspace_id: "w1", object_id: "o1", record_id: "p1" },
  created_at: "2026-02-03T10:00:00.000Z",
  web_url: "https://app.attio.com/acme/person/p1",
  values: {
    name: [
      { ...replaced, attribute_type: "personal-name", full_name: "Ann Old", first_name: "Ann", last_name: "Old" },
      { ...current, attribute_type: "personal-name", full_name: "Ann Lee", first_name: "Ann", last_name: "Lee" },
    ],
    email_addresses: [
      { ...replaced, attribute_type: "email-address", email_address: "ann@old.test" },
      { ...current, attribute_type: "email-address", email_address: "ann@acme.test" },
    ],
    phone_numbers: [],
    job_title: [{ ...current, attribute_type: "text", value: "CTO" }],
    company: [{ ...current, attribute_type: "record-reference", target_object: "companies", target_record_id: "c1" }],
  },
}

const source = () =>
  crmSourceFromManifest(SOURCE, {
    api: API.manifest,
    call: async (operation) => {
      expect(operation).toBe("postV2ObjectsByObjectRecordsQuery")
      return { data: [person] }
    },
    ...(HOOKS ? { hooks: HOOKS } : {}),
  })

it("maps an Attio person from its current values only", async () => {
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
