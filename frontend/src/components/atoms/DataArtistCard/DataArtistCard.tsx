"use client"

import { cn } from "@/lib/utils"

interface DataArtistCardProps {
  topText: string
  topIcon?: React.ReactNode
  bottomLeftText: string
  bottomRightText?: string
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
        "w-full",
        "p-2 md:p-3 lg:p-6",
        "bg-(--color-datacard-bg) border border-(--color-datacard-border)",
        "rounded-xl flex flex-col gap-3"
      )}
    >
      {/* Top Section */}
      <div className='w-full flex items-center justify-between gap-2'>
        <span className='text-(--color-grey) font-medium text-[clamp(0.75rem,1.5vw,0.875rem)] leading-5'>
          {topText}
        </span>
        {topIcon && (
          <div className='text-(--color-button-bg-selected) w-[clamp(1rem,2vw,1.25rem)] h-[clamp(1rem,2vw,1.25rem)]'>
            {topIcon}
          </div>
        )}
      </div>

      {/* Bottom Section */}
      <div className='w-full flex items-center gap-2'>
        <div className='flex items-center gap-2'>
          <span className='text-white font-semibold text-[clamp(1rem,2vw,1.875rem)] leading-tight tracking-[-0.015em]'>
            {bottomLeftText}
          </span>

          {bottomRightText && (
            <span className='text-(--color-highlight) font-medium text-[clamp(0.75rem,1.5vw,0.875rem)] leading-5'>
              {bottomRightText}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
