// Generated from wirecat.config.ts by scripts/from-config.ts; run pnpm generate

export const VERIFY: { operation: string; id: string; name?: string; active?: string } = {
  operation: "getV2Self",
  id: "workspace_id",
  name: "workspace_name",
}

export const SOURCE: Readonly<Record<string, unknown>> & {
  readonly provider: string
  readonly kinds: readonly string[]
} = {
  provider: "attio",
  kinds: ["organization", "person", "deal"],
  entities: {
    organization: {
      list: {
        operation: "postV2ObjectsByObjectRecordsQuery",
        path: {
          object: "companies",
        },
        body: {
          limit: 500,
          sorts: [
            {
              direction: "desc",
              attribute: "created_at",
            },
          ],
        },
      },
      get: {
        operation: "getV2ObjectsByObjectRecordsByRecordId",
        path: {
          object: "companies",
          record_id: "{id}",
        },
        items: "data",
      },
      custom: {
        from: "values",
        typed: {
          by: "attribute_type",
          current: "active_until",
        },
      },
      linked: true,
      search: {
        operation: "postV2ObjectsByObjectRecordsQuery",
        path: {
          object: "companies",
        },
        body: {
          limit: 100,
          sorts: [
            {
              direction: "desc",
              attribute: "created_at",
            },
          ],
          filter: {
            name: {
              $contains: "{query}",
            },
          },
        },
      },
      map: {
        externalId: "id.record_id",
        name: "values.name.0.value",
        url: "values.domains.0.domain",
        people: {
          each: "values.team",
          id: "target_record_id",
        },
        createdAt: "created_at",
      },
    },
    person: {
      list: {
        operation: "postV2ObjectsByObjectRecordsQuery",
        path: {
          object: "people",
        },
        body: {
          limit: 500,
          sorts: [
            {
              direction: "desc",
              attribute: "created_at",
            },
          ],
        },
      },
      get: {
        operation: "getV2ObjectsByObjectRecordsByRecordId",
        path: {
          object: "people",
          record_id: "{id}",
        },
        items: "data",
      },
      custom: {
        from: "values",
        typed: {
          by: "attribute_type",
          current: "active_until",
        },
      },
      linked: true,
      search: {
        operation: "postV2ObjectsByObjectRecordsQuery",
        path: {
          object: "people",
        },
        body: {
          limit: 100,
          sorts: [
            {
              direction: "desc",
              attribute: "created_at",
            },
          ],
          filter: {
            $or: [
              {
                name: {
                  full_name: {
                    $contains: "{query}",
                  },
                },
              },
              {
                email_addresses: {
                  email_address: {
                    $contains: "{query}",
                  },
                },
              },
            ],
          },
        },
      },
      map: {
        externalId: "id.record_id",
        name: "values.name.0.full_name",
        firstName: "values.name.0.first_name",
        lastName: "values.name.0.last_name",
        emails: {
          each: "values.email_addresses",
          value: "email_address",
        },
        phones: {
          each: "values.phone_numbers",
          value: "phone_number",
        },
        position: "values.job_title.0.value",
        organizations: {
          each: "values.company",
          id: "target_record_id",
        },
        createdAt: "created_at",
      },
    },
    deal: {
      list: {
        operation: "postV2ObjectsByObjectRecordsQuery",
        path: {
          object: "deals",
        },
        body: {
          limit: 500,
          sorts: [
            {
              direction: "desc",
              attribute: "created_at",
            },
          ],
        },
      },
      get: {
        operation: "getV2ObjectsByObjectRecordsByRecordId",
        path: {
          object: "deals",
          record_id: "{id}",
        },
        items: "data",
      },
      custom: {
        from: "values",
        typed: {
          by: "attribute_type",
          current: "active_until",
        },
      },
      optional: {
        message: "the Deals object is off in this Attio workspace; an admin turns it on in its settings",
      },
      map: {
        externalId: "id.record_id",
        title: "values.name.0.value",
        pipeline: {
          value: "deals",
        },
        stage: "values.stage.0.status.id.status_id",
        closedDate: "values.stage.0.active_from",
        organization: "values.associated_company.0.target_record_id",
        people: {
          each: "values.associated_people",
          id: "target_record_id",
        },
        assignee: "values.owner.0.referenced_actor_id",
        amount: "values.value.0.currency_value",
        currency: "values.value.0.currency_code",
        url: "web_url",
        createdAt: "created_at",
      },
    },
  },
  pipelines: {
    deal: {
      call: {
        operation: "getV2ByTargetByIdentifierAttributesByAttributeStatuses",
        path: {
          target: "objects",
          identifier: "deals",
          attribute: "stage",
        },
        query: {
          show_archived: true,
        },
        items: "data",
      },
      map: {
        externalId: {
          value: "deals",
        },
        name: {
          value: "Deals",
        },
      },
      stages: {
        each: ".",
        map: {
          externalId: "id.status_id",
          name: "title",
        },
        outcome: {
          path: "celebration_enabled",
          won: ["true"],
        },
      },
    },
  },
  fields: {
    organization: {
      call: {
        operation: "getV2ByTargetByIdentifierAttributes",
        path: {
          target: "objects",
          identifier: "companies",
        },
      },
      map: {
        code: "api_slug",
        label: "title",
        type: "type",
        multiple: "is_multiselect",
      },
      keep: {
        path: "is_system_attribute",
        is: false,
      },
    },
    person: {
      call: {
        operation: "getV2ByTargetByIdentifierAttributes",
        path: {
          target: "objects",
          identifier: "people",
        },
      },
      map: {
        code: "api_slug",
        label: "title",
        type: "type",
        multiple: "is_multiselect",
      },
      keep: {
        path: "is_system_attribute",
        is: false,
      },
    },
    deal: {
      call: {
        operation: "getV2ByTargetByIdentifierAttributes",
        path: {
          target: "objects",
          identifier: "deals",
        },
      },
      map: {
        code: "api_slug",
        label: "title",
        type: "type",
        multiple: "is_multiselect",
      },
      keep: {
        path: "is_system_attribute",
        is: false,
      },
    },
  },
  writes: {
    deal: {
      create: {
        operation: "postV2ObjectsByObjectRecords",
        path: {
          object: "deals",
        },
        body: {
          data: {
            values: "{values}",
          },
        },
      },
      update: {
        operation: "putV2ObjectsByObjectRecordsByRecordId",
        path: {
          object: "deals",
          record_id: "{id}",
        },
        body: {
          data: {
            values: "{values}",
          },
        },
      },
      id: "data.id.record_id",
      clear: [],
      custom: {
        list: true,
      },
      remove: {
        operation: "deleteV2ObjectsByObjectRecordsByRecordId",
        path: {
          object: "deals",
          record_id: "{id}",
        },
      },
      fields: {
        title: {
          to: "name",
          list: true,
          each: {
            value: "{value}",
          },
        },
        pipeline: "implied",
        stage: {
          to: "stage",
          list: true,
          each: {
            status: "{value}",
          },
        },
        owner: {
          to: "owner",
          list: true,
          each: {
            referenced_actor_type: "workspace-member",
            referenced_actor_id: "{value}",
          },
        },
        amount: {
          to: "value",
          list: true,
          number: true,
          decimals: 4,
          each: {
            currency_value: "{value}",
          },
        },
        currency: {
          fixed: {
            operation: "getV2ByTargetByIdentifierAttributesByAttribute",
            path: {
              target: "objects",
              identifier: "deals",
              attribute: "value",
            },
          },
          at: "data.config.currency.default_currency_code",
        },
        organization: {
          to: "associated_company",
          list: true,
          each: {
            target_object: "companies",
            target_record_id: "{value}",
          },
        },
        people: {
          to: "associated_people",
          list: true,
          each: {
            target_object: "people",
            target_record_id: "{value}",
          },
        },
      },
    },
    person: {
      create: {
        operation: "postV2ObjectsByObjectRecords",
        path: {
          object: "people",
        },
        body: {
          data: {
            values: "{values}",
          },
        },
      },
      update: {
        operation: "putV2ObjectsByObjectRecordsByRecordId",
        path: {
          object: "people",
          record_id: "{id}",
        },
        body: {
          data: {
            values: "{values}",
          },
        },
      },
      id: "data.id.record_id",
      clear: [],
      custom: {
        list: true,
      },
      fields: {
        name: {
          to: "name",
          list: true,
          each: {
            full_name: "{value}",
          },
        },
        firstName: {
          to: "name",
          list: true,
          each: {
            first_name: "{value}",
          },
        },
        lastName: {
          to: "name",
          list: true,
          each: {
            last_name: "{value}",
          },
        },
        position: {
          to: "job_title",
          list: true,
          each: {
            value: "{value}",
          },
        },
        emails: {
          to: "email_addresses",
          list: true,
          each: {
            email_address: "{value}",
          },
        },
        phones: {
          to: "phone_numbers",
          list: true,
          each: {
            original_phone_number: "{value}",
            country_code: null,
          },
        },
      },
    },
  },
  users: {
    call: {
      operation: "getV2WorkspaceMembers",
      items: "data",
    },
    map: {
      externalId: "id.workspace_member_id",
      name: {
        join: ["first_name", "last_name"],
      },
      email: "email_address",
      active: {
        path: "access_level",
        map: {
          admin: true,
          member: true,
          suspended: false,
        },
      },
    },
  },
}

import { hooks } from "../hooks.js"

export const HOOK_OPTIONS = { hooks }

export const LIVE: readonly ("person" | "organization" | "user")[] = ["person", "organization", "user"]
