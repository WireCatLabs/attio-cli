### Added

- **Meetings and what was said in their calls.** With the `activities` setting on, `sync` also copies your Attio
  meetings, with the transcripts of their finished call recordings, so `search all` finds a deal by a word said in a
  call and `deals show` lists its meetings. A meeting Attio linked to people and companies also goes on their deals.
  The token needs `meeting:read` and `call_recording:read`. Without `meeting:read` no meeting is copied, and notes and
  tasks deleted in Attio still leave the copy. A call is kept up to its first 20,000 characters
  ([usage](../docs/usage.md#notes-and-tasks-on-a-deal), [installation](../docs/installation.md)).
