# attio: Attio CLI for AI agents

A new WireCat CLI, started from cli-template. One tool for you and for Claude Code, Codex or any agent that speaks MCP.

<p align="center">
  <a href="https://github.com/WireCatLabs/attio-cli/blob/main/docs/index.md">Docs</a> ·
  <a href="https://github.com/WireCatLabs/attio-cli/blob/main/docs/installation.md">Install</a> ·
  <a href="https://github.com/WireCatLabs/attio-cli/blob/main/docs/usage.md">Usage</a>
</p>

- **Every operation of the Attio API is a command.** `attio api list` shows them, each with its own
  flags, help and `--json`.
- **Your agent gets the same commands as tools.** An MCP server and an agent skill come with it, no second codebase.
- **You decide what it may change.** Each profile allows, asks or denies each command, and a delete needs a key of
  its own.

## What you get

Ask your agent about Attio. It finds the right command with `attio commands --json`, runs it, and answers
from the result. A command it may not run stops with a clear refusal before anything reaches Attio.

## Why attio

- The token stays in the system keyring, and every command names the profile it uses.
- Every operation is tested against a strict fake built from the API description, in `src/api.test.ts`.
- `--dry-run` shows what a write would send, and sends nothing.

## Quick start

```sh
pnpm install
pnpm build
node dist/bin/attio.js doctor
```

Once it is on npm: `npm install -g @wirecat/attio-cli`, then `attio doctor`. Every command that uses an account
starts with a profile, a name you choose: `attio personal config show`.

Sign in once with `attio personal session start`. It asks for the token and keeps it in the keyring.

## Use it with your agent

```sh
attio personal mcp add claude-code
attio skill install
```

`attio personal mcp check` shows the tools your agent gets. `attio personal mcp config` prints the setup for any
other MCP client.

## What it can do

[docs/commands.md](docs/commands.md) lists every command, and `--help` after any of them shows its flags.

## Settings and permissions

`attio personal config show` prints the profile's settings. See [docs/configuration.md](docs/configuration.md).

## Security

See [docs/security.md](docs/security.md), and [SECURITY.md](SECURITY.md) to report a problem.

## When something goes wrong

Run `attio doctor` and see [docs/troubleshooting.md](docs/troubleshooting.md). Report a bug on
[GitHub](https://github.com/WireCatLabs/attio-cli/issues).

## Development

Started from [cli-template](https://github.com/WireCatLabs/cli-template). Its design is in
[docs/dev/DESIGN.md](docs/dev/DESIGN.md), and the working rules are in [AGENTS.md](AGENTS.md). Published as
[@wirecat/attio-cli](https://www.npmjs.com/package/@wirecat/attio-cli).
