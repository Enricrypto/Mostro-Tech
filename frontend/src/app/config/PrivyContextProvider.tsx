"use client"

import { PrivyProvider } from "@privy-io/react-auth"
import { toSolanaWalletConnectors } from "@privy-io/react-auth/solana"
import LoginButton from "@/components/LoginButton"

console.log("Privy App ID:", process.env.NEXT_PUBLIC_PRIVY_APP_ID)

export default function Providers({ children }: { children: React.ReactNode }) {
  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID!

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
        loginMethods: ["google", "wallet"]
      }}
    >
      <LoginButton />
      {children}
    </PrivyProvider>
  )
}
