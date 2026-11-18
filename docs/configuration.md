# Settings

Change how `attio` works for one workspace, or for every workspace on this computer, with one command, and see where
each value came from. You change only the few that matter to you, and the rest keep their defaults.

You decide, for example, what an agent may do, how many items a list shows, or whether a run keeps the words you
typed. Only you can loosen a permission: an agent that tries is refused.

Settings live in one file, `config.json`, in the folder `attio doctor` shows. Each profile has its own part, and
`defaults` apply to every profile. `attio work config` shows and changes them.

**On this page:**

1. [See and change a setting](#see-and-change-a-setting)
2. [Permissions](#permissions)
3. [Variables](#variables)
4. [Run records](#run-records)

## See and change a setting

```sh
attio work config show
attio work config set limit 50
attio work config unset limit
```

`config show` lists each setting with its value and where it came from: the file, a variable or the default. The
common ones:

| Setting | Default | What it does |
|---|---|---|
| `limit` | `20` | How many items a list shows at once. |
| `permissions` | none set | What each command may do. See [Permissions](#permissions). |
| `record` | `true` | Keep every run. `false` keeps failed runs only. |
| `record_input` | `true` | Keep the words you typed in a run. |
| `keep_runs_for_days` | `30` | How long a run is kept. |
| `update_check` | `true` | Check once a day for a newer version. |

## Permissions

`permissions` decides what a command may do for this profile: `allow`, `ask`, `readonly` or `deny`, per permission
key. Over MCP `ask` does not ask: the write goes ahead. The keys, their built-in levels and how to keep an agent's
writes yours are on [Permissions](permissions.md).

```sh
attio work config set permissions.api readonly
```

## Variables

| Variable | What it does |
|---|---|
| `WCATTIO_PROFILE` | The profile for this shell, in place of the first word. |
| `WCATTIO_TOKEN` | An access token used before the keyring, for a script or a container. |
| `WCATTIO_READ_ONLY` | `1` refuses every write. |
| `WCATTIO_CONFIG_DIR`, `WCATTIO_STATE_DIR` | Move the settings or the state to another folder. |

`attio work session status` says where the token came from: the variable, the keyring or a file, never the token.

## Run records

A command that fails is kept as a run, for `attio runs list` and `runs show`. A command that calls Attio, such as
`sync`, an `api` operation or `session status --check`, is kept when it succeeds too, unless `record` is `false`
(then only failures) or it ran with `--no-record`. `record_input` decides whether a run keeps the words you typed.
Secrets are masked either way. See [Security](security.md#run-records).
