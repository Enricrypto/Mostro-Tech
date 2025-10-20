// need to fix the styles
"use client"

import { Badge } from "@/components/utils/Badge"
import { ProgressBar } from "@/components/atoms/ProgressBar"
import { ArrowRightIcon, ClockClockwiseIcon } from "@phosphor-icons/react"
import { Button } from "@/components/atoms/Button"

interface ProposalProgressCardProps {
  title: string
  requestedValue: number | string
  yesPercentage: number
  noPercentage: number
  badgeText: string
}

export const ProposalOngoingCard: React.FC<ProposalProgressCardProps> = ({
  title,
  requestedValue,
  yesPercentage,
  noPercentage,
  badgeText
}) => {
  return (
    <div>
      {/* ===================== TOP SECTION ===================== */}
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between items-center gap-2 flex-wrap'>
          <p className='text-white font-inter font-semibold text-[18px] leading-[28px] truncate'>
            {title}
          </p>
          <Badge
            className='badge badge-increase whitespace-nowrap'
            icon={<ClockClockwiseIcon size={14} />}
          >
            {badgeText}
          </Badge>
        </div>

        <p className='text-[#B3B3B3] font-inter font-medium text-[12px] leading-[20px]'>
          Requesting: {requestedValue} tokens
        </p>
      </div>

      {/* ===================== PROGRESS BAR ===================== */}
      <div>
        <ProgressBar value={yesPercentage} variant='blue' />
      </div>

      {/* ===================== BOTTOM SECTION ===================== */}
      <div className='flex justify-between items-center gap-3 flex-nowrap'>
        <div className='flex flex-col justify-between'>
          <p className='text-white font-inter font-bold text-[12px] leading-[20px]'>
            {yesPercentage}% Yes
          </p>
          <p className='text-[#B3B3B3] font-inter font-medium text-[12px] leading-[20px]'>
            {noPercentage}% No
          </p>
        </div>

        <Button
          className='w-[158px] whitespace-nowrap'
          variant='continue'
          icon={<ArrowRightIcon weight='bold' />}
          iconPosition='right'
        >
          View Proposal
        </Button>
      </div>
    </div>
  )
}
