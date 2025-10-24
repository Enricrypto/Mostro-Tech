"use client"

import React from "react"
import { usePrivy } from "@privy-io/react-auth"
import { useRouter } from "next/navigation"
import { Avatar } from "@/components/atoms/Avatar"
import { Button } from "@/components/atoms/Button"
import { WalletIcon, ArrowSquareOutIcon } from "@phosphor-icons/react"

interface ProfileCardProps {
  name: string
  walletAddress: string
  avatarUrl: string
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  walletAddress,
  avatarUrl
}) => {
  const { user, logout } = usePrivy()
  const router = useRouter()

  const onDisconnect = async () => {
    await logout()
    router.push("/") // redirect to home after logout
  }

  const getHandle = () => {
    if (user?.farcaster?.username) return `@${user.farcaster.username}`
    if (user?.email?.address) return `@${user.email.address.split("@")[0]}`
    if (user?.google?.email) return `@${user.google.email.split("@")[0]}`
    if (user?.wallet?.address)
      return `@${user.wallet.address.slice(0, 6)}...${user.wallet.address.slice(
        -4
      )}`
    return "@user"
  }

  const displayHandle = getHandle()

  return (
    <div
      className='w-[1200px] h-[199px] p-6 rounded-[10px] flex'
      style={{
        background: "linear-gradient(90deg, #352B6D 18.27%, #6654D3 100%)",
        boxShadow: "0px 4px 6px 0px #00000017"
      }}
    >
      {/* Left Section */}
      <div className='flex items-center gap-6'>
        {/* Avatar */}
        <div className='avatar avatar--square-sm-lg overflow-hidden'>
          <Avatar src={avatarUrl} variant='square-sm-lg' />
        </div>

        {/* Profile Info */}
        <div className='flex flex-col gap-4 pb-8'>
          {/* Name */}
          <span
            className='font-semibold text-white whitespace-nowrap overflow-hidden'
            style={{
              fontSize: "30px",
              letterSpacing: "-0.75%"
            }}
          >
            {name}
          </span>
          {/* Handler / username */}
          <span
            className=' text-white whitespace-nowrap overflow-hidden'
            style={{
              fontSize: "16px",
              opacity: 1
            }}
          >
            {displayHandle} {/* e.g., @xaccount */}
          </span>

          {/* Wallet Info */}
          <div className='flex items-center gap-2'>
            <div className='flex items-center gap-2'>
              <WalletIcon size={20} weight='bold' className='text-white' />
              <span className='font-inter font-medium text-white truncate max-w-[200px]'>
                {walletAddress}
              </span>
            </div>
            <ArrowSquareOutIcon
              size={24}
              weight='bold'
              className='text-white'
            />
          </div>
        </div>
      </div>

      {/* Right Section - Disconnect Button */}
      <div className='ml-auto self-start'>
        <Button variant='connect-wallet' onClick={onDisconnect}>
          Disconnect Wallet
        </Button>
      </div>
    </div>
  )
}
