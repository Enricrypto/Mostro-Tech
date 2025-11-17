"use client"

import { useLogin, usePrivy } from "@privy-io/react-auth"
import { Button } from "@/components/atoms/Button"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const userBadgeCVA = cva(
  "rounded font-body font-medium text-white flex items-center justify-center",
  {
    variants: {
      size: {
        sm: "text-xs px-2 py-1",
        md: "text-sm px-3 py-1.5",
        lg: "text-base px-4 py-2"
      },
      theme: {
        accentDark: "bg-[var(--color-accent-dark)]",
        primary: "bg-[var(--color-primary)]"
      }
    },
    defaultVariants: {
      size: "md",
      theme: "accentDark"
    }
  }
)

export const ConnectButton = () => {
  const { login } = useLogin()
  const { user, logout } = usePrivy()

  // Display name: email > Google > wallet > DID
  const displayName =
    user?.email?.address ||
    user?.google?.email ||
    user?.wallet?.address ||
    user?.id

  const handleLogin = () =>
    login({
      loginMethods: ["google", "wallet"],
      walletChainType: "solana-only"
    })

  const handleLogout = () => logout()

  return (
    <div className='fixed z-50 flex flex-col sm:flex-row items-center gap-2 sm:gap-3'>
      {user && displayName ? (
        <>
          <span className={cn(userBadgeCVA())}>
            {displayName.length > 20
              ? `${displayName.slice(0, 6)}...${displayName.slice(-4)}`
              : displayName}
          </span>

          <Button size='default' variant='highlight' onClick={handleLogout}>
            Logout
          </Button>
        </>
      ) : (
        <Button size='default' variant='highlight' onClick={handleLogin}>
          Launch App
        </Button>
      )}
    </div>
  )
}
