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
        "leaderboard flex items-center justify-between transition-shadow duration-300 ease-out",
        className
      )}
      style={{
        borderRadius: "10px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "var(--color-muted)",
        gap: "14px",
        padding: "24px",
        background: "var(--color-card-bg)" // you can adjust to #121B2B if needed
      }}
    >
      {/* LEFT SIDE: Rank + Avatar + Username */}
      <div className='flex items-center gap-3.5'>
        <span className='text-[18px] font-semibold leading-7 text-(--color-muted)'>
          # {rank}
        </span>
        <Avatar
          variant='rounded-sm'
          src={avatarSrc}
          className='w-10 h-10 rounded-[26px]'
        />
        <span className='text-[18px] font-semibold leading-7 text-white'>
          {username}
        </span>
      </div>

      {/* RIGHT SIDE: Score + Token Symbol */}
      <div className='flex items-center gap-2'>
        <span className='text-right text-[18px] font-semibold leading-7 text-(--color-skyblue)'>
          {score}
        </span>
        <span className='text-[12px] font-medium leading-5 text-(--color-muted)'>
          {tokenSymbol}
        </span>
      </div>
    </div>
  )
}
