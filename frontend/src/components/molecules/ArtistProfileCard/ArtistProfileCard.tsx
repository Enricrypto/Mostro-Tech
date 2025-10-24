"use client"

import React from "react"
import { WalletIcon, ArrowSquareOutIcon } from "@phosphor-icons/react"
import { Avatar } from "@/components/atoms/Avatar"
import { Button } from "@/components/atoms/Button"

interface ProfileCardProps {
  name: string
  handle: string
  walletAddress: string
  onDisconnect: () => void
  avatarUrl: string
}

export const ArtistProfileCard: React.FC<ProfileCardProps> = ({
  name,
  handle,
  walletAddress,
  onDisconnect,
  avatarUrl
}) => {
  return (
    <div
      className='w-[1200px] h-[199px] p-[24px] gap-[24px] rounded-[10px] flex'
      style={{
        background: "linear-gradient(90deg, #352B6D 18.27%, #6654D3 100%)",
        boxShadow: "0px 4px 6px 0px #00000017"
      }}
    >
      {/* Left Section */}
      <div className='flex items-center gap-[24px] h-[151px]'>
        {/* Avatar */}
        <div className='avatar avatar--square-sm-lg overflow-hidden'>
          <Avatar src={avatarUrl} variant='square-sm-lg' />
        </div>

        {/* Profile Info */}
        <div className='flex flex-col gap-[12px]'>
          {/* Name */}
          <span
            className='font-inter font-semibold text-white whitespace-nowrap overflow-hidden text-ellipsis block'
            style={{
              fontSize: "30px",
              lineHeight: "36px",
              letterSpacing: "-0.75%"
            }}
          >
            {name}
          </span>

          {/* Handle */}
          <span className='font-inter font-medium text-white whitespace-nowrap text-sm'>
            @{handle}
          </span>

          {/* Wallet Info */}
          <div className='flex items-center gap-[12px]'>
            <div className='flex items-center gap-[8px]'>
              <WalletIcon size={20} weight='bold' className='text-white' />
              <span className='font-inter font-medium text-white truncate max-w-[200px]'>
                {walletAddress}
              </span>
            </div>
            <ArrowSquareOutIcon
              size={20}
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
