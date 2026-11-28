import { CliError } from "@wirecat/cli-base"
import { retrying } from "@wirecat/cli-base/http"
import {
  addCrmCommands,
  type CrmAccountOptions,
  type CrmRun,
  crmManifestWriteCapabilities,
  crmManifestWrites,
  crmSourceFromManifest,
  openAppStore,
  openCrmStore,
  outputFor,
  Pacer,
  pacePathFor,
  recalledAccount,
  serviceApiCall,
} from "@wirecat/cli-core"
import { Command } from "commander"
import { ACTIVITIES } from "../activities.js"
import { API, configuration, permissions } from "../config.js"
import { contextOf, PACE, tokenOf } from "../context.js"
import { HOOK_OPTIONS, LIVE, SOURCE } from "../generated/wirecat-config.js"
import { IDENTITY } from "../identity.js"
import { serviceFetch } from "./api.js"

// The account is the one `session start` checked the token against; the store keeps each account's rows apart.
const accountOf = (command: Command) => {
  const { env, profile } = contextOf(command)
  const account = recalledAccount(IDENTITY, SOURCE.provider, profile, env)
  if (!account)
    throw new CliError(
      "authentication_error",
      `profile ${profile} is not signed in — run \`${IDENTITY.command} ${profile} session start\``,
      { reason: "session.missing" },
    )
  return account
}

const open = async (command: Command, { readOnly }: { readOnly: boolean }): Promise<CrmRun> => {
  const { env, profile, environment } = contextOf(command)
  const { store, account } = await openCrmStore({
    app: IDENTITY,
    env,
    profile,
    readOnly,
    provider: SOURCE.provider,
    // The shared store, with this CLI's provider entry written so every other CLI's search knows it (WC-ARCH-21).
    open: (at, options) =>
      openAppStore(at, {
        app: IDENTITY,
        provider: { name: SOURCE.provider, kind: "crm", aliases: [], command: IDENTITY.command },
        ...options,
      }),
    account: () => accountOf(command),
  })
  const fetch = retrying(serviceFetch(environment), { pacer: new Pacer(pacePathFor(IDENTITY, profile, env), PACE) })
  const sending = { manifest: API.manifest, service: API.service, fetch, token: () => tokenOf(command) }
  const call = serviceApiCall(sending)
  let source: ReturnType<typeof crmSourceFromManifest> | undefined
  const crm = () => (source ??= crmSourceFromManifest(SOURCE, { api: API.manifest, call, ...HOOK_OPTIONS }))
  // The member who made the token, asked only when a write names an owner; an app's own token has none.
  let member: Promise<string | undefined> | undefined
  const self = () =>
    (member ??= call("getV2Self", { path: {}, query: {}, headers: {}, fields: {} }).then((answer) => {
      const id = (answer as { authorized_by_workspace_member_id?: unknown }).authorized_by_workspace_member_id
      return typeof id === "string" ? id : undefined
    }))
  return {
    profile,
    account,
    // A CRM that limits its users is not described by a manifest yet; nobody's rows are hidden.
    user: null,
    store,
    env,
    locked: Boolean(env[`${IDENTITY.envPrefix}_PROFILE_LOCK`]),
    source: crm,
    writes: () =>
      crmManifestWrites(SOURCE, {
        ...sending,
        source: crm,
        app: IDENTITY,
        env,
        self,
        // Attio refuses a deal with no owner.
        ownedByDefault: ["deal"],
        activities: ACTIVITIES,
        warn: outputFor(command).renderer.warn,
        settings: () => ({ ...contextOf(command).settings, permissionDefaults: permissions.defaults }),
      }),
    close: () => store.close(),
  }
}

/** One account, one profile: `account remove` and the sign-in refuse what another profile here holds. */
export const CRM_ACCOUNT: CrmAccountOptions = {
  provider: SOURCE.provider,
  service: API.service,
  resolveSettings: configuration.resolveSettings,
}

/** cli-core's CRM commands over the source wirecat.config.ts describes: sync, store status, deals, search. */
export const crmCommands = (): Command[] => {
  const holder = new Command(IDENTITY.command)
  addCrmCommands(holder, {
    app: IDENTITY,
    open,
    leads: SOURCE.kinds.includes("lead"),
    // People and companies whose entity names a search, and the users when the source names a call for them.
    live: LIVE,
    // Attio's own record search takes words, not field conditions.
    liveQuery: "words",
    activities: true,
    writes: crmManifestWriteCapabilities(SOURCE, API.manifest, ACTIVITIES),
    account: CRM_ACCOUNT,
  })
  return [...holder.commands]
}
