import { mkdirSync, rmSync, writeFileSync } from "node:fs"
import { join } from "node:path"
import { fakeApi, sampleOf } from "@wirecat/cli-base/codegen"
import { apiFlagOf, manifestBaseUrl, sendsBytes } from "@wirecat/cli-core/cli"
import { afterEach, expect, it } from "vitest"
import { API } from "./config.js"
import { definitions } from "./generated/definitions.js"
import { FAKE_API_TOKEN } from "./testing/fake-api.js"
import { runCli } from "./testing/harness.js"

const configFile = join(process.env.WCATTIO_CONFIG_DIR ?? "", "config.json")
const upload = join(process.env.WCATTIO_CONFIG_DIR ?? "", "..", "upload.bin")
const withPermissions = (permissions: Record<string, string>) => {
  mkdirSync(join(configFile, ".."), { recursive: true })
  writeFileSync(configFile, JSON.stringify({ profiles: { personal: { permissions } } }))
}
afterEach(() => {
  rmSync(configFile, { force: true })
  rmSync(upload, { force: true })
})

type Operation = (typeof API.manifest.operations)[number]

// The fake checks each call's path, parameters and body, and the token where its security, else the spec's, names it.
const fake = () =>
  fakeApi({
    operations: API.manifest.operations,
    definitions,
    baseUrl: manifestBaseUrl(API.manifest),
    security: API.manifest.security,
    securitySchemes: API.manifest.securitySchemes,
    token: FAKE_API_TOKEN,
  })

const deleteKeys = [
  ...new Set(
    API.manifest.operations.flatMap((operation) =>
      (operation.permissions ?? []).map((permission) => permission.key).filter((key) => key.endsWith(".delete")),
    ),
  ),
]

const argsOf = (operation: Operation) => [
  ...operation.parameters
    .filter((parameter) => parameter.required)
    .flatMap((parameter) => [`--${apiFlagOf(parameter.name)}`, String(sampleOf(parameter.schema, definitions))]),
  ...(sendsBytes(operation) ? ["--body-file", upload] : []),
  ...(operation.request?.schema
    ? ["--body", JSON.stringify(sampleOf({ type: "ref", ref: operation.request.schema }, definitions))]
    : []),
  // Every change asks first, so outside a terminal it needs --yes.
  ...(operation.effect === "read" ? [] : ["--yes"]),
]

it("the spec offers operations", () => {
  expect(API.manifest.operations.length).toBeGreaterThan(0)
})

// One test each, so a large API stays inside the per-test timeout and a failure names its operation.
it.each(API.manifest.operations.map((operation) => [operation.command, operation] as const))(
  "sends %s as the spec describes it",
  async (_, operation) => {
    writeFileSync(upload, new Uint8Array([0x89, 0x50, 0x4e, 0x47]))
    withPermissions({ api: "allow", ...Object.fromEntries(deleteKeys.map((key) => [key, "allow"])) })
    const service = fake()
    const ran = await runCli(["personal", "api", operation.command, ...argsOf(operation), "--json"], { service })
    expect(ran.code, ran.err).toBe(0)
    expect(service.refusals).toEqual([])
    expect(service.calls).toHaveLength(1)
  },
)

const destructive = API.manifest.operations.filter((operation) => operation.effect === "destructive")

it("a write through api asks first, so outside a terminal it waits for --yes with nothing sent", async () => {
  const service = fake()
  const create = API.manifest.operations.find((operation) => operation.command === "objects-records-create")
  if (!create) throw new Error("the spec has no objects-records-create")
  const args = argsOf(create).filter((arg) => arg !== "--yes")
  const ran = await runCli(["personal", "api", "objects-records-create", ...args, "--json"], { service })
  expect(ran.json()).toMatchObject({ error: { code: "confirmation_required" } })
  expect(service.calls).toEqual([])
})

// A service whose API only reads has no delete to check.
it.runIf(destructive.length > 0)(
  "a delete through api checks the manifest's delete key too, before anything is sent",
  async () => {
    expect(deleteKeys.length).toBeGreaterThan(0)
    withPermissions({ api: "allow", ...Object.fromEntries(deleteKeys.map((key) => [key, "deny"])) })
    const service = fake()
    for (const operation of destructive) {
      const ran = await runCli(["personal", "api", operation.command, ...argsOf(operation), "--json"], { service })
      expect(ran.json()).toMatchObject({ error: { code: "permission_error" } })
    }
    expect(service.calls).toEqual([])
  },
)

// Every option the spec offers, with a body from a file; the CLI's test matrix names each one.
it.each(API.manifest.operations.map((operation) => [operation.command, operation] as const))(
  "takes every option of %s, its body from a file",
  async (_, operation) => {
    writeFileSync(upload, new Uint8Array([0x89, 0x50, 0x4e, 0x47]))
    withPermissions({ api: "allow", ...Object.fromEntries(deleteKeys.map((key) => [key, "allow"])) })
    const service = fake()
    const options = operation.parameters.flatMap((parameter) => [
      `--${apiFlagOf(parameter.name)}`,
      String(sampleOf(parameter.schema, definitions)),
    ])
    const body = operation.request?.schema
      ? sampleOf({ type: "ref", ref: operation.request.schema }, definitions)
      : undefined
    const bodyFile = join(upload, "..", `${operation.command}.json`)
    if (body !== undefined && !sendsBytes(operation)) writeFileSync(bodyFile, JSON.stringify(body))
    const argv = [
      ...options,
      ...(sendsBytes(operation) ? ["--body-file", upload] : body === undefined ? [] : ["--body-file", bodyFile]),
      // Every change asks first, so outside a terminal it needs --yes.
      ...(operation.effect === "read" ? [] : ["--yes"]),
    ]
    const ran = await runCli(["personal", "api", operation.command, ...argv, "--json"], { service })
    expect(ran.code, ran.err).toBe(0)
    expect(service.refusals).toEqual([])
    if (!operation.pagination) return
    // The fake answers every page with a row; past the first page this one answers none, so --all reaches the end.
    const ending = {
      fetch: async (input: string | URL | Request, init?: RequestInit) => {
        const url = new URL(input instanceof Request ? input.url : input)
        const sent = typeof init?.body === "string" ? (JSON.parse(init.body) as { offset?: number }) : {}
        return Number(url.searchParams.get("offset") ?? sent.offset ?? 0) > 0
          ? Response.json({ data: [] })
          : service.fetch(input, init)
      },
    }
    const all = await runCli(["personal", "api", operation.command, ...argv, "--all", "--json"], { service: ending })
    if (operation.pagination.style === "offset") expect(all.code, all.err).toBe(0)
    // A cursor list the fake answers with the same next cursor every time: --all must stop there, not loop.
    else expect(all.err).toContain("provider.invalid-response")
  },
)
