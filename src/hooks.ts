import { CliError } from "@wirecat/cli-base"
import type { CrmActivity, CrmKind } from "@wirecat/cli-core"
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

type Actor = { referenced_actor_type?: string; referenced_actor_id?: string; type?: string; id?: string } | undefined
export type Note = {
  id: { note_id: string }
  parent_object: string
  parent_record_id: string
  title?: string
  content_plaintext?: string
  created_by_actor?: Actor
  created_at: string
}
export type Task = {
  id: { task_id: string }
  content_plaintext?: string
  is_completed: boolean
  completed_at?: string | null
  deadline_at?: string | null
  linked_records: { target_object_id: string; target_record_id: string }[]
  assignees: Actor[]
  created_at: string
}

export const KINDS: Record<string, CrmKind> = { deals: "deal", people: "person", companies: "organization" }
const NOTES_PAGE = 50
const TASKS_PAGE = 200

const member = (actor: Actor) =>
  actor?.referenced_actor_type === "workspace-member"
    ? actor.referenced_actor_id
    : actor?.type === "workspace-member"
      ? actor.id
      : null

export const noteActivity = (note: Note): CrmActivity => {
  const at = Date.parse(note.created_at)
  const kind = KINDS[note.parent_object]
  return {
    externalId: `note:${note.id.note_id}`,
    kind: "comment",
    subject: note.title ?? "",
    body: note.content_plaintext || null,
    done: true,
    assignee: member(note.created_by_actor) ?? null,
    createdAt: at,
    updatedAt: at,
    on: kind ? [{ kind, externalId: note.parent_record_id }] : [],
  }
}

export const taskActivity = (task: Task, objects: Map<string, CrmKind>): CrmActivity => {
  const at = Date.parse(task.created_at)
  return {
    externalId: `task:${task.id.task_id}`,
    kind: "task",
    subject: task.content_plaintext ?? "",
    body: null,
    dueAt: task.deadline_at ? Date.parse(task.deadline_at) : null,
    done: task.is_completed,
    assignee: task.assignees.map(member).find(Boolean) ?? null,
    createdAt: at,
    updatedAt: task.completed_at ? Date.parse(task.completed_at) : at,
    on: task.linked_records.flatMap((link) => {
      // Attio's spec calls it the object's id, and its examples give the slug.
      const kind = KINDS[link.target_object_id] ?? objects.get(link.target_object_id)
      return kind ? [{ kind, externalId: link.target_record_id }] : []
    }),
  }
}

const refused = (error: unknown) =>
  error instanceof CliError && (error.code === "permission_error" || typeof error.details?.scope === "string")

export const hooks: CrmManifestHooks = {
  // Attio's notes and tasks lists take no time filter, so every sync reads them all, as it reads every record, and the
  // last page says so: one stored and no longer listed was deleted. A token may have one of their scopes and not the
  // other: the list it may not read is a gap, the other is still read, and the gap keeps the sync from removing any.
  extend: (_base, { call }) => ({
    activities: async (_since, page, context) => {
      const [list, at] = (page ?? "notes:0").split(":")
      const offset = Number(at)
      const query = (limit: number) => ({ limit: String(limit), offset: String(offset) })
      const input = { path: {}, headers: {}, fields: {} }
      const read = async <T>(operation: string, limit: number, scope: string): Promise<T[] | null> => {
        try {
          return ((await call(operation, { ...input, query: query(limit) })) as { data: T[] }).data
        } catch (error) {
          if (!refused(error)) throw error
          context?.gap({ kind: "activities", scope, message: `${scope} scope missing: no ${list} were read` })
          return null
        }
      }
      if (list === "notes") {
        const data = await read<Note>("getV2Notes", NOTES_PAGE, "note:read")
        const next = !data || data.length < NOTES_PAGE ? "tasks:0" : `notes:${offset + NOTES_PAGE}`
        return { items: (data ?? []).map(noteActivity), hasMore: true, nextCursor: next }
      }
      const data = await read<Task>("getV2Tasks", TASKS_PAGE, "task:read")
      if (!data) return { items: [], hasMore: false }
      if (!data.length) return { items: [], hasMore: false, listedAll: true }
      context?.spend()
      const { data: types } = (await call("getV2Objects", { ...input, query: {} })) as {
        data: { id: { object_id: string }; api_slug: string }[]
      }
      const objects = new Map(
        types.flatMap((one) => {
          const kind = KINDS[one.api_slug]
          return kind ? [[one.id.object_id, kind] as const] : []
        }),
      )
      const more = data.length === TASKS_PAGE
      return {
        items: data.map((task) => taskActivity(task, objects)),
        hasMore: more,
        ...(more ? { nextCursor: `tasks:${offset + TASKS_PAGE}` } : { listedAll: true }),
      }
    },
  }),
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
