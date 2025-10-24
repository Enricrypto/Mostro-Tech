"use client"

import * as React from "react"
import { Avatar } from "@/components/atoms/Avatar"
import { Badge } from "@/components/utils/Badge"
import { SketchLogoIcon } from "@phosphor-icons/react"

export interface TokenHoldingsUserCardProps {
  avatarSrc: string
  userName: string
  tokenCount: number
  badgeText: string
  leftTopValue: number
  rightTopPerks: number
}

export const TokenHoldingsUserCard: React.FC<TokenHoldingsUserCardProps> = ({
  avatarSrc,
  userName,
  tokenCount,
  badgeText,
  leftTopValue,
  rightTopPerks
}) => {
  // Convert badgeText to number to determine variant
  const numberValue = parseFloat(badgeText.replace(/[^0-9.-]+/g, "")) // removes any symbols like %
  const badgeVariant = numberValue >= 0 ? "increase" : "decrease"

  return (
    <div
      className='flex flex-col justify-between border-2 rounded-[10px] p-[24px] gap-[14px] w-[384px] h-[172px] transition-shadow duration-200 hover:shadow-[0_0_16.9px_5px_#71D6FB80]'
      style={{
        background: "#121B2B",
        boxShadow: "0px 4px 6px 0px #00000017",
        borderColor: "#2D3953"
      }}
    >
      {/* Top Section */}
      <div className='flex justify-between items-center'>
        {/* Left Side */}
        <div className='flex items-center gap-[12px]'>
          <Avatar
            src={avatarSrc || "/default-avatar.png"}
            variant='rounded-sm'
          />
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
        <Badge
          variant={badgeVariant}
          className='rounded-[10px] text-[12px] font-medium flex items-center justify-center px-2 py-[2px]'
        >
          {badgeText}
        </Badge>
      </div>

      {/* Separation Line */}
      <div className='border-t border-[#1F2A3D]' />

      {/* Bottom Section */}
      <div className='flex justify-between items-center'>
        {/* Left Part */}
        <div className='flex flex-col items-center gap-1'>
          <span className='text-[16px] font-bold text-white'>
            ${leftTopValue}
          </span>
          <span className='text-[12px] font-medium text-[#B3B3B3]'>
            Current Value
          </span>
        </div>

        {/* Right Part */}
        <div className='flex flex-col items-center gap-1'>
          <div className='flex items-center gap-2'>
            <SketchLogoIcon className='w-[20px] h-[20px] text-[#4995E0]' />
            <span className='text-[16px] font-bold text-white'>
              {rightTopPerks}
            </span>
          </div>
          <span className='text-[12px] font-medium text-[#B3B3B3]'>
            Perks Unlocked
          </span>
        </div>
      </div>
    </div>
  )
}
