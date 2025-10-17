"use client"

import * as React from "react"
import { Avatar } from "@/components/atoms/Avatar"
import { Badge } from "@/components/utils/Badge"
import { SketchLogoIcon } from "@phosphor-icons/react"

interface TokenHoldingsUserCardProps {
  avatarSrc: string
  userName: string
  tokenCount: number
  badgeText: string
  leftTopValue: number // dynamic $ value
  rightTopPerks: number // dynamic number of perks
}

export const TokenHoldingsUserCard: React.FC<TokenHoldingsUserCardProps> = ({
  avatarSrc,
  userName,
  tokenCount,
  badgeText,
  leftTopValue,
  rightTopPerks
}) => {
  return (
    <div className='token-holdings-card hover:shadow-[0_0_16.9px_5px_#71D6FB80] transition-shadow duration-200'>
      {/* Top Section */}
      <div className='flex justify-between items-center'>
        {/* Left Side */}
        <div className='flex items-center gap-[12px]'>
          <Avatar src={avatarSrc} variant='rounded-sm' />
          <div className='flex flex-col'>
            <span className='text-[20px] font-semibold leading-[28px] text-white'>
              {userName}
            </span>
            <span className='text-[12px] font-medium leading-[20px] text-[#B3B3B3]'>
              {tokenCount} tokens
            </span>
          </div>
        </div>

        {/* Right Side */}
        <Badge className='rounded-[10px] border border-[#DCFD63] bg-[#DCFD634D] text-[#DCFD63] text-[12px] font-medium flex items-center justify-center px-2 py-[2px]'>
          {badgeText}
        </Badge>
      </div>

      {/* Separation Line */}
      <div className='border-t border-[#D2D3D5]' />

      {/* Bottom Section */}
      <div className='flex justify-between items-center'>
        {/* Left Part */}
        <div className='flex flex-col items-center gap-1'>
          {/* Top: value */}
          <span className='text-[16px] font-bold text-white'>
            ${leftTopValue}
          </span>
          {/* Bottom: label */}
          <span className='text-[12px] font-medium text-[#B3B3B3]'>
            Current Value
          </span>
        </div>

        {/* Right Part */}
        <div className='flex flex-col items-center gap-1'>
          {/* Top: icon + number */}
          <div className='flex items-center gap-2'>
            <SketchLogoIcon className='w-[20px] h-[20px] text-[#4995E0]' />
            <span className='text-[16px] font-bold text-white'>
              {rightTopPerks}
            </span>
          </div>
          {/* Bottom: label */}
          <span className='text-[12px] font-medium text-[#B3B3B3]'>
            Perks Unlocked
          </span>
        </div>
      </div>
    </div>
  )
}
