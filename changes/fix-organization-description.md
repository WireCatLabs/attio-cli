### Fixed

- `organizations show` and `people show` give the record's Attio description among its fields, so an agent asked
  what a client does finds it.
- `people show` and `organizations show` take the `person:<id>` and `organization:<id>` a deal gives, from cli-core
  0.736.0. They answered `not_found` before.
