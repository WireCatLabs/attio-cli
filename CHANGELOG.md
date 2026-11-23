# Changelog

Notable changes to `@wirecat/attio-cli`. One section per version, newest first.

## Unreleased

### Added

- **`schedule`, as in the other WireCat CRM tools.** `attio work schedule command crm --every 1h -- sync` syncs every
  hour; `schedule agent` runs an agent on a timer, as the morning CRM digest does.

### Changed — may break callers

- **A CRM command on a profile this computer does not know answers `profile.unknown`** (`not_found`) and names
  the profiles there, before any sign-in check. It answered `authentication_error`. The message still says how to sign
  in. This comes with cli-base 0.126.1.
- **A CRM command on a profile that is not signed in answers `session.missing`**, as every other WireCat tool does. It
  answered `auth.missing`, which no other tool uses; a caller that matched it should match `session.missing`.
- **cli-base 0.126.1.** Its shared test setup lets a test file start only with one of the computer's test slots and
  enough free memory, so several test runs at once no longer take the whole machine.

### Fixed

- **The MCP server tells the agent about every kind of outside text it can see**: names of deals, pipelines, stages
  and workspace members, e-mail addresses, phone numbers and links, the notes, e-mails, comments and transcripts the
  `api` commands read, and what `search all` finds. It named only record names, attribute values and member names.
- **The skill says how signing in works**: only the owner signs in, never with the token as an argument, and which
  scopes the token needs.
- **The package description names deals** beside people and companies.

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
