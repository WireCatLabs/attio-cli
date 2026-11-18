// Generated from wirecat.config.ts by scripts/from-config.ts; run pnpm generate

export const VERIFY: { operation: string; id: string; name?: string } | undefined = {
  operation: "getV2Self",
  id: "workspace_id",
  name: "workspace_name",
}

export const SOURCE: Readonly<Record<string, unknown>> | undefined = {
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
        },
      },
      search: {
        operation: "postV2ObjectsByObjectRecordsQuery",
        path: {
          object: "companies",
        },
        body: {
          limit: 100,
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
        },
      },
      search: {
        operation: "postV2ObjectsByObjectRecordsQuery",
        path: {
          object: "people",
        },
        body: {
          limit: 100,
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
        },
      },
      map: {
        externalId: "id.record_id",
        title: "values.name.0.value",
        pipeline: {
          value: "deals",
        },
        stage: "values.stage.0.status.id.status_id",
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

export { hooks as HOOKS } from "../hooks.js"
