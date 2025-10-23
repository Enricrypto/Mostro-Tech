"use client"

import { useState, useRef, useEffect } from "react"
import { useLogin, usePrivy } from "@privy-io/react-auth"
import { useRouter } from "next/navigation"
import { Button } from "@/components/atoms/Button"
import { Avatar } from "@/components/atoms/Avatar"
import * as jdenticon from "jdenticon"
import { SignOutIcon, CaretDownIcon } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

export function DropDownMenu() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { user, logout } = usePrivy()
  const { login } = useLogin()
  const router = useRouter()

  // Redirect after login
  useEffect(() => {
    if (user) router.push("/profil")
  }, [user, router])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const displayName =
    user?.email?.address ||
    user?.google?.email ||
    user?.wallet?.address ||
    user?.id

  const isLoggedIn = Boolean(user && displayName)

  const handleLogin = async () => {
    await login({
      loginMethods: ["google", "wallet"],
      walletChainType: "solana-only"
    })
  }

  const handleLogout = async () => {
    await logout()
    router.push("/")
  }

  const buttonSizeClasses = "w-[224px] h-[42px]"

  // Generate a Solana wallet identicon
  const getIdenticon = (value: string, size = 40) => {
    const svg = jdenticon.toSvg(value, size)
    return `data:image/svg+xml;base64,${btoa(svg)}`
  }

  // Decide which avatar/icon to show
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
    <div className='relative' ref={ref}>
      {/* MAIN BUTTON */}
      <Button
        variant='connect-wallet'
        className={cn(buttonSizeClasses, "flex justify-center items-center")}
        onClick={() => {
          if (!isLoggedIn) handleLogin()
          else setOpen(!open)
        }}
      >
        <div className='flex items-center gap-2 whitespace-nowrap'>
          {getUserIcon()}
          <span>
            {isLoggedIn
              ? displayName && displayName.length > 20
                ? `${displayName.slice(0, 6)}...${displayName.slice(-4)}`
                : displayName || ""
              : "Connect Wallet"}
          </span>
          {isLoggedIn && <CaretDownIcon className='w-4 h-4 text-black' />}
        </div>
      </Button>

      {/* DROPDOWN CONTENT */}
      {isLoggedIn && open && (
        <div className='absolute left-0 top-full mt-1 z-50'>
          <Button
            variant='connect-wallet'
            icon={<SignOutIcon className='w-[16px] h-[16px] text-black' />}
            iconPosition='left'
            className={cn(buttonSizeClasses, "rounded-t-none rounded-b-[6px]")}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      )}
    </div>
  )
}
