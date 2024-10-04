import { ethers as ethersV5 } from "ethers-v5"

export default {
  async fetch(request: Request, env: Env, context: ExecutionContext) {
    console.log("ethers", ethersV5.BigNumber.from(1))

    return new Response("OK")
  },
}
