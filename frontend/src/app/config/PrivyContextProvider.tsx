"use client"

import React, { useState, useEffect } from "react"
import { PrivyProvider } from "@privy-io/react-auth"
import { toSolanaWalletConnectors } from "@privy-io/react-auth/solana"

// Solana wallet adapter imports
import {
  ConnectionProvider,
  WalletProvider
} from "@solana/wallet-adapter-react"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter
} from "@solana/wallet-adapter-wallets"
import { clusterApiUrl } from "@solana/web3.js"

export default function Providers({ children }: { children: React.ReactNode }) {
  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID!
  const [mounted, setMounted] = useState(false)

  // Prevent SSR rendering to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // --- Solana setup ---
  const endpoint =
    process.env.NEXT_PUBLIC_SOLANA_RPC_URL || clusterApiUrl("devnet")

  const wallets = [new PhantomWalletAdapter(), new SolflareWalletAdapter()]

  return (
    <PrivyProvider
      appId={appId}
      config={{
        externalWallets: {
          solana: {
            connectors: toSolanaWalletConnectors()
          }
        },
        appearance: {
          theme: "#F9F9F9",
          logo: "/logo.png",
          accentColor: "#4A90E2",
          showWalletLoginFirst: false,
          walletList: [
            "phantom",
            "solflare",
            "backpack",
            "detected_solana_wallets"
          ]
        },
        loginMethods: ["google", "wallet", "email"]
      }}
    >
      {/* === SOLANA CONTEXTS === */}
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>{children}</WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </PrivyProvider>
  )
}
