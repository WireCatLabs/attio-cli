### Added

- **Notes and tasks in the copy.** With the `activities` setting on, `sync` also copies the notes and tasks on the
  deals, people and companies it keeps. `deals show` lists them, and `search all` finds a deal by the words of its
  notes. It is off until you turn it on, and the token needs `note:read` and `task:read`. Example:
  `attio work config set crm.attio:<workspace id>.activities on`. See
  [notes and tasks](../docs/usage.md#notes-and-tasks-on-a-deal).
