# Changelog

Notable changes to `@wirecat/attio-cli`. One section per version, newest first.

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
