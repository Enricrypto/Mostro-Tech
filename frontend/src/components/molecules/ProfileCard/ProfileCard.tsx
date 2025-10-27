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
      className='w-[1200px] h-[199px] p-6 rounded-[10px] flex'
      style={{
        background: "linear-gradient(90deg, #352B6D 18.27%, #6654D3 100%)",
        boxShadow: "0px 4px 6px 0px #00000017"
      }}
    >
      <div className='flex items-center gap-6'>
        <Avatar src={avatarUrl} variant='square-sm-lg' />
        <div className='flex flex-col gap-4 pb-8'>
          <span className='font-semibold text-white text-[30px]'>{name}</span>
          <span className='text-white text-[16px]'>{handle}</span>
          <div className='flex items-center gap-2'>
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

      <div className='ml-auto self-start'>
        <Button variant='connect-wallet' onClick={onDisconnect}>
          Disconnect Wallet
        </Button>
      </div>
    </div>
  )
}
