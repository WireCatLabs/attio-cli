# Security

Let an agent work with your Attio workspace while the access token stays out of its answers and your logs. The token
reads the whole workspace, so anyone who has it can do what its scopes allow.

You know where `attio` keeps the token, what reaches Attio and nothing else, and which limits hold for an agent
whatever it is told.

What WireCat tools share, such as the keyring, permissions, MCP and what never reaches a log, is on the
[shared security page](https://wirecat.dev/en/docs/security). This page keeps only what is particular to `attio`.

**On this page:**

1. [Where it keeps what, and whom it talks to](#where-it-keeps-what-and-whom-it-talks-to)
2. [The token's reach](#the-tokens-reach)
3. [What the copy holds](#what-the-copy-holds)
4. [MCP in the browser](#mcp-in-the-browser)
5. [Run records](#run-records)
6. [File modes](#file-modes)

## Where it keeps what, and whom it talks to

`attio` keeps its settings in `config.json` and its state in the folders `attio doctor` shows. It sends requests
only to `api.attio.com`, over HTTPS. `app.attio.com`, Attio's sign-in page, is allowed too, for a browser sign-in
that this version does not use yet.

`session start` reads the token from stdin or a hidden prompt, never from an argument. It keeps it in the system
keyring, or in a private file with `--credential-storage file`. The token goes only into the `Authorization` header
of a request to Attio. It never reaches an address, the output, an error, a log or a run record. `session end`
forgets it on this computer. To stop it working everywhere, delete it in Attio: Workspace settings → Developers.

## The token's reach

An Attio access token belongs to the workspace, not to a person, and only a workspace admin can make one. It reads
every record its scopes allow, not only yours. Give it only the three read scopes from
[install](installation.md#make-an-access-token-in-attio): then Attio refuses every write made with it, whatever an
agent asks. Attio's tokens do not expire, so delete one you no longer use.

## What the copy holds

`sync` stores the workspace's deals, and the people and companies they name, in the WireCat local store on this
computer, where every WireCat tool can read them: a deal's stage, amount, company, people and owner, and a person's
name, e-mails, phones and job title. Each record keeps its current values only. `people` and `organizations` read Attio
live and add nothing to the copy.

Text from Attio, such as deal titles, names and attribute values, reaches an agent marked `untrusted`, so the agent
reads it as data, not as an instruction.

## MCP in the browser

`attio work mcp serve --http` listens on `127.0.0.1` only, for browser apps that reach it through your own tunnel.
Each app logs in with a one-time code, and the server keeps a hash of each login it gives, in the state folder,
readable by you only. `attio work mcp revoke` forgets every one of them.

## Run records

A run record keeps the command line as you typed it, so `attio runs show` tells you what was run. A secret is still
stored as `[redacted]`: an option named like a token or password, a password in a link, a long opaque string. A
phone number is replaced by `[redacted]` inside the word you typed: one written with its "+" and country code, or 11
to 15 digits in a row, so a long id of that length is hidden as well. To keep none of the words you type, run
`attio work config set record_input false`.

A secret is also found by what it looks like, in a run record and in a kept error message: a token in a known format
(GitHub, OpenAI, Slack, AWS, Stripe, npm and the like), a `Bearer` credential, a random-looking string of 20 or more
characters, and a random-looking run of 20 or more lower-case hex characters, such as a hex key or a full commit
hash. The value after a secret name is hidden too, whether it follows `=`, `:` or a space: `password=`, `API_TOKEN=`,
`password hunter2`, `pin 1234`. Some secrets look like ordinary words and stay: a value of letters only after a
secret name and a space (`pin this message` stays), a hex key in upper case, a short commit hash or a UUID, a short
password typed without a secret name before it, and a secret inside a link or a file path unless it is in a known
format or after a secret name.

## File modes

`config.json` is saved readable by you only (`0600`), and its folder is created for you only (`0700`). A file or
folder made by an older version may be open to other users of the computer: `attio doctor` lists each under
`files.problems` and prints the `chmod` that fixes it. Windows is not checked. Report a vulnerability as
[SECURITY.md](https://github.com/WireCatLabs/attio-cli/blob/main/SECURITY.md) says.
