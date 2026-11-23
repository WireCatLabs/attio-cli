import type { CrmManifestHooks } from "@wirecat/cli-core/crm"

export const hooks: CrmManifestHooks = {
  // Attio's stages carry no outcome. A won one is celebrated or named so, since a workspace may turn the celebration
  // off; a lost one has only its title to tell it. A new workspace's deal stages are Lead, In Progress, Won 🎉 and Lost.
  pipelines: {
    deal: {
      outcome: (stage, _, found) => {
        const title = String(stage.title)
        if (/\blost\b/i.test(title)) return "lost"
        return /\bwon\b/i.test(title) ? "won" : found
      },
    },
  },
}
