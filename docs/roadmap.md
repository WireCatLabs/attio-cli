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

`attio` signs in to an Attio workspace with an access token. `sync` copies the workspace's deals and the people and
companies they name into the local WireCat store, with the stages of the deal pipeline, so `deals`,
`pipelines`, `stages` and `changes` work offline, and `search all` finds deals next to your messages, notes and
meetings. `pipelines show` is the pipeline board: each stage's deals, their number, their total per currency and the
win rate. `changes list` shows deals created, moved, won and lost, and `--format report` makes it a digest.
`fields list` shows the workspace's own attributes. With the `activities` setting on, the copy also holds the
notes and tasks on its deals, people and companies. `people`, `organizations` and `users` read Attio live. `deals`
create, update, move and close deals, and `people` create and update people, each change asking you first. Lists
export to CSV with `--format csv`. `attio work api` reaches every operation of the Attio API. Every command is in the
[command reference](commands.md).

## Next

- **Add notes and tasks.** Add a note or a task to a deal, a person or a company with its own command. Reading them
  is in the copy already.
- **Sign in with one click.** Sign in through Attio in the browser, in place of making a token by hand.

## Later

- **Custom objects and lists.** Your workspace's own objects and its lists, copied like deals.
- **Attio's webhooks.** Learn what changed as it happens, without a full sync.

What each released version changed is in the [changelog](../CHANGELOG.md).
