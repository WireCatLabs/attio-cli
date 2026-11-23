### Added

- **Deals and people are written to Attio, each change asking you first.** `deals create`, `update`, `move`, `close`
  and `delete`, and `people create` and `update`, send the change to Attio and store its answer, as the other WireCat
  CRM CLIs do. Each key asks at a terminal; without one a write waits for `--yes`, and over MCP the app asks before the
  tool call. A write also checks the `api` key of the operation it sends, so `permissions.api readonly` stops it.
  `--email` and `--phone` replace the whole list; a deal's currency is the workspace's, and another one is refused.
  Companies are not written here: an Attio company has no e-mail or phone attribute. Example:
  `attio work deals move deal:1 --stage "In Progress"`.
- **`account remove`.** It signs a profile out and, with `--delete-data`, removes its local copy, which it refuses
  while another profile here still reads that workspace. A second profile's `session start` to a workspace another
  profile holds is refused (`session.duplicate`).
