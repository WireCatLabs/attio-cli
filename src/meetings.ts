import type { CrmActivity, CrmCallContext, CrmKind, CrmManifestActivities } from "@wirecat/cli-core"
import { KINDS, member } from "./links.js"

type Send = Parameters<CrmManifestActivities["create"]>[1]

export type Meeting = {
  id: { meeting_id: string }
  title?: string
  description?: string
  start: { datetime?: string; date?: string }
  linked_records: { object_slug: string; record_id: string }[]
  created_at: string
  created_by_actor?: { type?: string; id?: string }
}
export type Segment = { speech: string; speaker?: { name?: string | null } | null }
type Recording = { id: { call_recording_id: string }; status: string; transcript?: { segments: Segment[] } | null }
type Typed = { active_until?: string | null; target_record_id?: string }

const MEETINGS_PAGE = 50
const DEALS_PAGE = 500

const lines = (segments: Segment[]) =>
  segments.map(({ speech, speaker }) => (speaker?.name ? `${speaker.name}: ${speech}` : speech)).join("\n")

/**
 * One meeting with what was said in its recorded calls. Attio links a meeting to the people and companies who took
 * part and to a deal only by hand, so it also goes on the deals of those people and companies: a deal's search reads
 * the activities on the deal alone.
 */
export const meetingActivity = (
  meeting: Meeting,
  transcripts: readonly Segment[][],
  dealsOf: ReadonlyMap<string, readonly string[]>,
): CrmActivity => {
  const at = Date.parse(meeting.start.datetime ?? meeting.start.date ?? meeting.created_at)
  const on = new Map<string, { kind: CrmKind; externalId: string }>()
  for (const link of meeting.linked_records) {
    const kind = KINDS[link.object_slug]
    if (!kind) continue
    on.set(`${kind}:${link.record_id}`, { kind, externalId: link.record_id })
    for (const deal of dealsOf.get(link.record_id) ?? []) on.set(`deal:${deal}`, { kind: "deal", externalId: deal })
  }
  const body = [meeting.description?.trim(), ...transcripts.map(lines)].filter(Boolean).join("\n\n")
  return {
    externalId: `meeting:${meeting.id.meeting_id}`,
    kind: "meeting",
    subject: meeting.title ?? "",
    body: body || null,
    done: true,
    assignee: member(meeting.created_by_actor) ?? null,
    createdAt: at,
    updatedAt: at,
    on: [...on.values()],
  }
}

const current = (entries: unknown) =>
  ((entries ?? []) as Typed[]).flatMap((one) =>
    one.active_until == null && one.target_record_id ? [one.target_record_id] : [],
  )

/** Each person's and company's deals, as the deals name them. */
const dealsByContact = async (send: Send, context?: CrmCallContext) => {
  const found = new Map<string, string[]>()
  for (let offset = 0; ; offset += DEALS_PAGE) {
    context?.spend()
    const { data } = (await send("postV2ObjectsByObjectRecordsQuery", {
      path: { object: "deals" },
      query: {},
      headers: {},
      fields: {},
      body: JSON.stringify({ limit: DEALS_PAGE, offset, sorts: [{ direction: "desc", attribute: "created_at" }] }),
    })) as { data: { id: { record_id: string }; values: Record<string, unknown> }[] }
    for (const deal of data)
      for (const contact of [...current(deal.values.associated_people), ...current(deal.values.associated_company)])
        found.set(contact, [...(found.get(contact) ?? []), deal.id.record_id])
    if (data.length < DEALS_PAGE) return found
  }
}

export interface MeetingsRun {
  scopes?: Promise<Set<string>>
  dealsOf?: Promise<Map<string, string[]>>
}

/**
 * A page of meetings, each with the transcripts of its finished recordings. A token without `meeting:read` reads none
 * and reports no gap: tokens made for notes and tasks lack it, and a gap would stop every sync from removing a note
 * or a task deleted in Attio. Without `call_recording:read` the meetings come without what was said.
 */
export const meetingsPage = async (send: Send, cursor: string, run: MeetingsRun, context?: CrmCallContext) => {
  const input = { path: {}, headers: {}, fields: {} }
  run.scopes ??= send("getV2Self", { ...input, query: {} }).then(
    (self) => new Set(String((self as { scope?: string }).scope ?? "").split(/\s+/)),
  )
  const scopes = await run.scopes
  if (!scopes.has("meeting:read") && !scopes.has("meeting:read-write"))
    return { items: [], hasMore: false, listedAll: true }
  const recordings = scopes.has("call_recording:read") || scopes.has("call_recording:read-write")
  run.dealsOf ??= dealsByContact(send, context)
  const dealsOf = await run.dealsOf
  context?.spend()
  const page = (await send("getV2Meetings", {
    ...input,
    query: { limit: String(MEETINGS_PAGE), ...(cursor ? { cursor } : {}) },
  })) as { data: Meeting[]; pagination: { next_cursor: string | null } }
  const items: CrmActivity[] = []
  for (const meeting of page.data) {
    const transcripts: Segment[][] = []
    if (recordings) {
      const path = { meeting_id: meeting.id.meeting_id }
      context?.spend()
      const { data } = (await send("getV2MeetingsByMeetingIdCallRecordings", { ...input, path, query: {} })) as {
        data: Recording[]
      }
      for (const recording of data.filter((one) => one.status === "completed")) {
        context?.spend()
        const { data: full } = (await send("getV2MeetingsByMeetingIdCallRecordingsByCallRecordingId", {
          ...input,
          path: { ...path, call_recording_id: recording.id.call_recording_id },
          query: {},
        })) as { data: Recording }
        if (full.transcript?.segments.length) transcripts.push(full.transcript.segments)
      }
    }
    items.push(meetingActivity(meeting, transcripts, dealsOf))
  }
  const next = page.pagination.next_cursor
  return next ? { items, hasMore: true, nextCursor: `meetings:${next}` } : { items, hasMore: false, listedAll: true }
}
