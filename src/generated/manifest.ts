// GENERATED. DO NOT EDIT.
// Source: spec/attio/, checked against provenance.json
// Run: pnpm generate

import type { ApiServer, ManifestOperation, SecurityRequirement, SecurityScheme } from "@wirecat/cli-base/codegen"

export const operations: readonly ManifestOperation[] = [
  {
    id: "getV2Objects",
    command: "objects-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/objects",
    },
    effect: "read",
    summary: "List objects",
    description:
      "Lists all system-defined and user-defined objects in your workspace.\n\nRequired scopes: `object_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Objects"],
    security: [
      {
        oauth2: ["object_configuration:read"],
      },
    ],
    parameters: [],
    response: {
      confidence: "contract",
      schema: "GetV2ObjectsResponse",
    },
  },
  {
    id: "postV2Objects",
    command: "objects-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/v2/objects",
    },
    effect: "write",
    summary: "Create an object",
    description:
      "Creates a new custom object in your workspace.\n\nRequired scopes: `object_configuration:read-write`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Objects"],
    security: [
      {
        oauth2: ["object_configuration:read-write"],
      },
    ],
    parameters: [],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostV2ObjectsRequest",
    },
    response: {
      confidence: "contract",
      schema: "PostV2ObjectsResponse",
    },
  },
  {
    id: "getV2ObjectsByObject",
    command: "objects-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/objects/{object}",
    },
    effect: "read",
    summary: "Get an object",
    description:
      "Gets a single object by its `object_id` or slug.\n\nRequired scopes: `object_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Objects"],
    security: [
      {
        oauth2: ["object_configuration:read"],
      },
    ],
    parameters: [
      {
        name: "object",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the object.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2ObjectsByObjectResponse",
    },
  },
  {
    id: "patchV2ObjectsByObject",
    command: "objects-update",
    binding: {
      kind: "http",
      method: "PATCH",
      path: "/v2/objects/{object}",
    },
    effect: "write",
    summary: "Update an object",
    description:
      "Updates a single object. The object to be updated is identified by its `object_id`.\n\nRequired scopes: `object_configuration:read-write`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Objects"],
    security: [
      {
        oauth2: ["object_configuration:read-write"],
      },
    ],
    parameters: [
      {
        name: "object",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the object.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PatchV2ObjectsByObjectRequest",
    },
    response: {
      confidence: "contract",
      schema: "PatchV2ObjectsByObjectResponse",
    },
  },
  {
    id: "deleteV2ObjectsByObject",
    command: "objects-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/v2/objects/{object}",
    },
    effect: "destructive",
    summary: "Delete an object",
    description:
      "Deletes a single object by its `object_id` or slug, along with all of its records. Only custom objects can be deleted; system objects, such as people and companies, cannot.\n\nThis endpoint should be used with caution as it has the potential to remove a large amount of potentially valuable data.\n\nRequired scopes: `object_configuration:read-write`, `record_permission:read-write`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Objects"],
    security: [
      {
        oauth2: ["object_configuration:read-write", "record_permission:read-write"],
      },
    ],
    permissions: [
      {
        key: "attio.delete",
      },
    ],
    parameters: [
      {
        name: "object",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the object.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "DeleteV2ObjectsByObjectResponse",
    },
  },
  {
    id: "getV2ObjectsByObjectViews",
    command: "objects-views-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/objects/{object}/views",
    },
    effect: "read",
    summary: "List views for object",
    description:
      "Lists saved views for an object. Results are ordered by view ID (`id.view_id` ascending).\n\nRequired scopes: `object_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Views"],
    security: [
      {
        oauth2: ["object_configuration:read"],
      },
    ],
    pagination: {
      style: "cursor",
      cursor: {
        in: "query",
        name: "cursor",
      },
      next: "pagination.next_cursor",
      items: "data",
      limit: {
        in: "query",
        name: "limit",
      },
    },
    parameters: [
      {
        name: "object",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the object.",
          type: "string",
        },
      },
      {
        name: "show_archived",
        in: "query",
        required: false,
        schema: {
          description:
            "`true` to include archived views. See our [archiving guide](/docs/archiving-vs-deleting) for more information on archiving.",
          default: false,
          type: "boolean",
        },
      },
      {
        name: "limit",
        in: "query",
        required: false,
        schema: {
          description: "The maximum number of views to return. Must be between 1 and 1000. Defaults to 500.",
          default: 500,
          type: "integer",
          minimum: 1,
          maximum: 1000,
        },
      },
      {
        name: "cursor",
        in: "query",
        required: false,
        schema: {
          description:
            "A pagination cursor from a previous response's `pagination.next_cursor`. Omit for the first page.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2ObjectsByObjectViewsResponse",
    },
  },
  {
    id: "postV2ObjectsByObjectViews",
    command: "objects-views-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/v2/objects/{object}/views",
    },
    effect: "write",
    summary: "Create an object view",
    description:
      "Creates a view of an object with a filter, sorts, shown attributes and kanban settings. Attributes, objects, options and statuses can be referenced by slug, ID or title; the response references them by ID, as the get view endpoint does.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `view:read-write`, `object_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Views"],
    security: [
      {
        oauth2: ["view:read-write", "object_configuration:read"],
      },
    ],
    parameters: [
      {
        name: "object",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the object.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostV2ObjectsByObjectViewsRequest",
    },
    response: {
      confidence: "contract",
      schema: "PostV2ObjectsByObjectViewsResponse",
    },
  },
  {
    id: "getV2ObjectsByObjectViewsByViewId",
    command: "objects-views-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/objects/{object}/views/{view_id}",
    },
    effect: "read",
    summary: "Get an object view",
    description:
      "Gets a view of an object with its filter, sorts, shown attributes and kanban settings. Attributes, objects, options, statuses and teams are referenced by ID; `metadata` has their titles and slugs.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `view:read`, `object_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Views"],
    security: [
      {
        oauth2: ["view:read", "object_configuration:read"],
      },
    ],
    parameters: [
      {
        name: "object",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the object.",
          type: "string",
        },
      },
      {
        name: "view_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID identifying the view.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2ObjectsByObjectViewsByViewIdResponse",
    },
  },
  {
    id: "patchV2ObjectsByObjectViewsByViewId",
    command: "objects-views-update",
    binding: {
      kind: "http",
      method: "PATCH",
      path: "/v2/objects/{object}/views/{view_id}",
    },
    effect: "write",
    summary: "Update an object view",
    description:
      "Updates the title, type, filter, sorts, shown attributes or kanban settings of a view of an object. Each given field replaces that part of the view, and an omitted field stays as it is. Attributes, objects, options and statuses can be referenced by slug, ID or title; the response references them by ID, as the get view endpoint does.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `view:read-write`, `object_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Views"],
    security: [
      {
        oauth2: ["view:read-write", "object_configuration:read"],
      },
    ],
    parameters: [
      {
        name: "object",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the object.",
          type: "string",
        },
      },
      {
        name: "view_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID identifying the view.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PatchV2ObjectsByObjectViewsByViewIdRequest",
    },
    response: {
      confidence: "contract",
      schema: "PatchV2ObjectsByObjectViewsByViewIdResponse",
    },
  },
  {
    id: "deleteV2ObjectsByObjectViewsByViewId",
    command: "objects-views-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/v2/objects/{object}/views/{view_id}",
    },
    effect: "destructive",
    summary: "Delete an object view",
    description:
      "Deletes a view of an object, including an archived view. Records are not changed.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `view:read-write`, `object_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Views"],
    security: [
      {
        oauth2: ["view:read-write", "object_configuration:read"],
      },
    ],
    permissions: [
      {
        key: "attio.delete",
      },
    ],
    parameters: [
      {
        name: "object",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the object.",
          type: "string",
        },
      },
      {
        name: "view_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID identifying the view.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "DeleteV2ObjectsByObjectViewsByViewIdResponse",
    },
  },
  {
    id: "getV2Activities",
    command: "activities-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/activities",
    },
    effect: "read",
    summary: "List activities",
    description:
      "Lists all system-defined and user-defined activities in your workspace.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `activity_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Activities"],
    security: [
      {
        oauth2: ["activity_configuration:read"],
      },
    ],
    pagination: {
      style: "cursor",
      cursor: {
        in: "query",
        name: "cursor",
      },
      next: "pagination.next_cursor",
      items: "data",
      limit: {
        in: "query",
        name: "limit",
      },
    },
    parameters: [
      {
        name: "limit",
        in: "query",
        required: false,
        schema: {
          description: "The maximum number of activities to return. Must be between 1 and 1000. Defaults to 100.",
          default: 100,
          type: "integer",
          minimum: 1,
          maximum: 1000,
        },
      },
      {
        name: "cursor",
        in: "query",
        required: false,
        schema: {
          description:
            "A pagination cursor used to fetch the next page of activities. Responses with more activities will include a cursor for you to use here. If not provided, the first page will be returned.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2ActivitiesResponse",
    },
  },
  {
    id: "postV2Activities",
    command: "activities-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/v2/activities",
    },
    effect: "write",
    summary: "Create an activity",
    description:
      "Creates a new custom activity in your workspace. Your workspace must have the custom activities billing feature enabled. Public apps may instead create activities with the integration activities billing feature.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `activity_configuration:read-write`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Activities"],
    security: [
      {
        oauth2: ["activity_configuration:read-write"],
      },
    ],
    parameters: [],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostV2ActivitiesRequest",
    },
    response: {
      confidence: "contract",
      schema: "PostV2ActivitiesResponse",
    },
  },
  {
    id: "getV2ActivitiesByActivity",
    command: "activities-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/activities/{activity}",
    },
    effect: "read",
    summary: "Get an activity",
    description:
      "Gets a single activity by its `activity_id` or slug.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `activity_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Activities"],
    security: [
      {
        oauth2: ["activity_configuration:read"],
      },
    ],
    parameters: [
      {
        name: "activity",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the activity.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2ActivitiesByActivityResponse",
    },
  },
  {
    id: "patchV2ActivitiesByActivity",
    command: "activities-update",
    binding: {
      kind: "http",
      method: "PATCH",
      path: "/v2/activities/{activity}",
    },
    effect: "write",
    summary: "Update an activity",
    description:
      "Updates a single activity by its `activity_id` or slug. The schema an activity extends is fixed after creation, so `extends` cannot be changed.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `activity_configuration:read-write`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Activities"],
    security: [
      {
        oauth2: ["activity_configuration:read-write"],
      },
    ],
    parameters: [
      {
        name: "activity",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the activity.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PatchV2ActivitiesByActivityRequest",
    },
    response: {
      confidence: "contract",
      schema: "PatchV2ActivitiesByActivityResponse",
    },
  },
  {
    id: "deleteV2ActivitiesByActivity",
    command: "activities-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/v2/activities/{activity}",
    },
    effect: "destructive",
    summary: "Delete an activity",
    description:
      "Deletes a single activity by its `activity_id` or slug, along with all of its records. Archived activities can also be deleted.\n\nThis endpoint should be used with caution as it has the potential to remove a large amount of potentially valuable data.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `activity_configuration:read-write`, `activity_record:read-write`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Activities"],
    security: [
      {
        oauth2: ["activity_configuration:read-write", "activity_record:read-write"],
      },
    ],
    permissions: [
      {
        key: "attio.delete",
      },
    ],
    parameters: [
      {
        name: "activity",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the activity.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "DeleteV2ActivitiesByActivityResponse",
    },
  },
  {
    id: "getV2ByTargetByIdentifierAttributes",
    command: "attributes-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/{target}/{identifier}/attributes",
    },
    effect: "read",
    summary: "List attributes",
    description:
      "Lists all attributes defined on a specific object, list or activity. Attributes are returned in the order that they are sorted by in the UI.\n\nWhen `target` is `objects`, the required scopes are `object_configuration:read`. When `target` is `lists`, the required scopes are `list_configuration:read`. When `target` is `activities`, the required scopes are `activity_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Attributes"],
    security: [
      {
        oauth2: [],
      },
    ],
    pagination: {
      style: "offset",
      offset: {
        in: "query",
        name: "offset",
      },
      limit: {
        in: "query",
        name: "limit",
      },
      items: "data",
    },
    parameters: [
      {
        name: "target",
        in: "path",
        required: true,
        schema: {
          description: "Whether the attributes are on an object, a list or an activity.",
          type: "string",
          enum: ["objects", "lists", "activities"],
        },
      },
      {
        name: "identifier",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the object, list or activity the attributes belong to.",
          type: "string",
        },
      },
      {
        name: "limit",
        in: "query",
        required: false,
        schema: {
          description:
            "The maximum number of results to return. See the [full guide to pagination here](/rest-api/guides/pagination).",
          type: "integer",
        },
      },
      {
        name: "offset",
        in: "query",
        required: false,
        schema: {
          description:
            "The number of results to skip over before returning. See the [full guide to pagination here](/rest-api/guides/pagination).",
          type: "integer",
        },
      },
      {
        name: "show_archived",
        in: "query",
        required: false,
        schema: {
          description:
            "Whether archived attributes should be included in the results. See the [full guide to archiving here](/docs/archiving-vs-deleting).",
          type: "boolean",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2ByTargetByIdentifierAttributesResponse",
    },
  },
  {
    id: "postV2ByTargetByIdentifierAttributes",
    command: "attributes-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/v2/{target}/{identifier}/attributes",
    },
    effect: "write",
    summary: "Create an attribute",
    description:
      "Creates a new attribute on either an object, a list or an activity.\n\nFor record-reference attributes, you can optionally create a bidirectional relationship by providing a `relationship` object. This will create two entangled attributes: one on the specified object and a reverse attribute on the related object.\n\nTo create an attribute on an object, you must also have the `object_configuration:read-write` scope.\n\nTo create an attribute on a list, you must also have the `list_configuration:read-write` scope.\n\nTo create an attribute on an activity, you must also have the `activity_configuration:read-write` scope.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Attributes"],
    security: [
      {
        oauth2: [],
      },
    ],
    parameters: [
      {
        name: "target",
        in: "path",
        required: true,
        schema: {
          description: "Whether the attribute is to be created on an object, a list or an activity.",
          type: "string",
          enum: ["objects", "lists", "activities"],
        },
      },
      {
        name: "identifier",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the object, list or activity the attribute belongs to.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostV2ByTargetByIdentifierAttributesRequest",
    },
    response: {
      confidence: "contract",
      schema: "PostV2ByTargetByIdentifierAttributesResponse",
    },
  },
  {
    id: "getV2ByTargetByIdentifierAttributesByAttribute",
    command: "attributes-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/{target}/{identifier}/attributes/{attribute}",
    },
    effect: "read",
    summary: "Get an attribute",
    description:
      "Gets information about a single attribute on either an object, a list or an activity.\n\nWhen `target` is `objects`, the required scopes are `object_configuration:read`. When `target` is `lists`, the required scopes are `list_configuration:read`. When `target` is `activities`, the required scopes are `activity_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Attributes"],
    security: [
      {
        oauth2: [],
      },
    ],
    parameters: [
      {
        name: "target",
        in: "path",
        required: true,
        schema: {
          description: "Whether the attribute is on an object, a list or an activity.",
          type: "string",
          enum: ["objects", "lists", "activities"],
        },
      },
      {
        name: "identifier",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the object, list or activity the attribute belongs to.",
          type: "string",
        },
      },
      {
        name: "attribute",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the attribute.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2ByTargetByIdentifierAttributesByAttributeResponse",
    },
  },
  {
    id: "patchV2ByTargetByIdentifierAttributesByAttribute",
    command: "attributes-update",
    binding: {
      kind: "http",
      method: "PATCH",
      path: "/v2/{target}/{identifier}/attributes/{attribute}",
    },
    effect: "write",
    summary: "Update an attribute",
    description:
      "Updates a single attribute on a given object, list or activity.\n\nWhen `target` is `objects`, the required scopes are `object_configuration:read-write`. When `target` is `lists`, the required scopes are `list_configuration:read-write`. When `target` is `activities`, the required scopes are `activity_configuration:read-write`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Attributes"],
    security: [
      {
        oauth2: [],
      },
    ],
    parameters: [
      {
        name: "target",
        in: "path",
        required: true,
        schema: {
          description: "Whether the attribute is on an object, a list or an activity.",
          type: "string",
          enum: ["objects", "lists", "activities"],
        },
      },
      {
        name: "identifier",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the object, list or activity the attribute belongs to.",
          type: "string",
        },
      },
      {
        name: "attribute",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the attribute.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PatchV2ByTargetByIdentifierAttributesByAttributeRequest",
    },
    response: {
      confidence: "contract",
      schema: "PatchV2ByTargetByIdentifierAttributesByAttributeResponse",
    },
  },
  {
    id: "getV2ByTargetByIdentifierAttributesByAttributeOptions",
    command: "attributes-options-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/{target}/{identifier}/attributes/{attribute}/options",
    },
    effect: "read",
    summary: "List select options",
    description:
      "Lists all select options for a particular attribute on either an object, a list or an activity.\n\nWhen `target` is `objects`, the required scopes are `object_configuration:read`. When `target` is `lists`, the required scopes are `list_configuration:read`. When `target` is `activities`, the required scopes are `activity_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Attributes"],
    security: [
      {
        oauth2: [],
      },
    ],
    parameters: [
      {
        name: "target",
        in: "path",
        required: true,
        schema: {
          description: "Whether the attribute is on an object, a list or an activity.",
          type: "string",
          enum: ["objects", "lists", "activities"],
        },
      },
      {
        name: "identifier",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the object, list or activity the select attribute belongs to.",
          type: "string",
        },
      },
      {
        name: "attribute",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the attribute you want to list select options on.",
          type: "string",
        },
      },
      {
        name: "show_archived",
        in: "query",
        required: false,
        schema: {
          description: "`true` if you want the results to include archived select options.",
          type: "boolean",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2ByTargetByIdentifierAttributesByAttributeOptionsResponse",
    },
  },
  {
    id: "postV2ByTargetByIdentifierAttributesByAttributeOptions",
    command: "attributes-options-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/v2/{target}/{identifier}/attributes/{attribute}/options",
    },
    effect: "write",
    summary: "Create a select option",
    description:
      "Adds a select option to a select attribute on an object, a list or an activity.\n\nWhen `target` is `objects`, the required scopes are `object_configuration:read-write`. When `target` is `lists`, the required scopes are `list_configuration:read-write`. When `target` is `activities`, the required scopes are `activity_configuration:read-write`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Attributes"],
    security: [
      {
        oauth2: [],
      },
    ],
    parameters: [
      {
        name: "target",
        in: "path",
        required: true,
        schema: {
          description: "Whether the attribute is on an object, a list or an activity.",
          type: "string",
          enum: ["objects", "lists", "activities"],
        },
      },
      {
        name: "identifier",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the object, list or activity the select attribute belongs to.",
          type: "string",
        },
      },
      {
        name: "attribute",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the attribute to create a select option on.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostV2ByTargetByIdentifierAttributesByAttributeOptionsRequest",
    },
    response: {
      confidence: "contract",
      schema: "PostV2ByTargetByIdentifierAttributesByAttributeOptionsResponse",
    },
  },
  {
    id: "patchV2ByTargetByIdentifierAttributesByAttributeOptionsByOption",
    command: "attributes-options-update",
    binding: {
      kind: "http",
      method: "PATCH",
      path: "/v2/{target}/{identifier}/attributes/{attribute}/options/{option}",
    },
    effect: "write",
    summary: "Update a select option",
    description:
      "Updates a select option on an attribute on either an object, a list or an activity.\n\nWhen `target` is `objects`, the required scopes are `object_configuration:read-write`. When `target` is `lists`, the required scopes are `list_configuration:read-write`. When `target` is `activities`, the required scopes are `activity_configuration:read-write`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Attributes"],
    security: [
      {
        oauth2: [],
      },
    ],
    parameters: [
      {
        name: "target",
        in: "path",
        required: true,
        schema: {
          description: "Whether the attribute is on an object, a list or an activity.",
          type: "string",
          enum: ["objects", "lists", "activities"],
        },
      },
      {
        name: "identifier",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the object, list or activity the select attribute belongs to.",
          type: "string",
        },
      },
      {
        name: "attribute",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the select attribute.",
          type: "string",
        },
      },
      {
        name: "option",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or select option title to identify the select option you would like to update.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PatchV2ByTargetByIdentifierAttributesByAttributeOptionsByOptionRequest",
    },
    response: {
      confidence: "contract",
      schema: "PatchV2ByTargetByIdentifierAttributesByAttributeOptionsByOptionResponse",
    },
  },
  {
    id: "getV2ByTargetByIdentifierAttributesByAttributeStatuses",
    command: "attributes-statuses-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/{target}/{identifier}/attributes/{attribute}/statuses",
    },
    effect: "read",
    summary: "List statuses",
    description:
      "Lists all statuses for a particular status attribute on either an object or a list.\n\nWhen `target` is `objects`, the required scopes are `object_configuration:read`. When `target` is `lists`, the required scopes are `list_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Attributes"],
    security: [
      {
        oauth2: [],
      },
    ],
    parameters: [
      {
        name: "target",
        in: "path",
        required: true,
        schema: {
          description: "Whether the attribute is on an object or a list.",
          type: "string",
          enum: ["lists", "objects"],
        },
      },
      {
        name: "identifier",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the object or list the status attribute belongs to.",
          type: "string",
        },
      },
      {
        name: "attribute",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the attribute you want to list statuses on.",
          type: "string",
        },
      },
      {
        name: "show_archived",
        in: "query",
        required: false,
        schema: {
          description:
            "`true` if you want the results to include archived statuses. See our [archiving guide](/docs/archiving-vs-deleting) for more information on archiving.",
          default: false,
          type: "boolean",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2ByTargetByIdentifierAttributesByAttributeStatusesResponse",
    },
  },
  {
    id: "postV2ByTargetByIdentifierAttributesByAttributeStatuses",
    command: "attributes-statuses-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/v2/{target}/{identifier}/attributes/{attribute}/statuses",
    },
    effect: "write",
    summary: "Create a status",
    description:
      "Add a new status to a status attribute on either an object or a list.\n\nWhen `target` is `objects`, the required scopes are `object_configuration:read-write`. When `target` is `lists`, the required scopes are `list_configuration:read-write`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Attributes"],
    security: [
      {
        oauth2: [],
      },
    ],
    parameters: [
      {
        name: "target",
        in: "path",
        required: true,
        schema: {
          description: "Whether the attribute is on an object or a list.",
          type: "string",
          enum: ["lists", "objects"],
        },
      },
      {
        name: "identifier",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the object or list the status attribute belongs to.",
          type: "string",
        },
      },
      {
        name: "attribute",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the attribute the status will belong to.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostV2ByTargetByIdentifierAttributesByAttributeStatusesRequest",
    },
    response: {
      confidence: "contract",
      schema: "PostV2ByTargetByIdentifierAttributesByAttributeStatusesResponse",
    },
  },
  {
    id: "patchV2ByTargetByIdentifierAttributesByAttributeStatusesByStatus",
    command: "attributes-statuses-update",
    binding: {
      kind: "http",
      method: "PATCH",
      path: "/v2/{target}/{identifier}/attributes/{attribute}/statuses/{status}",
    },
    effect: "write",
    summary: "Update a status",
    description:
      "Update a status on an status attribute on either an object or a list.\n\nWhen `target` is `objects`, the required scopes are `object_configuration:read-write`. When `target` is `lists`, the required scopes are `list_configuration:read-write`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Attributes"],
    security: [
      {
        oauth2: [],
      },
    ],
    parameters: [
      {
        name: "target",
        in: "path",
        required: true,
        schema: {
          description: "Whether the attribute is on an object or a list.",
          type: "string",
          enum: ["lists", "objects"],
        },
      },
      {
        name: "identifier",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the object or list the status attribute belongs to.",
          type: "string",
        },
      },
      {
        name: "attribute",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the attribute to update the status on.",
          type: "string",
        },
      },
      {
        name: "status",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or status title to identify the status to update.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PatchV2ByTargetByIdentifierAttributesByAttributeStatusesByStatusRequest",
    },
    response: {
      confidence: "contract",
      schema: "PatchV2ByTargetByIdentifierAttributesByAttributeStatusesByStatusResponse",
    },
  },
  {
    id: "postV2ObjectsByObjectRecordsQuery",
    command: "objects-records-query",
    binding: {
      kind: "http",
      method: "POST",
      path: "/v2/objects/{object}/records/query",
    },
    effect: "read",
    summary: "List records",
    description:
      "Lists people, company or other records, with the option to filter and sort results.\n\nRequired scopes: `record_permission:read`, `object_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Records"],
    security: [
      {
        oauth2: ["record_permission:read", "object_configuration:read"],
      },
    ],
    pagination: {
      style: "offset",
      offset: {
        in: "body",
        name: "offset",
      },
      limit: {
        in: "body",
        name: "limit",
      },
      items: "data",
    },
    parameters: [
      {
        name: "object",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the object to list records for.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostV2ObjectsByObjectRecordsQueryRequest",
    },
    response: {
      confidence: "contract",
      schema: "PostV2ObjectsByObjectRecordsQueryResponse",
    },
  },
  {
    id: "postV2ObjectsByObjectRecords",
    command: "objects-records-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/v2/objects/{object}/records",
    },
    effect: "write",
    summary: "Create a record",
    description:
      "Creates a new person, company or other record. This endpoint will throw on conflicts of unique attributes. If you would prefer to update records on conflicts, please use the [Upsert record endpoint](/rest-api/endpoint-reference/records/upsert-a-record) instead.\n\nRequired scopes: `record_permission:read-write`, `object_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Records"],
    security: [
      {
        oauth2: ["record_permission:read-write", "object_configuration:read"],
      },
    ],
    parameters: [
      {
        name: "object",
        in: "path",
        required: true,
        schema: {
          description: "The UUID or slug identifying the object the created record should belong to.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostV2ObjectsByObjectRecordsRequest",
    },
    response: {
      confidence: "contract",
      schema: "PostV2ObjectsByObjectRecordsResponse",
    },
  },
  {
    id: "putV2ObjectsByObjectRecords",
    command: "objects-records-upsert",
    binding: {
      kind: "http",
      method: "PUT",
      path: "/v2/objects/{object}/records",
    },
    effect: "write",
    summary: "Upsert a record",
    description:
      "Use this endpoint to create or update people, companies and other records. A matching attribute is used to search for existing records. If a record is found with the same value for the matching attribute, that record will be updated. If no record with the same value for the matching attribute is found, a new record will be created instead. If you would like to avoid matching, please use the [Create record endpoint](/rest-api/endpoint-reference/records/create-a-record).\n\nIf the matching attribute is a multiselect attribute, new values will be added and existing values will not be deleted. For any other multiselect attribute, all values will be either created or deleted as necessary to match the list of supplied values.\n\nRequired scopes: `record_permission:read-write`, `object_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Records"],
    security: [
      {
        oauth2: ["record_permission:read-write", "object_configuration:read"],
      },
    ],
    parameters: [
      {
        name: "object",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the object the record should belong to.",
          type: "string",
        },
      },
      {
        name: "matching_attribute",
        in: "query",
        required: true,
        schema: {
          description:
            "The ID or slug of the attribute to use to check if a record already exists. The attribute does not have to be unique, but a value that matches more than one record is rejected. We recommend a unique attribute, such as a domain, an email address or an ID from your own system.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PutV2ObjectsByObjectRecordsRequest",
    },
    response: {
      confidence: "contract",
      schema: "PutV2ObjectsByObjectRecordsResponse",
    },
  },
  {
    id: "getV2ObjectsByObjectRecordsByRecordId",
    command: "objects-records-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/objects/{object}/records/{record_id}",
    },
    effect: "read",
    summary: "Get a record",
    description:
      "Gets a single person, company or other record by its `record_id`.\n\nRequired scopes: `record_permission:read`, `object_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Records"],
    security: [
      {
        oauth2: ["record_permission:read", "object_configuration:read"],
      },
    ],
    parameters: [
      {
        name: "object",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug identifying the object that the record belongs to.",
          type: "string",
        },
      },
      {
        name: "record_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID identifying the record.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2ObjectsByObjectRecordsByRecordIdResponse",
    },
  },
  {
    id: "putV2ObjectsByObjectRecordsByRecordId",
    command: "objects-records-replace",
    binding: {
      kind: "http",
      method: "PUT",
      path: "/v2/objects/{object}/records/{record_id}",
    },
    effect: "write",
    summary: "Update a record (overwrite multiselect values)",
    description:
      "Use this endpoint to update people, companies, and other records by `record_id`. If the update payload includes multiselect attributes, the values supplied will overwrite/remove the list of values that already exist (if any). Use the `PATCH` endpoint to append multiselect values without removing those that already exist.\n\nRequired scopes: `record_permission:read-write`, `object_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Records"],
    security: [
      {
        oauth2: ["record_permission:read-write", "object_configuration:read"],
      },
    ],
    parameters: [
      {
        name: "object",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug of the object the record belongs to.",
          type: "string",
        },
      },
      {
        name: "record_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID of the record to update.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PutV2ObjectsByObjectRecordsByRecordIdRequest",
    },
    response: {
      confidence: "contract",
      schema: "PutV2ObjectsByObjectRecordsByRecordIdResponse",
    },
  },
  {
    id: "patchV2ObjectsByObjectRecordsByRecordId",
    command: "objects-records-update",
    binding: {
      kind: "http",
      method: "PATCH",
      path: "/v2/objects/{object}/records/{record_id}",
    },
    effect: "write",
    summary: "Update a record (append multiselect values)",
    description:
      "Use this endpoint to update people, companies, and other records by `record_id`. If the update payload includes multiselect attributes, the values supplied will be created and prepended to the list of values that already exist (if any). Use the `PUT` endpoint to overwrite or remove multiselect attribute values.\n\nRequired scopes: `record_permission:read-write`, `object_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Records"],
    security: [
      {
        oauth2: ["record_permission:read-write", "object_configuration:read"],
      },
    ],
    parameters: [
      {
        name: "object",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug of the object the record belongs to.",
          type: "string",
        },
      },
      {
        name: "record_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID of the record to update.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PatchV2ObjectsByObjectRecordsByRecordIdRequest",
    },
    response: {
      confidence: "contract",
      schema: "PatchV2ObjectsByObjectRecordsByRecordIdResponse",
    },
  },
  {
    id: "deleteV2ObjectsByObjectRecordsByRecordId",
    command: "objects-records-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/v2/objects/{object}/records/{record_id}",
    },
    effect: "destructive",
    summary: "Delete a record",
    description:
      "Deletes a single record (e.g. a company or person) by ID.\n\nRequired scopes: `object_configuration:read`, `record_permission:read-write`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Records"],
    security: [
      {
        oauth2: ["object_configuration:read", "record_permission:read-write"],
      },
    ],
    permissions: [
      {
        key: "attio.delete",
      },
    ],
    parameters: [
      {
        name: "object",
        in: "path",
        required: true,
        schema: {
          description: "The UUID or slug of the object the record belongs to.",
          type: "string",
        },
      },
      {
        name: "record_id",
        in: "path",
        required: true,
        schema: {
          description: "The UUID of the record to delete.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "DeleteV2ObjectsByObjectRecordsByRecordIdResponse",
    },
  },
  {
    id: "postV2ObjectsByObjectRecordsMerge",
    command: "objects-records-merge",
    binding: {
      kind: "http",
      method: "POST",
      path: "/v2/objects/{object}/records/merge",
    },
    effect: "write",
    summary: "Merge two records",
    description:
      "Merges two records of the same object together. Where both records have a value for the same attribute, the primary record's value takes precedence.\n\nMerging produces a **new** record, so the `new_record_id` returned will match neither of the records supplied in the request. Both of the original records are marked as merged and can no longer be read or written.\n\nLarge merges are completed asynchronously. A `200` response means the merged record is readable immediately. A `202` response means the merge has been accepted but is still being applied, and reading the merged record will return a `404` with the `merge_in_progress` error code until it completes.\n\nThis endpoint is not idempotent. Because both original records are marked as merged, repeating the same request returns `404`.\n\nThis endpoint is rate limited to 5 requests per second.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `record_permission:read-write`, `object_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Records"],
    security: [
      {
        oauth2: ["record_permission:read-write", "object_configuration:read"],
      },
    ],
    parameters: [
      {
        name: "object",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug of the object both records belong to.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostV2ObjectsByObjectRecordsMergeRequest",
    },
    response: {
      confidence: "contract",
      schema: "PostV2ObjectsByObjectRecordsMergeResponse",
    },
  },
  {
    id: "getV2ObjectsByObjectRecordsByRecordIdAttributesByAttributeValues",
    command: "objects-records-attributes-values-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/objects/{object}/records/{record_id}/attributes/{attribute}/values",
    },
    effect: "read",
    summary: "List record attribute values",
    description:
      "Gets all values for a given attribute on a record. Historic values can be queried using the `show_historic` query param. Historic values cannot be queried on COMINT (Communication Intelligence) or enriched attributes and the endpoint will return a 400 error if this is attempted. Historic values are sorted from oldest to newest (by `active_from`). Some attributes are subject to billing status and will return an empty array of values if theworkspace being queried does not have the required billing flag enabled.\n\nRequired scopes: `record_permission:read`, `object_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Records"],
    security: [
      {
        oauth2: ["record_permission:read", "object_configuration:read"],
      },
    ],
    pagination: {
      style: "offset",
      offset: {
        in: "query",
        name: "offset",
      },
      limit: {
        in: "query",
        name: "limit",
      },
      items: "data",
    },
    parameters: [
      {
        name: "object",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the object the record belongs to.",
          type: "string",
        },
      },
      {
        name: "record_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID to identify the record you want to query values on.",
          type: "string",
        },
      },
      {
        name: "attribute",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the attribute you want to query values on.",
          type: "string",
        },
      },
      {
        name: "show_historic",
        in: "query",
        required: false,
        schema: {
          description:
            "If `true`, the endpoint will return all historic values for the attribute. If `false`, the endpoint will only return the currently active value(s). Defaults to `false`. Cannot be set to `true` for COMINT attributes or enriched attributes on people/company objects.",
          default: false,
          type: "boolean",
        },
      },
      {
        name: "limit",
        in: "query",
        required: false,
        schema: {
          description:
            "The maximum number of results to return. See the [full guide to pagination here](/rest-api/guides/pagination).",
          type: "integer",
        },
      },
      {
        name: "offset",
        in: "query",
        required: false,
        schema: {
          description:
            "The number of results to skip over before returning. See the [full guide to pagination here](/rest-api/guides/pagination).",
          type: "integer",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2ObjectsByObjectRecordsByRecordIdAttributesByAttributeValuesResponse",
    },
  },
  {
    id: "putV2ObjectsByObjectRecordsByRecordIdAttributesByAttributeValues",
    command: "objects-records-attributes-values-replace",
    binding: {
      kind: "http",
      method: "PUT",
      path: "/v2/objects/{object}/records/{record_id}/attributes/{attribute}/values",
    },
    effect: "write",
    summary: "Write record attribute values",
    description:
      "Replaces the entire value history of a single attribute on a record, primarily to migrate historic data from an external source. Every value the attribute currently has is destroyed, including values not present in the request, and the supplied values are written with the `active_from` and `active_until` timestamps given.\n\nValues may be supplied in any order and gaps between intervals are allowed. For attributes that accept a single value, at most one value may be active at a time, so intervals may not overlap and at most one may have a `null` `active_until`. At least one value is required.\n\nWebhooks and workflow triggers do not fire for these writes, so migrating history does not replay automations. Search indexes and caches are still updated, and formula attributes that depend on this attribute are still recalculated.\n\nValue history cannot be written for relationship attributes, formula attributes, enriched attributes, or immutable system attributes such as the entry's parent record.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `record_permission:read-write`, `object_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Records"],
    security: [
      {
        oauth2: ["record_permission:read-write", "object_configuration:read"],
      },
    ],
    parameters: [
      {
        name: "object",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the object the record belongs to.",
          type: "string",
        },
      },
      {
        name: "record_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID to identify the record you want to query values on.",
          type: "string",
        },
      },
      {
        name: "attribute",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the attribute you want to query values on.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PutV2ObjectsByObjectRecordsByRecordIdAttributesByAttributeValuesRequest",
    },
    response: {
      confidence: "contract",
      schema: "PutV2ObjectsByObjectRecordsByRecordIdAttributesByAttributeValuesResponse",
    },
  },
  {
    id: "getV2ObjectsByObjectRecordsByRecordIdEntries",
    command: "objects-records-entries-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/objects/{object}/records/{record_id}/entries",
    },
    effect: "read",
    summary: "List record entries",
    description:
      "List all entries, across all lists, for which this record is the parent. The response includes metadata for each entry, including `entry_id`, `list_id`, and `created_at`, but does not include entry values. To retrieve the values, call [Get a list entry](/rest-api/endpoint-reference/entries/get-a-list-entry) separately for each entry.\n\nRequired scopes: `record_permission:read`, `object_configuration:read`, `list_entry:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Records"],
    security: [
      {
        oauth2: ["record_permission:read", "object_configuration:read", "list_entry:read"],
      },
    ],
    pagination: {
      style: "offset",
      offset: {
        in: "query",
        name: "offset",
      },
      limit: {
        in: "query",
        name: "limit",
      },
      items: "data",
    },
    parameters: [
      {
        name: "object",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug identifying the object that the record belongs to.",
          type: "string",
        },
      },
      {
        name: "record_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID identifying the record.",
          type: "string",
        },
      },
      {
        name: "limit",
        in: "query",
        required: false,
        schema: {
          description:
            "The maximum number of results to return. The default is `100` and the maximum is `1000`. See the [full guide to pagination here](/rest-api/guides/pagination).",
          type: "integer",
        },
      },
      {
        name: "offset",
        in: "query",
        required: false,
        schema: {
          description:
            "The number of results to skip over before returning. The default is `0`. See the [full guide to pagination here](/rest-api/guides/pagination).",
          type: "integer",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2ObjectsByObjectRecordsByRecordIdEntriesResponse",
    },
  },
  {
    id: "postV2ObjectsRecordsSearch",
    command: "objects-records-search",
    binding: {
      kind: "http",
      method: "POST",
      path: "/v2/objects/records/search",
    },
    effect: "read",
    summary: "Search records",
    description:
      "The search records endpoint provides a convenient way to fuzzy search for records across one or more objects.\nThe matching strategy employed in this endpoint follows the in-product strategy and will match names, domains, emails, phone numbers and social handles on people and companies, and labels on all other objects.\nPlease note, results returned from this endpoint are eventually consistent. For results which are guaranteed to be up to date, please use the record query endpoint instead.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `record_permission:read`, `object_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Records"],
    security: [
      {
        oauth2: ["record_permission:read", "object_configuration:read"],
      },
    ],
    parameters: [],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostV2ObjectsRecordsSearchRequest",
    },
    response: {
      confidence: "contract",
      schema: "PostV2ObjectsRecordsSearchResponse",
    },
  },
  {
    id: "postV2ActivitiesByActivityRecordsQuery",
    command: "activities-records-query",
    binding: {
      kind: "http",
      method: "POST",
      path: "/v2/activities/{activity}/records/query",
    },
    effect: "read",
    summary: "List activity records",
    description:
      "Lists activity records, with the option to filter and sort results.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `activity_record:read`, `activity_configuration:read`, `object_configuration:read`, `record_permission:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Activity records"],
    security: [
      {
        oauth2: [
          "activity_record:read",
          "activity_configuration:read",
          "object_configuration:read",
          "record_permission:read",
        ],
      },
    ],
    pagination: {
      style: "offset",
      offset: {
        in: "body",
        name: "offset",
      },
      limit: {
        in: "body",
        name: "limit",
      },
      items: "data",
    },
    parameters: [
      {
        name: "activity",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the activity.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostV2ActivitiesByActivityRecordsQueryRequest",
    },
    response: {
      confidence: "contract",
      schema: "PostV2ActivitiesByActivityRecordsQueryResponse",
    },
  },
  {
    id: "postV2ActivitiesByActivityRecords",
    command: "activities-records-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/v2/activities/{activity}/records",
    },
    effect: "write",
    summary: "Create an activity record",
    description:
      "Creates a new activity record, for example one specific phone call.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `activity_record:read-write`, `activity_configuration:read`, `object_configuration:read`, `record_permission:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Activity records"],
    security: [
      {
        oauth2: [
          "activity_record:read-write",
          "activity_configuration:read",
          "object_configuration:read",
          "record_permission:read",
        ],
      },
    ],
    parameters: [
      {
        name: "activity",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the activity.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostV2ActivitiesByActivityRecordsRequest",
    },
    response: {
      confidence: "contract",
      schema: "PostV2ActivitiesByActivityRecordsResponse",
    },
  },
  {
    id: "putV2ActivitiesByActivityRecords",
    command: "activities-records-upsert",
    binding: {
      kind: "http",
      method: "PUT",
      path: "/v2/activities/{activity}/records",
    },
    effect: "write",
    summary: "Upsert an activity record",
    description:
      "Use this endpoint to create or update an activity record. A matching attribute is used to search for existing activity records. If a record is found with the same value for the matching attribute, that record will be updated. If no record with the same value for the matching attribute is found, a new record will be created instead. If you would like to avoid matching, please use the [Create activity record endpoint](/rest-api/endpoint-reference/activity-records/create-an-activity-record).\n\nIf the matching attribute is a multiselect attribute, new values will be added and existing values will not be deleted. For any other multiselect attribute, all values will be either created or deleted as necessary to match the list of supplied values.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `activity_record:read-write`, `activity_configuration:read`, `object_configuration:read`, `record_permission:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Activity records"],
    security: [
      {
        oauth2: [
          "activity_record:read-write",
          "activity_configuration:read",
          "object_configuration:read",
          "record_permission:read",
        ],
      },
    ],
    parameters: [
      {
        name: "activity",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the activity.",
          type: "string",
        },
      },
      {
        name: "matching_attribute",
        in: "query",
        required: true,
        schema: {
          description:
            "The ID or slug of the attribute to use to check if an activity record already exists. The attribute does not have to be unique, but a value that matches more than one record is rejected. We recommend a unique attribute, such as a domain, an email address or an ID from your own system.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PutV2ActivitiesByActivityRecordsRequest",
    },
    response: {
      confidence: "contract",
      schema: "PutV2ActivitiesByActivityRecordsResponse",
    },
  },
  {
    id: "getV2ActivitiesByActivityRecordsByRecordId",
    command: "activities-records-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/activities/{activity}/records/{record_id}",
    },
    effect: "read",
    summary: "Get an activity record",
    description:
      "Gets a single activity record by its `record_id`.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `activity_record:read`, `activity_configuration:read`, `object_configuration:read`, `record_permission:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Activity records"],
    security: [
      {
        oauth2: [
          "activity_record:read",
          "activity_configuration:read",
          "object_configuration:read",
          "record_permission:read",
        ],
      },
    ],
    parameters: [
      {
        name: "activity",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the activity.",
          type: "string",
        },
      },
      {
        name: "record_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID identifying the activity record.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2ActivitiesByActivityRecordsByRecordIdResponse",
    },
  },
  {
    id: "putV2ActivitiesByActivityRecordsByRecordId",
    command: "activities-records-replace",
    binding: {
      kind: "http",
      method: "PUT",
      path: "/v2/activities/{activity}/records/{record_id}",
    },
    effect: "write",
    summary: "Update an activity record (overwrite multiselect values)",
    description:
      "Use this endpoint to update activity records by `record_id`. If the update payload includes multiselect attributes, the values supplied will overwrite/remove the list of values that already exist (if any). Use the `PATCH` endpoint to append multiselect values without removing those that already exist.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `activity_record:read-write`, `activity_configuration:read`, `object_configuration:read`, `record_permission:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Activity records"],
    security: [
      {
        oauth2: [
          "activity_record:read-write",
          "activity_configuration:read",
          "object_configuration:read",
          "record_permission:read",
        ],
      },
    ],
    parameters: [
      {
        name: "activity",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the activity.",
          type: "string",
        },
      },
      {
        name: "record_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID identifying the activity record to update.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PutV2ActivitiesByActivityRecordsByRecordIdRequest",
    },
    response: {
      confidence: "contract",
      schema: "PutV2ActivitiesByActivityRecordsByRecordIdResponse",
    },
  },
  {
    id: "patchV2ActivitiesByActivityRecordsByRecordId",
    command: "activities-records-update",
    binding: {
      kind: "http",
      method: "PATCH",
      path: "/v2/activities/{activity}/records/{record_id}",
    },
    effect: "write",
    summary: "Update an activity record (append multiselect values)",
    description:
      "Use this endpoint to update activity records by `record_id`. If the update payload includes multiselect attributes, the values supplied will be created and prepended to the list of values that already exist (if any). Use the `PUT` endpoint to overwrite or remove multiselect attribute values.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `activity_record:read-write`, `activity_configuration:read`, `object_configuration:read`, `record_permission:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Activity records"],
    security: [
      {
        oauth2: [
          "activity_record:read-write",
          "activity_configuration:read",
          "object_configuration:read",
          "record_permission:read",
        ],
      },
    ],
    parameters: [
      {
        name: "activity",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the activity.",
          type: "string",
        },
      },
      {
        name: "record_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID identifying the activity record to update.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PatchV2ActivitiesByActivityRecordsByRecordIdRequest",
    },
    response: {
      confidence: "contract",
      schema: "PatchV2ActivitiesByActivityRecordsByRecordIdResponse",
    },
  },
  {
    id: "deleteV2ActivitiesByActivityRecordsByRecordId",
    command: "activities-records-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/v2/activities/{activity}/records/{record_id}",
    },
    effect: "destructive",
    summary: "Delete an activity record",
    description:
      "Deletes a single activity record by its `record_id`.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `activity_record:read-write`, `activity_configuration:read`, `object_configuration:read`, `record_permission:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Activity records"],
    security: [
      {
        oauth2: [
          "activity_record:read-write",
          "activity_configuration:read",
          "object_configuration:read",
          "record_permission:read",
        ],
      },
    ],
    permissions: [
      {
        key: "attio.delete",
      },
    ],
    parameters: [
      {
        name: "activity",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the activity.",
          type: "string",
        },
      },
      {
        name: "record_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID identifying the activity record to delete.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "DeleteV2ActivitiesByActivityRecordsByRecordIdResponse",
    },
  },
  {
    id: "postV2Sql",
    command: "sql",
    binding: {
      kind: "http",
      method: "POST",
      path: "/v2/sql",
    },
    effect: "write",
    summary: "Query SQL",
    description:
      "Query records and lists with SQL. Your workspace must be on the Enterprise plan in order to access this endpoint.\n\nThis endpoint is rate limited to 2 requests per second.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `record_permission:read`, `object_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["SQL"],
    security: [
      {
        oauth2: ["record_permission:read", "object_configuration:read"],
      },
    ],
    parameters: [],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostV2SqlRequest",
    },
    response: {
      confidence: "contract",
      schema: "PostV2SqlResponse",
    },
  },
  {
    id: "getV2Lists",
    command: "lists-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/lists",
    },
    effect: "read",
    summary: "List all lists",
    description:
      "List all lists that your access token has access to. lists are returned in the order that they are sorted in the sidebar.\n\nRequired scopes: `list_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Lists"],
    security: [
      {
        oauth2: ["list_configuration:read"],
      },
    ],
    parameters: [],
    response: {
      confidence: "contract",
      schema: "GetV2ListsResponse",
    },
  },
  {
    id: "postV2Lists",
    command: "lists-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/v2/lists",
    },
    effect: "write",
    summary: "Create a list",
    description:
      'Creates a new list.\n\nOnce you have your list, add attributes to it using the [Create attribute](/rest-api/endpoint-reference/attributes/create-an-attribute) API, and add records to it using the [Add records to list](/rest-api/endpoint-reference/entries/create-an-entry-add-record-to-list) API. \n\nNew lists must specify which records can be added with the `parent_object` parameter which accepts either an object slug or an object ID. Permissions for the list are controlled with the `workspace_access` and `workspace_member_access` parameters.\n\nPlease note that new lists must have either `workspace_access` set to `"full-access"` or one or more element of `workspace_member_access` with a `"full-access"` level. It is also possible to receive a `403` billing error if your workspace is not on a plan that supports either advanced workspace or workspace member-level access for lists.\n\nRequired scopes: `list_configuration:read-write`.\n\nSupported token levels: `workspace`, `user`.',
    tags: ["Lists"],
    security: [
      {
        oauth2: ["list_configuration:read-write"],
      },
    ],
    parameters: [],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostV2ListsRequest",
    },
    response: {
      confidence: "contract",
      schema: "PostV2ListsResponse",
    },
  },
  {
    id: "getV2ListsByList",
    command: "lists-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/lists/{list}",
    },
    effect: "read",
    summary: "Get a list",
    description:
      "Gets a single list in your workspace that your access token has access to.\n\nRequired scopes: `list_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Lists"],
    security: [
      {
        oauth2: ["list_configuration:read"],
      },
    ],
    parameters: [
      {
        name: "list",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the list.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2ListsByListResponse",
    },
  },
  {
    id: "patchV2ListsByList",
    command: "lists-update",
    binding: {
      kind: "http",
      method: "PATCH",
      path: "/v2/lists/{list}",
    },
    effect: "write",
    summary: "Update a list",
    description:
      'Updates an existing list. Permissions for the list are controlled with the `workspace_access` and `workspace_member_access` parameters. Please note that lists must have either `workspace_access` set to `"full-access"` or one or more element of `workspace_member_access` with a `"full-access"` level. It is also possible to receive a `403` billing error if your workspace is not on a plan that supports either advanced workspace or workspace member level access for lists. Changing the parent object of a list is not possible through the API as it can have unintended side-effects that should be considered carefully. If you wish to carry out a parent object change you should do so through the UI.\n\nRequired scopes: `list_configuration:read-write`.\n\nSupported token levels: `workspace`, `user`.',
    tags: ["Lists"],
    security: [
      {
        oauth2: ["list_configuration:read-write"],
      },
    ],
    parameters: [
      {
        name: "list",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the list to update.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PatchV2ListsByListRequest",
    },
    response: {
      confidence: "contract",
      schema: "PatchV2ListsByListResponse",
    },
  },
  {
    id: "getV2ListsByListViews",
    command: "lists-views-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/lists/{list}/views",
    },
    effect: "read",
    summary: "List views for list",
    description:
      "Lists saved views for a list. Results are ordered by view ID (`id.view_id` ascending).\n\nRequired scopes: `list_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Views"],
    security: [
      {
        oauth2: ["list_configuration:read"],
      },
    ],
    pagination: {
      style: "cursor",
      cursor: {
        in: "query",
        name: "cursor",
      },
      next: "pagination.next_cursor",
      items: "data",
      limit: {
        in: "query",
        name: "limit",
      },
    },
    parameters: [
      {
        name: "list",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the list.",
          type: "string",
        },
      },
      {
        name: "show_archived",
        in: "query",
        required: false,
        schema: {
          description:
            "`true` to include archived views. See our [archiving guide](/docs/archiving-vs-deleting) for more information on archiving.",
          default: false,
          type: "boolean",
        },
      },
      {
        name: "limit",
        in: "query",
        required: false,
        schema: {
          description: "The maximum number of views to return. Must be between 1 and 1000. Defaults to 500.",
          default: 500,
          type: "integer",
          minimum: 1,
          maximum: 1000,
        },
      },
      {
        name: "cursor",
        in: "query",
        required: false,
        schema: {
          description:
            "A pagination cursor from a previous response's `pagination.next_cursor`. Omit for the first page.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2ListsByListViewsResponse",
    },
  },
  {
    id: "postV2ListsByListViews",
    command: "lists-views-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/v2/lists/{list}/views",
    },
    effect: "write",
    summary: "Create a list view",
    description:
      "Creates a view of a list with a filter, sorts, shown attributes and kanban settings. Attributes, objects, options and statuses can be referenced by slug, ID or title; the response references them by ID, as the get view endpoint does.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `view:read-write`, `list_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Views"],
    security: [
      {
        oauth2: ["view:read-write", "list_configuration:read"],
      },
    ],
    parameters: [
      {
        name: "list",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the list.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostV2ListsByListViewsRequest",
    },
    response: {
      confidence: "contract",
      schema: "PostV2ListsByListViewsResponse",
    },
  },
  {
    id: "getV2ListsByListViewsByViewId",
    command: "lists-views-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/lists/{list}/views/{view_id}",
    },
    effect: "read",
    summary: "Get a list view",
    description:
      "Gets a view of a list with its filter, sorts, shown attributes and kanban settings. Attributes, objects, options, statuses and teams are referenced by ID; `metadata` has their titles and slugs.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `view:read`, `list_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Views"],
    security: [
      {
        oauth2: ["view:read", "list_configuration:read"],
      },
    ],
    parameters: [
      {
        name: "list",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the list.",
          type: "string",
        },
      },
      {
        name: "view_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID identifying the view.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2ListsByListViewsByViewIdResponse",
    },
  },
  {
    id: "patchV2ListsByListViewsByViewId",
    command: "lists-views-update",
    binding: {
      kind: "http",
      method: "PATCH",
      path: "/v2/lists/{list}/views/{view_id}",
    },
    effect: "write",
    summary: "Update a list view",
    description:
      "Updates the title, type, filter, sorts, shown attributes or kanban settings of a view of a list. Each given field replaces that part of the view, and an omitted field stays as it is. Attributes, objects, options and statuses can be referenced by slug, ID or title; the response references them by ID, as the get view endpoint does.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `view:read-write`, `list_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Views"],
    security: [
      {
        oauth2: ["view:read-write", "list_configuration:read"],
      },
    ],
    parameters: [
      {
        name: "list",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the list.",
          type: "string",
        },
      },
      {
        name: "view_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID identifying the view.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PatchV2ListsByListViewsByViewIdRequest",
    },
    response: {
      confidence: "contract",
      schema: "PatchV2ListsByListViewsByViewIdResponse",
    },
  },
  {
    id: "deleteV2ListsByListViewsByViewId",
    command: "lists-views-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/v2/lists/{list}/views/{view_id}",
    },
    effect: "destructive",
    summary: "Delete a list view",
    description:
      "Deletes a view of a list, including an archived view. Entries are not changed.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `view:read-write`, `list_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Views"],
    security: [
      {
        oauth2: ["view:read-write", "list_configuration:read"],
      },
    ],
    permissions: [
      {
        key: "attio.delete",
      },
    ],
    parameters: [
      {
        name: "list",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the list.",
          type: "string",
        },
      },
      {
        name: "view_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID identifying the view.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "DeleteV2ListsByListViewsByViewIdResponse",
    },
  },
  {
    id: "postV2ListsByListEntriesQuery",
    command: "lists-entries-query",
    binding: {
      kind: "http",
      method: "POST",
      path: "/v2/lists/{list}/entries/query",
    },
    effect: "read",
    summary: "List entries",
    description:
      "Lists entries in a given list, with the option to filter and sort results.\n\nRequired scopes: `list_entry:read`, `list_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Entries"],
    security: [
      {
        oauth2: ["list_entry:read", "list_configuration:read"],
      },
    ],
    pagination: {
      style: "offset",
      offset: {
        in: "body",
        name: "offset",
      },
      limit: {
        in: "body",
        name: "limit",
      },
      items: "data",
    },
    parameters: [
      {
        name: "list",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the list to retrieve entries from.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostV2ListsByListEntriesQueryRequest",
    },
    response: {
      confidence: "contract",
      schema: "PostV2ListsByListEntriesQueryResponse",
    },
  },
  {
    id: "postV2ListsByListEntries",
    command: "lists-entries-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/v2/lists/{list}/entries",
    },
    effect: "write",
    summary: "Create an entry (add record to list)",
    description:
      "Adds a record to a list as a new list entry. This endpoint will throw on conflicts of unique attributes. Multiple list entries are allowed for the same parent record\n\nRequired scopes: `list_entry:read-write`, `list_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Entries"],
    security: [
      {
        oauth2: ["list_entry:read-write", "list_configuration:read"],
      },
    ],
    parameters: [
      {
        name: "list",
        in: "path",
        required: true,
        schema: {
          description: "The UUID or slug identifying the list that the created list entry should belong to.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostV2ListsByListEntriesRequest",
    },
    response: {
      confidence: "contract",
      schema: "PostV2ListsByListEntriesResponse",
    },
  },
  {
    id: "putV2ListsByListEntries",
    command: "lists-entries-upsert",
    binding: {
      kind: "http",
      method: "PUT",
      path: "/v2/lists/{list}/entries",
    },
    effect: "write",
    summary: "Upsert a list entry by parent",
    description:
      'Use this endpoint to create or update a list entry for a given parent record. If an entry with the specified parent record is found, that entry will be updated. If no such entry is found, a new entry will be created instead. If there are multiple entries with the same parent record, this endpoint with return the "MULTIPLE_MATCH_RESULTS" error. When writing to multi-select attributes, all values will be either created or deleted as necessary to match the list of values supplied in the request body.\n\nRequired scopes: `list_entry:read-write`, `list_configuration:read`.\n\nSupported token levels: `workspace`, `user`.',
    tags: ["Entries"],
    security: [
      {
        oauth2: ["list_entry:read-write", "list_configuration:read"],
      },
    ],
    parameters: [
      {
        name: "list",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug of the list the list entry belongs to.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PutV2ListsByListEntriesRequest",
    },
    response: {
      confidence: "contract",
      schema: "PutV2ListsByListEntriesResponse",
    },
  },
  {
    id: "getV2ListsByListEntriesByEntryId",
    command: "lists-entries-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/lists/{list}/entries/{entry_id}",
    },
    effect: "read",
    summary: "Get a list entry",
    description:
      "Gets a single list entry by its `entry_id`.\n\nRequired scopes: `list_entry:read`, `list_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Entries"],
    security: [
      {
        oauth2: ["list_entry:read", "list_configuration:read"],
      },
    ],
    parameters: [
      {
        name: "list",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug identifying the list the entry is in.",
          type: "string",
        },
      },
      {
        name: "entry_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID identifying the entry.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2ListsByListEntriesByEntryIdResponse",
    },
  },
  {
    id: "putV2ListsByListEntriesByEntryId",
    command: "lists-entries-replace",
    binding: {
      kind: "http",
      method: "PUT",
      path: "/v2/lists/{list}/entries/{entry_id}",
    },
    effect: "write",
    summary: "Update a list entry (overwrite multiselect values)",
    description:
      "Use this endpoint to update list entries by `entry_id`. If the update payload includes multiselect attributes, the values supplied will overwrite/remove the list of values that already exist (if any). Use the `PATCH` endpoint to add multiselect attribute values without removing those value that already exist.\n\nRequired scopes: `list_entry:read-write`, `list_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Entries"],
    security: [
      {
        oauth2: ["list_entry:read-write", "list_configuration:read"],
      },
    ],
    parameters: [
      {
        name: "list",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug of the list the list entry belongs to.",
          type: "string",
        },
      },
      {
        name: "entry_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID of the list entry to update.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PutV2ListsByListEntriesByEntryIdRequest",
    },
    response: {
      confidence: "contract",
      schema: "PutV2ListsByListEntriesByEntryIdResponse",
    },
  },
  {
    id: "patchV2ListsByListEntriesByEntryId",
    command: "lists-entries-update",
    binding: {
      kind: "http",
      method: "PATCH",
      path: "/v2/lists/{list}/entries/{entry_id}",
    },
    effect: "write",
    summary: "Update a list entry (append multiselect values)",
    description:
      "Use this endpoint to update list entries by `entry_id`. If the update payload includes multiselect attributes, the values supplied will be created and prepended to the list of values that already exist (if any). Use the `PUT` endpoint to overwrite or remove multiselect attribute values.\n\nRequired scopes: `list_entry:read-write`, `list_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Entries"],
    security: [
      {
        oauth2: ["list_entry:read-write", "list_configuration:read"],
      },
    ],
    parameters: [
      {
        name: "list",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug of the list the list entry belongs to.",
          type: "string",
        },
      },
      {
        name: "entry_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID of the list entry to update.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PatchV2ListsByListEntriesByEntryIdRequest",
    },
    response: {
      confidence: "contract",
      schema: "PatchV2ListsByListEntriesByEntryIdResponse",
    },
  },
  {
    id: "deleteV2ListsByListEntriesByEntryId",
    command: "lists-entries-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/v2/lists/{list}/entries/{entry_id}",
    },
    effect: "destructive",
    summary: "Delete a list entry",
    description:
      "Deletes a single list entry by its `entry_id`.\n\nRequired scopes: `list_entry:read-write`, `list_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Entries"],
    security: [
      {
        oauth2: ["list_entry:read-write", "list_configuration:read"],
      },
    ],
    permissions: [
      {
        key: "attio.delete",
      },
    ],
    parameters: [
      {
        name: "list",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug identifying the list the entry is in.",
          type: "string",
        },
      },
      {
        name: "entry_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID identifying the entry to delete.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "DeleteV2ListsByListEntriesByEntryIdResponse",
    },
  },
  {
    id: "getV2ListsByListEntriesByEntryIdAttributesByAttributeValues",
    command: "lists-entries-attributes-values-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/lists/{list}/entries/{entry_id}/attributes/{attribute}/values",
    },
    effect: "read",
    summary: "List attribute values for a list entry",
    description:
      "Gets all values for a given attribute on a list entry. This endpoint has the ability to return all historic values using the `show_historic` query param. Historic values are sorted from oldest to newest (by `active_from`).\n\nRequired scopes: `list_entry:read`, `list_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Entries"],
    security: [
      {
        oauth2: ["list_entry:read", "list_configuration:read"],
      },
    ],
    pagination: {
      style: "offset",
      offset: {
        in: "query",
        name: "offset",
      },
      limit: {
        in: "query",
        name: "limit",
      },
      items: "data",
    },
    parameters: [
      {
        name: "list",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug identifying the list the entry is in.",
          type: "string",
        },
      },
      {
        name: "entry_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID identifying the entry.",
          type: "string",
        },
      },
      {
        name: "attribute",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the attribute you want to query values on.",
          type: "string",
        },
      },
      {
        name: "show_historic",
        in: "query",
        required: false,
        schema: {
          description:
            "If `true`, the endpoint will return all historic values for the attribute. If `false`, the endpoint will only return the currently active value(s). Defaults to `false`. Can only be set to `true` for attributes which support historic data; the endpoint will throw if set to `true` for non-historic attributes.",
          default: false,
          type: "boolean",
        },
      },
      {
        name: "limit",
        in: "query",
        required: false,
        schema: {
          description:
            "The maximum number of results to return. See the [full guide to pagination here](/rest-api/guides/pagination).",
          type: "integer",
        },
      },
      {
        name: "offset",
        in: "query",
        required: false,
        schema: {
          description:
            "The number of results to skip over before returning. See the [full guide to pagination here](/rest-api/guides/pagination).",
          type: "integer",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2ListsByListEntriesByEntryIdAttributesByAttributeValuesResponse",
    },
  },
  {
    id: "putV2ListsByListEntriesByEntryIdAttributesByAttributeValues",
    command: "lists-entries-attributes-values-replace",
    binding: {
      kind: "http",
      method: "PUT",
      path: "/v2/lists/{list}/entries/{entry_id}/attributes/{attribute}/values",
    },
    effect: "write",
    summary: "Write list entry attribute values",
    description:
      "Replaces the entire value history of a single attribute on a list entry, primarily to migrate historic data from an external source. Every value the attribute currently has is destroyed, including values not present in the request, and the supplied values are written with the `active_from` and `active_until` timestamps given.\n\nValues may be supplied in any order and gaps between intervals are allowed. For attributes that accept a single value, at most one value may be active at a time, so intervals may not overlap and at most one may have a `null` `active_until`. At least one value is required.\n\nWebhooks and workflow triggers do not fire for these writes, so migrating history does not replay automations. Search indexes and caches are still updated, and formula attributes that depend on this attribute are still recalculated.\n\nValue history cannot be written for relationship attributes, formula attributes, enriched attributes, or immutable system attributes such as the entry's parent record.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `list_entry:read-write`, `list_configuration:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Entries"],
    security: [
      {
        oauth2: ["list_entry:read-write", "list_configuration:read"],
      },
    ],
    parameters: [
      {
        name: "list",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug identifying the list the entry is in.",
          type: "string",
        },
      },
      {
        name: "entry_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID identifying the entry.",
          type: "string",
        },
      },
      {
        name: "attribute",
        in: "path",
        required: true,
        schema: {
          description: "A UUID or slug to identify the attribute you want to query values on.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PutV2ListsByListEntriesByEntryIdAttributesByAttributeValuesRequest",
    },
    response: {
      confidence: "contract",
      schema: "PutV2ListsByListEntriesByEntryIdAttributesByAttributeValuesResponse",
    },
  },
  {
    id: "getV2WorkspaceMembers",
    command: "workspace-members-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/workspace_members",
    },
    effect: "read",
    summary: "List workspace members",
    description:
      "Lists all workspace members in the workspace.\n\nRequired scopes: `user_management:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Workspace members"],
    security: [
      {
        oauth2: ["user_management:read"],
      },
    ],
    parameters: [],
    response: {
      confidence: "contract",
      schema: "GetV2WorkspaceMembersResponse",
    },
  },
  {
    id: "getV2WorkspaceMembersByWorkspaceMemberId",
    command: "workspace-members-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/workspace_members/{workspace_member_id}",
    },
    effect: "read",
    summary: "Get a workspace member",
    description:
      "Gets a single workspace member by ID.\n\nRequired scopes: `user_management:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Workspace members"],
    security: [
      {
        oauth2: ["user_management:read"],
      },
    ],
    parameters: [
      {
        name: "workspace_member_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID to identify the workspace member.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2WorkspaceMembersByWorkspaceMemberIdResponse",
    },
  },
  {
    id: "getV2Notes",
    command: "notes-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/notes",
    },
    effect: "read",
    summary: "List notes",
    description:
      "List notes for all records or for a specific record.\n\nThis endpoint is temporarily rate limited to 10 requests per second.\n\nRequired scopes: `note:read`, `object_configuration:read`, `record_permission:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Notes"],
    security: [
      {
        oauth2: ["note:read", "object_configuration:read", "record_permission:read"],
      },
    ],
    pagination: {
      style: "offset",
      offset: {
        in: "query",
        name: "offset",
      },
      limit: {
        in: "query",
        name: "limit",
      },
      items: "data",
    },
    parameters: [
      {
        name: "limit",
        in: "query",
        required: false,
        schema: {
          description:
            "The maximum number of results to return. The default is `10` and the maximum is `50`. See the [full guide to pagination here](/rest-api/guides/pagination).",
          type: "integer",
        },
      },
      {
        name: "offset",
        in: "query",
        required: false,
        schema: {
          description:
            "The number of results to skip over before returning. The default is `0`. See the [full guide to pagination here](/rest-api/guides/pagination).",
          type: "integer",
        },
      },
      {
        name: "parent_object",
        in: "query",
        required: false,
        schema: {
          description: "The slug or ID of the parent object the notes belong to.",
          type: "string",
        },
      },
      {
        name: "parent_record_id",
        in: "query",
        required: false,
        schema: {
          description: "The ID of the parent record the notes belong to.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2NotesResponse",
    },
  },
  {
    id: "postV2Notes",
    command: "notes-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/v2/notes",
    },
    effect: "write",
    summary: "Create a note",
    description:
      "Creates a new note for a given record.\n\nRequired scopes: `note:read-write`, `object_configuration:read`, `record_permission:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Notes"],
    security: [
      {
        oauth2: ["note:read-write", "object_configuration:read", "record_permission:read"],
      },
    ],
    parameters: [],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostV2NotesRequest",
    },
    response: {
      confidence: "contract",
      schema: "PostV2NotesResponse",
    },
  },
  {
    id: "getV2NotesByNoteId",
    command: "notes-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/notes/{note_id}",
    },
    effect: "read",
    summary: "Get a note",
    description:
      "Get a single note by ID.\n\nRequired scopes: `note:read`, `object_configuration:read`, `record_permission:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Notes"],
    security: [
      {
        oauth2: ["note:read", "object_configuration:read", "record_permission:read"],
      },
    ],
    parameters: [
      {
        name: "note_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID which identifies the note.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2NotesByNoteIdResponse",
    },
  },
  {
    id: "patchV2NotesByNoteId",
    command: "notes-update",
    binding: {
      kind: "http",
      method: "PATCH",
      path: "/v2/notes/{note_id}",
    },
    effect: "write",
    summary: "Update a note",
    description:
      "Updates an existing note's title and/or content. Only the fields you provide are changed, and any field you omit is left untouched. Providing `content` replaces the note's entire content. A note's parent record cannot be changed.\n\nRequired scopes: `note:read-write`, `object_configuration:read`, `record_permission:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Notes"],
    security: [
      {
        oauth2: ["note:read-write", "object_configuration:read", "record_permission:read"],
      },
    ],
    parameters: [
      {
        name: "note_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID which identifies the note to update.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PatchV2NotesByNoteIdRequest",
    },
    response: {
      confidence: "contract",
      schema: "PatchV2NotesByNoteIdResponse",
    },
  },
  {
    id: "deleteV2NotesByNoteId",
    command: "notes-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/v2/notes/{note_id}",
    },
    effect: "destructive",
    summary: "Delete a note",
    description:
      "Delete a single note by ID.\n\nRequired scopes: `note:read-write`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Notes"],
    security: [
      {
        oauth2: ["note:read-write"],
      },
    ],
    permissions: [
      {
        key: "attio.delete",
      },
    ],
    parameters: [
      {
        name: "note_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID which identifies the note to delete.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "DeleteV2NotesByNoteIdResponse",
    },
  },
  {
    id: "getV2Tasks",
    command: "tasks-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/tasks",
    },
    effect: "read",
    summary: "List tasks",
    description:
      "List all tasks. Results are sorted by creation date, from oldest to newest.\n\nRequired scopes: `task:read`, `object_configuration:read`, `record_permission:read`, `user_management:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Tasks"],
    security: [
      {
        oauth2: ["task:read", "object_configuration:read", "record_permission:read", "user_management:read"],
      },
    ],
    pagination: {
      style: "offset",
      offset: {
        in: "query",
        name: "offset",
      },
      limit: {
        in: "query",
        name: "limit",
      },
      items: "data",
    },
    parameters: [
      {
        name: "limit",
        in: "query",
        required: false,
        schema: {
          description:
            "The maximum number of results to return. Defaults to 500. See the [full guide to pagination here](/rest-api/guides/pagination).",
          type: "integer",
        },
      },
      {
        name: "offset",
        in: "query",
        required: false,
        schema: {
          description:
            "The number of results to skip over before returning. Defaults to 0. See the [full guide to pagination here](/rest-api/guides/pagination).",
          type: "integer",
        },
      },
      {
        name: "sort",
        in: "query",
        required: false,
        schema: {
          description:
            'Optionally sort the results. "created_at:asc" returns oldest results first, "created_at:desc" returns the newest results first. "completed_at:asc" and "completed_at:desc" sort by completion time. With "completed_at:asc", incomplete tasks (no completion date) appear first, followed by completed tasks oldest-first. With "completed_at:desc", completed tasks appear first (newest-first), followed by incomplete tasks. To exclude incomplete tasks, filter by is_completed. If unspecified, defaults to "created_at:asc" (oldest results first).',
          type: "string",
          enum: ["created_at:asc", "created_at:desc", "completed_at:asc", "completed_at:desc"],
        },
      },
      {
        name: "linked_object",
        in: "query",
        required: false,
        schema: {
          description:
            "Pass a value to this parameter to filter results to only those tasks that contain the specified record in the `linked_records` property of the task. This parameter should identify the object that the linked record belongs to. For example, if filtering to tasks that link to a specific person record, this parameter should be `people`. If provided, `linked_record_id` must also be provided.",
          type: "string",
        },
      },
      {
        name: "linked_record_id",
        in: "query",
        required: false,
        schema: {
          description:
            "Pass a value to this parameter to filter results to only those tasks that contain the specified record in the `linked_records` property of the task. This parameter should contain the record ID of the linked record. If provided, `linked_object` must also be provided.",
          type: "string",
        },
      },
      {
        name: "assignee",
        in: "query",
        required: false,
        schema: {
          description:
            "Filter tasks by workspace member assignees. Workspace members can be referenced by either their email address or ID. Pass an empty value or the string `null` to find tasks with no assignee.",
          nullable: true,
          type: "string",
        },
      },
      {
        name: "is_completed",
        in: "query",
        required: false,
        schema: {
          description:
            "Filter tasks by whether they have been completed. By default, both completed and non-completed tasks are returned. Specify `true` to only return completed tasks, or `false` to only return non-completed tasks.",
          type: "boolean",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2TasksResponse",
    },
  },
  {
    id: "postV2Tasks",
    command: "tasks-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/v2/tasks",
    },
    effect: "write",
    summary: "Create a task",
    description:
      "Creates a new task.\n\nAt present, tasks can only be created from plaintext without record reference formatting.\n\nRequired scopes: `task:read-write`, `object_configuration:read`, `record_permission:read`, `user_management:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Tasks"],
    security: [
      {
        oauth2: ["task:read-write", "object_configuration:read", "record_permission:read", "user_management:read"],
      },
    ],
    parameters: [],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostV2TasksRequest",
    },
    response: {
      confidence: "contract",
      schema: "PostV2TasksResponse",
    },
  },
  {
    id: "getV2TasksByTaskId",
    command: "tasks-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/tasks/{task_id}",
    },
    effect: "read",
    summary: "Get a task",
    description:
      "Get a single task by ID.\n\nRequired scopes: `task:read`, `object_configuration:read`, `record_permission:read`, `user_management:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Tasks"],
    security: [
      {
        oauth2: ["task:read", "object_configuration:read", "record_permission:read", "user_management:read"],
      },
    ],
    parameters: [
      {
        name: "task_id",
        in: "path",
        required: true,
        schema: {
          description: "The ID of the task.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2TasksByTaskIdResponse",
    },
  },
  {
    id: "patchV2TasksByTaskId",
    command: "tasks-update",
    binding: {
      kind: "http",
      method: "PATCH",
      path: "/v2/tasks/{task_id}",
    },
    effect: "write",
    summary: "Update a task",
    description:
      "Updates an existing task by `task_id`. At present, only the `deadline_at`, `is_completed`, `linked_records`, and `assignees` fields can be updated.\n\nRequired scopes: `task:read-write`, `object_configuration:read`, `record_permission:read`, `user_management:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Tasks"],
    security: [
      {
        oauth2: ["task:read-write", "object_configuration:read", "record_permission:read", "user_management:read"],
      },
    ],
    parameters: [
      {
        name: "task_id",
        in: "path",
        required: true,
        schema: {
          description: "The ID of the task to update.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PatchV2TasksByTaskIdRequest",
    },
    response: {
      confidence: "contract",
      schema: "PatchV2TasksByTaskIdResponse",
    },
  },
  {
    id: "deleteV2TasksByTaskId",
    command: "tasks-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/v2/tasks/{task_id}",
    },
    effect: "destructive",
    summary: "Delete a task",
    description:
      "Delete a task by ID.\n\nRequired scopes: `task:read-write`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Tasks"],
    security: [
      {
        oauth2: ["task:read-write"],
      },
    ],
    permissions: [
      {
        key: "attio.delete",
      },
    ],
    parameters: [
      {
        name: "task_id",
        in: "path",
        required: true,
        schema: {
          description: "The ID of the task to delete.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "DeleteV2TasksByTaskIdResponse",
    },
  },
  {
    id: "getV2Threads",
    command: "threads-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/threads",
    },
    effect: "read",
    summary: "List threads",
    description:
      "List threads of comments on a record or list entry.\n\nEach thread in the response includes at most `80` replies, starting with the oldest. When a thread holds more, its `has_more_comments` is `true`; use [Get a thread and its comments](/rest-api/endpoint-reference/threads/get-a-thread-and-its-comments) to page through every comment in that thread.\n\nTo view threads on records, you will need the `object_configuration:read` and `record_permission:read` scopes.\n\nTo view threads on list entries, you will need the `list_configuration:read` and `list_entry:read` scopes.\n\nRequired scopes: `comment:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Threads"],
    security: [
      {
        oauth2: ["comment:read"],
      },
    ],
    pagination: {
      style: "offset",
      offset: {
        in: "query",
        name: "offset",
      },
      limit: {
        in: "query",
        name: "limit",
      },
      items: "data",
    },
    parameters: [
      {
        name: "record_id",
        in: "query",
        required: false,
        schema: {
          description: "Use this parameter to filter to threads on a specific record. Must be passed with `object`.",
          type: "string",
        },
      },
      {
        name: "object",
        in: "query",
        required: false,
        schema: {
          description:
            "Use this parameter to filter to threads on a specific record. Must be passed with `record_id`. Accepts either a slug or an ID.",
          type: "string",
        },
      },
      {
        name: "entry_id",
        in: "query",
        required: false,
        schema: {
          description: "Use this parameter to filter to threads on a specific entry. Must be passed with `list`.",
          type: "string",
        },
      },
      {
        name: "list",
        in: "query",
        required: false,
        schema: {
          description:
            "Use this parameter to filter to threads on a specific entry. Must be passed with `entry_id`. Accepts either a slug or an ID.",
          type: "string",
        },
      },
      {
        name: "limit",
        in: "query",
        required: false,
        schema: {
          description:
            "The maximum number of results to return. The default is `10` and the maximum is `50`. See the [full guide to pagination here](/rest-api/guides/pagination).",
          type: "integer",
        },
      },
      {
        name: "offset",
        in: "query",
        required: false,
        schema: {
          description:
            "The number of results to skip over before returning. The default is `0`. See the [full guide to pagination here](/rest-api/guides/pagination).",
          type: "integer",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2ThreadsResponse",
    },
  },
  {
    id: "getV2ThreadsByThreadId",
    command: "threads-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/threads/{thread_id}",
    },
    effect: "read",
    summary: "Get a thread and its comments",
    description:
      "Get a thread and page through its comments, oldest first, starting with the comment that opened it.\n\nComments are paginated: at most `250` are returned per request. Keep paginating for as long as a `next_cursor` is returned.\n\nSupply `created_after` to return only the comments created after a timestamp, which is useful when polling a thread for new replies. The comment that opened the thread is returned only when it also satisfies the filter.\n\nTo view threads on records, you will need the `object_configuration:read` and `record_permission:read` scopes.\n\nTo view threads on list entries, you will need the `list_configuration:read` and `list_entry:read` scopes.\n\nRequired scopes: `comment:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Threads"],
    security: [
      {
        oauth2: ["comment:read"],
      },
    ],
    pagination: {
      style: "cursor",
      cursor: {
        in: "query",
        name: "cursor",
      },
      next: "pagination.next_cursor",
      limit: {
        in: "query",
        name: "limit",
      },
    },
    parameters: [
      {
        name: "thread_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID which identifies the thread.",
          type: "string",
        },
      },
      {
        name: "limit",
        in: "query",
        required: false,
        schema: {
          description: "The maximum number of comments to return. Defaults to `250`, which is also the maximum.",
          type: "integer",
        },
      },
      {
        name: "cursor",
        in: "query",
        required: false,
        schema: {
          description:
            "A cursor for pagination. Use the `next_cursor` from the previous response to get the next page of comments.",
          type: "string",
          minLength: 1,
        },
      },
      {
        name: "created_after",
        in: "query",
        required: false,
        schema: {
          description: "Only return comments created after this timestamp.",
          nullable: true,
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2ThreadsByThreadIdResponse",
    },
  },
  {
    id: "postV2Comments",
    command: "comments-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/v2/comments",
    },
    effect: "write",
    summary: "Create a comment",
    description:
      "Creates a new comment related to an existing thread, record or entry.\n\nTo create comments on records, you will need the `object_configuration:read` and `record_permission:read` scopes.\n\nTo create comments on list entries, you will need the `list_configuration:read` and `list_entry:read` scopes.\n\nRequired scopes: `comment:read-write`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Comments"],
    security: [
      {
        oauth2: ["comment:read-write"],
      },
    ],
    parameters: [],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostV2CommentsRequest",
    },
    response: {
      confidence: "contract",
      schema: "PostV2CommentsResponse",
    },
  },
  {
    id: "getV2CommentsByCommentId",
    command: "comments-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/comments/{comment_id}",
    },
    effect: "read",
    summary: "Get a comment",
    description:
      "Get a single comment by ID.\n\nTo view comments on records, you will need the `object_configuration:read` and `record_permission:read` scopes.\n\nTo view comments on list entries, you will need the `list_configuration:read` and `list_entry:read` scopes.\n\nRequired scopes: `comment:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Comments"],
    security: [
      {
        oauth2: ["comment:read"],
      },
    ],
    parameters: [
      {
        name: "comment_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID which identifies the comment.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2CommentsByCommentIdResponse",
    },
  },
  {
    id: "deleteV2CommentsByCommentId",
    command: "comments-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/v2/comments/{comment_id}",
    },
    effect: "destructive",
    summary: "Delete a comment",
    description:
      "Deletes a comment by ID. If deleting a comment at the head of a thread, all messages in the thread are also deleted.\n\nA workspace-level access token may delete any comment. A user-level access token may only delete comments authored by the member it acts for.\n\nRequired scopes: `comment:read-write`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Comments"],
    security: [
      {
        oauth2: ["comment:read-write"],
      },
    ],
    permissions: [
      {
        key: "attio.delete",
      },
    ],
    parameters: [
      {
        name: "comment_id",
        in: "path",
        required: true,
        schema: {
          description: "The ID of the comment to delete.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "DeleteV2CommentsByCommentIdResponse",
    },
  },
  {
    id: "getV2Emails",
    command: "emails-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/emails",
    },
    effect: "read",
    summary: "List emails",
    description:
      "Lists email metadata from your workspace's connected mailboxes. Email content is never returned.\n\nAt least one of `linked_object` with `linked_record_ids`, `participants`, or `domain` must be supplied; there is no way to list every email. When several are supplied they are combined with OR: emails matching any of the filters are returned.\n\n> **Requesting access:** this endpoint is enabled per workspace and per app while it is in alpha. Contact [support@attio.com](mailto:support@attio.com) to request access.\n\n**Things to know**\n\n- Filters that identify your own workspace are ignored. This covers a member's or invited member's address, one of your mailboxes, and any of their domains. If every filter you supply is ignored, an empty page is returned.\n- A filter that names a protected recipient in your workspace is rejected rather than ignored. This covers an address or a domain you supply directly. A record whose address or domain is a protected recipient is ignored instead, in the same way as the filters above.\n- Emails from a mailbox shared with your workspace as metadata only are returned without a subject line. An email is left out entirely when it has no participant you may see — that is, when every participant outside your workspace is a protected recipient.\n- An email that reached more than one of your mailboxes is returned once, and `id.mailbox_id` identifies whichever copy was readable.\n- `linked_records` is derived when you make the request rather than stored, so it reflects your records as they are now.\n- Emails are returned newest first, ordered by when they were sent. Each request scans a bounded number of emails, so a page can hold fewer emails than `limit`, or none at all, while more are still available. Keep paginating for as long as a `next_cursor` is returned, rather than stopping on a short page.\n\nThis endpoint is in alpha and may be subject to breaking changes as we gather feedback.\n\nRequired scopes: `email:read`, `record_permission:read`, `object_configuration:read`.\n\nSupported token levels: `workspace`.",
    tags: ["Emails"],
    security: [
      {
        oauth2: ["email:read", "record_permission:read", "object_configuration:read"],
      },
    ],
    pagination: {
      style: "cursor",
      cursor: {
        in: "query",
        name: "cursor",
      },
      next: "pagination.next_cursor",
      items: "data",
      limit: {
        in: "query",
        name: "limit",
      },
    },
    parameters: [
      {
        name: "limit",
        in: "query",
        required: false,
        schema: {
          description: "The maximum number of emails to return. Must be between 1 and 50. Defaults to 25.",
          default: 25,
          type: "integer",
          minimum: 1,
          maximum: 50,
        },
      },
      {
        name: "cursor",
        in: "query",
        required: false,
        schema: {
          description:
            "A pagination cursor used to fetch the next page of emails. Responses with more emails will include a cursor for you to use here. If not provided, the first page will be returned.",
          type: "string",
        },
      },
      {
        name: "linked_object",
        in: "query",
        required: false,
        schema: {
          description:
            "The object to filter emails by. Must be the slug or ID of either the people or companies object. If provided, linked_record_ids must also be provided.",
          type: "string",
          minLength: 1,
        },
      },
      {
        name: "linked_record_ids",
        in: "query",
        required: false,
        schema: {
          description:
            "A comma-separated list of up to 10 record IDs to filter emails by. All IDs must belong to the object given in `linked_object`, so filtering by both people and companies requires two requests. If provided, linked_object must also be provided.",
          type: "string",
        },
      },
      {
        name: "participants",
        in: "query",
        required: false,
        schema: {
          description:
            "A comma-separated list of up to 10 email addresses. Emails that include at least one of them as a participant are returned.",
          default: "",
          type: "string",
        },
      },
      {
        name: "domain",
        in: "query",
        required: false,
        schema: {
          description:
            "A domain to filter emails by. Emails with at least one participant at this domain are returned.",
          type: "string",
          minLength: 1,
        },
      },
      {
        name: "sent_after",
        in: "query",
        required: false,
        schema: {
          description:
            "Only return emails sent after this timestamp. `sent_after` is exclusive, so an email sent at exactly this timestamp is not returned.",
          nullable: true,
          type: "string",
        },
      },
      {
        name: "sent_before",
        in: "query",
        required: false,
        schema: {
          description:
            "Only return emails sent before this timestamp. `sent_before` is exclusive, so an email sent at exactly this timestamp is not returned.",
          nullable: true,
          type: "string",
        },
      },
      {
        name: "exclude_automated_participants",
        in: "query",
        required: false,
        schema: {
          description:
            "If `true`, an email is only returned when at least one participant outside your workspace looks like a person rather than an automated sender (`notifications@`, `no-reply@`, meeting notetakers, …). Defaults to `false`, which returns every email regardless of who sent it.",
          default: false,
          type: "boolean",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2EmailsResponse",
    },
  },
  {
    id: "postV2SequencesUnsubscribedEmails",
    command: "sequences-unsubscribed-emails",
    binding: {
      kind: "http",
      method: "POST",
      path: "/v2/sequences/unsubscribed_emails",
    },
    effect: "write",
    summary: "Add emails to the unsubscribe list",
    description:
      "Adds email addresses to the workspace's sequence unsubscribe list. Email addresses on the unsubscribe list cannot be enrolled in any sequence, and any of their active sequence runs are exited. Email addresses that are already on the unsubscribe list are ignored, so this endpoint is safe to retry.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `sequence_unsubscribe:read-write`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Sequences"],
    security: [
      {
        oauth2: ["sequence_unsubscribe:read-write"],
      },
    ],
    parameters: [],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostV2SequencesUnsubscribedEmailsRequest",
    },
    response: {
      confidence: "contract",
      schema: "PostV2SequencesUnsubscribedEmailsResponse",
    },
  },
  {
    id: "getV2WorkspaceBlocklistAddresses",
    command: "workspace-blocklist-addresses-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/workspace_blocklist_addresses",
    },
    effect: "read",
    summary: "List workspace blocklist addresses",
    description:
      "An address is an email address (jane@acme.com) or a domain (acme.com).\n\nLists every address on the workspace blocklist, at both enforcement levels. Email addresses come first, then domains, each in alphabetical order.\n\nA user-level access token can only call this endpoint if the workspace member it acts for is a workspace admin.\n\nThis endpoint is in alpha and may be subject to breaking changes as we gather feedback.\n\nRequired scopes: `email_calendar_blocklist:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Workspace blocklist"],
    security: [
      {
        oauth2: ["email_calendar_blocklist:read"],
      },
    ],
    pagination: {
      style: "cursor",
      cursor: {
        in: "query",
        name: "cursor",
      },
      next: "pagination.next_cursor",
      items: "data",
      limit: {
        in: "query",
        name: "limit",
      },
    },
    parameters: [
      {
        name: "limit",
        in: "query",
        required: false,
        schema: {
          description: "The maximum number of addresses to return. Must be between 1 and 500. Defaults to 500.",
          default: 500,
          type: "integer",
          minimum: 1,
          maximum: 500,
        },
      },
      {
        name: "cursor",
        in: "query",
        required: false,
        schema: {
          description:
            "A pagination cursor used to fetch the next page of addresses. Responses with more addresses will include a cursor for you to use here. If not provided, the first page will be returned.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2WorkspaceBlocklistAddressesResponse",
    },
  },
  {
    id: "putV2WorkspaceBlocklistAddresses",
    command: "workspace-blocklist-addresses-replace",
    binding: {
      kind: "http",
      method: "PUT",
      path: "/v2/workspace_blocklist_addresses",
    },
    effect: "write",
    summary: "Add or update workspace blocklist addresses",
    description:
      "An address is an email address (jane@acme.com) or a domain (acme.com).\n\nSets each address in the request to the given enforcement level on the workspace blocklist. The address itself is its key: there is no separate ID.\n\nAn address that isn't on the workspace blocklist is added. An address already at the requested level is left unchanged, so this endpoint is safe to retry. An address at the other level is moved to the requested level.\n\nThis endpoint only adds and updates the addresses in the request. Addresses on the workspace blocklist that aren't in the request are left alone; it never replaces the whole list.\n\nAddresses are normalized: email addresses and domains are trimmed and lowercased, a URL is reduced to its hostname, and a leading `www.` is removed. The response returns the normalized value, which is the key for the address. Duplicate addresses are collapsed, and a request that gives the same address two different enforcement levels is rejected.\n\nThe request is applied all or nothing. Protected changes take effect immediately. Blocked changes take effect once each connected mailbox has re-synced, which may take a few minutes.\n\nA user-level access token can only call this endpoint if the workspace member it acts for is a workspace admin.\n\nThis endpoint is in alpha and may be subject to breaking changes as we gather feedback.\n\nRequired scopes: `email_calendar_blocklist:read-write`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Workspace blocklist"],
    security: [
      {
        oauth2: ["email_calendar_blocklist:read-write"],
      },
    ],
    parameters: [],
    request: {
      required: true,
      confidence: "contract",
      schema: "PutV2WorkspaceBlocklistAddressesRequest",
    },
    response: {
      confidence: "contract",
      schema: "PutV2WorkspaceBlocklistAddressesResponse",
    },
  },
  {
    id: "deleteV2WorkspaceBlocklistAddressesByAddress",
    command: "workspace-blocklist-addresses-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/v2/workspace_blocklist_addresses/{address}",
    },
    effect: "destructive",
    summary: "Delete a workspace blocklist address",
    description:
      "An address is an email address (jane@acme.com) or a domain (acme.com).\n\nRemoves an address from the workspace blocklist, whatever its enforcement level. The address itself is its key: there is no separate ID.\n\nThe address is normalized as when it is added: email addresses and domains are trimmed and lowercased, a URL is reduced to its hostname, and a leading `www.` is removed. So the address is found whatever form it was added in. A URL, or any other value with reserved characters, must be percent-encoded in the path.\n\nAn address that isn't on the workspace blocklist returns a `404`. A client retrying a request can treat a `404` as done.\n\nRemoving a protected address takes effect immediately. Removing a blocked address takes effect once each connected mailbox has re-synced, which may take a few minutes.\n\nA user-level access token can only call this endpoint if the workspace member it acts for is a workspace admin.\n\nThis endpoint is in alpha and may be subject to breaking changes as we gather feedback.\n\nRequired scopes: `email_calendar_blocklist:read-write`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Workspace blocklist"],
    security: [
      {
        oauth2: ["email_calendar_blocklist:read-write"],
      },
    ],
    permissions: [
      {
        key: "attio.delete",
      },
    ],
    parameters: [
      {
        name: "address",
        in: "path",
        required: true,
        schema: {
          description:
            "An email address or a domain. Attio works out which one it is. Email addresses are trimmed and lowercased, and their host must be a valid domain. Domains are trimmed and lowercased, a URL is reduced to its hostname, and a leading `www.` is removed; subdomains are kept. Single labels (`acme`), bare public suffixes (`com`), unknown suffixes, IP addresses, wildcards and values over 253 characters are rejected.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "DeleteV2WorkspaceBlocklistAddressesByAddressResponse",
    },
  },
  {
    id: "getV2Meetings",
    command: "meetings-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/meetings",
    },
    effect: "read",
    summary: "List meetings",
    description:
      "Lists all meetings in the workspace using a deterministic sort order. When both the `participants` and `linked_record_id` filters are supplied, they are combined with OR: meetings that match either filter are returned.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `meeting:read`, `record_permission:read`.\n\nSupported token levels: `workspace`.",
    tags: ["Meetings"],
    security: [
      {
        oauth2: ["meeting:read", "record_permission:read"],
      },
    ],
    pagination: {
      style: "cursor",
      cursor: {
        in: "query",
        name: "cursor",
      },
      next: "pagination.next_cursor",
      items: "data",
      limit: {
        in: "query",
        name: "limit",
      },
    },
    parameters: [
      {
        name: "limit",
        in: "query",
        required: false,
        schema: {
          description: "The maximum number of meetings to return. Must be between 1 and 200. Defaults to 50.",
          default: 50,
          type: "integer",
          minimum: 1,
          maximum: 200,
        },
      },
      {
        name: "cursor",
        in: "query",
        required: false,
        schema: {
          description:
            "A pagination cursor used to fetch the next page of meetings. Responses with more meetings will include a cursor for you to use here. If not provided, the first page will be returned.",
          type: "string",
        },
      },
      {
        name: "linked_object",
        in: "query",
        required: false,
        schema: {
          description:
            "The object to filter meetings by. Must be a valid object slug or ID. If provided, linked_record_id must also be provided.",
          type: "string",
          minLength: 1,
        },
      },
      {
        name: "linked_record_id",
        in: "query",
        required: false,
        schema: {
          description:
            "Used to filter meetings to only those values that include a specific linked record. Must be a valid record ID. If provided, linked_object must also be provided. When combined with `participants`, the filters are combined with OR: meetings matching either filter are returned.",
          type: "string",
        },
      },
      {
        name: "participants",
        in: "query",
        required: false,
        schema: {
          description:
            "A comma-separated list of emails to filter meetings by. If provided, meetings will be filtered to only include meetings that include at least one of the provided emails as participants. When combined with `linked_record_id`, the filters are combined with OR: meetings matching either filter are returned.",
          default: "",
          type: "string",
        },
      },
      {
        name: "sort",
        in: "query",
        required: false,
        schema: {
          description: "The order in which to sort the meetings. Defaults to start_asc.",
          default: "start_asc",
          type: "string",
          enum: ["start_asc", "start_desc"],
        },
      },
      {
        name: "ends_from",
        in: "query",
        required: false,
        schema: {
          description:
            "Use `ends_from` to filter meetings to only those that end after the specified timestamp. `ends_from` is inclusive, meaning that meetings that end at the exact timestamp will be included in results. When evaluating all-day meetings, we filter results from the perspective of a specific timezone (see `timezone` for more information).",
          nullable: true,
          type: "string",
        },
      },
      {
        name: "starts_before",
        in: "query",
        required: false,
        schema: {
          description:
            "Use `starts_before` to filter meetings to only those that start before the specified timestamp. `starts_before` is exclusive, meaning that meetings that start at the exact timestamp will not be included in results. When evaluating all-day meetings, we filter results from the perspective of a specific timezone (see `timezone` for more information).",
          nullable: true,
          type: "string",
        },
      },
      {
        name: "timezone",
        in: "query",
        required: false,
        schema: {
          description:
            "The timezone to use when filtering meetings using `ends_from` and `starts_before`. Defaults to UTC. This property has no effect for non-all-day meetings.",
          default: "UTC",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2MeetingsResponse",
    },
  },
  {
    id: "postV2Meetings",
    command: "meetings-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/v2/meetings",
    },
    effect: "write",
    summary: "Create a meeting",
    description:
      "Creates a new meeting. [See here](/rest-api/guides/syncing-meetings) for guidance on avoiding duplicate meetings.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `meeting:read-write`, `record_permission:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Meetings"],
    security: [
      {
        oauth2: ["meeting:read-write", "record_permission:read"],
      },
    ],
    parameters: [],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostV2MeetingsRequest",
    },
    response: {
      confidence: "contract",
      schema: "PostV2MeetingsResponse",
    },
  },
  {
    id: "getV2MeetingsByMeetingId",
    command: "meetings-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/meetings/{meeting_id}",
    },
    effect: "read",
    summary: "Get a meeting",
    description:
      "Get a single meeting by ID.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `meeting:read`, `record_permission:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Meetings"],
    security: [
      {
        oauth2: ["meeting:read", "record_permission:read"],
      },
    ],
    parameters: [
      {
        name: "meeting_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID which identifies the meeting.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2MeetingsByMeetingIdResponse",
    },
  },
  {
    id: "putV2MeetingsByMeetingId",
    command: "meetings-replace",
    binding: {
      kind: "http",
      method: "PUT",
      path: "/v2/meetings/{meeting_id}",
    },
    effect: "write",
    summary: "Update a meeting (overwrite linked records)",
    description:
      "Replaces a meeting's linked records with the records supplied. Any record which is currently linked and is not in the request is unlinked, including records which Attio linked automatically from the meeting's participants. Passing an empty array unlinks every record. Use the `PATCH` endpoint to add linked records without removing the records which already exist.\n\nNo other meeting fields can be updated. Attio automatically links the meeting participants' companies to the meeting; this behavior is asynchronous, so a company which is linked after this request completes is not removed by it.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `meeting:read-write`, `record_permission:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Meetings"],
    security: [
      {
        oauth2: ["meeting:read-write", "record_permission:read"],
      },
    ],
    parameters: [
      {
        name: "meeting_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID which identifies the meeting to update.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PutV2MeetingsByMeetingIdRequest",
    },
    response: {
      confidence: "contract",
      schema: "PutV2MeetingsByMeetingIdResponse",
    },
  },
  {
    id: "patchV2MeetingsByMeetingId",
    command: "meetings-update",
    binding: {
      kind: "http",
      method: "PATCH",
      path: "/v2/meetings/{meeting_id}",
    },
    effect: "write",
    summary: "Update a meeting (append linked records)",
    description:
      "Links records to a meeting. The records supplied are added to the meeting's existing linked records, and records which are already linked are ignored. Use the `PUT` endpoint to replace or remove linked records.\n\nNo other meeting fields can be updated. Attio automatically links the meeting participants' companies to the meeting; this behavior is asynchronous.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `meeting:read-write`, `record_permission:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Meetings"],
    security: [
      {
        oauth2: ["meeting:read-write", "record_permission:read"],
      },
    ],
    parameters: [
      {
        name: "meeting_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID which identifies the meeting to update.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PatchV2MeetingsByMeetingIdRequest",
    },
    response: {
      confidence: "contract",
      schema: "PatchV2MeetingsByMeetingIdResponse",
    },
  },
  {
    id: "deleteV2MeetingsByMeetingId",
    command: "meetings-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/v2/meetings/{meeting_id}",
    },
    effect: "destructive",
    summary: "Delete a meeting",
    description:
      "Deletes a single meeting by ID.\n\nMeetings created by calendar sync cannot be deleted through the API. Delete the underlying calendar event, or disconnect the calendar, instead.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `meeting:read-write`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Meetings"],
    security: [
      {
        oauth2: ["meeting:read-write"],
      },
    ],
    permissions: [
      {
        key: "attio.delete",
      },
    ],
    parameters: [
      {
        name: "meeting_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID which identifies the meeting to delete.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "DeleteV2MeetingsByMeetingIdResponse",
    },
  },
  {
    id: "getV2MeetingsByMeetingIdCallRecordings",
    command: "meetings-call-recordings-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/meetings/{meeting_id}/call_recordings",
    },
    effect: "read",
    summary: "List call recordings",
    description:
      "List all call recordings for a meeting.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `meeting:read`, `call_recording:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Call recordings"],
    security: [
      {
        oauth2: ["meeting:read", "call_recording:read"],
      },
    ],
    pagination: {
      style: "cursor",
      cursor: {
        in: "query",
        name: "cursor",
      },
      next: "pagination.next_cursor",
      items: "data",
      limit: {
        in: "query",
        name: "limit",
      },
    },
    parameters: [
      {
        name: "meeting_id",
        in: "path",
        required: true,
        schema: {
          description: "The ID of the meeting to list call recordings for.",
          type: "string",
        },
      },
      {
        name: "limit",
        in: "query",
        required: false,
        schema: {
          description: "The maximum number of results to return. Defaults to 50 with a maximum of 200.",
          type: "integer",
        },
      },
      {
        name: "cursor",
        in: "query",
        required: false,
        schema: {
          description:
            "A cursor for pagination. Use the `next_cursor` from the previous response to get the next page of results.",
          type: "string",
          minLength: 1,
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2MeetingsByMeetingIdCallRecordingsResponse",
    },
  },
  {
    id: "postV2MeetingsByMeetingIdCallRecordings",
    command: "meetings-call-recordings-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/v2/meetings/{meeting_id}/call_recordings",
    },
    effect: "write",
    summary: "Create call recording",
    description:
      "Create a call recording for a meeting. This endpoint is rate limited to 1 request per second.\n\nA `transcript` is required. `video_url` is optional, and a transcript-only call recording (with no video) is fully supported.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `meeting:read`, `call_recording:read-write`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Call recordings"],
    security: [
      {
        oauth2: ["meeting:read", "call_recording:read-write"],
      },
    ],
    parameters: [
      {
        name: "meeting_id",
        in: "path",
        required: true,
        schema: {
          description: "The ID of the meeting this recording belongs to.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostV2MeetingsByMeetingIdCallRecordingsRequest",
    },
    response: {
      confidence: "contract",
      schema: "PostV2MeetingsByMeetingIdCallRecordingsResponse",
    },
  },
  {
    id: "getV2MeetingsByMeetingIdCallRecordingsByCallRecordingId",
    command: "meetings-call-recordings-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/meetings/{meeting_id}/call_recordings/{call_recording_id}",
    },
    effect: "read",
    summary: "Get call recording",
    description:
      "Get a single call recording by ID.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `meeting:read`, `call_recording:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Call recordings"],
    security: [
      {
        oauth2: ["meeting:read", "call_recording:read"],
      },
    ],
    parameters: [
      {
        name: "meeting_id",
        in: "path",
        required: true,
        schema: {
          description: "The ID of the meeting this recording belongs to.",
          type: "string",
        },
      },
      {
        name: "call_recording_id",
        in: "path",
        required: true,
        schema: {
          description: "The ID of the call recording to retrieve.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2MeetingsByMeetingIdCallRecordingsByCallRecordingIdResponse",
    },
  },
  {
    id: "deleteV2MeetingsByMeetingIdCallRecordingsByCallRecordingId",
    command: "meetings-call-recordings-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/v2/meetings/{meeting_id}/call_recordings/{call_recording_id}",
    },
    effect: "destructive",
    summary: "Delete call recording",
    description:
      "Deletes the specified call recording. This will remove the call recording and all associated data.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `meeting:read`, `call_recording:read-write`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Call recordings"],
    security: [
      {
        oauth2: ["meeting:read", "call_recording:read-write"],
      },
    ],
    permissions: [
      {
        key: "attio.delete",
      },
    ],
    parameters: [
      {
        name: "meeting_id",
        in: "path",
        required: true,
        schema: {
          description: "The ID of the meeting this call recording belongs to.",
          type: "string",
        },
      },
      {
        name: "call_recording_id",
        in: "path",
        required: true,
        schema: {
          description: "The ID of the call recording to delete.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "DeleteV2MeetingsByMeetingIdCallRecordingsByCallRecordingIdResponse",
    },
  },
  {
    id: "getV2MeetingsByMeetingIdCallRecordingsByCallRecordingIdTranscript",
    command: "meetings-call-recordings-transcript-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/meetings/{meeting_id}/call_recordings/{call_recording_id}/transcript",
    },
    effect: "read",
    summary: "Deprecated: Get call transcript",
    description:
      "Deprecated: prefer using `GET /v2/meetings/:meeting_id/call_recordings/:call_recording_id` to get the transcript for a call recording.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `meeting:read`, `call_recording:read`.\n\nSupported token levels: `workspace`.",
    tags: ["Transcripts"],
    security: [
      {
        oauth2: ["meeting:read", "call_recording:read"],
      },
    ],
    pagination: {
      style: "cursor",
      cursor: {
        in: "query",
        name: "cursor",
      },
      next: "pagination.next_cursor",
    },
    parameters: [
      {
        name: "meeting_id",
        in: "path",
        required: true,
        schema: {
          description: "The ID of the meeting.",
          type: "string",
        },
      },
      {
        name: "call_recording_id",
        in: "path",
        required: true,
        schema: {
          description: "The ID of the call recording to get the transcript for.",
          type: "string",
        },
      },
      {
        name: "cursor",
        in: "query",
        required: false,
        schema: {
          description:
            "A cursor for pagination through transcript segments. Use the `next_cursor` from the previous response to get the next page of speech segments within this transcript.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2MeetingsByMeetingIdCallRecordingsByCallRecordingIdTranscriptResponse",
    },
  },
  {
    id: "getV2Files",
    command: "files-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/files",
    },
    effect: "read",
    summary: "List files",
    description:
      "Lists internal files, externally connected files and folders for a specific record. Use the `object` and `record_id` query parameters to specify the record. Optional query parameters may be provided to filter results by storage provider or parent folder.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `object_configuration:read`, `record_permission:read`, `file:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Files"],
    security: [
      {
        oauth2: ["object_configuration:read", "record_permission:read", "file:read"],
      },
    ],
    pagination: {
      style: "cursor",
      cursor: {
        in: "query",
        name: "cursor",
      },
      next: "pagination.next_cursor",
      items: "data",
      limit: {
        in: "query",
        name: "limit",
      },
    },
    parameters: [
      {
        name: "object",
        in: "query",
        required: true,
        schema: {
          description: "The object slug or ID.",
          type: "string",
          minLength: 1,
        },
      },
      {
        name: "record_id",
        in: "query",
        required: true,
        schema: {
          description: "The record ID for the specific record whose files you want to list.",
          type: "string",
        },
      },
      {
        name: "storage_provider",
        in: "query",
        required: false,
        schema: {
          description: "Filter results by storage provider.",
          type: "string",
          enum: ["attio", "dropbox", "box", "google-drive", "microsoft-onedrive"],
        },
      },
      {
        name: "parent_folder_id",
        in: "query",
        required: false,
        schema: {
          description:
            "Filter by parent folder ID. Each file entry has provided optioanl parent_folder_id that can be used to filter results by folder. When omitted, entries at all nesting levels are returned.",
          type: "string",
        },
      },
      {
        name: "limit",
        in: "query",
        required: false,
        schema: {
          description: "The maximum number of files to return. Must be between 1 and 200. Defaults to 50.",
          default: 50,
          type: "integer",
          minimum: 1,
          maximum: 200,
        },
      },
      {
        name: "cursor",
        in: "query",
        required: false,
        schema: {
          description:
            "A pagination cursor used to fetch the next page of files. Responses with more files will include a cursor for you to use here. If not provided, the first page will be returned.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2FilesResponse",
    },
  },
  {
    id: "postV2Files",
    command: "files-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/v2/files",
    },
    effect: "write",
    summary: "Create a folder",
    description:
      "Creates a native folder entry or a connected file/folder entry on an object record.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `file:read-write`, `object_configuration:read`, `record_permission:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Files"],
    security: [
      {
        oauth2: ["file:read-write", "object_configuration:read", "record_permission:read"],
      },
    ],
    parameters: [],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostV2FilesRequest",
    },
    response: {
      confidence: "contract",
      schema: "PostV2FilesResponse",
    },
  },
  {
    id: "postV2FilesUpload",
    command: "files-upload",
    binding: {
      kind: "http",
      method: "POST",
      path: "/v2/files/upload",
    },
    effect: "write",
    summary: "Upload a file",
    description:
      "Uploads a file to native Attio storage for a record. Send multipart/form-data with a single binary field named `file` together with the body fields `object`, `record_id`, and optional `parent_folder_id`. Maximum file size is 50 MB.\n\nThis endpoint is rate limited to 1 request per second.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `file:read-write`, `object_configuration:read`, `record_permission:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Files"],
    security: [
      {
        oauth2: ["file:read-write", "object_configuration:read", "record_permission:read"],
      },
    ],
    parameters: [],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostV2FilesUploadRequest",
      contentType: "multipart/form-data",
    },
    response: {
      confidence: "contract",
      schema: "PostV2FilesUploadResponse",
    },
  },
  {
    id: "getV2FilesByFileId",
    command: "files-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/files/{file_id}",
    },
    effect: "read",
    summary: "Get a file",
    description:
      "Get a single file entry by ID.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `file:read`, `object_configuration:read`, `record_permission:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Files"],
    security: [
      {
        oauth2: ["file:read", "object_configuration:read", "record_permission:read"],
      },
    ],
    parameters: [
      {
        name: "file_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID which identifies the file entry.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2FilesByFileIdResponse",
    },
  },
  {
    id: "deleteV2FilesByFileId",
    command: "files-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/v2/files/{file_id}",
    },
    effect: "destructive",
    summary: "Delete a file",
    description:
      "Delete a single file by ID. Deleting a folder will delete all of its descendants.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `file:read-write`, `object_configuration:read`, `record_permission:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Files"],
    security: [
      {
        oauth2: ["file:read-write", "object_configuration:read", "record_permission:read"],
      },
    ],
    permissions: [
      {
        key: "attio.delete",
      },
    ],
    parameters: [
      {
        name: "file_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID which identifies the file to delete.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "DeleteV2FilesByFileIdResponse",
    },
  },
  {
    id: "getV2FilesByFileIdDownload",
    command: "files-download-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/files/{file_id}/download",
    },
    effect: "read",
    summary: "Download a file",
    description:
      "Downloads a file by redirecting to a signed URL.\n\nThis endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.\n\nRequired scopes: `object_configuration:read`, `record_permission:read`, `file:read`.\n\nSupported token levels: `workspace`, `user`.",
    tags: ["Files"],
    security: [
      {
        oauth2: ["object_configuration:read", "record_permission:read", "file:read"],
      },
    ],
    parameters: [
      {
        name: "file_id",
        in: "path",
        required: true,
        schema: {
          type: "string",
        },
      },
    ],
  },
  {
    id: "getV2Webhooks",
    command: "webhooks-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/webhooks",
    },
    effect: "read",
    summary: "List webhooks",
    description:
      "Get all of the webhooks in your workspace.\n\nRequired scopes: `webhook:read`.\n\nSupported token levels: `workspace`.",
    tags: ["Webhooks"],
    security: [
      {
        oauth2: ["webhook:read"],
      },
    ],
    pagination: {
      style: "offset",
      offset: {
        in: "query",
        name: "offset",
      },
      limit: {
        in: "query",
        name: "limit",
      },
      items: "data",
    },
    parameters: [
      {
        name: "limit",
        in: "query",
        required: false,
        schema: {
          description:
            "The maximum number of results to return, between 10 and 100, defaults to 10. See the [full guide to pagination here](/rest-api/guides/pagination).",
          type: "integer",
        },
      },
      {
        name: "offset",
        in: "query",
        required: false,
        schema: {
          description:
            "The number of results to skip over before returning, defaults to 0. See the [full guide to pagination here](/rest-api/guides/pagination).",
          type: "integer",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2WebhooksResponse",
    },
  },
  {
    id: "postV2Webhooks",
    command: "webhooks-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/v2/webhooks",
    },
    effect: "write",
    summary: "Create a webhook",
    description:
      "Create a webhook and associated subscriptions.\n\nEach combination of target URL, event type and filter must be unique within your workspace; duplicates are rejected with a 409.\n\nRequired scopes: `webhook:read-write`.\n\nSupported token levels: `workspace`.",
    tags: ["Webhooks"],
    security: [
      {
        oauth2: ["webhook:read-write"],
      },
    ],
    parameters: [],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostV2WebhooksRequest",
    },
    response: {
      confidence: "contract",
      schema: "PostV2WebhooksResponse",
    },
  },
  {
    id: "getV2WebhooksByWebhookId",
    command: "webhooks-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/webhooks/{webhook_id}",
    },
    effect: "read",
    summary: "Get a webhook",
    description: "Get a single webhook.\n\nRequired scopes: `webhook:read`.\n\nSupported token levels: `workspace`.",
    tags: ["Webhooks"],
    security: [
      {
        oauth2: ["webhook:read"],
      },
    ],
    parameters: [
      {
        name: "webhook_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID which identifies the webhook.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetV2WebhooksByWebhookIdResponse",
    },
  },
  {
    id: "patchV2WebhooksByWebhookId",
    command: "webhooks-update",
    binding: {
      kind: "http",
      method: "PATCH",
      path: "/v2/webhooks/{webhook_id}",
    },
    effect: "write",
    summary: "Update a webhook",
    description:
      "Update a webhook and associated subscriptions.\n\nEach combination of target URL, event type and filter must be unique within your workspace; duplicates are rejected with a 409. Changing the target URL re-checks the webhook's existing subscriptions against the new URL.\n\nRequired scopes: `webhook:read-write`.\n\nSupported token levels: `workspace`.",
    tags: ["Webhooks"],
    security: [
      {
        oauth2: ["webhook:read-write"],
      },
    ],
    parameters: [
      {
        name: "webhook_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID which identifies the webhook.",
          type: "string",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PatchV2WebhooksByWebhookIdRequest",
    },
    response: {
      confidence: "contract",
      schema: "PatchV2WebhooksByWebhookIdResponse",
    },
  },
  {
    id: "deleteV2WebhooksByWebhookId",
    command: "webhooks-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/v2/webhooks/{webhook_id}",
    },
    effect: "destructive",
    summary: "Delete a webhook",
    description:
      "Delete a webhook by ID.\n\nRequired scopes: `webhook:read-write`.\n\nSupported token levels: `workspace`.",
    tags: ["Webhooks"],
    security: [
      {
        oauth2: ["webhook:read-write"],
      },
    ],
    permissions: [
      {
        key: "attio.delete",
      },
    ],
    parameters: [
      {
        name: "webhook_id",
        in: "path",
        required: true,
        schema: {
          description: "A UUID identifying the webhook to delete.",
          type: "string",
        },
      },
    ],
    response: {
      confidence: "contract",
      schema: "DeleteV2WebhooksByWebhookIdResponse",
    },
  },
  {
    id: "getV2Self",
    command: "self-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/v2/self",
    },
    effect: "read",
    summary: "Identify",
    description:
      "Identify the current access token, the workspace it is linked to, and any permissions it has.\n\nEvery kind of Attio access token can be introspected:\n\n- **Workspace access tokens**, created from a workspace's settings. These have no OAuth client, so `client_id` and `aud` contain the workspace access token's own ID.\n- **OAuth access tokens**, granted to an app through the OAuth 2.0 authorization code flow. `client_id` and `aud` contain the app ID.\n- **App access tokens**, issued to an app installation and exposed to that app's server functions as `ATTIO_API_TOKEN`. `client_id` and `aud` contain the app ID.\n\nPer [RFC 7662](https://www.rfc-editor.org/rfc/rfc7662), `active` is the only member guaranteed to be present. `exp` is always `null`, because Attio access tokens do not currently expire.\nAll other members are optional, and are omitted rather than returned as `null` when they are not present.\n\nUnknown, revoked, and deleted tokens are not treated as an error. They return `200` with `{\"active\": false}` and no other members.",
    tags: ["Meta"],
    parameters: [],
    response: {
      confidence: "contract",
      schema: "GetV2SelfResponse",
    },
  },
]

export const servers: readonly ApiServer[] = [
  {
    url: "https://api.attio.com",
    description: "Production",
  },
]

export const securitySchemes: Readonly<Record<string, SecurityScheme>> = {
  oauth2: {
    description: "This API uses OAuth 2.0 with the authorization code grant flow.",
    type: "oauth2",
    flows: {
      authorizationCode: {
        authorizationUrl: "https://app.attio.com/authorize",
        tokenUrl: "https://app.attio.com/oauth/token",
        scopes: {
          "user_management:read": "View workspace members.",
          "user_management:read-write": "View workspace members.",
          "record_permission:read": "View, and optionally write, records.",
          "record_permission:read-write": "View, and optionally write, records.",
          "object_configuration:read": "View, and optionally write, the configuration and attributes of objects.",
          "object_configuration:read-write": "View, and optionally write, the configuration and attributes of objects.",
          "list_entry:read": "View, and optionally write, the entries in a list.",
          "list_entry:read-write": "View, and optionally write, the entries in a list.",
          "list_configuration:read": "View, and optionally write, the configuration and attributes of lists.",
          "list_configuration:read-write": "View, and optionally write, the configuration and attributes of lists.",
          "public_collection:read":
            "View, and optionally write, both the settings and information within public collections.",
          "public_collection:read-write":
            "View, and optionally write, both the settings and information within public collections.",
          "private_collection:read":
            "View, and optionally modify, both the settings and information of all collections within the workspace, regardless of their access settings.",
          "private_collection:read-write":
            "View, and optionally modify, both the settings and information of all collections within the workspace, regardless of their access settings.",
          "comment:read": "View comments (and threads), and optionally write comments.",
          "comment:read-write": "View comments (and threads), and optionally write comments.",
          "task:read": "View, and optionally write, tasks.",
          "task:read-write": "View, and optionally write, tasks.",
          "note:read": "View, and optionally write, notes.",
          "note:read-write": "View, and optionally write, notes.",
          "meeting:read": "View, and optionally write, meetings.",
          "meeting:read-write": "View, and optionally write, meetings.",
          "call_recording:read": "View, and optionally write, call recordings, transcripts and speakers for meetings.",
          "call_recording:read-write":
            "View, and optionally write, call recordings, transcripts and speakers for meetings.",
          "webhook:read": "View, and optionally manage, webhooks.",
          "webhook:read-write": "View, and optionally manage, webhooks.",
          "file:read": "View, and upload files.",
          "file:read-write": "View, and upload files.",
          "email:read": "View email metadata. Email content is never exposed.",
          "email:read-write": "View email metadata. Email content is never exposed.",
          "activity_configuration:read": "View, and optionally write, the configuration and attributes of activities.",
          "activity_configuration:read-write":
            "View, and optionally write, the configuration and attributes of activities.",
          "activity_record:read": "View, and optionally write, activity records.",
          "activity_record:read-write": "View, and optionally write, activity records.",
          "sequence_unsubscribe:read": "View, and optionally add to, the sequence unsubscribe list.",
          "sequence_unsubscribe:read-write": "View, and optionally add to, the sequence unsubscribe list.",
          "email_calendar_blocklist:read":
            "View, and optionally manage, the addresses (email addresses and domains) whose emails and calendar events are hidden in Attio.",
          "email_calendar_blocklist:read-write":
            "View, and optionally manage, the addresses (email addresses and domains) whose emails and calendar events are hidden in Attio.",
          "view:read":
            "View, and optionally manage, the saved views of objects and lists, with their filters, sorts and shown attributes.",
          "view:read-write":
            "View, and optionally manage, the saved views of objects and lists, with their filters, sorts and shown attributes.",
        },
      },
    },
  },
}

export const security: readonly SecurityRequirement[] = [
  {
    oauth2: [],
  },
]
