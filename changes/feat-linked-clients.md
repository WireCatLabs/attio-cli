### Changed — may break callers

- **`attio <profile> sync` copies only the people and companies your deals name**, as bitrix24-cli does. Attio adds a
  person and a company for every address in your mail, and a full copy held thousands you never sell to. Every other
  one is still found by `people list` and `organizations list`, which read Attio live.

### Fixed

- **A workspace with Attio's Deals object turned off syncs**, and `sync` names that as a gap. It failed with
  `not_found` before.
