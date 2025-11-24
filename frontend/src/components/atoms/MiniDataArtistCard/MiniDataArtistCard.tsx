"use client"
import { cn } from "@/lib/utils"

interface MiniDataArtistCardProps {
  topText: string
  bottomText: string
  className?: string
}

export function MiniDataArtistCard({
  topText,
  bottomText,
  className
}: MiniDataArtistCardProps) {
  return (
    <div
      className={cn(
        "flex h-24 w-full flex-col items-start justify-center gap-3 rounded-xl bg-(--color-primary-light) p-4 md:p-6",
        className
      )}
    >
      {/* Top Text */}
      <div className='flex w-full items-center gap-2'>
        <span className='font-inter max-md:text-sm text-base font-medium text-black'>
          {topText}
        </span>
      </div>

      {/* Bottom Text */}
      <div className='flex w-full items-center gap-1'>
        <span className='font-inter max-md:text-lg text-2xl font-semibold text-black'>
          {bottomText}
        </span>
      </div>
    </div>
  )
}
