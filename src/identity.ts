import type { ManifestIdentity } from "@wirecat/cli-base/wcat/manifest"
import type { AppIdentity } from "@wirecat/cli-core/cli"
import { VERSION } from "./version.js"

export const PACKAGE = "@wirecat/attio-cli"

export const IDENTITY: AppIdentity = {
  command: "attio",
  appName: "attio-cli",
  envPrefix: "WCATTIO",
  description: "Attio CRM: deals, people and companies for you and your AI agent",
  version: VERSION,
  issues: "https://github.com/WireCatLabs/attio-cli/issues/new",
  messenger: false,
  contentLanguages: ["en"],
}

// What `wcat` and WireCat Desktop show before the tool is installed. The bin passes it to wcatStart before anything
// else loads; src/wcat.ts adds the permission keys.
export const DESKTOP = {
  ...IDENTITY,
  docs: "https://github.com/WireCatLabs/attio-cli#readme",
  // The API description names app.attio.com for its OAuth sign-in, and `cli-dev lint` wants every host it names. No
  // request goes there: the CLI signs in with an access token against api.attio.com.
  hosts: ["api.attio.com", "app.attio.com"],
  tagline: "Attio deals, people and companies for your agent",
  syncs: "your deals and their clients",
  signIn: {
    gives: "Lets your agent read your Attio deals, people and companies and call the Attio API.",
    asks:
      "An access token: in Attio, Workspace settings → Developers → New access token, with read access to records, " +
      "object configuration and user management. Only a workspace admin can make one.",
    methods: [
      { id: "token", label: "Attio access token", words: ["{profile}", "session", "start", "--json"], stdin: true },
    ],
  },
} satisfies ManifestIdentity

export const SKILL = new URL("../skills/attio-cli/SKILL.md", import.meta.url)
