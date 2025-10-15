"use client"

import { cn } from "@/lib/utils"

interface DataArtistCardProps {
  topText: string
  topIcon?: React.ReactNode
  bottomLeftText: string
  bottomRightText?: string // ✅ make optional
}

export function DataArtistCard({
  topText,
  topIcon,
  bottomLeftText,
  bottomRightText
}: DataArtistCardProps) {
  return (
    <div
      className={cn(
        "w-[282px] h-[112px] p-6 bg-[#121B2B] border border-[#2D3953] rounded-[10px] flex flex-col gap-[14px]"
      )}
    >
      {/* Top Section */}
      <div className='w-[234px] h-[64px] flex items-center justify-between gap-[8px]'>
        <span className='text-[#B3B3B3] font-medium text-[12px] leading-[20px]'>
          {topText}
        </span>
        {topIcon && <div className='w-[20px] h-[20px]'>{topIcon}</div>}
      </div>

      {/* Bottom Section */}
      <div className='w-[234px] h-[36px] flex items-center justify-between gap-[8px]'>
        <span className='text-white font-semibold text-[30px] leading-[36px] tracking-[-0.75%]'>
          {bottomLeftText}
        </span>

        {bottomRightText && (
          <span className='text-[#121B2B] bg-[#DCFD63] font-medium text-[12px] leading-[20px] px-2 py-[2px] rounded'>
            {bottomRightText}
          </span>
        )}
      </div>
    </div>
  )
}
