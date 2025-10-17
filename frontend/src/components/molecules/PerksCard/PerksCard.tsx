"use client"

import { LockIcon } from "@phosphor-icons/react"
import { Badge } from "@/components/utils/Badge"

interface PerksCardProps {
  title: string
  description: string
  tokenAmount: number | string
}

export const PerksCard: React.FC<PerksCardProps> = ({
  title,
  description,
  tokenAmount
}) => {
  return (
    <div
      className='perks-card-default flex flex-col justify-between p-4 gap-4 transition-shadow duration-200 hover:shadow-[0_0_16.9px_5px_#6654D380]'
      style={{ border: "1px solid #998CE1" }}
    >
      {/* Top Section */}
      <div className='flex justify-between items-center text-white'>
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
      <Badge variant='neutral' className='w-[84px] h-[22px]'>
        {tokenAmount} tokens
      </Badge>
    </div>
  )
}
