# Install

Get `attio` running on your computer and connected to your Attio workspace in about five minutes. Attio lets a
program in through an access token that a workspace admin makes, and this page walks you through it.

Once it is done, an agent on this computer reads your deals, people and companies when you ask.

**On this page:**

1. [What you need](#what-you-need)
2. [In WireCat Desktop](#in-wirecat-desktop)
3. [Install the tool](#install-the-tool)
4. [Make an access token in Attio](#make-an-access-token-in-attio)
5. [Sign in](#sign-in)
6. [Check it works](#check-it-works)
7. [Sign out or change the token](#sign-out-or-change-the-token)

## What you need

- An Attio workspace, and an admin of it. Only a workspace admin can make an access token. If you are not one, ask
  an admin to make the token for you with the scopes below.
- Deals switched on, if you want them. Attio has the Deal object in every workspace but leaves it off until an admin
  turns it on in the objects settings ([Attio's docs](https://docs.attio.com/docs/standard-objects/standard-objects-deals)).
- For the command line: Node.js 22.16 or a later 22.x, or Node.js 24 or later. Node 23 is not supported.

## In WireCat Desktop

Add Attio from the tool list, then paste the access token when it asks.
[Make an access token in Attio](#make-an-access-token-in-attio) shows how to get one.

## Install the tool

Install `attio` once on each computer where you or an agent use it.

```sh
npm install -g @wirecat/attio-cli
attio --version
attio skill install   # the agent skill, for Claude Code, Codex, Gemini CLI and OpenClaw
attio doctor
```

`doctor` needs no network and opens no keyring. It shows the version, where settings live, the profiles that exist,
and whether other users of the computer can read the settings.

An agent with no terminal, such as Claude Desktop or Cursor, uses `attio` over [MCP](mcp.md) instead of the skill.

## Make an access token in Attio

Attio describes these steps on its help page,
[Generating an API key](https://attio.com/help/apps/other-apps/generating-an-api-key).

1. In Attio, open the menu next to your workspace name and choose **Workspace settings**.
2. Open the **Developers** tab.
3. Click **New access token** and give it a name, such as `WireCat`.
4. Under the scopes, set these three to read:

   | Scope | Needed for |
   |---|---|
   | `record_permission:read` | Deals, people and companies. |
   | `object_configuration:read` | The deal stages and your workspace's own attributes. |
   | `user_management:read` | Workspace members, the owners of deals. |

5. Save, and copy the token Attio shows.

With these scopes only, the token can read and never change anything in Attio. Attio's tokens do not expire. They
work until an admin deletes them in the same place.

## Sign in

A profile is a name you choose for one workspace, such as `work`. It is the first word of every command that uses an
account. No command picks one for you.

```sh
attio work session start
```

`attio` asks for the token without showing it, checks it with Attio and keeps it in the system keyring. A token
Attio refuses is not kept. On a computer with no keyring, add `--credential-storage file` to keep it in a private
file instead. An agent or a script can pipe the token in on stdin. The token is never taken as an argument, so it
does not land in your shell history.

## Check it works

```sh
attio work session status --check   # asks Attio which workspace the token belongs to
attio work sync                     # copies your deals and their people and companies
attio work deals list status:open
```

The first sync reads every deal, person and company in the workspace, so a large workspace takes a while. If
something fails, see [when something goes wrong](troubleshooting.md).

## Sign out or change the token

```sh
attio work session end
```

`session end` forgets the token on this computer. The token itself still works in Attio until an admin deletes it
there: Workspace settings → Developers, the menu next to the token, **Delete**. To change the token, run
`session start` again with the new one.

Next: [use it](usage.md), or connect an app over [MCP](mcp.md).
