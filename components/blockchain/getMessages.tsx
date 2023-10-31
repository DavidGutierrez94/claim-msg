import { useQuery } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"

import { ApiResponse } from "@/components/blockchain/message-interface"

export const useMessages = () => {
  const address = "0x85f708FE0eAcC0D692593344A907a11Ef7c1FFA9"
  const baseURL = "https://bridge-api.public.zkevm-test.net/bridges/"

  const fetchMessages = async () => {
    const { data } = await axios.get<ApiResponse>(baseURL + address)
    return data
  }

  const queryKey = ["messages", address]
  const { data } = useQuery<ApiResponse, AxiosError>(queryKey, fetchMessages, {
    enabled: !!address,
    refetchInterval: 100000,
  })
  return data
}

export default useMessages
