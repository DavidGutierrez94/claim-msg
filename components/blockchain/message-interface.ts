export interface Deposit {
  leaf_type: number
  orig_net: number
  orig_addr: `0x${string}`
  amount: bigint
  dest_net: number
  dest_addr: `0x${string}`
  block_num: string
  deposit_cnt: string
  network_id: number
  tx_hash: string
  claim_tx_hash: string
  metadata: `0x${string}`
  ready_for_claim: boolean
}

export interface ApiResponse {
  deposits: Deposit[]
  total_cnt: string
}

export interface Proof {
  merkle_proof: [
    `0x${string}`,
    `0x${string}`,
    `0x${string}`,
    `0x${string}`,
    `0x${string}`,
    `0x${string}`,
    `0x${string}`,
    `0x${string}`,
    `0x${string}`,
    `0x${string}`,
    `0x${string}`,
    `0x${string}`,
    `0x${string}`,
    `0x${string}`,
    `0x${string}`,
    `0x${string}`,
    `0x${string}`,
    `0x${string}`,
    `0x${string}`,
    `0x${string}`,
    `0x${string}`,
    `0x${string}`,
    `0x${string}`,
    `0x${string}`,
    `0x${string}`,
    `0x${string}`,
    `0x${string}`,
    `0x${string}`,
    `0x${string}`,
    `0x${string}`,
    `0x${string}`,
    `0x${string}`
  ]
  main_exit_root: `0x${string}`
  rollup_exit_root: `0x${string}`
}
export interface DataStructure {
  proof: Proof
}
