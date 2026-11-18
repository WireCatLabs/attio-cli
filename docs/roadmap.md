# Roadmap

See what `attio` does today and what comes next, before you build a workaround for something it lacks. It may
already be on the way.

You learn which parts of your Attio workspace an agent can work with now, and which come in the next releases. The
order is approximate and can change. To suggest something, open an
[issue on GitHub](https://github.com/WireCatLabs/attio-cli/issues).

**On this page:**

1. [What works today](#what-works-today)
2. [Next](#next)
3. [Later](#later)

## What works today

`attio` signs in to an Attio workspace with an access token. `sync` copies the workspace's deals, people and
companies into the local WireCat store, with the stages of the deal pipeline, so `deals`,
`pipelines`, `stages` and `changes` work offline, and `search all` finds deals next to your messages, notes and
meetings. `pipelines show` is the pipeline board: each stage's deals, their number, their total per currency and the
win rate. `changes list` shows deals created, moved, won and lost, and `--format report` makes it a digest.
`fields list` shows the workspace's own attributes. `people`, `organizations` and `users` read Attio live. Lists
export to CSV with `--format csv`. `attio work api` reaches every operation of the Attio API. Every command is in the
[command reference](commands.md).

## Next

- **Change deals.** Move a deal to a stage by its name, and close it as won or lost, with a permission for each.
- **Notes and tasks.** Read and add the notes and tasks on a deal, a person or a company.
- **Sign in with one click.** Sign in through Attio in the browser, in place of making a token by hand.

## Later

- **Custom objects and lists.** Your workspace's own objects and its lists, copied like deals.
- **Attio's webhooks.** Learn what changed as it happens, without a full sync.

What each released version changed is in the [changelog](../CHANGELOG.md).
