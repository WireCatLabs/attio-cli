import type { CrmKind } from "@wirecat/cli-core"

export type Actor =
  | { referenced_actor_type?: string; referenced_actor_id?: string; type?: string; id?: string }
  | undefined

export const KINDS: Record<string, CrmKind> = { deals: "deal", people: "person", companies: "organization" }

export const member = (actor: Actor) =>
  actor?.referenced_actor_type === "workspace-member"
    ? actor.referenced_actor_id
    : actor?.type === "workspace-member"
      ? actor.id
      : null
