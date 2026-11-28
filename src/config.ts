import {
  type Configuration,
  CRM_WRITE_DEFAULTS,
  CRM_WRITE_KEYS,
  commandPermissions,
  crmAlsoChecks,
  crmManifestActivityKeys,
  crmManifestWriteKeys,
  serviceApiOperations,
  serviceApiPermissions,
  settingsFor,
} from "@wirecat/cli-core"
import { ACTIVITIES } from "./activities.js"
import * as manifest from "./generated/manifest.js"
import { SOURCE } from "./generated/wirecat-config.js"
import { IDENTITY } from "./identity.js"

// The operations the api group cannot offer are left out: one that answers with a credential (the CLI signs in
// through `session`) and a body it cannot send, such as a multipart form.
export const API = {
  manifest: { ...manifest, operations: serviceApiOperations(manifest).offered },
  service: "Attio",
}

/**
 * Each command is checked against its own path (`notes.list`); add the keys a command checks inside itself. The keys a
 * delete or a share checks come from `permissions` in scripts/generate.ts.
 */
const api = serviceApiPermissions(API)
const writeKeys = crmManifestWriteKeys(SOURCE, API.manifest)
const activityKeys = crmManifestActivityKeys(API.manifest, ACTIVITIES)

// Every change to Attio asks first, through the api group too (owner's ruling, 2026-11-22); a profile's config may
// loosen one to `allow`.
const ASK = Object.fromEntries(
  [
    ...CRM_WRITE_KEYS.filter((key) => CRM_WRITE_DEFAULTS[key] === "allow"),
    "activities.create",
    "activities.close",
    ...API.manifest.operations.filter((one) => one.effect === "write").map((one) => `api.${one.command}`),
  ].map((key) => [key, "ask" as const]),
)

export const permissions = commandPermissions({
  ...api,
  extra: [...api.extra, ...CRM_WRITE_KEYS],
  alsoChecks: (path) => [...api.alsoChecks(path), ...crmAlsoChecks(writeKeys, activityKeys)(path)],
  defaults: { ...api.defaults, ...CRM_WRITE_DEFAULTS, ...ASK },
})

export const configuration: Configuration = settingsFor(IDENTITY, { permissions })
