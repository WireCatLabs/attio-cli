import type { CrmManifestHooks } from "@wirecat/cli-core/crm"

export const hooks: CrmManifestHooks = {
  // A won stage is the one Attio celebrates; a lost one has only its title to tell it, "Lost" in a new workspace.
  pipelines: {
    deal: { outcome: (stage, _, found) => (/^lost\b/i.test(String(stage.title ?? "")) ? "lost" : found) },
  },
}
