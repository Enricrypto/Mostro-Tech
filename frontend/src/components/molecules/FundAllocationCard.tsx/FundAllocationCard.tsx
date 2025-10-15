"use client"

import React from "react"
import { Badge } from "@/components/utils/Badge" // adjust path if needed

interface FundAllocationCardProps {
  title: string
  badgeText: string
  bottomLeftValue: number | string
}

export const FundAllocationCard: React.FC<FundAllocationCardProps> = ({
  title,
  badgeText,
  bottomLeftValue
}) => {
  return (
    <div className='w-[462px] h-[104px] p-6 flex flex-col gap-[14px] rounded-[10px] border-2 border-[var(--color-datacard-border)] bg-[var(--color-datacard-bg)]'>
      {/* Top Section */}
      <div className='w-[414px] h-[28px] flex justify-between items-center'>
        {/* Left Side */}
        <div className='w-[131px] h-[28px] flex items-center text-left text-[var(--color-white)] font-inter font-semibold text-[18px] leading-[28px]'>
          {title}
        </div>

        {/* Right Side - Badge */}
        <Badge variant='neutral'>{badgeText}</Badge>
      </div>

      {/* Bottom Section */}
      <div className='w-[414px] h-[28px] flex items-center'>
        <div className='w-[84px] h-[20px] text-[var(--color-proposal-artist)] font-inter font-medium text-[12px] leading-[20px] text-left'>
          {bottomLeftValue} tokens
        </div>
      </div>
    </div>
  )
}
