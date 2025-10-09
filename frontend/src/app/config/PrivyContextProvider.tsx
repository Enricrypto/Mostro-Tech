"use client"

import { PrivyProvider } from "@privy-io/react-auth"
import LoginButton from "@/components/LoginButton"

console.log("Privy App ID:", process.env.NEXT_PUBLIC_PRIVY_APP_ID)

export default function Providers({ children }: { children: React.ReactNode }) {
  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID!

  return (
    <PrivyProvider
      appId={appId}
      config={{
        appearance: {
          theme: "#F9F9F9",
          logo: "/logo.png", // Your logo URL
          accentColor: "#4A90E2",
          showWalletLoginFirst: false,
          walletList: ["phantom", "solflare", "metamask"]
        },
        loginMethods: ["google", "wallet"]
      }}
    >
      <LoginButton />
      {children}
    </PrivyProvider>
  )
}
