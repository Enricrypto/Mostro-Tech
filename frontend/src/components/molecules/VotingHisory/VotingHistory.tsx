"use client"

import { ThumbsDownIcon, ThumbsUpIcon } from "@phosphor-icons/react"
import { Badge } from "@/components/utils/Badge"
import { cva, type VariantProps } from "class-variance-authority"

const perksCardCVA = cva(
  "flex flex-col justify-between w-[374px] h-[134px] p-[18px] gap-[14px] rounded-[10px] border flex-shrink-0 bg-[#121B2B] transition-shadow duration-200 hover:border-[#6654d3] hover:shadow-[0_0_16.9px_5px_#6654D380]"
)

export interface VotingHistoryProps extends VariantProps<typeof perksCardCVA> {
  title: string
  artist: string
  date: string | number
  vote: boolean
  status: string
}

export function VotingHistory({
  title,
  artist,
  date,
  vote,
  status
}: VotingHistoryProps) {
  const voteIcon = vote ? (
    <ThumbsUpIcon size={16} />
  ) : (
    <ThumbsDownIcon size={16} />
  )
  const voteVariant = vote ? "increase" : "decrease"

  return (
    <div
      className='
        flex flex-col justify-between h-[134px] p-[18px] gap-[14px] rounded-[10px] bg-[#121B2B] 
        border-[2px] border-[#2D3953] 
        shadow-[0_4px_6px_0_#00000017]
      '
    >
      {/* Top row: title + vote badge */}
      <div className='flex justify-between items-center text-white'>
        <span className='flex items-center justify-start font-inter font-semibold text-[18px] leading-[28px]'>
          {title}
        </span>
        <Badge variant={voteVariant} icon={voteIcon}>
          {vote ? "Yes" : "No"}
        </Badge>
      </div>

      {/* Middle row: artist + status badge */}
      <div className='flex w-full items-center justify-between'>
        <span className='font-inter font-medium text-[12px] leading-[20px] text-[#B3B3B3]'>
          {artist}
        </span>
        <Badge variant='neutral'>{status}</Badge>
      </div>

      {/* Bottom row: date */}
      <span className='font-inter font-medium text-[12px] leading-[20px] text-[#B3B3B3]'>
        {date}
      </span>
    </div>
  )
}
