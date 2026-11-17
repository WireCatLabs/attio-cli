#!/usr/bin/env bash
# The release's live check against the real service (WC-TEST-18, WC-REL-17). The owner runs bin/live, which prints
# the `# Needs:` lines below, passes the token on stdin and records the pass. Every folder is a temporary one and the
# keyring is out of reach, so nothing touches the owner's store, keyring or settings.
#   scripts/live.sh < token-file
# Needs: an Attio workspace API key with read access to records, object configuration and workspace members
# Needs: at least one person and one company in that workspace
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
  if (sync.provider !== "attio") throw new Error(`not an attio sync: ${JSON.stringify(sync).slice(0, 200)}`)
  const kinds = (sync.synced ?? []).filter((one) => one.error === undefined).map((one) => one.kind)
  for (const kind of ["person", "organization"])
    if (!kinds.includes(kind)) throw new Error(`${kind} did not sync: ${JSON.stringify(sync.synced).slice(0, 300)}`)
' "$work/sync.json"
"${cli[@]}" live doctor --json >/dev/null

"${cli[@]}" live session end --json >/dev/null
echo "live check passed: describe format 2, sign-in, sync of people and companies, store status, doctor, sign-out"
