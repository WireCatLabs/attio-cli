# Use it

Find a deal, see your pipeline or what changed overnight with one short command, the same one your agent runs. Attio's
API speaks in record ids, attribute slugs and status ids, and `attio` takes stage names and plain words instead.

You find the deals in a stage, the week's wins or a person's e-mail in one line. An agent does the same from your
request.

Every command starts with a profile, the name you gave one workspace's sign-in. `sync` copies your deals and the people
and companies they name into the WireCat local store, where the deal commands read them. You need a signed-in profile:
[install](installation.md) sets one up.

**On this page:**

1. [The profile comes first](#the-profile-comes-first)
2. [Sync](#sync)
3. [Deals](#deals)
4. [The pipeline](#the-pipeline)
5. [What changed](#what-changed)
6. [People, companies and members](#people-companies-and-members)
7. [Your own attributes](#your-own-attributes)
8. [Search everything](#search-everything)
9. [The Attio API](#the-attio-api)
10. [Output for scripts](#output-for-scripts)
11. [Agents](#agents)

## The profile comes first

A profile is a name you choose for one workspace. It is the first word of every command that uses an account:

```sh
attio work config show
```

`WCATTIO_PROFILE=work` does the same for one shell session. No profile is ever assumed, not even the only one: a
command without one stops with exit code 2 and lists the profiles on this computer. Two workspaces are two profiles,
each with its own token.

## Sync

Deals, the pipeline and its stages are read from the local WireCat store, the one every WireCat tool searches. `sync`
brings it up to date:

```sh
attio work sync                # every deal and the people and companies it names, again
attio work sync --rescan       # start over, dropping a sync that stopped half way
attio work store status        # how far each kind is, and how many are stored
```

Attio cannot list only the records changed since a time, so each sync reads every deal again, then the people and
companies they name. A sync stops before its deadline or `--max-pages`, and the next one goes on from there. Records
deleted in Attio leave the copy. When a sync would mark more than half of the deals deleted at once, it marks none and
says how many. Check the token's rights in Attio, then let them through yourself in a terminal with
`attio work sync --allow-deletions 12`, the number the sync printed.

Each record keeps its current values only. Attio keeps the history of each attribute, and a value that was replaced is
not copied.

## Deals

```sh
attio work deals list status:open                 # open, won or lost
attio work deals list stage:"In Progress"
attio work deals list "created>=30d"              # made in the last 30 days
attio work deals show deal:12                     # by the ref a list prints
attio work deals list status:open --format csv > deals.csv
```

A deal answers its `stage`, `status`, `amount` with its `currency`, its company, its people, its owner and a link to
the deal in Attio. `--offline` reads the same, with no request to Attio. A list shows the newest first: `--limit` and
`--page` change that. The fields a list can filter by are in its help: `attio help deals list`.

Attio has one deal pipeline. Its stages are the statuses of the deal's **Stage** attribute, in Attio's order:

- **Won** is the stage Attio celebrates when a deal reaches it, or one with the word "won" in its title.
- **Lost** is a stage with the word "lost" in its title, as in a new Attio workspace.
- Every other stage is open.

If you renamed your lost stage to something else, its deals count as open. Keep the word "Lost" in its title.

### Notes and tasks on a deal

With `activities` on, each sync also copies the notes and tasks of your workspace that hang on the deals, people and
companies it keeps. `deals show` lists them, open tasks first, and `search all` finds a deal by the words of its notes.
The setting's key names the workspace by its id, the `id` that `session status --check --json` prints:

```sh
attio work config set crm.attio:<workspace id>.activities on
attio work sync
attio work deals show deal:12
```

It is off until you turn it on, and only you can: an agent is refused. Notes and tasks hold what clients wrote and
said. Attio cannot list only the notes changed since a time, so each sync reads them all again, and a note or task
deleted in Attio leaves the copy. The token needs two more scopes, `note:read` and `task:read`. Without one of them the
sync copies the rest, removes nothing, and says which list it could not read.

The same setting copies your Attio meetings, with what was said in their recorded calls, so `search all` finds a deal
by a word said in a call. Attio links a meeting to the people and companies who took part, and to a deal only when
someone links it, so a meeting also goes on the deals of those people and companies. This needs two more scopes,
`meeting:read` and `call_recording:read`. A token without `meeting:read` copies no meetings and still copies the rest.
A call longer than about 20 minutes is cut: the copy keeps its first 20,000 characters. Attio marks its meetings
API as beta.

`activities list` lists them from the copy, open tasks first. `activities create` adds a note or a task to a deal, a
person or a company, and `activities close` marks a task done. Each asks first, as every change does:

```sh
attio work activities list status:open
attio work activities create comment --subject deal:12 --text "Called, they want the offer by Friday"
attio work activities create task --subject deal:12 --title "Send the offer" --due 2026-12-04T10:00:00Z
attio work activities close task:3f6c0c2e-0000-4000-8000-000000000000
```

`--subject` takes the reference `deals show` gives (`deal:12`, `person:3`), or `person:crm:<id>` by Attio's id. An
Attio note is on one record, so a comment takes one `--subject`; a task takes several. A task with no `--owner` is
assigned to nobody. Attio keeps a task as one text, so `--text` goes under its title. Adding them needs two more
scopes on the token, `note:read-write` and `task:read-write`.

## The pipeline

```sh
attio work pipelines show                       # each stage: how many, their sum per currency, how many went on
attio work pipelines show --since-time 30d      # only the deals made in the last 30 days, with the win rate
attio work stages list                          # each stage with its outcome and how many are open in it
```

The pipeline is named `Deals`. Sums are kept per currency and never converted.

## What changed

`changes list` shows what the syncs saw change in the copy: deals created, moved, won, lost and given another owner,
newest first. It reads the last day unless `at:` says otherwise.

```sh
attio work changes list "at>=1d"
attio work changes list change:won "at>=7d" --json
attio work changes list "at>=1d" --format report     # the window as a short morning digest
```

A change is seen only by a sync, so run `sync` first.

## People, companies and members

People, companies and workspace members are read from Attio each time, so they need the internet and `--offline`
refuses them. Words after `list` search Attio: people by name or e-mail, companies by name.

```sh
attio work people list anna                       # people whose name or e-mail holds "anna"
attio work people show "Anna Example"             # one person by exact name or id, with e-mails and phones
attio work organizations list example             # companies whose name holds "example"
attio work organizations list --format csv > companies.csv
attio work users list                             # your workspace members, the owners of deals
```

A live list takes words only, not `field:value` terms. With no words it lists everyone, newest first. A person or a
company gives your workspace's own attributes under `provider_metadata`.

## Your own attributes

```sh
attio work fields list deals
attio work fields list people --json
```

`fields list` shows the attributes your workspace added on deals, people or companies (`organizations`), with their
type, as the last `sync` stored them. A select attribute's options are not listed yet. Attio's own attributes are left out.

## Search everything

```sh
attio work search all "Example LLC"
attio work search all renewal --only crm
```

`search all` searches the deals in the copy by the words of their title, company and people, and the messages, notes,
calendar events and meetings that other WireCat tools stored on this computer. The best match comes first.

After `attio work sync --embed`, it also finds a deal by the meaning of its notes and tasks, in other words or another
language: «клиент жалуется на сроки» finds the deal whose note says the launch slipped. The vectors are built on this
computer with a model already downloaded. Until then `search all` searches by words and says so. A Latin name typed
in Cyrillic is found too: `феррара` finds Ferrara.

## The Attio API

`attio work api` runs any operation of the Attio API, one command each, with its own flags and help. It reaches what
has no command of its own yet: lists, custom objects, meetings and more.

```sh
attio work api list                               # every operation, without calling Attio
attio work api show objects-records-query         # one operation's parameters
attio work api objects-list                       # the objects in your workspace
```

Each operation has its own permission key, such as `api.notes-create`. Writes go through only as far as the token's
scopes allow: with the three read scopes from [install](installation.md), Attio refuses them. To keep every write
out of reach on this computer, set `attio work config set permissions.api readonly`. See
[permissions](permissions.md).

## Output for scripts

Every command except `mcp serve` on stdin and stdout takes `--json`, and prints one JSON value on stdout. Errors are
JSON on stderr, with a code to branch on. `--format csv` turns a list page into a table. The
[command reference](commands.md#exit-codes) lists the exit codes.

## Agents

`attio skill install` puts the tool's skill where Claude Code, Codex, Gemini CLI and OpenClaw look for it.
`attio skill install --for hermes` also adds that folder to Hermes Agent's own settings, so a bare `skill install`
leaves Hermes out.

An agent with a terminal then runs `attio` itself. Ask in plain words:

> *"Use attio. Which deals moved yesterday, and which are still open in Negotiation?"*
> *"Use attio. Export our open deals to a CSV file."*
> *"Use attio. Who is our contact at Example LLC, and what deals do we have with them?"*

For Claude Desktop, Cursor, ChatGPT and other apps that cannot run commands, `attio work mcp serve` serves the same
commands over MCP. Lock the `api` group's writes first: over MCP a write at `ask` goes ahead. See [MCP](mcp.md).
