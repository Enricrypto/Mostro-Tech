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
        "flex flex-row justify-between items-center gap-3 sm:gap-6 md:gap-10 px-4 sm:px-5 md:px-6 py-4 sm:py-5 md:py-6 rounded-[10px] border border-(--color-muted) bg-(--color-card-bg)",
        "w-full transition-all duration-300",
        className
      )}
      style={{
        borderRadius: "10px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "var(--color-muted)",
        backgroundColor: "var(--color-card-bg)"
      }}
    >
      {/* LEFT SIDE: Rank + Avatar + Username */}
      <div className='flex items-center gap-2 sm:gap-3 md:gap-3.5 min-w-0 shrink'>
        <span className='shrink-0 text-[16px] sm:text-[17px] md:text-[18px] font-semibold leading-7 text-(--color-muted)'>
          # {rank}
        </span>
        <Avatar
          variant='rounded-sm'
          src={avatarSrc}
          className='shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-[26px]'
        />
        <span className='text-[16px] sm:text-[17px] md:text-[18px] font-semibold leading-7 text-white truncate max-w-[60%] sm:max-w-[200px]'>
          {username}
        </span>
      </div>

      {/* RIGHT SIDE: Score + Token Symbol */}
      <div className='flex items-center gap-1.5 sm:gap-2 justify-end shrink-0'>
        <span className='text-[16px] sm:text-[17px] md:text-[18px] font-semibold leading-7 text-(--color-skyblue)'>
          {score}
        </span>
        <span className='text-[12px] sm:text-[13px] md:text-[14px] font-medium leading-5 text-(--color-muted)'>
          {tokenSymbol}
        </span>
      </div>
    </div>
  )
}
