"use client"

import React from "react"
import { Avatar } from "@/components/atoms/Avatar"
import { Badge } from "@/components/utils/Badge"
import { ArrowUpIcon, ArrowDownIcon } from "@phosphor-icons/react"

interface TrendingTokenCardProps {
  avatarSrc: string
  name: string
  subtitle: string
  value: string
  badgeText: string
}

export const TrendingTokenCard: React.FC<TrendingTokenCardProps> = ({
  avatarSrc,
  name,
  subtitle,
  value,
  badgeText
}) => {
  const numberValue = parseFloat(badgeText.replace(/[^0-9.-]+/g, ""))
  const badgeVariant = numberValue >= 0 ? "increase" : "decrease"
  const Icon = numberValue >= 0 ? ArrowUpIcon : ArrowDownIcon

  return (
    <div className='flex flex-col justify-between w-full max-w-sm sm:max-w-md md:max-w-[384px] lg:max-w-none p-5 sm:p-6 rounded-[10px] border bg-[#121B2B] border-[#2D3953] shadow-[0_4px_6px_0_#00000017]'>
      {/* Top Section */}
      <div className='flex gap-3 min-w-0'>
        <Avatar src={avatarSrc} variant='square-community' />
        <div className='flex flex-col gap-0.5 min-w-0'>
          <p
            className='text-white font-medium leading-7 tracking-[-0.5%] whitespace-nowrap overflow-hidden'
            style={{ fontSize: "clamp(1.25rem, 2vw, 1.4rem)" }}
          >
            {name}
          </p>
          <span
            className='text-[#B3B3B3] font-medium text-[12px] leading-5 truncate'
            title={subtitle}
          >
            $ {subtitle}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className='border-t border-[#D2D3D5] my-2 sm:my-3' />

      {/* Bottom Section */}
      <div className='flex justify-between items-center pt-1 min-w-0'>
        <span className='text-white font-bold text-[15px] sm:text-[16px] leading-6 truncate'>
          $ {value}
        </span>
        <Badge
          variant={badgeVariant}
          icon={<Icon size={14} weight='bold' className='text-current' />}
        >
          {badgeText}
        </Badge>
      </div>
    </div>
  )
}
