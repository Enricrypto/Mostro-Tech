"use client"

import { useLogin, usePrivy } from "@privy-io/react-auth"
import { Button } from "@/components/atoms/Button"

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
          <span
            className='px-3 py-1 rounded font-body font-medium text-sm'
            style={{
              color: "var(--color-white)",
              backgroundColor: "var(--color-accent-dark)"
            }}
          >
            {displayName.length > 20
              ? `${displayName.slice(0, 6)}...${displayName.slice(-4)}`
              : displayName}
          </span>

          <button
            className='py-3 px-6 rounded-full font-body font-medium transition'
            style={{
              backgroundColor: "var(--color-highlight)",
              color: "var(--color-black)"
            }}
            onClick={handleLogout}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                "var(--color-accent-dark)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--color-highlight)")
            }
          >
            Logout
          </button>
        </>
      ) : (
        <button
          className='py-3 px-6 rounded-full font-body font-medium transition'
          style={{
            backgroundColor: "var(--color-highlight)",
            color: "var(--color-black)"
          }}
          onClick={handleLogin}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--color-accent-dark)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--color-highlight)")
          }
        >
          Launch App
        </button>
      )}
    </div>
  )
}
