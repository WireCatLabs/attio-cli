# Changelog

Notable changes to `@wirecat/attio-cli`. One section per version, newest first.

## 0.2.2 — 19.11.2026

### Fixed

- **The start page, installation, usage and troubleshooting pages say what `sync` reads**: every deal, then the
  people and companies they name. A person on no deal is found live with `people list`.
- **`people list` and `organizations list` say they take words**, since Attio's own search finds records by words. Their
  help no longer offers `field:value` conditions, and a condition on a field other than `name` is refused with that
  reason.
- **`people show Anna` finds Anna by name.** Attio refused a name in place of a record id, and `show` stopped there.

## 0.2.1 — 19.11.2026

### Fixed

- **The usage page, the roadmap and the command reference say what `sync` copies**: your deals and the people and
  companies they name. The command reference opens with what you find there and a list of its main sections.

## 0.2.0 — 19.11.2026

### Changed — may break callers

- **`attio <profile> sync` copies only the people and companies your deals name**, as bitrix24-cli does. Attio adds a
  person and a company for every address in your mail, and a full copy held thousands you never sell to. Every other
  one is still found by `people list` and `organizations list`, which read Attio live.

### Fixed

- **A workspace with Attio's Deals object turned off syncs**, and `sync` names that as a gap. It failed with
  `not_found` before.

## 0.1.0 — 18.11.2026

### Added

- Started from `@wirecat/cli-template` 0.28.0.
- Built from one file, `wirecat.config.ts`.
- **`attio <profile> sync` copies your Attio deals into WireCat's local store**, with their stage, owner, amount,
  company, people and the workspace's own attributes, and your people and companies. Attio cannot list what
  changed since a time, so each sync lists every record.
- **`attio <profile> deals`, `pipelines`, `changes`, `fields` and `search all` read the copy**, offline too. Attio's
  one deal pipeline is `Deals`: a stage Attio celebrates is won, one titled "Lost" is lost.
- **`attio <profile> people list|show` and `organizations list|show` read Attio live**, words searching names and
  emails.
- **`attio <profile> session start` signs in with an Attio access token** from stdin, checked against `GET /v2/self`.
- **`attio <profile> api` runs every operation of the Attio API**, each with its own flags, help and `--json`.
- **`attio <profile> users list|show` reads your workspace members live.**
