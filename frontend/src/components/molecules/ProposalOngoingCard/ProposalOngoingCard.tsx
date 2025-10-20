"use client"

import { Badge } from "@/components/utils/Badge"
import { ProgressBar } from "@/components/atoms/ProgressBar"
import { ArrowRightIcon, ClockClockwiseIcon } from "@phosphor-icons/react"
import { Button } from "@/components/atoms/Button"
import { cva, type VariantProps } from "class-variance-authority"

const proposalOngoingCardCVA = cva(
  "min-w-[462px] max-h-[188px] p-[24px] flex flex-col gap-[14px] rounded-[10px] bg-[var(--color-datacard-bg)] transition-all duration-300 ease-out",
  {
    variants: {
      variant: {
        default:
          "border-2 border-[var(--color-datacard-border)] shadow-[0_4px_6px_0px_#00000017]",
        highlighted:
          "border-2 border-[#aee9ff] shadow-[0_0_16.9px_5px_#71d6fb80]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export interface ProposalOngoingCardProps
  extends VariantProps<typeof proposalOngoingCardCVA> {
  title: string
  requestedValue: number | string
  yesPercentage: number
  noPercentage: number
  badgeText: string
}

export const ProposalOngoingCard: React.FC<ProposalOngoingCardProps> = ({
  title,
  requestedValue,
  yesPercentage,
  noPercentage,
  badgeText,
  variant
}) => {
  return (
    <div className={proposalOngoingCardCVA({ variant })}>
      {/* Top Section */}
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between items-center gap-2 flex-wrap'>
          <p className='text-white font-inter font-semibold text-[18px] leading-[28px] truncate'>
            {title}
          </p>
          <Badge variant='increase' icon={<ClockClockwiseIcon size={14} />}>
            {badgeText}
          </Badge>
        </div>
        <p className='text-[var(--color-grey)] font-inter font-medium text-[12px] leading-[20px]'>
          Requesting: {requestedValue} tokens
        </p>
      </div>

      {/* Progress Bar */}
      <div>
        <ProgressBar value={yesPercentage} variant='blue' />
      </div>

      {/* Bottom Section */}
      <div className='flex justify-between items-center gap-3 flex-nowrap'>
        <div className='flex flex-col justify-between'>
          <p className='text-white font-inter font-bold text-[12px] leading-[20px]'>
            {yesPercentage}% Yes
          </p>
          <p className='text-[var(--color-grey)] font-inter font-medium text-[12px] leading-[20px]'>
            {noPercentage}% No
          </p>
        </div>

        <Button
          variant='follow-share'
          icon={<ArrowRightIcon weight='bold' />}
          iconPosition='right'
        >
          View Proposal
        </Button>
      </div>
    </div>
  )
}
