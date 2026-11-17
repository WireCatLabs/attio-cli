import type { CrmManifestHooks } from "@wirecat/cli-core/crm"

type Row = Record<string, unknown>

// Attio keeps each attribute's history: a value whose active_until is set was replaced. Whether a record read sends
// replaced values at all is not verified yet (NEED-2723); until then only the current ones reach the map.
const current = (rows: Row[]): Row[] =>
  rows.map((row) => {
    const values = row.values
    if (typeof values !== "object" || values === null) return row
    const kept = Object.entries(values).map(([slug, list]) => [
      slug,
      Array.isArray(list) ? list.filter((one) => (one as Row | null)?.active_until == null) : list,
    ])
    return { ...row, values: Object.fromEntries(kept) }
  })

export const hooks: CrmManifestHooks = {
  enrich: {
    person: async (rows) => current(rows),
    organization: async (rows) => current(rows),
  },
}
