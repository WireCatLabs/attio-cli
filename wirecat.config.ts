import { defineCli } from "@wirecat/cli-core/manifest"

const QUERY = "postV2ObjectsByObjectRecordsQuery"
// Newest first, and a fixed order, so offset pages neither skip nor repeat a record.
const NEWEST = [{ direction: "desc", attribute: "created_at" }]

// Attio answers each attribute as a list of typed entries, by its docs the current ones only; `current` keeps that so
// should one come with history. Its attribute definitions say which are the workspace's own.
const records = (object: string) => ({
  list: { operation: QUERY, path: { object }, body: { limit: 500, sorts: NEWEST } },
  get: { operation: "getV2ObjectsByObjectRecordsByRecordId", path: { object, record_id: "{id}" }, items: "data" },
  custom: { from: "values", typed: { by: "attribute_type", current: "active_until" } },
})

const attributes = (object: string) => ({
  call: { operation: "getV2ByTargetByIdentifierAttributes", path: { target: "objects", identifier: object } },
  map: { code: "api_slug", label: "title", type: "type", multiple: "is_multiselect" },
  keep: { path: "is_system_attribute", is: false },
})

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
    kinds: ["organization", "person", "deal"],
    entities: {
      organization: {
        ...records("companies"),
        search: {
          operation: QUERY,
          path: { object: "companies" },
          body: { limit: 100, sorts: NEWEST, filter: { name: { $contains: "{query}" } } },
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
        ...records("people"),
        search: {
          operation: QUERY,
          path: { object: "people" },
          body: {
            limit: 100,
            sorts: NEWEST,
            filter: {
              $or: [
                { name: { full_name: { $contains: "{query}" } } },
                { email_addresses: { email_address: { $contains: "{query}" } } },
              ],
            },
          },
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
      deal: {
        ...records("deals"),
        map: {
          externalId: "id.record_id",
          title: "values.name.0.value",
          pipeline: { value: "deals" },
          stage: "values.stage.0.status.id.status_id",
          organization: "values.associated_company.0.target_record_id",
          people: { each: "values.associated_people", id: "target_record_id" },
          assignee: "values.owner.0.referenced_actor_id",
          amount: "values.value.0.currency_value",
          currency: "values.value.0.currency_code",
          url: "web_url",
          createdAt: "created_at",
        },
      },
    },
    // Attio has one deal pipeline: the statuses of the deals object's stage attribute.
    pipelines: {
      deal: {
        call: {
          operation: "getV2ByTargetByIdentifierAttributesByAttributeStatuses",
          path: { target: "objects", identifier: "deals", attribute: "stage" },
          // A deal may still stand in a stage archived since.
          query: { show_archived: true },
          items: "data",
        },
        map: { externalId: { value: "deals" }, name: { value: "Deals" } },
        stages: {
          each: ".",
          map: { externalId: "id.status_id", name: "title" },
          outcome: { path: "celebration_enabled", won: ["true"] },
        },
      },
    },
    fields: { organization: attributes("companies"), person: attributes("people"), deal: attributes("deals") },
    users: {
      call: { operation: "getV2WorkspaceMembers", items: "data" },
      map: {
        externalId: "id.workspace_member_id",
        name: { join: ["first_name", "last_name"] },
        email: "email_address",
        active: { path: "access_level", map: { admin: true, member: true, suspended: false } },
      },
    },
  },
  hooks: "./src/hooks.ts",
})
