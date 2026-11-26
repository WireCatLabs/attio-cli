#!/usr/bin/env bash
# The release's live check against the real service (WC-TEST-18, WC-REL-17). The owner runs bin/live, which prints
# the `# Needs:` lines below, passes the token on stdin and records the pass. Every folder is a temporary one and the
# keyring is out of reach, so nothing touches the owner's store, keyring or settings.
#   scripts/live.sh < token-file
# Needs: an Attio access token (keyring service attio) reading records, object configuration and workspace members
# Needs: at least one person and one company in that workspace
# Needs: for the deal checks, at least one deal with a person or a company on it (without deals they are skipped)
# Needs: for the meeting check, meeting:read-write and call_recording:read-write on the token (without them it is told)
# Needs: record_permission:read-write on the token, for a deal and a person named "WireCat live test" it makes,
# changes and deletes, also when a step fails
set -euo pipefail
root=$(cd -- "$(dirname -- "$0")/.." && pwd)
work=$(mktemp -d)
trap 'rm -rf "$work"' EXIT

export WCATTIO_CONFIG_DIR="$work/config" WCATTIO_STATE_DIR="$work/state" WCATTIO_CACHE_DIR="$work/cache"
export MESSAGING_STORE="$work/wirecat.db"
export DBUS_SESSION_BUS_ADDRESS="disabled:"
unset WCATTIO_TOKEN
cli=(node "$root/dist/bin/attio.js")

pnpm --dir "$root" -s build >/dev/null
# Set after the build, which needs the owner's pnpm store: a CLI that moves its folders on start must not see the
# owner's home.
export HOME="$work/home" XDG_CONFIG_HOME="$work/xdg/config" XDG_DATA_HOME="$work/xdg/data"
export XDG_STATE_HOME="$work/xdg/state" XDG_CACHE_HOME="$work/xdg/cache"
mkdir -p "$HOME"

"${cli[@]}" --wcat-describe | node -e '
  const answer = JSON.parse(require("fs").readFileSync(0, "utf8"))
  if (answer.wcat_describe !== 2 || !/^[0-9a-f]{64}$/.test(answer.manifest_sha256)) throw new Error("not format 2")'

"${cli[@]}" live session start --credential-storage file --json >/dev/null
trap '"${cli[@]}" live session end --json >/dev/null 2>&1 || true; rm -rf "$work"' EXIT

# No --max-pages: each company and person a deal names is read on its own, so a page of 50 costs about 100 requests,
# and a smaller budget saves nothing at all (the test workspace's deals name about 300).
"${cli[@]}" live sync --json >"$work/sync.json"
"${cli[@]}" live store status --json >/dev/null
node -e '
  const sync = JSON.parse(require("fs").readFileSync(process.argv[1], "utf8"))
  const item = sync.item ?? {}
  if (item.provider !== "attio") throw new Error(`not an attio sync: ${JSON.stringify(sync).slice(0, 200)}`)
  // People and companies are copied only as a deal names them, so a workspace with no deals saves none.
  const failed = (item.synced ?? []).filter((one) => one.error !== undefined)
  if (failed.length || !(item.synced ?? []).length)
    throw new Error(`sync failed: ${JSON.stringify(item.synced).slice(0, 300)}`)
' "$work/sync.json"
# Totals only: the record is public, the workspace's data is not.
"${cli[@]}" live pipelines list --json >"$work/pipelines.json"
"${cli[@]}" live people list --limit 1 --json >"$work/people.json"
"${cli[@]}" live organizations list --limit 1 --json >"$work/organizations.json"
node -e '
  const read = (name) => JSON.parse(require("fs").readFileSync(`${process.argv[1]}/${name}.json`, "utf8"))
  const synced = read("sync").item.synced ?? []
  const kinds = synced.map((one) => `${one.kind} ${one.error ? `error ${one.error.code ?? one.error}` : one.saved}`)
  const stages = (read("pipelines").items ?? []).map((one) => (one.stages ?? []).length)
  const live = ["people", "organizations"].map((name) => `${name} ${(read(name).items ?? []).length}`)
  for (const name of ["people", "organizations"])
    if (!(read(name).items ?? []).length) throw new Error(`no ${name} listed live`)
  process.stdout.write(`synced: ${kinds.join(", ")}; pipelines: ${stages.length} with ${stages.join("+")} stages; live: ${live.join(", ")}\n`)
' "$work"
# A person and a company shown by name, as an agent asks for them.
pick() { node -e '
  const items = JSON.parse(require("fs").readFileSync(process.argv[1], "utf8")).items ?? []
  const one = items.find((item) => (item.name ?? item.title)?.trim())
  if (one) process.stdout.write(process.argv[2] === "id" ? String(one.ref ?? one.id ?? one.externalId) : (one.name ?? one.title))
' "$1" "$2"; }
by_name=""
for kind in people organizations; do
  name=$(pick "$work/$kind.json" name)
  if [ -n "$name" ]; then
    "${cli[@]}" live "$kind" show "$name" --json >/dev/null
    by_name="$by_name $kind"
  fi
done
node -e '
  const keys = (kind) => {
    const one = (JSON.parse(require("fs").readFileSync(`${process.argv[1]}/${kind}.json`, "utf8")).items ?? [])[0] ?? {}
    return Object.entries(one).filter(([, value]) => value !== null && value !== "" && !(Array.isArray(value) && !value.length)).map(([key]) => key).join(",")
  }
  process.stdout.write(`filled fields: people ${keys("people")}; organizations ${keys("organizations")}\n`)
' "$work"
echo "shown by name:${by_name:- nothing (no names)}"
"${cli[@]}" live deals list --limit 1 --json >"$work/deals.json"
deal=$(pick "$work/deals.json" id)
deals="no deals to check"
if [ -n "$deal" ]; then
  "${cli[@]}" live deals show "$deal" --json >"$work/deal.json"
  # The first word of its name, as an agent asks ("Northwind"), not the whole title with its brackets.
  word=$(pick "$work/deals.json" name | cut -d" " -f1)
  "${cli[@]}" live search all "$word" --json >"$work/search.json"
  deals=$(node -e '
    const read = (name) => JSON.parse(require("fs").readFileSync(`${process.argv[1]}/${name}.json`, "utf8"))
    const deal = read("deal").item ?? {}
    const found = (read("search").items ?? []).length
    if (!found) throw new Error("search found nothing for a word of the name of a stored deal")
    const linked = (deal.people ?? deal.contacts ?? []).length + (deal.organization || deal.company ? 1 : 0)
    process.stdout.write(`deal shown with ${linked} people and companies, search found ${found}`)
  ' "$work")
fi
echo "deals: $deals"
"${cli[@]}" live doctor --json >/dev/null

# The write round trip. A run without a terminal refuses `ask`, so each write here confirms with --yes.
stamp=$(date -u +%Y%m%dT%H%M%SZ)
# Found again by the run's stamp, not by the id a create answered: an answer lost after Attio made the record leaves
# no id to delete.
sweep() {
  local object=$1 filter=$2 found
  if ! found=$("${cli[@]}" live api objects-records-query --object "$object" --body "{\"filter\":$filter}" \
    --json 2>&1); then
    echo "live: could not look for $object left by this run: ${found:0:300}" >&2
    return 0
  fi
  printf '%s' "$found" |
    node -e 'for (const one of JSON.parse(require("fs").readFileSync(0, "utf8")).item?.data ?? []) console.log(one.id.record_id)' |
    while read -r id; do
      "${cli[@]}" live api objects-records-delete --object "$object" --record-id "$id" --yes --json >/dev/null 2>&1 || true
    done
}
# Notes and tasks on the run's deal, found by the deal: deleting a deal is not known to delete them.
sweep_activities() {
  local deal_id=$1
  { "${cli[@]}" live api notes-list --parent-object deals --parent-record-id "$deal_id" --json 2>/dev/null |
    node -e 'for (const one of JSON.parse(require("fs").readFileSync(0, "utf8")).item?.data ?? []) console.log(one.id.note_id)' |
    while read -r id; do
      "${cli[@]}" live api notes-delete --note-id "$id" --yes --json >/dev/null 2>&1 || true
    done; } || true
  { "${cli[@]}" live api tasks-list --linked-object deals --linked-record-id "$deal_id" --json 2>/dev/null |
    node -e 'for (const one of JSON.parse(require("fs").readFileSync(0, "utf8")).item?.data ?? []) console.log(one.id.task_id)' |
    while read -r id; do
      "${cli[@]}" live api tasks-delete --task-id "$id" --yes --json >/dev/null 2>&1 || true
    done; } || true
  { "${cli[@]}" live api meetings-list --linked-object deals --linked-record-id "$deal_id" --json 2>/dev/null |
    node -e 'for (const one of JSON.parse(require("fs").readFileSync(0, "utf8")).item?.data ?? []) console.log(one.id.meeting_id)' |
    while read -r id; do
      "${cli[@]}" live api meetings-delete --meeting-id "$id" --yes --json >/dev/null 2>&1 || true
    done; } || true
}
deal_id=""
# A run that passed deleted its records and signed out, so only a failed one sweeps.
passed=""
cleanup() {
  if [ -z "$passed" ]; then
    [ -n "$deal_id" ] && sweep_activities "$deal_id"
    sweep deals "{\"name\":{\"\$contains\":\"$stamp\"}}" || true
    sweep people "{\"email_addresses\":\"live-$stamp@example.com\"}" || true
  fi
  "${cli[@]}" live session end --json >/dev/null 2>&1 || true
  rm -rf "$work"
}
trap cleanup EXIT
field() { node -e 'let v = JSON.parse(require("fs").readFileSync(0, "utf8")); for (const k of process.argv[1].split(".")) v = v?.[k]; if (v === undefined || v === null) process.exit(1); console.log(v)' "$1"; }
stages=$(node -e '
  const [deals] = JSON.parse(require("fs").readFileSync(process.argv[1], "utf8")).items ?? []
  const open = (deals?.stages ?? []).filter((one) => one.outcome === "open")
  if (open.length < 2) throw new Error("the deal pipeline needs two open stages")
  console.log([open[0].name, open[1].name].join("\t"))' "$work/pipelines.json")
IFS=$'\t' read -r first_stage second_stage <<<"$stages"

# Attio keeps one currency for every deal, set on the value attribute.
currency=$("${cli[@]}" live api attributes-get --target objects --identifier deals --attribute value --json |
  field item.data.config.currency.default_currency_code)
"${cli[@]}" live deals create --title "WireCat live test $stamp" --stage "$first_stage" --amount 100 \
  --currency "$currency" --yes --json >"$work/made-deal.json"
# The ref names the deal in the copy, the record id in Attio: the commands take one, api the other.
deal=$(field item.deal.ref <"$work/made-deal.json")
deal_id=$(field item.deal.external_id <"$work/made-deal.json")
"${cli[@]}" live deals update "$deal" --title "WireCat live test $stamp, renamed" --yes --json >/dev/null
"${cli[@]}" live deals move "$deal" "$second_stage" --yes --json >/dev/null
"${cli[@]}" live deals close "$deal" won --yes --json >/dev/null
"${cli[@]}" live api objects-records-get --object deals --record-id "$deal_id" --json >"$work/deal-read.json"

# A note and a task on the deal, the task marked done, then both deleted. A token without the two write scopes is
# told, not failed: they are optional (docs/installation.md).
activities="notes and tasks not checked: the token lacks note:read-write or task:read-write"
if note_out=$("${cli[@]}" live activities create comment --subject "$deal" --text "WireCat live test $stamp" \
  --yes --json 2>&1); then
  note=$(printf '%s' "$note_out" | field item.activity.external_id)
  "${cli[@]}" live activities create task --subject "$deal" --title "WireCat live test $stamp" \
    --due "$(date -u -d '+1 day' +%Y-%m-%dT%H:%M:%SZ)" --yes --json >"$work/made-task.json"
  task=$(field item.activity.external_id <"$work/made-task.json")
  "${cli[@]}" live activities close "$task" --yes --json >"$work/done-task.json"
  [ "$(field item.activity.done <"$work/done-task.json")" = "true" ] || { echo "live: the task was not marked done" >&2; exit 1; }
  "${cli[@]}" live api notes-delete --note-id "${note#note:}" --yes --json >/dev/null
  "${cli[@]}" live api tasks-delete --task-id "${task#task:}" --yes --json >/dev/null
  left=$( { "${cli[@]}" live api notes-list --parent-object deals --parent-record-id "$deal_id" --json
    "${cli[@]}" live api tasks-list --linked-object deals --linked-record-id "$deal_id" --json; } |
    node -e 'const text = require("fs").readFileSync(0, "utf8"); console.log((text.match(/"(note|task)_id"/g) ?? []).length)')
  [ "$left" = 0 ] || { echo "live: $left notes or tasks were left on the deal" >&2; exit 1; }
  activities="a note, a task, the task marked done, both deleted"
elif ! printf '%s' "$note_out" | grep -q "scope"; then
  echo "live: activities create comment failed: ${note_out:0:300}" >&2
  exit 1
fi
echo "activities: $activities"

# A meeting on the deal with a recorded call, copied by a sync with the activities setting on and found by a word said
# in it, then deleted. The meeting scopes are optional, and the setting is the owner's in a terminal: either missing
# is told, not failed.
meetings="meetings not checked: the token lacks meeting:read-write or call_recording:read-write"
said="Quillback"
starts=$(date -u -d '-1 hour' +%Y-%m-%dT%H:%M:%SZ)
ends=$(date -u +%Y-%m-%dT%H:%M:%SZ)
meeting_body="{\"data\":{\"title\":\"WireCat live test $stamp\",\"description\":\"\",\"is_all_day\":false,
  \"start\":{\"datetime\":\"$starts\",\"timezone\":\"UTC\"},\"end\":{\"datetime\":\"$ends\",\"timezone\":\"UTC\"},
  \"participants\":[{\"name\":\"WireCat live test\",\"is_organizer\":true,\"status\":\"accepted\"}],
  \"linked_records\":[{\"object\":\"deals\",\"record_id\":\"$deal_id\"}]}}"
if meeting_out=$("${cli[@]}" live api meetings-create --body "$meeting_body" --yes --json 2>&1) &&
  meeting_id=$(printf '%s' "$meeting_out" | field item.result.data.id.meeting_id) &&
  "${cli[@]}" live api meetings-call-recordings-create --meeting-id "$meeting_id" --yes --json --body \
    "{\"data\":{\"transcript\":[{\"speech\":\"The $said kitchen starts in May\",\"start_time\":0,\"end_time\":3,
    \"speaker\":{\"name\":\"WireCat live test\"}}]}}" >/dev/null 2>"$work/recording.err"; then
  workspace=$(field item.data.id.workspace_id <"$work/deal-read.json")
  if "${cli[@]}" live config set "crm.attio:$workspace.activities" on --json >/dev/null 2>&1; then
    # Attio makes the recording's transcript after the call is made: the sync waits for it to finish.
    for _ in 1 2 3 4 5 6; do
      "${cli[@]}" live sync --json >/dev/null
      "${cli[@]}" live search all "$said" --json >"$work/said.json"
      # Search answers with the copy's ref, not Attio's record id.
      grep -qF "\"$deal\"" "$work/said.json" && break
      sleep 10
    done
    grep -qF "\"$deal\"" "$work/said.json" || { echo "live: search all did not find the deal by a word said in its call" >&2; exit 1; }
    meetings="a meeting with a recorded call on the deal, synced and found by a word said in it, deleted"
  else
    meetings="a meeting with a recorded call made and deleted, its sync not checked: the activities setting is the owner's"
  fi
  "${cli[@]}" live api meetings-delete --meeting-id "$meeting_id" --yes --json >/dev/null
elif ! printf '%s%s' "$meeting_out" "$(cat "$work/recording.err" 2>/dev/null)" | grep -q "scope"; then
  echo "live: a meeting with a recorded call could not be made: ${meeting_out:0:300}" >&2
  exit 1
fi
echo "meetings: $meetings"

"${cli[@]}" live people create --first-name WireCat --last-name "Live test $stamp" \
  --email "live-$stamp@example.com" --yes --json >"$work/made-person.json"
person=$(field item.person.id <"$work/made-person.json")
"${cli[@]}" live people update "$person" --first-name Wirecat --phone +34600000001 --yes --json >"$work/person-read.json"
# One word is a first name alone: Attio takes a name only with all three parts.
"${cli[@]}" live people update "$person" --name Wirecat --yes --json >/dev/null
"${cli[@]}" live api objects-records-delete --object people --record-id "$person" --yes --json >/dev/null

"${cli[@]}" live deals delete "$deal" --yes --json >/dev/null
node -e '
  const fs = require("fs")
  const read = (file) => JSON.parse(fs.readFileSync(file, "utf8"))
  const [pipelines, got, person] = process.argv.slice(1).map(read)
  const values = got.item?.data?.values ?? {}
  if (!String(values.name?.[0]?.value).endsWith(", renamed")) throw new Error("the update did not reach Attio")
  const won = (pipelines.items?.[0]?.stages ?? []).filter((one) => one.outcome === "won").map((one) => one.external_id)
  if (!won.includes(values.stage?.[0]?.status?.id?.status_id)) throw new Error("the close did not reach a won stage")
  // A part of the name changed alone keeps the other part.
  const name = person.item?.person ?? {}
  if (name.first_name !== "Wirecat" || !String(name.last_name).startsWith("Live test"))
    throw new Error(`the name update lost a part: ${JSON.stringify([name.first_name, name.last_name])}`)' \
  "$work/pipelines.json" "$work/deal-read.json" "$work/person-read.json"

"${cli[@]}" live session end --json >/dev/null
passed=1
echo "live check passed: describe format 2, sign-in, sync, store status, pipelines, live people and companies, people and companies by name, a stored deal and search for it, doctor, deal create, update, move, close and delete, ${activities}, ${meetings}, person create, update and delete, sign-out"
