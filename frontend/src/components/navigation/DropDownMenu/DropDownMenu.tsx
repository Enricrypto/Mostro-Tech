"use client"

import { useState, useRef, useEffect } from "react"
import { useLogin, usePrivy } from "@privy-io/react-auth"
import { useRouter } from "next/navigation"
import { Button } from "@/components/atoms/Button"
import { SignOutIcon, CaretDownIcon } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

export function DropDownMenu() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { user, logout } = usePrivy()
  const { login } = useLogin()
  const router = useRouter()

  // Redirect after successful login
  useEffect(() => {
    if (user) {
      router.push("/dashboard")
    }
  }, [user, router])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
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

  return (
    <div className='relative' ref={ref}>
      {/* MAIN BUTTON */}
      <Button
        themeVariant='connect-wallet'
        className={cn(
          buttonSizeClasses,
          "flex items-center justify-center", // always center
          isLoggedIn ? "gap-2" : "" // add gap only when logged in
        )}
        onClick={() => {
          if (!isLoggedIn)
            handleLogin() // opens Privy modal with wallet & Google
          else setOpen(!open)
        }}
      >
        {isLoggedIn && <CaretDownIcon className='w-4 h-4 text-black' />}
        <span>
          {isLoggedIn
            ? displayName && displayName.length > 20
              ? `${displayName.slice(0, 6)}...${displayName.slice(-4)}`
              : displayName || ""
            : "Connect Wallet"}
        </span>
      </Button>

      {/* DROPDOWN CONTENT */}
      {isLoggedIn && open && (
        <div className='absolute left-0 top-full mt-1 z-50'>
          <Button
            themeVariant='connect-wallet'
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
