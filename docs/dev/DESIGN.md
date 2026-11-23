# attio — design

Written by `npx @wirecat/cli-template new`. The agent reads it first, asks the further questions the reference CLI
does not answer, and starts building only after the owner has read it.

## Answers

- **Category:** CRM (sales: deals, contacts, companies)
- **Content languages:** en
- **Sign-in:** an API token or key
- **The API:** official API documentation only
- **API description:** OpenAPI 3.0 or 3.1
- **How people filter:** by time, by person, by words in the text, by status or label
- **Never in the store, a log or the output:** tokens and passwords, links that carry a secret
- **Untrusted input:** deals, contacts and comments others entered, names and titles set by others

## Reference CLI

Learn from [bitrix24-cli](https://github.com/WireCatLabs/bitrix24-cli).

## Content languages

Languages: en.

## Further answers

- **Writes (owner, 2026-11-22: "with a confirmation before each change").** Deals and people are written through
  cli-core's CRM write commands, from `source.writes` in `wirecat.config.ts`. Every write key is `ask` by default
  (`src/config.ts`), and each write also checks the `api` key of the operation it sends. Updates go by `PUT`: Attio's
  `PATCH` adds to a multiselect, and our `--email` and `--phone` replace the list. Companies are not written: an
  Attio company has no e-mail or phone attribute, and cli-core's write contract needs both.
- **One account, one profile.** `account remove` and the sign-in guard are cli-core's (`CRM_ACCOUNT` in
  `src/commands/crm.ts`); attio needs no `held` hook, since the account is the one `session start` remembered.

## Open questions for the owner
