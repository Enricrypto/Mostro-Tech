"use client"

import React from "react"
import { Badge } from "@/components/utils/Badge"
import { ProgressBar } from "@/components/atoms/ProgressBar"
import { Button } from "@/components/atoms/Button"
import { ArrowRightIcon, ClockClockwiseIcon } from "@phosphor-icons/react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const proposalCardCVA = cva(
  "min-w-[462px] max-h-[188px] p-[24px] flex flex-col gap-[14px] rounded-[10px] bg-[var(--color-datacard-bg)] transition-all duration-300 ease-out",
  {
    variants: {
      variant: {
        ongoing:
          "border-2 border-[var(--color-datacard-border)] shadow-[0_4px_6px_0px_#00000017] hover:border-[#aee9ff] hover:shadow-[0_0_16.9px_5px_#71d6fb80]",
        executed:
          "border-2 border-[var(--color-datacard-border)] shadow-[0_4px_6px_0px_#00000017] hover:border-[#71d6fb] hover:shadow-[0_0_16.9px_5px_#71d6fb80]",
        closed:
          "border-2 border-[var(--color-datacard-border)] shadow-[0_4px_6px_0px_#00000017] hover:border-[#ff6b6b] hover:shadow-[0_0_16.9px_5px_#ff6b6b80]"
      }
    },
    defaultVariants: {
      variant: "ongoing"
    }
  }
)

export interface ProposalCardProps
  extends VariantProps<typeof proposalCardCVA> {
  status: "ongoing" | "executed" | "closed"
  title: string
  requestedTokens: number | string
  yesPercentage?: number
  noPercentage?: number
  badgeText?: string
}

export const ProposalCard: React.FC<ProposalCardProps> = ({
  status,
  title,
  requestedTokens,
  yesPercentage,
  noPercentage,
  badgeText,
  variant
}) => {
  return (
    <div className={proposalCardCVA({ variant: status })}>
      {/* Top Section */}
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between items-center gap-2 flex-wrap'>
          <p className='text-white font-inter font-semibold text-[18px] leading-[28px] truncate'>
            {title}
          </p>
          {status === "ongoing" && badgeText && (
            <Badge variant='increase' icon={<ClockClockwiseIcon size={14} />}>
              {badgeText}
            </Badge>
          )}
          {status === "executed" && <Badge variant='increase'>Executed</Badge>}
          {status === "closed" && <Badge variant='decrease'>Closed</Badge>}
        </div>
        <p className='text-[var(--color-grey)] font-inter font-medium text-[12px] leading-[20px]'>
          Requesting: {requestedTokens} tokens
        </p>
      </div>

      {/* Conditional Content */}
      {status === "ongoing" && yesPercentage !== undefined && (
        <>
          <ProgressBar value={yesPercentage} variant='blue' />
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
        </>
      )}

      {status === "executed" && (
        <div className='text-[var(--color-highlight)] font-inter font-medium text-[12px] leading-[20px] mt-4'>
          Successfully funded and completed
        </div>
      )}

      {status === "closed" && (
        <div className='text-[var(--color-grey)] font-inter font-medium text-[12px] leading-[20px] mt-4'>
          Proposal closed without execution
        </div>
      )}
    </div>
  )
}
