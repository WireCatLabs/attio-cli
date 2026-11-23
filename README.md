# attio: Attio CRM CLI and MCP server for AI agents

<p align="center">
  Know where every deal stands without opening Attio. Ask Claude, ChatGPT, Codex or any AI agent, and it answers from
  a copy of your Attio deals on your computer, even offline.
</p>

<p align="center">
  <a href="https://github.com/WireCatLabs/attio-cli/blob/main/docs/index.md">Docs</a> ·
  <a href="https://github.com/WireCatLabs/attio-cli/blob/main/docs/installation.md">Install</a> ·
  <a href="https://github.com/WireCatLabs/attio-cli/blob/main/docs/usage.md">Usage</a> ·
  <a href="https://discord.gg/DebENqbRrJ">Discord</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@wirecat/attio-cli"><img src="https://img.shields.io/npm/v/@wirecat/attio-cli" alt="npm"></a>
  <a href="https://github.com/WireCatLabs/attio-cli/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-Apache--2.0-blue" alt="License: Apache 2.0"></a>
</p>

- **Ask instead of clicking.** "Which deals are stuck in Negotiation?" gets an answer in a second, in Claude Code,
  Codex, Claude Desktop or any app that speaks MCP.
- **Your pipeline, offline.** Deals, stages and what changed since yesterday are read from your computer, with no
  request to Attio.
- **Safe to hand to an agent.** Every change to Attio asks you first in a terminal, and one line keeps every write
  away from an agent.

## What you get

- **The answer, not the search.** Ask about a deal in your own words. The agent finds it with its stage, amount,
  company and people.
- **The pipeline at a glance.** How many deals stand in each stage, their total per currency, and your win rate.
- **What changed overnight.** Deals created, moved, won and lost, as a list or a short morning digest.
- **People and companies on demand.** Read live from Attio, with e-mails and phones, when you ask.
- **Attio deals export.** Any list of deals, people or companies becomes a CSV file for a spreadsheet.

```text
You:    Which deals are in Negotiation?
Agent:  (runs attio work deals list stage:Negotiation status:open)
        · "Example LLC renewal", 24 000 USD, owner Anna Example
        · "Sample Inc pilot", 6 500 USD, owner Bob Sample
You:    What did we win this week?
Agent:  (runs attio work changes list change:won "at>=7d")
        One deal: "Example Corp expansion", 12 000 USD, won on Tuesday.
```

*Invented deals, illustrative output.*

## Why attio

- **A copy of your CRM on your computer.** `sync` copies your deals and the people and companies on them into a local
  store. Lists, the pipeline board and search answer from it with no request to Attio, also offline.
- **A permission on every action.** Each command and each Attio API operation has its own level: allow, ask, read
  only or deny. `WCATTIO_READ_ONLY=1` stops every write.
- **The token stays in your system keyring.** It never appears in output, errors or run records, and is never taken
  as an argument.
- **Your CRM beside your other context.** Deals sit in the same local store as your messages, mail, notes and
  meetings from the other WireCat tools, so one search covers all of them.
- **The whole Attio API too.** Every operation is a command with its own help, for what has no command of its own
  yet: notes, tasks, lists, custom objects.
- **Free and open source.** Apache 2.0.

## Quick start

In [WireCat Desktop](https://wirecat.dev), add Attio from the tool list and paste the access token when it asks. Or in
a terminal:

```sh
npm install -g @wirecat/attio-cli
attio skill install                # the agent skill, for Claude Code, Codex, Gemini CLI and OpenClaw
attio work session start           # paste your Attio access token
attio work sync                    # copy your deals and their people and companies
attio work deals list status:open
```

`work` is a profile, a name you choose for one Attio workspace. It is the first word of every command that uses an
account, and none is ever assumed.

**The access token.** In Attio, open Workspace settings → Developers → New access token. Give it read access to
`record_permission`, `object_configuration` and `user_management`, and copy it. Only a workspace admin can make one.
`session start` asks for it without showing it, checks it with Attio and keeps it in the system keyring.

You need Node.js 22.16 or a later 22.x, or Node.js 24 or later. `attio doctor` needs no network and shows what is set
up.

More: [installation and sign-in, step by step](https://github.com/WireCatLabs/attio-cli/blob/main/docs/installation.md)

## Use it with your agent

Ask in plain words. The agent picks the commands.

> *"Use attio. What changed in our pipeline since yesterday?"*
> *"Use attio. How many deals did we win in the last 30 days, and what is our win rate?"*
> *"Use attio. Who is our contact at Example LLC, and what deals do we have open with them?"*

- **Claude Code, Codex, Gemini CLI** and other agents with a terminal run `attio` themselves. `attio skill install`
  teaches them how.
- **Claude Desktop, Cursor** and other MCP apps connect to the Attio MCP server, `attio work mcp serve`.
- **ChatGPT or Claude in the browser** reach it through your own tunnel, after a login with a one-time code.

```sh
attio work config set permissions.api readonly   # no writes to Attio on this profile
attio work mcp add claude-code --allow-writes    # or: codex
attio work mcp config                            # the entry for Claude Desktop, Cursor and others
```

Over MCP nobody is at a terminal to answer a question, so a write set to `ask` goes ahead and the app asks you
before each tool call. The first line above keeps every write away from the agent.

More: [agents and MCP](https://github.com/WireCatLabs/attio-cli/blob/main/docs/mcp.md) ·
[permissions](https://github.com/WireCatLabs/attio-cli/blob/main/docs/permissions.md)

## What it can do

### Deals

```sh
attio work deals list status:open
attio work deals list stage:"In Progress"
attio work deals show deal:12                      # one deal with its company and people
attio work deals list status:open --format csv > deals.csv
```

Won is the stage Attio celebrates, and lost is a stage whose title starts with "Lost".

### The pipeline

```sh
attio work pipelines show                    # each stage: how many, their sum, how many went on
attio work pipelines show --since-time 30d   # the deals made in the last 30 days, with the win rate
```

### What changed

```sh
attio work changes list "at>=1d"                   # deals created, moved, won and lost
attio work changes list "at>=1d" --format report   # the same as a short morning digest
```

### People, companies and members

```sh
attio work people list anna                  # search Attio by name or e-mail
attio work organizations list example        # companies by name
attio work users list                        # your workspace members
```

These read Attio itself, so they need the network.

### Your own attributes and search

```sh
attio work fields list deals                 # the attributes your workspace added, with their type
attio work search all "Example LLC"          # deals next to your messages, notes and meetings
```

### Any Attio API operation

```sh
attio work api list                          # every operation, without calling Attio
attio work api objects-list                  # the objects in your workspace
```

More: [using attio](https://github.com/WireCatLabs/attio-cli/blob/main/docs/usage.md) ·
[every command](https://github.com/WireCatLabs/attio-cli/blob/main/docs/commands.md)

## How it works

- **An access token.** A workspace admin makes it in Attio. It is kept in the system keyring, or in a private file
  on a computer without one.
- **A local copy.** `sync` copies the workspace's deals and the people and companies they name, with the stages of
  Attio's deal pipeline, into the WireCat local store. Attio cannot list only what changed, so each sync reads every
  record.
- **Live where it matters.** `people`, `organizations` and `users` ask Attio each time, so they show the newest data.
- **Made for scripts.** `--json` prints one JSON value for every command, and an error comes as JSON with a code to
  branch on.

## Settings and permissions

Each profile has a level for every command and every Attio API operation: `allow`, `ask`, `readonly` or `deny`. A
delete through the API asks first at a terminal.

```sh
attio work config set permissions.api readonly   # the Attio API reads, never writes
attio work config show                           # each setting and where it came from
```

More: [permissions](https://github.com/WireCatLabs/attio-cli/blob/main/docs/permissions.md) ·
[settings](https://github.com/WireCatLabs/attio-cli/blob/main/docs/configuration.md)

## Limits

- The deal commands read. Moving or closing a deal from `attio` is on the
  [roadmap](https://github.com/WireCatLabs/attio-cli/blob/main/docs/roadmap.md), and so are notes, tasks, custom
  objects, lists and a one-click sign-in.
- Only a workspace admin can make the token, and it reads the whole workspace.
- Attio documents 100 reads and 25 writes a second
  ([rate limits](https://docs.attio.com/rest-api/guides/rate-limiting)).
- Before 1.0, a minor version may change commands, `--json` fields and MCP tools. The changelog lists each such
  change under "may break callers".

## Security

The token reads your whole workspace, so `attio` keeps it in the system keyring and never prints it, in output,
errors or run records. It talks only to `api.attio.com`. Text from Attio is marked as untrusted, so an agent reads a
deal title as data, not as an instruction.

More: [security](https://github.com/WireCatLabs/attio-cli/blob/main/docs/security.md) · Report a vulnerability:
[SECURITY.md](https://github.com/WireCatLabs/attio-cli/blob/main/SECURITY.md)

## When something goes wrong

```sh
attio doctor                         # what is set up, without connecting
attio work session status --check    # asks Attio which workspace the token belongs to
```

More: [troubleshooting](https://github.com/WireCatLabs/attio-cli/blob/main/docs/troubleshooting.md) · Ask on
[Discord](https://discord.gg/DebENqbRrJ) · Bugs go to this repository's
[issues](https://github.com/WireCatLabs/attio-cli/issues).

## Documentation

Everything is in [docs/](https://github.com/WireCatLabs/attio-cli/blob/main/docs/index.md): installation, usage, MCP,
permissions, settings, the command reference and the roadmap.

## Development

You need Node.js 22.16 or a later 22.x, or Node.js 24 or later, and pnpm.

```sh
pnpm install && pnpm test
```

Tests use a fake Attio built from Attio's API description, with invented records, and nothing reaches a real
workspace. The CLI is described in one file, `wirecat.config.ts`, and started from
[cli-template](https://github.com/WireCatLabs/cli-template).

More: [design](https://github.com/WireCatLabs/attio-cli/blob/main/docs/dev/DESIGN.md) ·
[working rules](https://github.com/WireCatLabs/attio-cli/blob/main/AGENTS.md)

Pull requests, bug reports and ideas go to [issues](https://github.com/WireCatLabs/attio-cli/issues).

## Part of WireCat

`attio` is one of the [WireCat](https://wirecat.dev) tools: open-source, local-first command-line tools that give AI
agents your context from messengers, mail, calendars, CRMs and documents. Each one works on its own.

## License

[Apache 2.0](https://github.com/WireCatLabs/attio-cli/blob/main/LICENSE)
