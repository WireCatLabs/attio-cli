import { Readable } from "node:stream"
import { neverAnswers, runScopeCases } from "@wirecat/cli-core/testing"
import { describe, it } from "vitest"
import { API } from "./config.js"
import { definition } from "./program.js"
import { FAKE_API_TOKEN, fakeServiceApi } from "./testing/fake-api.js"
import { signedIn } from "./testing/harness.js"

const stdin = () => Object.assign(Readable.from([FAKE_API_TOKEN]), { isTTY: false })

describe("each remote command runs inside cli-core's run", () => {
  const cases = runScopeCases({
    definition: definition(),
    commands: {
      "session start": ["personal", "session", "start"],
      "session status": ["personal", "session", "status", "--check"],
    },
    skip: {
      ...Object.fromEntries(
        API.manifest.operations.map((operation) => [
          `api ${operation.command}`,
          "cli-core's serviceApiCommand runs it in its run; src/api.test.ts sends each one",
        ]),
      ),
      "mcp serve": "listens until stopped",
      "schedule run": "starts the schedule's entry as its own process",
      "schedule exec": "the timer's entry, which starts a process",
      sync: "cli-core's addCrmCommands runs it in its run; src/crm-contracts.test.ts runs crmSyncContract",
      "users list": "cli-core's addCrmCommands runs it in its run, over the source's users",
      "users show": "cli-core's addCrmCommands runs it in its run, over the source's users",
      ...Object.fromEntries(
        ["people list", "people show", "organizations list", "organizations show"].map((command) => [
          command,
          "cli-core's addCrmCommands runs it in its run; src/attio-map.test.ts and crmSourceContract read the live list",
        ]),
      ),
      doctor:
        "cli-core's appDoctorCommand answers --online outside a run of its own; drop this once core runs it inside",
    },
    answering: () => ({ keyring: signedIn(), fetch: fakeServiceApi().fetch, stdin: stdin() }),
    silent: () => ({ keyring: signedIn(), fetch: neverAnswers, stdin: stdin() }),
  })
  for (const one of cases) it(one.name, () => one.run())
})
