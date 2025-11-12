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
        "w-full max-w-[18rem] sm:max-w-[20rem] md:max-w-88",
        "p-4 sm:p-5 md:p-6",
        "bg-(--color-datacard-bg) border border-(--color-datacard-border)",
        "rounded-[0.625rem] flex flex-col gap-3"
      )}
    >
      {/* Top Section */}
      <div className='w-full flex items-center justify-between gap-2'>
        <span
          className='text-(--color-grey) font-medium'
          style={{
            fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
            lineHeight: "1.25rem"
          }}
        >
          {topText}
        </span>
        {topIcon && (
          <div
            className='text-(--color-button-bg-selected)'
            style={{
              width: "clamp(1rem, 2vw, 1.25rem)",
              height: "clamp(1rem, 2vw, 1.25rem)"
            }}
          >
            {topIcon}
          </div>
        )}
      </div>

      {/* Bottom Section */}
      <div className='w-full flex items-center gap-2'>
        <div className='flex items-center gap-2'>
          <span
            className='text-white font-semibold'
            style={{
              fontSize: "clamp(1.5rem, 3vw, 1.875rem)",
              lineHeight: "1.25",
              letterSpacing: "-0.015em"
            }}
          >
            {bottomLeftText}
          </span>

          {bottomRightText && (
            <span
              className='text-(--color-highlight) font-medium'
              style={{
                fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
                lineHeight: "1.25rem"
              }}
            >
              {bottomRightText}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
