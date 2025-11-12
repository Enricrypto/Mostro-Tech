"use client"

import { Avatar } from "@/components/atoms/Avatar"
import { Badge } from "@/components/utils/Badge"
import {
  ArrowUpIcon,
  ArrowDownIcon,
  SketchLogoIcon
} from "@phosphor-icons/react"

export interface TokenHoldingsUserCardProps {
  id: number
  avatarSrc: string
  artist: string
  tokenCount: number
  performance: string
  amount: number
  perks: number
}

export const TokenHoldingsUserCard: React.FC<TokenHoldingsUserCardProps> = ({
  id,
  avatarSrc,
  artist,
  tokenCount,
  performance,
  amount,
  perks
}) => {
  const numberValue = parseFloat(performance.replace(/[^0-9.-]+/g, ""))
  const badgeVariant = numberValue >= 0 ? "increase" : "decrease"
  const Icon = numberValue >= 0 ? ArrowUpIcon : ArrowDownIcon

  return (
    <div className='flex flex-col justify-between gap-3.5 w-full max-w-[384px] p-4 rounded-lg border transition-shadow duration-200 hover:shadow-[0_0_16.9px_5px_#71D6FB80] bg-[#121B2B] border-[#2D3953] h-auto'>
      {/* Top Section */}
      <div className='flex justify-between items-start flex-wrap gap-3'>
        {/* Left */}
        <div className='flex gap-3 flex-1 min-w-0'>
          <Avatar
            src={avatarSrc || "/default-avatar.png"}
            variant='square-community'
          />
          <div className='flex flex-col min-w-0'>
            <span className='text-white font-semibold text-[20px] leading-7 truncate'>
              {artist}
            </span>
            <span className='text-[#B3B3B3] font-medium text-[12px] truncate'>
              {tokenCount} tokens
            </span>
          </div>
        </div>
        {/* Right */}
        <Badge
          variant={badgeVariant}
          className='flex items-center gap-1 text-[12px] font-medium whitespace-nowrap'
          icon={<Icon weight='bold' size={14} />}
        >
          {performance}
        </Badge>
      </div>

      {/* Divider */}
      <div className='border-t border-[#1F2A3D]' />

      {/* Bottom Section */}
      <div className='flex justify-between flex-wrap gap-4'>
        {/* Current Value */}
        <div className='flex flex-col items-center flex-1 min-w-[100px]'>
          <span className='text-white font-bold text-[16px] truncate'>
            ${amount}
          </span>
          <span className='text-[#B3B3B3] font-medium text-[12px]'>
            Current Value
          </span>
        </div>

        {/* Perks */}
        <div className='flex flex-col items-center flex-1 min-w-[100px]'>
          <div className='flex items-center gap-2'>
            <SketchLogoIcon className='w-5 h-5 text-[#4995E0]' />
            <span className='text-white font-bold text-[16px] truncate'>
              {perks}
            </span>
          </div>
          <span className='text-[#B3B3B3] font-medium text-[12px]'>
            Perks Unlocked
          </span>
        </div>
      </div>
    </div>
  )
}
