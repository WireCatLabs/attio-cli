# When something goes wrong

Get `attio` working again from the symptom you see. Most failures come from the token, a missing scope on it or the
profile's permissions, and each has a check that names the cause.

You find your symptom in the table, run the check it gives, and retry the command. If it still fails, you have the
error code and the profile name ready for a support request.

**On this page:**

1. [First checks](#first-checks)
2. [Symptoms and what to do](#symptoms-and-what-to-do)
3. [Ask for help](#ask-for-help)

## First checks

```sh
attio doctor                         # the version, the settings, the profiles, without the network
attio work session status --check    # asks Attio which workspace the token belongs to
```

## Symptoms and what to do

| Symptom | What to do |
| --- | --- |
| Not sure what is set up | Run `attio doctor`. It reads no keyring and uses no network. |
| `attio` is not found | Open a new terminal, and check that npm's global folder is on `PATH`. |
| "name a profile" | Put the profile first, as in `attio work config show`, or set `WCATTIO_PROFILE`. |
| "not signed in" | Run `attio work session start` and paste the token. See [sign in](installation.md#sign-in). |
| The token is refused, or "not active" | It was deleted in Attio or mistyped. Make a new one ([how](installation.md#make-an-access-token-in-attio)) and run `session start` again. |
| You cannot find **Developers** in Attio | Only a workspace admin sees it. Ask an admin to make the token. |
| A command fails with 403, or "missing scope" | The token lacks a scope. Edit it in Workspace settings → Developers, or make a new one, with `record_permission:read`, `object_configuration:read` and `user_management:read`. |
| `rate_limited` | Attio documents 100 reads and 25 writes a second ([Attio's page](https://docs.attio.com/rest-api/guides/rate-limiting)). Wait a moment and run it again. |
| `deals list` is empty | Run `attio work sync` first. Deals are read from the copy it makes. |
| `sync` fails with `not_found` | The Deal object is off in your workspace. An admin turns it on in Attio's objects settings ([Attio's docs](https://docs.attio.com/docs/standard-objects/standard-objects-deals)). |
| A won or lost deal shows as open | A won stage must be the one Attio celebrates, and a lost stage's title must start with "Lost". See [deals](usage.md#deals). |
| A person or company is missing from `search all` | `sync` copies only the people and companies a deal names: run `attio work sync` after adding one to a deal. `attio work people list anna` reads Attio itself and finds anyone at once. |
| `people list assigned_to:…` is refused | A live list takes words (`attio work people list anna`), not other fields. |
| The settings file does not read | `doctor` lists every problem in the file under `config.issues`. Run the `config unset` each one gives, or fix the file by hand. |
| `doctor` lists `files.problems` | Other users of the computer can read `config.json` or enter its folder. Run each `chmod` that `doctor` prints after "to make it private:". `doctor` never changes a file mode itself. |
| "the OS keyring did not answer" | The computer has no keyring running. Sign in with `attio work session start --credential-storage file`. |
| A write is refused | The profile's permissions, `WCATTIO_READ_ONLY` or the token's scopes stop it. See [permissions](permissions.md). |

## Ask for help

Ask on [Discord](https://discord.gg/DebENqbRrJ), or open an [issue](https://github.com/WireCatLabs/attio-cli/issues)
with the error code, the profile name and the command. Never paste a token, a password or private content into a
support request.
