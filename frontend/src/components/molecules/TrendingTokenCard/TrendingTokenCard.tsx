"use client"

import React from "react"
import { Avatar } from "@/components/atoms/Avatar"
import { Badge } from "@/components/utils/Badge"

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
  // Convert badgeText to number to determine variant
  const numberValue = parseFloat(badgeText.replace(/[^0-9.-]+/g, "")) // removes any symbols like %
  const badgeVariant = numberValue >= 0 ? "increase" : "decrease"

  return (
    <div className='w-[384px] h-[148px] rounded-[10px] border border-[#2D3953] p-[24px] bg-[#121B2B] shadow-[0_4px_6px_0_#00000017] flex flex-col justify-between'>
      {/* Top Section */}
      <div className='flex items-center gap-[12px]'>
        <Avatar src={avatarSrc} variant='rounded-sm' />
        <div className='flex flex-col justify-center gap-[2px] min-w-0'>
          <span
            className='text-white font-semibold text-[20px] leading-[28px] whitespace-nowrap overflow-hidden text-ellipsis'
            title={name}
          >
            {name}
          </span>
          <span
            className='text-[#B3B3B3] font-medium text-[12px] leading-[20px] whitespace-nowrap overflow-hidden text-ellipsis'
            title={subtitle}
          >
            Requesting: {subtitle} tokens
          </span>
        </div>
      </div>

      {/* Separation Line */}
      <div className='border-t border-[#D2D3D5] my-[14px]' />

      {/* Bottom Section */}
      <div className='flex justify-between items-center'>
        <span
          className='font-bold text-[16px] leading-[24px] whitespace-nowrap overflow-hidden text-ellipsis text-white'
          title={value}
        >
          {value}
        </span>
        <Badge variant={badgeVariant}>{badgeText}</Badge>
      </div>
    </div>
  )
}
