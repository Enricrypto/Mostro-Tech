import { PublicKey, clusterApiUrl } from "@solana/web3.js"

export const CLUSTER_URL =
  process.env.NEXT_PUBLIC_SOLANA_RPC_URL || clusterApiUrl("devnet")

export const PROGRAM_ID = new PublicKey(
  process.env.NEXT_PUBLIC_SOLANA_PROGRAM_ID ?? "YourFallbackProgramIdHere"
)
