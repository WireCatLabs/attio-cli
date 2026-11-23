import type { CrmManifestHooks } from "@wirecat/cli-core/crm"

// Attio's description is a system attribute, so the account's own fields leave it out; an agent asking about what a
// client does finds it only here.
const described = <R extends { metadata?: object }>(record: R, raw: unknown): R => {
  const [first] = ((raw as { values?: { description?: { value?: unknown }[] } }).values?.description ?? []) as {
    value?: unknown
  }[]
  const text = typeof first?.value === "string" ? first.value.trim() : ""
  return text
    ? { ...record, metadata: { ...record.metadata, description: { label: "Description", value: text } } }
    : record
}

export const hooks: CrmManifestHooks = {
  after: { organization: described, person: described },
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
