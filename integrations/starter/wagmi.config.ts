import { defineConfig } from "@wagmi/cli"
import { react } from "@wagmi/cli/plugins"

import { PolygonZkEVMBridge } from "./abis/PolygonZkEVMBridge"

export default defineConfig({
  out: "./integrations/starter/generated/polygonZkEVMFBridge-wagmi.ts",
  contracts: [
    {
      name: "polygonZkEVMBridge",
      abi: PolygonZkEVMBridge,
    },
  ],
  plugins: [react()],
})
