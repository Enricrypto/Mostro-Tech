"use client"

import { ProgressBar } from "@/components/atoms/ProgressBar"
import { ThumbsDownIcon, ThumbsUpIcon } from "@phosphor-icons/react"

interface VotingProgressProps {
  yesVotes?: number
  noVotes?: number
}

export function VotingProgress({
  yesVotes = 0,
  noVotes = 0
}: VotingProgressProps) {
  const totalVotes = yesVotes + noVotes
  const clamp = (val: number, min = 0, max = 100) =>
    Math.min(Math.max(val, min), max)

  const yesPercentage = clamp(
    totalVotes > 0 ? (yesVotes / totalVotes) * 100 : 0
  )
  const noPercentage = clamp(totalVotes > 0 ? (noVotes / totalVotes) * 100 : 0)

  const variants = {
    red: "text-[var(--color-red)]",
    green: "text-[var(--color-green)]"
  }

  const VoteRow = ({
    label,
    icon,
    votes,
    percentage,
    variant
  }: {
    label: string
    icon: React.ReactNode
    votes: number
    percentage: number
    variant: "red" | "green"
  }) => (
    <div className='flex flex-col gap-2 w-full'>
      {/* Top Row: Icon + Label + Percentage */}
      <div className='flex justify-between items-center w-full'>
        <div className={`flex items-center gap-2 ${variants[variant]}`}>
          <span className='flex items-center justify-center'>{icon}</span>
          <span className='font-inter font-medium text-[16px]'>{label}</span>
        </div>
        <span
          className={`font-inter font-medium text-[16px] ${variants[variant]}`}
        >
          {percentage.toFixed(0)}%
        </span>
      </div>

      {/* Progress Bar */}
      <ProgressBar
        value={percentage}
        variant={variant}
        className='w-full h-[16px] rounded-full'
      />

      {/* Votes Count */}
      <div className='w-full font-inter font-medium text-[12px] text-[#B3B3B3]'>
        {votes} {votes === 1 ? "vote" : "votes"}
      </div>
    </div>
  )

  return (
    <div className='flex flex-col gap-4 w-full'>
      <VoteRow
        label='No'
        icon={<ThumbsDownIcon size={20} />}
        votes={noVotes}
        percentage={noPercentage}
        variant='red'
      />
      <VoteRow
        label='Yes'
        icon={<ThumbsUpIcon size={20} />}
        votes={yesVotes}
        percentage={yesPercentage}
        variant='green'
      />
    </div>
  )
}
