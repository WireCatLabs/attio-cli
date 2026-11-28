import { defineCli } from "@wirecat/cli-core"

const QUERY = "postV2ObjectsByObjectRecordsQuery"
// Newest first, in a fixed order. A record added during a sync repeats a row on the next offset page, which is
// harmless; one deleted then makes the next page skip a row until the next sync.
const NEWEST = [{ direction: "desc", attribute: "created_at" }]

// Attio's docs say each attribute's typed entries come current only; `current` holds to that should a past one come.
const records = (object: string) => ({
  list: { operation: QUERY, path: { object }, body: { limit: 500, sorts: NEWEST } },
  get: { operation: "getV2ObjectsByObjectRecordsByRecordId", path: { object, record_id: "{id}" }, items: "data" },
  custom: { from: "values", typed: { by: "attribute_type", current: "active_until" } },
})

// A PUT, not a PATCH: Attio's PATCH adds to a multiselect, and an e-mail or phone list given here replaces the whole.
const VALUES = { data: { values: "{values}" } }
const writes = (object: string) => ({
  create: { operation: "postV2ObjectsByObjectRecords", path: { object }, body: VALUES },
  update: { operation: "putV2ObjectsByObjectRecordsByRecordId", path: { object, record_id: "{id}" }, body: VALUES },
  id: "data.id.record_id",
  clear: [],
  custom: { list: true as const },
})
const text = { value: "{value}" }
const reference = (object: string) => ({ target_object: object, target_record_id: "{value}" })

// Attio's attribute definitions say which are the workspace's own.
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
      // Only the clients a deal names are copied, as Bitrix24's are: Attio adds a person and a company for every
      // address in the owner's mail. The rest are read live.
      organization: {
        ...records("companies"),
        linked: true,
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
        linked: true,
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
        optional: { message: "the Deals object is off in this Attio workspace; an admin turns it on in its settings" },
        map: {
          externalId: "id.record_id",
          title: "values.name.0.value",
          pipeline: { value: "deals" },
          stage: "values.stage.0.status.id.status_id",
          // Attio keeps no closed day. A won or lost deal entered that stage when its value became active.
          closedDate: "values.stage.0.active_from",
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
    // Companies are not written: an Attio company has no e-mail or phone attribute.
    writes: {
      deal: {
        ...writes("deals"),
        remove: { operation: "deleteV2ObjectsByObjectRecordsByRecordId", path: { object: "deals", record_id: "{id}" } },
        fields: {
          title: { to: "name", list: true, each: text },
          pipeline: "implied",
          stage: { to: "stage", list: true, each: { status: "{value}" } },
          owner: {
            to: "owner",
            list: true,
            each: { referenced_actor_type: "workspace-member", referenced_actor_id: "{value}" },
          },
          amount: { to: "value", list: true, number: true, decimals: 4, each: { currency_value: "{value}" } },
          // The deal value's currency is the attribute's, one for every deal.
          currency: {
            fixed: {
              operation: "getV2ByTargetByIdentifierAttributesByAttribute",
              path: { target: "objects", identifier: "deals", attribute: "value" },
            },
            at: "data.config.currency.default_currency_code",
          },
          organization: { to: "associated_company", list: true, each: reference("companies") },
          people: { to: "associated_people", list: true, each: reference("people") },
        },
      },
      person: {
        ...writes("people"),
        fields: {
          name: { to: "name", list: true, each: { full_name: "{value}" } },
          firstName: { to: "name", list: true, each: { first_name: "{value}" } },
          lastName: { to: "name", list: true, each: { last_name: "{value}" } },
          position: { to: "job_title", list: true, each: text },
          emails: { to: "email_addresses", list: true, each: { email_address: "{value}" } },
          phones: { to: "phone_numbers", list: true, each: { original_phone_number: "{value}", country_code: null } },
        },
      },
    },
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
