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
        "flex flex-row justify-between items-center w-[350px] md:w-[350] lg:w-[570] px-4 md:px-3 lg:px-8 py-4 md:py-3 lg:py-6 rounded-[10px] border border-(--color-muted) bg-(--color-card-bg)",
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
      <div className='flex items-center gap-4 min-w-0 shrink'>
        <span className='shrink-0 text-[12px] md:text-[14px] lg:text-[18px] font-semibold leading-7 text-(--color-muted)'>
          # {rank}
        </span>
        <Avatar
          variant='rounded-sm'
          src={avatarSrc}
          className='shrink-0 w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-[26px]'
        />
        <span className='text-[12px] md:text-[14px] lg:text-[18px] font-semibold leading-7 text-white truncate max-w-[60%]'>
          {username}
        </span>
      </div>

      {/* RIGHT SIDE: Score + Token Symbol */}
      <div className='flex items-center gap-2 justify-end shrink-0'>
        <span className='text-[12px] md:text-[14px] lg:text-[18px] font-semibold leading-7 text-(--color-skyblue)'>
          {score}
        </span>
        <span className='text-[12px] md:text-[14px] lg:text-[18px] font-medium leading-5 text-(--color-muted)'>
          {tokenSymbol}
        </span>
      </div>
    </div>
  )
}
