# Attio

Know where every deal stands without opening Attio. `attio` gives the AI agent you already use, such as Claude Code,
Codex or Claude Desktop, a copy of your Attio deals on your computer, so it answers from that copy, even offline. It
looks up people and companies in Attio when you ask about them.

Ask which deals are stuck in a stage, what was won or lost this week, or how your pipeline looks today. The agent
answers with the deal, its amount, its company and its owner. You need an Attio workspace and an admin who can make an
access token.

**On this page:**

1. [What you get](#what-you-get)
2. [Things a newcomer would not guess](#things-a-newcomer-would-not-guess)
3. [How it looks](#how-it-looks)
4. [Why attio](#why-attio)
5. [What it can do](#what-it-can-do)
6. [How it works](#how-it-works)
7. [Start in a few minutes](#start-in-a-few-minutes)
8. [Limits](#limits)
9. [Find a guide for your task](#find-a-guide-for-your-task)

## What you get

- **The answer, not the search.** Ask about a deal in your own words. The agent finds it with its stage, amount,
  company and people, read from your computer, with no clicking through Attio.
- **Your pipeline at a glance.** How many deals stand in each stage, their total per currency, how many went on to
  the next stage, and your win rate.
- **What changed since yesterday.** Deals created, moved, won and lost, as a list or as a short morning digest.
- **People and companies on demand.** "Who is Anna at Example LLC?" reads Attio right then, with e-mails, phones and
  the company.
- **A deals export in one line.** Any list of deals, people or companies becomes a CSV file for a spreadsheet.
- **Your CRM beside your chats.** One search finds a deal next to the messages, mail and meetings about it that the
  other WireCat tools keep on your computer.

## Things a newcomer would not guess

- **An access token is your key.** Attio lets a program in with a token that a workspace admin makes in Workspace
  settings → Developers. It reads the whole workspace, not only your own records. [Install](installation.md) shows
  where to click and which scopes to tick.
- **`work` is a name you choose.** It names one Attio workspace, and it is the first word of every command. No
  command picks a workspace for you.
- **The deal commands read a copy, the people commands read Attio.** `sync` copies the workspace's deals and the
  people and companies they name, with the stages of the deal pipeline. `deals`, `pipelines` and `changes` answer from that copy. `people`,
  `organizations` and `users` ask Attio each time, so they always show the newest data and need the internet.
- **Every change asks you first in a terminal.** `deals create`, `update`, `move`, `close` and `delete`, `people create`
  and `update`, and `activities create` and `close` for notes and tasks change Attio and store its answer. In a
  terminal each asks yes or no first, and so does every write through `api`. A new deal with no `--owner` is yours.
  Companies go through `attio work api …`,
  which reaches every operation of the Attio API, as far as the token's scopes and your
  [permissions](permissions.md) allow.
- **Over MCP, "ask" goes ahead.** MCP is the way apps such as Claude Desktop call a tool, and nobody sits at a terminal
  there to answer a question. Lock the `api` group before you connect such an app: [MCP](mcp.md).

## How it looks

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

- **A copy of your deals on your computer.** Lists, the pipeline board and search answer from it with no request to
  Attio, also offline.
- **Safe to hand to an agent.** Every change to Attio asks you first in a terminal. Each command and each Attio API
  operation has its own permission: allow, ask, read only or refuse. One line keeps every write away from an agent.
- **The token stays in your system keyring.** It never shows in output, errors or logs.
- **Polite to Attio.** Most answers need no request at all, so your workspace's rate limit is left for your other
  apps.
- **Ready for any agent.** A skill for agents with a terminal, an MCP server for Claude Desktop and Cursor, and a
  secure link for ChatGPT and Claude in the browser.
- **Free and open source.** Apache 2.0.

## What it can do

- **Deals:** list them by stage, status or company, show one with its people and company, export a page to CSV.
  [Use it](usage.md#deals)
- **The pipeline:** each stage of Attio's deal pipeline with its count and total, and the win rate over a window you
  choose. [Use it](usage.md#the-pipeline)
- **What changed:** deals created, moved, won and lost, and a morning digest. [Use it](usage.md#what-changed)
- **People, companies and members:** search Attio by name or e-mail, show one, export a list.
  [Use it](usage.md#people-companies-and-members)
- **Your own attributes:** the workspace's custom attributes on deals, people and companies, with their values.
  [Use it](usage.md#your-own-attributes)
- **Search across your tools:** deals next to messages, notes, events and meetings from other WireCat tools.
  [Use it](usage.md#search-everything)
- **Any Attio API operation** from a terminal, with the same permission checks. [Use it](usage.md#the-attio-api)

## How it works

- **A copy on your computer.** `sync` puts your deals and the people and companies on them into the WireCat local store,
  the one file on your computer that every WireCat tool shares. Lists, the pipeline and search read it, also offline.
- **Sign-in with an access token.** It is kept in the system keyring, or in a private file on a computer without one.
- **Made for scripts and agents.** `--json` gives a JSON answer, and an error comes with a code to branch on.
  [MCP](mcp.md)
- **What is stored and what goes over the network.** [Security](security.md)

## Start in a few minutes

In WireCat Desktop, install Attio on the **Tools** page and sign in under **Manage**, as
[install](./installation.md#in-wirecat-desktop) shows. Or paste this into your agent:

```text prompt
Install attio with npm install -g @wirecat/attio-cli. Help me make an Attio access token and run attio work session start to connect my workspace, then sync and show my open deals.
```

Or in a terminal:

```sh
npm install -g @wirecat/attio-cli
attio skill install          # teaches Claude Code, Codex and Gemini CLI to use attio
attio work session start     # paste the Attio access token when it asks
attio work sync              # copy your deals and their people and companies
attio work deals list status:open
```

You need Node.js 22.16 or a later 22.x, or Node.js 24 or later. [Install](installation.md) shows how to make the
token.

## Limits

- Companies are read, not written: an Attio company has no e-mail or phone attribute to write. Change one through
  `api`.
- Notes and tasks are listed and shown on a deal once the owner turns on the `activities` setting. Lists and custom
  objects have no commands of their own yet. `attio work api` reaches them.
- People, companies and workspace members are read from Attio each time, so they need the internet.
- Attio cannot list only what changed since a time, so each sync lists every deal again. A large workspace takes
  longer to sync.
- Only a workspace admin can make the token, and it reads the whole workspace.

## Find a guide for your task

| Task | Guide |
|---|---|
| Install and connect a workspace | [Install](installation.md) |
| Read deals, the pipeline, what changed | [Use it](usage.md) |
| Connect an app that uses MCP | [MCP](mcp.md) |
| Decide what an agent may change | [Permissions](permissions.md) |
| An exact command or option | [Commands](commands.md) |
| Change a setting | [Settings](configuration.md) |
| Something does not work | [When something goes wrong](troubleshooting.md) |
| What is stored and sent | [Security](security.md) |
| What comes next | [Roadmap](roadmap.md) |
