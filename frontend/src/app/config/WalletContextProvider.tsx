"use client"

import { FC, useMemo, ReactNode } from "react"
import {
  ConnectionProvider,
  WalletProvider
} from "@solana/wallet-adapter-react"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"

// Adapters you actually want to support
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  LedgerWalletAdapter,
  TorusWalletAdapter
} from "@solana/wallet-adapter-wallets"
import { GlowWalletAdapter } from "@solana/wallet-adapter-glow"

// Mainnet RPC endpoint
const MAINNET_ENDPOINT =
  process.env.NEXT_PUBLIC_SOLANA_RPC || "https://api.mainnet-beta.solana.com"
console.log("RPC endpoint:", MAINNET_ENDPOINT)

export const WalletContextProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new SolflareWalletAdapter(),
      new LedgerWalletAdapter(),
      new TorusWalletAdapter()
    ],
    []
  )

  return (
    <ConnectionProvider endpoint={MAINNET_ENDPOINT}>
      <WalletProvider wallets={wallets} autoConnect={false}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
