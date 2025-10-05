"use client"

import { FC, useMemo } from "react"
import {
  ConnectionProvider,
  WalletProvider
} from "@solana/wallet-adapter-react"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter
} from "@solana/wallet-adapter-wallets"

import { BackpackWalletAdapter } from "@solana/wallet-adapter-backpack"

export const WalletContextProvider: FC<{ children: React.ReactNode }> = ({
  children
}) => {
  // You can change the RPC endpoint later if needed
  const endpoint = "https://api.devnet.solana.com"

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new BackpackWalletAdapter()
    ],
    []
  )

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
