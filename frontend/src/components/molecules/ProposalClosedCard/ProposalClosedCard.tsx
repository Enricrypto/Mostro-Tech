"use client"

import React from "react"
import { Badge } from "@/components/utils/Badge"
import { cva, type VariantProps } from "class-variance-authority"

const proposalClosedCardCVA = cva(
  "min-w-[462px] max-h-[118px] p-[24px] flex flex-col gap-[14px] rounded-[10px] bg-[var(--color-datacard-bg)] transition-all duration-300 ease-out opacity-100",
  {
    variants: {
      variant: {
        default:
          "border-2 border-[var(--color-datacard-border)] shadow-[0_4px_6px_0px_#00000017]",
        highlighted: "border-[#aee9ff] shadow-[0_0_16.9px_5px_#71d6fb80]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export interface ProposalClosedCardProps
  extends VariantProps<typeof proposalClosedCardCVA> {
  title: string
  requestingTokens: number | string
}

export const ProposalClosedCard: React.FC<ProposalClosedCardProps> = ({
  title,
  requestingTokens,
  variant
}) => {
  return (
    <div className={proposalClosedCardCVA({ variant })}>
      {/* Top section */}
      <div className='w-full h-[28px] flex justify-between items-center'>
        <span className='font-inter font-semibold text-[18px] leading-[28px] text-[var(--color-white)] whitespace-nowrap'>
          {title}
        </span>
        <Badge variant='closed'>closed</Badge>
      </div>

      {/* Bottom section */}
      <div className='text-[var(--color-grey)] font-inter font-medium text-[12px] leading-[20px]'>
        Requesting: {requestingTokens} tokens
      </div>
    </div>
  )
}
