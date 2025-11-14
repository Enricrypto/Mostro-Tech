"use client"

import React from "react"
import { Avatar } from "@/components/atoms/Avatar"
import { Button } from "@/components/atoms/Button"
import { WalletIcon, ArrowSquareOutIcon } from "@phosphor-icons/react"

interface ProfileCardProps {
  name: string
  walletAddress: string
  avatarUrl: string
  handle: string
  onDisconnect: () => void
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  walletAddress,
  avatarUrl,
  handle,
  onDisconnect
}) => {
  return (
    <div
      className='
    w-full max-w-[1200px] p-6 rounded-[10px] flex flex-col md:flex-row 
    items-center md:items-start md:justify-between gap-6 md:gap-12
  '
      style={{
        background: "linear-gradient(90deg, #352B6D 18.27%, #6654D3 100%)",
        boxShadow: "0px 4px 6px 0px #00000017"
      }}
    >
      {/* Left Section: Avatar + Info */}
      <div className='flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 w-full md:w-auto'>
        <Avatar src={avatarUrl} variant='square-md' />

        <div className='flex flex-col gap-2 w-full sm:w-auto text-center sm:text-left'>
          <span className='font-semibold text-white text-[30px] truncate'>
            {name}
          </span>
          <span className='text-white text-[16px] truncate'>{handle}</span>
          <div className='flex items-center justify-center sm:justify-start gap-2 w-full sm:w-auto truncate'>
            <WalletIcon size={20} weight='bold' className='text-white' />
            <span className='text-white truncate max-w-[200px]'>
              {walletAddress}
            </span>
            <ArrowSquareOutIcon
              size={24}
              weight='bold'
              className='text-white'
            />
          </div>
        </div>
      </div>

      {/* Right Section: Disconnect Button */}
      <div className='w-full md:w-auto mt-4 flex justify-center md:mt-0 md:justify-end'>
        <Button variant='connect-wallet' onClick={onDisconnect}>
          Disconnect Wallet
        </Button>
      </div>
    </div>
  )
}
