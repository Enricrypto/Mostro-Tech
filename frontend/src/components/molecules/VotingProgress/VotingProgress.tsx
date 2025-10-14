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
    red: {
      color: "text-[var(--color-red)]"
    },
    green: {
      color: "text-[var(--color-green)]"
    }
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
    <div className='flex flex-col gap-[6px] w-full'>
      {/* Top Section */}
      <div className='flex justify-between items-center w-full h-[22px]'>
        <div
          className={`flex items-center gap-[8px] w-[54px] h-[22px] px-[2px] py-[2px] rounded-[10px] ${variants[variant].color}`}
        >
          <span className='flex items-center justify-center w-[20px] h-[20px]'>
            {icon}
          </span>
          <span className='font-inter font-medium text-[16px] leading-[20px]'>
            {label}
          </span>
        </div>

        <span
          className={`font-inter font-medium text-[16px] leading-[20px] ${variants[variant].color}`}
        >
          {percentage.toFixed(0)}%
        </span>
      </div>

      {/* Progress Bar */}
      <ProgressBar
        value={percentage}
        variant={variant}
        className='h-[16px] w-full rounded-[40px]'
      />

      {/* Votes Count */}
      <div className='w-[414px] text-[12px] leading-[20px] font-inter font-medium text-[#B3B3B3]'>
        {votes} {votes === 1 ? "vote" : "votes"}
      </div>
    </div>
  )

  return (
    <div className='flex flex-col gap-[17px] w-[414px] h-auto opacity-100'>
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
