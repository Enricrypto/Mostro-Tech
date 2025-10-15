"use client"

import { LockIcon } from "@phosphor-icons/react"
import { Badge } from "@/components/utils/Badge"

interface PerksCardProps {
  title: string
  description: string
  tokenAmount: number | string
  variant?: "default" | "highlighted" // new prop
}

export const PerksCard: React.FC<PerksCardProps> = ({
  title,
  description,
  tokenAmount,
  variant = "default" // default to "default"
}) => {
  // Determine CSS class based on variant
  const cardClass =
    variant === "highlighted" ? "perks-card-highlighted" : "perks-card-default"

  return (
    <div className={cardClass}>
      {/* Top Section */}
      <div className='flex justify-between items-center'>
        <span className='flex-1 h-[28px] flex items-center justify-start font-inter font-semibold text-[18px] leading-[28px]'>
          {title}
        </span>
        <LockIcon size={20} />
      </div>

      {/* Middle Section */}
      <div className='flex-1 h-[20px] font-inter font-medium text-[12px] leading-[20px] text-[#B3B3B3]'>
        {description}
      </div>

      {/* Bottom Section - Badge */}
      <Badge
        variant='neutral'
        className='w-[84px] h-[22px] rounded-[10px] px-[8px] py-[2px] gap-[8px] flex items-center justify-center'
      >
        <span className='font-inter font-medium text-[12px] leading-[20px]'>
          {tokenAmount} tokens
        </span>
      </Badge>
    </div>
  )
}
