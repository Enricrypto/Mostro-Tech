"use client"

import { useLogin, usePrivy } from "@privy-io/react-auth"
import { Button } from "../Button/Button"

export const ConnectButton = () => {
  const { login } = useLogin()
  const { user, logout } = usePrivy()

  // Get a display name: email > Google > wallet > DID
  const displayName =
    user?.email?.address ||
    user?.google?.email ||
    user?.wallet?.address ||
    user?.id

  const handleLogin = () => {
    login({
      loginMethods: ["google", "wallet"],
      walletChainType: "solana-only" // Adjust based on your supported chains
    })
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <div className='fixed top-4 right-4 z-50 flex items-center gap-3'>
      {user && displayName ? (
        <>
          <span className='px-3 py-1 rounded font-medium text-sm text-[var(--color-white)]'>
            {displayName.length > 20
              ? `${displayName.slice(0, 6)}...${displayName.slice(-4)}`
              : displayName}
          </span>
          <Button variant='destructive' size='lg' onClick={handleLogout}>
            Logout
          </Button>
        </>
      ) : (
        <Button variant='default' size='lg' onClick={handleLogin}>
          Connect
        </Button>
      )}
    </div>
  )
}
