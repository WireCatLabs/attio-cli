import type { ManifestIdentity } from "@wirecat/cli-base/wcat/manifest"
import type { AppIdentity } from "@wirecat/cli-core/cli"
import { VERSION } from "./version.js"

export const PACKAGE = "@wirecat/attio-cli"

export const IDENTITY: AppIdentity = {
  command: "attio",
  appName: "attio-cli",
  envPrefix: "WCATTIO",
  description: "Attio CRM: people and companies, searchable with your other WireCat data",
  version: VERSION,
  issues: "https://github.com/WireCatLabs/attio-cli/issues/new",
  messenger: false,
  contentLanguages: ["en"],
}

// What `wcat` and WireCat Desktop show before the tool is installed. The bin passes it to wcatStart before anything else loads; src/wcat.ts adds the permission keys.
export const DESKTOP: ManifestIdentity = {
  ...IDENTITY,
  docs: "https://github.com/WireCatLabs/attio-cli#readme",
  hosts: ["api.attio.com", "app.attio.com"],
  tagline: "Attio people and companies for you and your agent",
  syncs: "your companies and people",
  signIn: {
    gives: "Lets your agent read your Attio people and companies and call the Attio API.",
    asks: "An access token from your Attio workspace.",
  },
}

export const SKILL = new URL("../skills/attio-cli/SKILL.md", import.meta.url)
