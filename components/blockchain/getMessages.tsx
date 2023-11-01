import { useQuery } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"

import { ApiResponse } from "@/components/blockchain/message-interface"

export const useMessages = (address: string) => {
  const Contractaddress =
    address || "0x2a18182a03e2d6c8e4Ead96ADE88B07Fdab26AD5"
  const baseURL = "https://bridge-api.public.zkevm-test.net/bridges/"

  const fetchMessages = async () => {
    const { data } = await axios.get<ApiResponse>(baseURL + Contractaddress)
    return data
  }

  const queryKey = ["messages", Contractaddress]
  const { data } = useQuery<ApiResponse, AxiosError>(queryKey, fetchMessages, {
    enabled: !!Contractaddress,
    refetchInterval: 100000,
  })
  return data
}

export default useMessages
