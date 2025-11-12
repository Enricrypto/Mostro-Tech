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
        "leaderboard flex md:flex-row md:justify-between md:items-center gap-4 md:gap-14 p-6",
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
      <div className='flex items-center gap-3.5 w-full md:w-auto md:justify-start'>
        <span className='shrink-0 text-[18px] font-semibold leading-7 text-(--color-muted)'>
          # {rank}
        </span>
        <Avatar
          variant='rounded-sm'
          src={avatarSrc}
          className='shrink-0 w-10 h-10 rounded-[26px]'
        />
        <span className='text-[18px] font-semibold leading-7 text-white truncate'>
          {username}
        </span>
      </div>

      {/* RIGHT SIDE: Score + Token Symbol */}
      <div className='flex items-center gap-2 w-full md:w-auto justify-end md:justify-end'>
        <span className='text-[18px] font-semibold leading-7 text-(--color-skyblue)'>
          {score}
        </span>
        <span className='text-[12px] font-medium leading-5 text-(--color-muted)'>
          {tokenSymbol}
        </span>
      </div>
    </div>
  )
}
