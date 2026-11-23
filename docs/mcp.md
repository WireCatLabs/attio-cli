# MCP

Give your Attio deals, people and companies to an AI agent that cannot run commands, such as Claude Desktop, Cursor,
or ChatGPT and Claude in the browser. MCP (Model Context Protocol) is the way such an agent asks a program what it can
do and then calls it, and `attio` serves its commands that way.

The agent then reads your deals, pipeline and changes from the copy on your computer, and looks up people and
companies in Attio, as far as the profile's permissions allow.

An agent with a terminal, such as Claude Code or Codex, does as well with the commands and the skill
(`attio skill install`). You need a signed-in profile ([install](installation.md)), and a look at
[permissions](permissions.md) first: over MCP a write at `ask` goes ahead.

**On this page:**

1. [Add attio to an agent](#add-attio-to-an-agent)
2. [What the agent sees](#what-the-agent-sees)
3. [Keep writes yours](#keep-writes-yours)
4. [ChatGPT and Claude in the browser](#chatgpt-and-claude-in-the-browser)

## Add attio to an agent

```sh
attio work mcp add claude-code --allow-writes   # or codex
attio work mcp check                            # the handshake and the tool list, as the client sees them
```

`--allow-writes` says you know the profile offers tools that write: the `api` group's writes. For Claude Desktop,
Cursor or any other client, `attio work mcp config` prints the entry to paste into its settings, with full paths. By
hand, for Claude Code:

```sh
claude mcp add attio -- attio work mcp serve
```

One server can serve several profiles: `attio mcp serve --profiles work,client`, or `--profiles all`. Each call then
names its profile, and the agent asks you if you did not say which.

## What the agent sees

The server has three tools:

- `attio_tools_search` finds a command by words, with its arguments and the shape of its answer.
- `attio_read` runs a command that only reads: `{ "command": "deals list", "arguments": { "query": "status:open" } }`.
- `attio_write` runs a command that writes, such as an `api` operation that creates or deletes a record.

A command is named as on the command line, without the profile, and checks the same permission key.

Text from Attio comes marked `untrusted`: names of people, companies and deals, pipeline and stage names, workspace
member names, attribute values, e-mail addresses, phone numbers and links, the notes, e-mails, comments and transcripts
the `api` commands read, and what `search all` finds. The agent is told it is data, never instructions.

## Keep writes yours

The deal, people and company commands only read. The `api` group reaches every Attio operation, and its writes are
`allow` by default, its deletes `ask`. Over MCP nobody is at a terminal to answer `ask`, so a delete goes ahead too.

Two things stop a write. Use at least one before you add the server:

- **The token's scopes.** A token with only the three read scopes from [install](installation.md) cannot write:
  Attio refuses it.
- **The profile's permissions.** This line keeps every `api` write away from any agent on this profile, and reads
  still work:

  ```sh
  attio work config set permissions.api readonly
  ```

To make one server stricter than the profile, give it its own levels. They never loosen the profile:

```sh
attio work mcp add claude-code --allow-writes --permission api=readonly
attio work mcp serve --permission api.objects-records-delete=deny
```

Or turn on approval for the `attio_write` tool in your agent's client, so the client asks you before each write.

## ChatGPT and Claude in the browser

A browser app reaches the server over HTTP through your own tunnel, such as Tailscale Funnel:

```sh
attio work mcp serve --http --public-url https://laptop.example.ts.net
```

The server listens on `127.0.0.1` only, port 8765 (`--port` changes it). A browser app logs in with a one-time code
the command prints. `attio work mcp revoke` ends every login.

`attio work mcp server start` runs the same server in the background. `mcp server status` shows its port, the login
code and the apps logged in, and `mcp server stop` ends it.

More: [permissions](permissions.md), [security](security.md), [the command reference](commands.md#attio-mcp).
