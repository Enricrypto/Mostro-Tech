"use client"

import React, { useState, useEffect } from "react"
import { PrivyProvider } from "@privy-io/react-auth"
import { toSolanaWalletConnectors } from "@privy-io/react-auth/solana"

const disablePrivy = process.env.NEXT_PUBLIC_DISABLE_PRIVY === "true"

export default function Providers({ children }: { children: React.ReactNode }) {
  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID!
  const [mounted, setMounted] = useState(false)

  // Prevent SSR rendering to avoid hydration errors
  useEffect(() => {
    setMounted(true)
  }, [])

  // During SSR (and before mount), render nothing
  if (!mounted) return null

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
      {/* Wrap children in a fragment to avoid key warnings */}
      <React.Fragment>{children}</React.Fragment>
    </PrivyProvider>
  )
}
