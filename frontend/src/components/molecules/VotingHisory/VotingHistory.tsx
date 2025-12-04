"use client"

import { ThumbsDownIcon, ThumbsUpIcon } from "@phosphor-icons/react"
import { Badge } from "@/components/utils/Badge"

export interface VotingHistoryProps {
  id: number
  title: string
  artist: string
  date: string | number
  vote: "Yes" | "No"
  status: string
}

export function VotingHistory({
  title,
  artist,
  date,
  vote,
  status
}: VotingHistoryProps) {
  const isYes = vote.toLowerCase() === "yes"
  const voteIcon = isYes ? (
    <ThumbsUpIcon size={16} />
  ) : (
    <ThumbsDownIcon size={16} />
  )
  const voteVariant = isYes ? "increase" : "decrease"

  return (
    <div
      className='
    flex flex-col justify-between
    w-full
    max-w-full
    min-h-[132px]
    p-6 gap-4 rounded-[10px] border border-gray-600
    bg-[#121B2B] transition-shadow duration-200
    hover:border-[#6654d3] hover:shadow-[0_0_16.9px_5px_#6654D380]
    
    sm:max-w-[361px]   /* mobile layout */
    md:max-w-[588px]   /* desktop layout */
  '
    >
      {/* Top row: title + vote badge */}
      <div className='flex justify-between items-center w-full min-w-0'>
        <span className='flex-grow font-inter font-semibold text-white text-base md:text-lg leading-6 truncate min-w-0 overflow-hidden'>
          {title}
        </span>
        <Badge variant={voteVariant} icon={voteIcon} className="flex-shrink-0 ml-2">
          {isYes ? "Yes" : "No"}
        </Badge>
      </div>

      {/* Middle row: artist + status badge */}
      <div className='flex justify-between items-center w-full min-w-0'>
        <span className='flex-grow font-inter font-medium text-xs md:text-sm text-[#B3B3B3] truncate min-w-0 overflow-hidden'>
          {artist}
        </span>
        <Badge variant='neutral' className="flex-shrink-0 ml-2">{status}</Badge>
      </div>

      {/* Bottom row: date */}
      <span className='font-inter font-medium text-sm text-[#B3B3B3] truncate'>
        {date}
      </span>
    </div>
  )
}
