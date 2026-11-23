import { crmManifestProblems, parseCrmManifest } from "@wirecat/cli-core/crm"
import { describe, expect, it } from "vitest"
import { API } from "./config.js"
import { definitions } from "./generated/definitions.js"
import { SOURCE } from "./generated/wirecat-config.js"

describe("the source in wirecat.config.ts", () => {
  it("reads only operations and paths the generated API has", () => {
    expect(crmManifestProblems(parseCrmManifest(SOURCE, API.manifest), API.manifest, definitions)).toEqual([])
  })
})
