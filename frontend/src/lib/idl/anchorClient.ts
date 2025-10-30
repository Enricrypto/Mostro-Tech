"use client"

import { useMemo } from "react"
import { AnchorProvider, Program, Idl, web3 } from "@project-serum/anchor"
import { useWallet } from "@solana/wallet-adapter-react"
import idl from "../idl/MostroMVP.json"
import { PROGRAM_ID } from "./constants"

const { Connection } = web3

export function useProgram() {
  const wallet = useWallet()

  const program = useMemo(() => {
    if (!wallet || !wallet.publicKey) return null

    const connection = new Connection(
      process.env.NEXT_PUBLIC_SOLANA_RPC_URL!,
      "confirmed"
    )

    const provider = new AnchorProvider(connection, wallet as any, {
      preflightCommitment: "processed"
    })

    return new Program(idl as unknown as Idl, PROGRAM_ID, provider)
  }, [wallet])

  return program
}
