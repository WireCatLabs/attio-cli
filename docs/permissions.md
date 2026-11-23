# Permissions

Let an AI agent work with your Attio workspace through `attio` and keep the say over what it changes. The access
token reads, and with write scopes changes, the whole workspace, so without your own limits an agent could do what
the token allows.

For each profile, the name you gave one workspace's sign-in, you decide what an agent may only read, what asks you
first and what goes ahead. You can keep every write away from an agent with one line, and you know which checks hold
whatever the settings say.

Each command has a permission key, its name such as `deals.list` or `api.notes-create`, or a group such as `api`,
where the longer key wins. Each key has a level: `deny`, `readonly`, `ask` or `allow`. `attio work config set` sets
them, and `--dry-run` shows which keys a command checks.

**On this page:**

1. [The levels](#the-levels)
2. [What is set before you change anything](#what-is-set-before-you-change-anything)
3. [Keep every write away from an agent](#keep-every-write-away-from-an-agent)
4. [Agents and MCP](#agents-and-mcp)
5. [Checks that hold whatever the permissions say](#checks-that-hold-whatever-the-permissions-say)

## The levels

| Level | What happens |
|---|---|
| `deny` | The command is refused, a read too. |
| `readonly` | Reads work. A write is refused. |
| `ask` | A write asks first at a terminal. Without one it is refused unless `--yes` is given. **Over MCP it runs.** |
| `allow` | The command runs without a question. |

```sh
attio work config set permissions.api readonly   # every api operation reads, none writes
attio work config set permissions.people deny    # no live reads of people on this profile
attio work config show                           # each key with its level and where it came from
```

A refusal is `permission_error` (exit code 5) and names the key. It does not mean the sign-in is broken.

An agent cannot loosen a permission: a `config set` or `config unset` that would lift a limit is refused unless you
run it yourself in a terminal.

## What is set before you change anything

| Key | Built-in level | Why |
|---|---|---|
| `api.<operation>` that deletes, such as `api.objects-records-delete` | `ask` | A delete cannot be undone. It also checks `attio.delete`. |
| `attio.delete` | `ask` | One key for every delete. Set it to `deny` to stop them all. |
| `deals.create`, `deals.update`, `deals.move`, `deals.close`, `deals.delete` | `ask` | Each changes a deal colleagues see. |
| `people.create`, `people.update` | `ask` | Each changes a person colleagues see. |
| `api.<operation>` that writes, such as `api.objects-records-create` | `ask` | Each changes what colleagues see. |
| `crm.assign-others` | `deny` | Giving a deal or a person to another workspace member waits until you allow it. A new deal with no `--owner` is yours. |
| Every other command | `allow` | |

A deal or person write also checks the `api` key of the Attio operation it sends, such as
`api.objects-records-replace`, so a `readonly` on `api` stops it too. The pipeline, stage, change, field and search
commands only read, and so do the organization and user commands.

## Keep every write away from an agent

`--dry-run` names each key a command checks, with its level, and sends nothing:

```sh
attio work api objects-records-delete --object deals --record-id 0d7d1c2e-0000-4000-8000-000000000000 --dry-run
```

The record id above is invented. Any of these keeps writes yours:

- **Read scopes on the token.** Make the token with only the three read scopes from [install](installation.md).
  Attio itself then refuses every write.
- **`api` at `readonly`.** `attio work config set permissions.api readonly`. Every read still works, and every write
  is refused: the deal and person commands send through the same operations.
- **No deletes.** `attio work config set permissions.attio.delete deny` stops every delete and leaves other writes as
  they are.

## Agents and MCP

Over MCP nobody is at a terminal to answer, and the server shows no form, so a write at `ask` goes ahead. That holds
for the built-in levels too: an agent with a token that has write scopes may delete records. Choose one before you
connect an app:

- Set `permissions.api` to `readonly`, as above.
- Or keep the levels and turn on approval for the `attio_write` tool in your agent's client, so the client asks you
  before each write.

`mcp serve --permission api=readonly` and `mcp add … --permission …` make a level stricter for that one server. They
never loosen the profile. See [MCP](mcp.md#keep-writes-yours).

## Checks that hold whatever the permissions say

- **`WCATTIO_READ_ONLY=1`** refuses every write, for that shell or the app that sets it.
- **The token's scopes.** Attio refuses what the token's scopes do not allow, whatever the profile says.
- **Text from Attio is data.** Deal titles, names and attribute values reach an agent marked `untrusted`, so an agent
  does not take them as instructions.

More: [settings](configuration.md), [security](security.md).
