import react from "react"
import { useQuery } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"

import {
  DataStructure,
  Deposit,
} from "@/components/blockchain/message-interface"

const baseURL = "https://bridge-api.public.zkevm-test.net/merkle-proof"

export const useGetMerkleProof = (deposit: Deposit) => {
  const fetchProof = async () => {
    const { data } = await axios.get<DataStructure>(baseURL, {
      params: { deposit_cnt: deposit.deposit_cnt, net_id: deposit.orig_net },
    })
    return data
  }
  return useQuery<DataStructure, AxiosError>(["proof"], fetchProof, {
    enabled: !!deposit,
    refetchInterval: 10000000,
  })
}
