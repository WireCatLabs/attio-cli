import { parseCrmManifest } from "@wirecat/cli-core/crm"
import { type CrmManifestFake, crmManifestFake, FAKE_MANIFEST_TOKEN } from "@wirecat/cli-core/crm/testing"
import { API } from "../config.js"
import { definitions } from "../generated/definitions.js"
import { SOURCE, VERIFY } from "../generated/wirecat-config.js"
import { fakeServiceApi } from "./fake-api.js"

export const crmFake = (): CrmManifestFake =>
  crmManifestFake(parseCrmManifest(SOURCE, API.manifest), { api: API.manifest, definitions })

/**
 * fakeServiceApi answers every page of an offset list with a sample row, so a sync over it reads until its budget runs
 * out; crmManifestFake pages the CRM's rows to their end but does not answer the call auth.verify names.
 */
export const signInAndCrm = (crm: CrmManifestFake) => {
  const verify = API.manifest.operations.find((one) => one.id === VERIFY.operation)
  const path = verify?.binding.kind === "http" ? verify.binding.path : undefined
  const pattern = path ? new RegExp(`${path.replace(/\{[^}]+\}/g, "[^/]+")}$`) : undefined
  const signIn = fakeServiceApi(FAKE_MANIFEST_TOKEN)
  return {
    signIn,
    fetch: (input: string | URL | Request, init?: RequestInit) => {
      const url = new URL(input instanceof Request ? input.url : input)
      return pattern?.test(url.pathname) ? signIn.fetch(input, init) : crm.fetch(input, init)
    },
  }
}
