### Added

- Built from one file, `wirecat.config.ts`.
- **`attio <profile> sync` copies your Attio people and companies into WireCat's local store**, with each
  attribute's current value only. Attio cannot list what changed since a time, so each sync lists every record.
- **`attio <profile> session start` signs in with an Attio access token** from stdin, checked against `GET /v2/self`.
- **`attio <profile> api` runs every operation of the Attio API**, each with its own flags, help and `--json`.
- **`attio <profile> users list|show` reads your workspace members live.**
