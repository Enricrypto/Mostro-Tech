"use client"

import { useLogin, usePrivy } from "@privy-io/react-auth"
import { useRouter } from "next/navigation"
import { Button } from "@/components/atoms/Button"
import { Avatar } from "@/components/atoms/Avatar"
import * as jdenticon from "jdenticon"
import { cn } from "@/lib/utils"

export function ProfileButton() {
  const { user, ready } = usePrivy()
  const { login } = useLogin()
  const router = useRouter()

  const displayName =
    user?.email?.address ||
    user?.google?.email ||
    user?.wallet?.address ||
    user?.id

  const isLoggedIn = Boolean(user && displayName)
  const disableLogin = !ready
  const buttonSizeClasses = "w-[140px] md:w-[180px] lg:w-[224px]"

  const handleLogin = async () => {
    await login({
      loginMethods: ["google", "wallet", "email"],
      walletChainType: "solana-only"
    })
  }

  // Generate identicon
  const getIdenticon = (value: string, size = 40) => {
    const svg = jdenticon.toSvg(value, size)
    return `data:image/svg+xml;base64,${btoa(svg)}`
  }

  const getUserIcon = () => {
    if (user?.wallet?.address) {
      return (
        <Avatar
          src={getIdenticon(user.wallet.address)}
          alt='wallet avatar'
          variant='rounded-sm'
        />
      )
    }
    if (user?.email?.address || user?.google?.email) {
      const key = displayName || "U"
      return (
        <Avatar
          src={getIdenticon(key)}
          alt='user avatar'
          variant='rounded-initials'
        />
      )
    }
    return null
  }

  return (
    <Button
      disabled={disableLogin}
      variant='connect-wallet'
      className={cn(buttonSizeClasses, "flex justify-center items-center")}
      onClick={() => {
        if (!isLoggedIn) handleLogin()
        else router.push("/profile")
      }}
    >
      <div className='flex items-center min-w-0 w-full gap-1.5'>
        <div className='flex shrink-0 items-center justify-center'>
          {getUserIcon()}
        </div>
        <span className='truncate min-w-0 overflow-hidden whitespace-nowrap text-[clamp(0.75rem,2.5vw,0.875rem)] md:text-[clamp(0.875rem,2.5vw,1rem)]'>
          {isLoggedIn
            ? displayName && displayName.length > 20
              ? `${displayName.slice(0, 6)}...${displayName.slice(-4)}`
              : displayName || ""
            : "Login / Sign Up"}
        </span>
      </div>
    </Button>
  )
}
