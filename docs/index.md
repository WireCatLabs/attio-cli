# attio

`attio` is a WireCat command-line tool for Attio, for the terminal, for scripts and for AI agents.

- `attio <profile> sync` copies your workspace's people and companies into WireCat's local store, where `search`
  and the other WireCat CLIs find them.
- `attio <profile> api …` runs any operation of the Attio API, each with its own flags, help and `--json`.
- It also has the commands every WireCat CLI shares: `doctor`, `commands`, `config`, `skill`, `mcp`, `runs` and
  `upgrade`.

## What sync copies, and what it leaves out

- **People and companies, with their current values only.** Attio keeps the history of each attribute; a value that
  was replaced is not copied.
- **Every sync lists all records again.** Attio has no way to ask for the records changed since a time, so a sync
  reads the full list and then every id, to find deleted records.
- **Not copied yet:** deals, your workspace's own attributes, and custom objects. A custom object has no kind in
  WireCat's CRM store (people, companies, deals, leads), so its records stay in Attio; read them with `attio api`.

Start with [installation](installation.md), then [usage](usage.md).
