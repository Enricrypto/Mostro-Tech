"use client"

import { Avatar } from "@/components/atoms/Avatar"
import { cn } from "@/lib/utils"

interface LeaderBoardProps {
  rank: number
  avatarSrc: string
  username: string
  score: string | number
  tokenSymbol: string
  className?: string
}

export function LeaderBoard({
  rank,
  avatarSrc,
  username,
  score,
  tokenSymbol,
  className
}: LeaderBoardProps) {
  return (
    <div
      className={cn(
        "flex flex-row justify-between items-center w-full rounded-[10px] border bg-[var(--color-card-bg)] border-[var(--color-muted)]",
        "px-3 sm:px-4 md:px-6 lg:px-8",
        "py-3 sm:py-4 md:py-5 lg:py-6",
        "transition-all duration-300",
        className
      )}
    >
      {/* LEFT SIDE: Rank + Avatar + Username */}
      <div className='flex items-center gap-2 sm:gap-4 min-w-0 shrink'>
        <span className='shrink-0 text-xs md:text-sm lg:text-lg font-semibold text-[var(--color-muted)]'>
          # {rank}
        </span>
        <Avatar
          variant='rounded-sm'
          src={avatarSrc}
          className='shrink-0 w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-[26px]'
        />
        <span className='text-xs md:text-sm lg:text-lg font-semibold text-white truncate'>
          {username}
        </span>
      </div>

      {/* RIGHT SIDE: Score + Token Symbol */}
      <div className='flex items-center gap-1 sm:gap-2 justify-end shrink-0'>
        <span className='text-xs md:text-sm lg:text-lg font-semibold text-[var(--color-skyblue)]'>
          {score}
        </span>
        <span className='text-xs md:text-sm lg:text-lg font-medium text-[var(--color-muted)]'>
          {tokenSymbol}
        </span>
      </div>
    </div>
  )
}
