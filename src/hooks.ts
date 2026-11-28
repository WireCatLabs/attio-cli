import { CliError } from "@wirecat/cli-base"
import type { CrmActivity, CrmKind, CrmManifestHooks } from "@wirecat/cli-core"
import { type Actor, KINDS, member } from "./links.js"
import { type MeetingsRun, meetingsPage } from "./meetings.js"

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

const NOTES_PAGE = 50
const TASKS_PAGE = 200

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
  // Attio's notes, tasks and meetings are read whole at every sync, as every record is, and the last page of meetings
  // says so: one stored and no longer listed was deleted. A token may have one of their scopes and not another: the
  // list it may not read is a gap, the others are still read, and the gap keeps the sync from removing any.
  extend: (_base, { call }) => {
    const run: MeetingsRun = {}
    return {
      activities: async (_since, page, context) => {
        const cursor = page ?? "notes:0"
        const list = cursor.slice(0, cursor.indexOf(":"))
        const at = cursor.slice(cursor.indexOf(":") + 1)
        if (list === "meetings") return meetingsPage(call, at, run, context)
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
        if (!data?.length) return { items: [], hasMore: true, nextCursor: "meetings:" }
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
          hasMore: true,
          nextCursor: more ? `tasks:${offset + TASKS_PAGE}` : "meetings:",
        }
      },
    }
  },
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
