"use client"

import React from "react"
import { Badge } from "@/components/utils/Badge"
import { Tooltip } from "@/components/atoms/Tooltip"

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
    <div
      className='w-[312px] md:w-[462px] p-5 flex flex-col gap-3 rounded-[10px] border-2'
      style={{
        borderColor: "var(--color-datacard-border)",
        backgroundColor: "var(--color-datacard-bg)"
      }}
    >
      {/* Top Section */}
      <div className='flex justify-between items-center'>
        {/* Left Side */}
        <Tooltip variant='blue' content={title}>
          <div className=' text-white font-inter font-semibold text-[12px] md:text-[14px] lg:text-[14px] leading-7 truncate'>
            {title}
          </div>
        </Tooltip>

        {/* Right Side - Badge */}
        <Badge
          variant='neutral'
          className='text-[10px] md:text-[12px] lg:text-[12px]'
        >
          {badgeText}
        </Badge>
      </div>

      {/* Bottom Section */}
      <div className='flex items-center'>
        <div
          className='font-inter font-medium text-[12px] leading-5'
          style={{ color: "var(--color-grey)" }}
        >
          ${bottomLeftValue} tokens
        </div>
      </div>
    </div>
  )
}
