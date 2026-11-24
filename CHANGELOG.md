# Changelog

Notable changes to `@wirecat/attio-cli`. One section per version, newest first.

## 0.5.0 — 24.11.2026

### Added

- **`search all` finds a deal by the meaning of its notes and tasks**, in other words or another language, after
  `sync --embed` builds the vectors. Until then it searches by words and says so.
- **`search all` and `deals list` find a Latin name typed in Cyrillic** (`феррара` finds Ferrara), and a name one
  letter off a query word.

### Fixed

- **`people create` and `people update` no longer offer `--owner`.** A person in Attio has no owner, and the flag was
  refused twice before the write. The help lists only the flags Attio takes.

## 0.4.1 — 24.11.2026

### Fixed

- A won or lost deal's `closed_date` is the day it entered that stage in Attio. It was the day of the first sync that
  saw it closed, so a filter such as `closed:>=90d` counted every deal won before you installed `attio`.

## 0.4.0 — 24.11.2026

### Added

- **Notes and tasks in the copy.** With the `activities` setting on, `sync` also copies the notes and tasks on the
  deals, people and companies it keeps. `deals show` lists them, and `search all` finds a deal by the words of its
  notes. It is off until you turn it on, and the token needs `note:read` and `task:read`. Example:
  `attio work config set crm.attio:<workspace id>.activities on`. See
  [notes and tasks](docs/usage.md#notes-and-tasks-on-a-deal).

## 0.3.1 — 23.11.2026

### Fixed

- `organizations show` and `people show` give the record's Attio description among its fields, so an agent asked
  what a client does finds it.
- `people show` and `organizations show` take the `person:<id>` and `organization:<id>` a deal gives, from cli-core
  0.736.0. They answered `not_found` before.

## 0.3.0 — 23.11.2026

### Added

- **Deals and people are written to Attio, each change asking you first.** `deals create`, `update`, `move`, `close`
  and `delete`, and `people create` and `update`, send the change to Attio and store its answer, as the other WireCat
  CRM CLIs do. Each key asks at a terminal, and so does every `api` write. Without a terminal a write waits for
  `--yes`. Over MCP it goes ahead, so your MCP client is what asks. A write also checks the `api` key of the operation
  it sends, so `permissions.api readonly` stops it. `--email` and `--phone` replace the whole list. A deal's currency
  is the workspace's, and another one is refused. A new deal with no `--owner` is yours, as Attio needs an owner on
  every deal. Companies are not written here: an Attio company has no e-mail or phone attribute. Example:
  `attio work deals move deal:1 --stage "In Progress"`.
- **`account remove`.** It signs a profile out and, with `--delete-data`, removes its local copy, which it refuses
  while another profile here still reads that workspace. A second profile's `session start` to a workspace another
  profile holds is refused (`session.duplicate`).
- **`schedule`, as in the other WireCat CRM tools.** `attio work schedule command crm --every 1h -- sync` syncs every
  hour, and `schedule command crm-digest --at 08:00 -- changes list --format report` sends the morning CRM digest.

### Changed — may break callers

- **A CRM command on a profile that is not signed in answers `session.missing`**, as every other WireCat tool does. It
  answered `auth.missing`, which no other tool uses. A profile this computer does not know at all now answers
  `profile.unknown` (`not_found`), as cli-core turns a `session.missing` into for an unknown profile, and names the
  profiles there. The message still says how to sign in.

### Fixed

- `deals close <deal> won` finds the won stage by its name too, in a workspace where the stage's celebration is
  turned off.
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
