### Fixed

- **The skill tells an agent to ask `search all` by meaning before it reads every note.** It finds deals by what their
  notes and tasks mean once `sync --embed` has built their vectors, and lists near-duplicate names and names typed in
  the other script after the exact ones (`match: corrected`). In the HubSpot agent test an agent read every note
  instead and took a near-duplicate name.
