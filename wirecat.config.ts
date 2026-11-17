import { defineCli } from "@wirecat/cli-core/manifest"

export default defineCli({
  identity: {
    command: "attio",
    package: "@wirecat/attio-cli",
    prefix: "WCATTIO",
    service: "Attio",
    owner: "WireCatLabs",
  },
  spec: { kind: "openapi", from: "https://api.attio.com/openapi/api" },
  auth: { preset: "token", verify: { operation: "getV2Self", id: "workspace_id", name: "workspace_name" } },
  category: "crm",
  source: {
    provider: "attio",
    kinds: ["organization", "person"],
    entities: {
      organization: {
        list: { operation: "postV2ObjectsByObjectRecordsQuery", path: { object: "companies" }, body: { limit: 500 } },
        get: {
          operation: "getV2ObjectsByObjectRecordsByRecordId",
          path: { object: "companies", record_id: "{id}" },
          items: "data",
        },
        map: {
          externalId: "id.record_id",
          name: "values.name.0.value",
          url: "values.domains.0.domain",
          people: { each: "values.team", id: "target_record_id" },
          createdAt: "created_at",
        },
      },
      person: {
        list: { operation: "postV2ObjectsByObjectRecordsQuery", path: { object: "people" }, body: { limit: 500 } },
        get: {
          operation: "getV2ObjectsByObjectRecordsByRecordId",
          path: { object: "people", record_id: "{id}" },
          items: "data",
        },
        map: {
          externalId: "id.record_id",
          name: "values.name.0.full_name",
          firstName: "values.name.0.first_name",
          lastName: "values.name.0.last_name",
          emails: { each: "values.email_addresses", value: "email_address" },
          phones: { each: "values.phone_numbers", value: "phone_number" },
          position: "values.job_title.0.value",
          organizations: { each: "values.company", id: "target_record_id" },
          createdAt: "created_at",
        },
      },
    },
    users: {
      call: { operation: "getV2WorkspaceMembers", items: "data" },
      map: {
        externalId: "id.workspace_member_id",
        name: { join: ["first_name", "last_name"] },
        email: "email_address",
      },
    },
  },
  hooks: "./src/hooks.ts",
})
