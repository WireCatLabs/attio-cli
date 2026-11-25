import { CliError } from "@wirecat/cli-base"
import type { CrmKind } from "@wirecat/cli-core"
import type { CrmManifestActivities } from "@wirecat/cli-core/crm"
import { type Note, noteActivity, type Task, taskActivity } from "./hooks.js"
import { KINDS } from "./links.js"

const SLUGS = Object.fromEntries(Object.entries(KINDS).map(([slug, kind]) => [kind, slug])) as Record<CrmKind, string>
const MOST_TASK = 2000

const input = (body?: unknown, path: Record<string, string> = {}) => ({
  path,
  query: {},
  headers: {},
  fields: {},
  ...(body === undefined ? {} : { body: JSON.stringify({ data: body }) }),
})

const slugOf = (kind: CrmKind) => {
  const slug = SLUGS[kind]
  if (!slug)
    throw new CliError(
      "validation_error",
      `Attio keeps notes and tasks on deals, people and companies, not a ${kind}`,
      {
        reason: "crm.activity-invalid",
        param: "--subject",
        sent: false,
      },
    )
  return slug
}

// A task's answer names its records by the object's id; the slugs come from the workspace's objects.
const objectsOf = async (send: Parameters<CrmManifestActivities["create"]>[1]) => {
  const { data } = (await send("getV2Objects", input())) as { data: { id: { object_id: string }; api_slug: string }[] }
  return new Map(
    data.flatMap((one) => {
      const kind = KINDS[one.api_slug]
      return kind ? [[one.id.object_id, kind] as const] : []
    }),
  )
}

/** Notes and tasks, written as `src/hooks.ts` reads them back, so a sync keeps each under the same id. */
export const ACTIVITIES: CrmManifestActivities = {
  operations: { comment: "postV2Notes", task: "postV2Tasks", close: "patchV2TasksByTaskId" },
  async create(draft, send) {
    if (draft.kind === "comment") {
      const [parent, ...more] = draft.on
      if (!parent || more.length > 0)
        throw new CliError("validation_error", "an Attio note is on one record: give --subject once", {
          reason: "crm.activity-invalid",
          param: "--subject",
          sent: false,
        })
      const body = {
        parent_object: slugOf(parent.kind),
        parent_record_id: parent.externalId,
        title: draft.subject ?? "",
        format: "plaintext",
        content: draft.body ?? "",
      }
      return noteActivity(((await send("postV2Notes", input(body))) as { data: Note }).data)
    }
    // Attio's task is one text: a description given goes under the title.
    const content = [draft.subject, draft.body].filter(Boolean).join("\n\n")
    if (content.length > MOST_TASK)
      throw new CliError("validation_error", `an Attio task is at most ${MOST_TASK} characters, title and text`, {
        reason: "crm.activity-invalid",
        param: "--text",
        sent: false,
      })
    const body = {
      content,
      format: "plaintext",
      deadline_at: draft.dueAt === undefined ? null : new Date(draft.dueAt).toISOString(),
      is_completed: false,
      linked_records: draft.on.map((one) => ({ target_object: slugOf(one.kind), target_record_id: one.externalId })),
      assignees:
        draft.assignee === undefined
          ? []
          : [{ referenced_actor_type: "workspace-member", referenced_actor_id: draft.assignee }],
    }
    const { data } = (await send("postV2Tasks", input(body))) as { data: Task }
    return taskActivity(data, await objectsOf(send))
  },
  async complete(externalId, send) {
    const id = externalId.replace(/^task:/, "")
    if (id === externalId)
      throw new CliError("validation_error", "only a task is marked done: name it task:<id>, as activities list does", {
        reason: "ref.malformed",
        sent: false,
      })
    const answer = await send("patchV2TasksByTaskId", input({ is_completed: true }, { task_id: id }))
    return taskActivity((answer as { data: Task }).data, await objectsOf(send))
  },
}
