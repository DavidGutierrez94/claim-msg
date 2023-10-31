import React, { useEffect, useState } from "react"
import error from "next/error"
import { isError } from "@tanstack/react-query"
import { useContractWrite, usePrepareContractWrite } from "wagmi"

import { useMessages } from "@/components/blockchain/getMessages"
import { Deposit, Proof } from "@/components/blockchain/message-interface"
import { PolygonZkEVMBridge } from "@/integrations/starter/abis/PolygonZkEVMBridge"
import {
  usePolygonZkEvmBridgeClaimMessage,
  usePolygonZkEvmBridgeGetDepositRoot,
} from "@/integrations/starter/generated/polygonZkEVMFBridge-wagmi"

import { useGetMerkleProof } from "./claimMessage"

interface CardProps {
  deposit: Deposit
}
const bridgeAddress = "0xF6BEEeBB578e214CA9E23B0e9683454Ff88Ed2A7"
const Card: React.FC<CardProps> = ({ deposit }) => {
  const proof = useGetMerkleProof(deposit)
  const merkleProof = proof.data?.proof.merkle_proof
  const mainExitRoot = proof.data?.proof.main_exit_root
  const rollupExitRoot = proof.data?.proof.rollup_exit_root
  /*
//read works
  const { data, isLoading, isSuccess, write } = useContractWrite(config)

  const { data, isError, isLoading } = usePolygonZkEvmBridgeGetDepositRoot({
    address: bridgeAddress,
  })
?*/
  const { data, isLoading, isSuccess, error, write } =
    usePolygonZkEvmBridgeClaimMessage({
      address: bridgeAddress,
      args: [
        merkleProof || [
          "0x00",
          "0x00",
          "0x00",
          "0x00",
          "0x00",
          "0x00",
          "0x00",
          "0x00",
          "0x00",
          "0x00",
          "0x00",
          "0x00",
          "0x00",
          "0x00",
          "0x00",
          "0x00",
          "0x00",
          "0x00",
          "0x00",
          "0x00",
          "0x00",
          "0x00",
          "0x00",
          "0x00",
          "0x00",
          "0x00",
          "0x00",
          "0x00",
          "0x00",
          "0x00",
          "0x00",
          "0x00",
        ],
        parseInt(deposit.deposit_cnt),
        mainExitRoot || "0x00",
        rollupExitRoot || "0x00",
        deposit.orig_net,
        deposit.orig_addr,
        deposit.dest_net,
        deposit.dest_addr,
        deposit.amount,
        deposit.metadata,
      ],
    })
  const handleClaimClick = () => {
    write()
    console.log(data)
  }

  return (
    <div className="m-4 rounded-md border p-4">
      <div className="mb-2">
        <strong>Original Address:</strong> {deposit.orig_addr}
      </div>
      <div className="mb-2">
        <strong>Amount:</strong> {deposit.amount.toString()}
      </div>
      <div className="mb-2">
        <strong>Destination Address:</strong> {deposit.dest_addr}
      </div>
      <div className="mb-2">
        <strong>Block Number:</strong> {deposit.block_num}
      </div>
      {deposit.ready_for_claim && (
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={handleClaimClick}
          disabled={isLoading}
        >
          Claim
        </button>
      )}
      {error && <div className="text-red-500">Error: {error.message}</div>}
    </div>
  )
}

const MessageCardList: React.FC = () => {
  const messages = useMessages()
  const [deposits, setDeposits] = useState<Deposit[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (messages) {
      setDeposits(messages.deposits)
      setLoading(false)
    }
  }, [messages])

  return (
    <div className="flex flex-col items-center">
      {loading && (
        <div className="text-4xl">
          <p> Loading...</p>
        </div>
      )}
      {!loading &&
        deposits.map((deposit: Deposit) => (
          <Card key={deposit.deposit_cnt} deposit={deposit} />
        ))}
    </div>
  )
}
export default MessageCardList
