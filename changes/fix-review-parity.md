### Added

- **`schedule`, as in the other WireCat CRM tools.** `attio work schedule command crm --every 1h -- sync` syncs every
  hour, and `schedule command crm-digest --at 08:00 -- changes list --format report` sends the morning CRM digest.

### Changed — may break callers

- **A CRM command on a profile that is not signed in answers `session.missing`**, as every other WireCat tool does. It
  answered `auth.missing`, which no other tool uses. A profile this computer does not know at all now answers
  `profile.unknown` (`not_found`), as cli-core turns a `session.missing` into for an unknown profile, and names the
  profiles there. The message still says how to sign in.

### Fixed

- **The MCP server tells the agent about every kind of outside text it can see**: names of deals, pipelines, stages
  and workspace members, e-mail addresses, phone numbers and links, the notes, e-mails, comments and transcripts the
  `api` commands read, and what `search all` finds. It named only record names, attribute values and member names.
- **The skill says how signing in works**: only the owner signs in, never with the token as an argument, and which
  scopes the token needs.
- **The package description names deals** beside people and companies.
