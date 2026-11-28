import { readFileSync } from "node:fs"
import { dirname, relative, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { apiSkillFiles, writeArtifacts } from "@wirecat/cli-base/codegen"
import { COMMANDS_PAGE_LABELS, commandsPage, describeOptions, describeProgram } from "@wirecat/cli-base/commands"
import { skillFiles } from "@wirecat/cli-base/skill"
import { commandHelpMarkdown } from "@wirecat/cli-core"
import { API } from "../dist/config.js"
import { IDENTITY, SKILL } from "../dist/identity.js"
import { createProgram } from "../dist/program.js"

const root = resolve(import.meta.dirname, "..")
const program = createProgram()
const page = commandsPage({
  cli: IDENTITY.command,
  commands: describeProgram(program),
  options: describeOptions(program),
  labels: COMMANDS_PAGE_LABELS.en,
  details: (command) => commandHelpMarkdown(program, command.path),
  text: {
    banner: "<!-- Generated from the command tree by pnpm generate. Do not edit. -->",
    title: "Commands",
    intro: `Look up any \`${IDENTITY.command}\` command, its options and what it answers, and trust that it matches the
version you run: this page is generated from the program itself.

Your AI agent reads the same list as JSON with \`${IDENTITY.command} commands --json\`, and picks a command and its
options from there. Each exit code means one kind of failure, so a script or an agent can tell what went wrong.

**The first word is the profile**, a name you choose: \`${IDENTITY.command} personal config show\`. \`${IDENTITY.envPrefix}_PROFILE\`
does the same for a whole shell session. No profile is assumed: a command that uses an account stops without one and
lists the profiles on this computer.

**On this page:**

1. [Options for every command](#options-for-every-command)
2. [Deals](#attio-deals)
3. [Pipelines](#attio-pipelines)
4. [People](#attio-people)
5. [Companies](#attio-organizations)
6. [Notes and tasks](#attio-activities)
7. [What changed](#attio-changes)
8. [The API](#attio-api)
9. [Exit codes](#exit-codes)`,
    globalHeading: "Options for every command",
    globalIntro: "",
    mutates: "**Changes something in the service.**",
    mutatesLocal: "**Changes something on this computer only.**",
    exitHeading: "Exit codes",
    exitIntro: "Branch on the code, not on the text: the text can change, the code does not.",
    outro: "",
  },
})
const check = process.argv.includes("--check")
const artifacts = [{ path: "docs/commands.md", content: page.replace(/\n{3,}/g, "\n\n") }]
const skillFolder = relative(root, dirname(fileURLToPath(SKILL)))
artifacts.push(
  ...apiSkillFiles({
    cli: IDENTITY.command,
    folder: skillFolder,
    files: skillFiles(SKILL),
    service: API.service,
    operations: API.manifest.operations,
    skill: readFileSync(SKILL, "utf8"),
    commands: describeProgram(program),
    banner: "Generated from the API manifest and the command tree by pnpm generate. Do not edit.",
  }),
)
const apiPages = relative(root, fileURLToPath(new URL("references/api", SKILL)))
const stale = writeArtifacts(artifacts, { root, check, owns: [apiPages] })
if (check && stale.length) {
  process.stderr.write(`Stale: ${stale.join(", ")}; run pnpm generate\n`)
  process.exitCode = 1
}
