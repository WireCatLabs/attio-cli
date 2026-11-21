#!/usr/bin/env bash
# The release's live check against the real service (WC-TEST-18, WC-REL-17). The owner runs bin/live, which prints
# the `# Needs:` lines below, passes the token on stdin and records the pass. Every folder is a temporary one and the
# keyring is out of reach, so nothing touches the owner's store, keyring or settings.
#   scripts/live.sh < token-file
# Needs: a key the owner chose for this check (keyring service attio, read access only is enough)
# Needs: an Attio workspace API key with read access to records, object configuration and workspace members
# Needs: at least one person and one company in that workspace
# Needs: for the deal checks, at least one deal with a person or a company on it (without deals they are skipped)
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

"${cli[@]}" live sync --max-pages 20 --json >"$work/sync.json"
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
# A person and a company shown by name, as an agent asks for them (cli-core 0.708.0 answers a name, not only an id).
pick() { node -e '
  const items = JSON.parse(require("fs").readFileSync(process.argv[1], "utf8")).items ?? []
  const one = items.find((item) => (item.name ?? item.title)?.trim())
  if (one) process.stdout.write(process.argv[2] === "id" ? String(one.id ?? one.externalId) : (one.name ?? one.title))
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
  "${cli[@]}" live search all "$(pick "$work/deals.json" name)" --json >"$work/search.json"
  deals=$(node -e '
    const read = (name) => JSON.parse(require("fs").readFileSync(`${process.argv[1]}/${name}.json`, "utf8"))
    const deal = read("deal").item ?? {}
    const found = (read("search").items ?? []).length
    if (!found) throw new Error("search found nothing for the name of a stored deal")
    const linked = (deal.people ?? deal.contacts ?? []).length + (deal.organization || deal.company ? 1 : 0)
    process.stdout.write(`deal shown with ${linked} people and companies, search found ${found}`)
  ' "$work")
fi
echo "deals: $deals"
"${cli[@]}" live doctor --json >/dev/null

"${cli[@]}" live session end --json >/dev/null
echo "live check passed: describe format 2, sign-in, sync, store status, pipelines, live people and companies, people and companies by name, a stored deal and search for it, doctor, sign-out"
