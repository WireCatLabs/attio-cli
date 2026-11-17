import type { ManifestIdentity } from "@wirecat/cli-base/wcat/manifest"
import type { AppIdentity } from "@wirecat/cli-core/cli"
import { VERSION } from "./version.js"

export const PACKAGE = "@wirecat/attio-cli"

export const IDENTITY: AppIdentity = {
  command: "attio",
  appName: "attio-cli",
  envPrefix: "WCATTIO",
  description: "a new WireCat CLI, started from cli-template",
  version: VERSION,
  issues: "https://github.com/WireCatLabs/attio-cli/issues/new",
  messenger: false,
  contentLanguages: ["en"],
}

// What `wcat` and WireCat Desktop show before the tool is installed: rewrite the tagline and the sign-in texts for
// yours. The bin passes it to wcatStart before anything else loads; src/wcat.ts adds the permission keys.
export const DESKTOP: ManifestIdentity = {
  ...IDENTITY,
  docs: "https://github.com/WireCatLabs/attio-cli#readme",
  hosts: ["api.attio.com", "app.attio.com"],
  tagline: "A new WireCat CLI, started from cli-template",
  syncs: "your companies and people",
  signIn: {
    gives: "Lets your agent read and change your account through attio.",
    asks: "An API token or key from the service.",
  },
}

export const SKILL = new URL("../skills/attio-cli/SKILL.md", import.meta.url)
