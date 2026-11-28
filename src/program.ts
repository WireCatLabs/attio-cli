import { join } from "node:path"
import { resolvePaths } from "@wirecat/cli-base"
import {
  appDoctorCommand,
  appMcpCommand,
  appUpdate,
  commandsCommand,
  configCommand,
  createProgram as createSharedProgram,
  outputFor,
  ProfileTokenStore,
  type ProgramDefinition,
  type ProgramOptions,
  type RunOptions,
  run as runShared,
  runsCommand,
  skillCommand,
  upgradeCommand,
} from "@wirecat/cli-core"
import type { Command } from "commander"
import { apiCommand } from "./commands/api.js"
import { crmCommands } from "./commands/crm.js"
import { scheduleCommand } from "./commands/schedule.js"
import { sessionCommand } from "./commands/session.js"
import { API, configuration } from "./config.js"
import { IDENTITY, PACKAGE, SKILL } from "./identity.js"

const update = appUpdate({
  packageName: PACKAGE,
  command: IDENTITY.command,
  version: IDENTITY.version,
  entry: import.meta.url,
  // These two run only for a terminal in pretty output (cli-base's mayNotify), which no test of run() is.
  /* v8 ignore start */
  statePath: (env) =>
    join(resolvePaths({ appName: IDENTITY.appName, prefix: IDENTITY.envPrefix, env }).state, "update-check.json"),
  // biome-ignore lint/plugin/no-own-settings: the update check runs before any command exists to give baseContext
  enabled: (env) => configuration.resolveSettings({}, { env, needsProfile: false }).updateCheck,
  /* v8 ignore stop */
  offVariables: [`${IDENTITY.envPrefix}_NO_UPDATE_CHECK`],
})

const mcpCommand = () =>
  appMcpCommand(IDENTITY, configuration, {
    name: API.service,
    untrusted: [
      "person, company and deal names",
      "pipeline and stage names",
      "workspace member names",
      "attribute values, notes, e-mails, comments and transcripts",
      "e-mail addresses, phone numbers and links",
      "what search all finds",
      "whatever api returns",
    ],
    permissionExample: "api.objects-records-delete=deny",
    skill: SKILL,
    signedIn: (profile, env, keyring) => new ProfileTokenStore({ app: IDENTITY, env, keyring }).signedIn(profile),
  })

export const definition = (): ProgramDefinition => ({
  app: IDENTITY,
  // The whole object: cli-core refuses a command by its key only when it gets the permission table too.
  configuration,
  commands: () => [
    commandsCommand(IDENTITY),
    sessionCommand(),
    apiCommand(),
    ...crmCommands(),
    scheduleCommand(),
    appDoctorCommand(IDENTITY, configuration, { packageName: PACKAGE }),
    skillCommand(IDENTITY, SKILL),
    mcpCommand(),
    upgradeCommand(IDENTITY, PACKAGE, (command) => ({
      ...outputFor(command),
      installer: () => update.installer({}),
      latest: () => update.latest({}),
      install: (argv) => update.runUpdate(argv, {}),
    })),
    configCommand(IDENTITY, configuration),
    runsCommand(IDENTITY),
  ],
})

export const createProgram = (options?: ProgramOptions): Command => createSharedProgram(definition(), options)

export const run = (argv: string[], options?: RunOptions): Promise<number> => runShared(argv, definition(), options)
