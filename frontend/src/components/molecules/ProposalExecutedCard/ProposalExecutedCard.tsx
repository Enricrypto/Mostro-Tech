"use client"

import React from "react"
import { Badge } from "@/components/utils/Badge"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const proposalExecutedCardCVA = cva(
  "min-w-[462px] max-h-[138px] p-[24px] gap-[14px] flex flex-col rounded-[10px] border-2 bg-[var(--color-datacard-bg)] shadow-[0_4px_6px_0px_#00000017] transition-all duration-300 ease-out hover:scale-[1.01] opacity-100",
  {
    variants: {
      variant: {
        default:
          "border-2 border-[var(--color-datacard-border)] shadow-[0_4px_6px_0px_#00000017]",
        highlighted: "border-[#1f2223] shadow-[0_0_16.9px_5px_#71d6fb80]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export interface ProposalExecutedCardProps
  extends VariantProps<typeof proposalExecutedCardCVA> {
  proposalTitle: string
  requestedTokens: number | string
}

export const ProposalExecutedCard: React.FC<ProposalExecutedCardProps> = ({
  proposalTitle,
  requestedTokens,
  variant
}) => {
  return (
    <div className={proposalExecutedCardCVA({ variant })}>
      {/* Top section */}
      <div className='w-full h-[56px] gap-[8px] flex flex-col'>
        {/* Top row: Title and Badge */}
        <div className='w-full h-[28px] flex justify-between items-center'>
          <span className='text-[var(--color-white)] font-inter font-semibold text-[18px] leading-[28px]'>
            {proposalTitle}
          </span>
          <Badge variant='increase'>Executed</Badge>
        </div>
        {/* Bottom text in top section */}
        <div className='text-[var(--color-grey)] font-inter font-medium text-[12px] leading-[20px]'>
          Requesting: {requestedTokens} tokens
        </div>
      </div>

      {/* Bottom section */}
      <div className='w-[414px] h-[20px] flex items-center gap-[14px] mt-2'>
        <span className='text-[var(--color-highlight)] font-inter font-medium text-[12px] leading-[20px]'>
          Successfully funded and completed
        </span>
      </div>
    </div>
  )
}
