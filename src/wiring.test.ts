import { memoryKeyring } from "@wirecat/cli-base"
import { expect, it } from "vitest"
import { FAKE_API_TOKEN, fakeServiceApi } from "./testing/fake-api.js"
import { runCli } from "./testing/harness.js"

it("sync without a sign-in says how to sign in, and reaches nothing", async () => {
  const fake = fakeServiceApi()
  const ran = await runCli(["personal", "sync", "--json"], { keyring: memoryKeyring(), service: fake })
  expect(ran.json()).toMatchObject({ error: { code: "authentication_error" } })
  expect(ran.err + JSON.stringify(ran.json())).toContain("attio personal session start")
  expect(fake.calls).toEqual([])
})

it("api show gives an operation's request schema without calling Attio", async () => {
  const fake = fakeServiceApi()
  const ran = await runCli(["api", "show", "objects-records-query", "--json"], { service: fake })
  expect(ran.code, ran.err).toBe(0)
  expect(ran.json().item).toMatchObject({ request_schema: expect.objectContaining({ type: "object" }) })
  expect(fake.calls).toEqual([])
})

it("a sign-in kept in a private file is listed among the sessions; api list names Attio's operations", async () => {
  const keyring = memoryKeyring()
  const service = fakeServiceApi()
  const started = await runCli(["personal", "session", "start", "--credential-storage", "file", "--json"], {
    keyring,
    service,
    stdin: FAKE_API_TOKEN,
  })
  expect(started.code, started.err).toBe(0)
  const sessions = await runCli(["session", "list", "--json"], { keyring })
  expect(sessions.code, sessions.err).toBe(0)
  expect(JSON.stringify(sessions.json())).toContain("personal")
  const operations = await runCli(["api", "list", "--json"], { keyring })
  expect((operations.json().items as unknown[]).length).toBeGreaterThan(100)
  expect((await runCli(["personal", "session", "end", "--json"], { keyring })).code).toBe(0)
})
