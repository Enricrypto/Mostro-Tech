"use client"

import React from "react"
import { Badge } from "@/components/utils/Badge"

interface ProposalExecutedCardProps {
  proposalTitle: string
  requestedTokens: number | string
  variant?: "default" | "highlighted"
}

export const ProposalExecutedCard: React.FC<ProposalExecutedCardProps> = ({
  proposalTitle,
  requestedTokens,
  variant = "default"
}) => {
  const cardClass =
    variant === "highlighted"
      ? "proposal-executed-card-highlighted"
      : "proposal-executed-card-default"

  return (
    <div className={cardClass}>
      {/* Top section */}
      <div className='w-full h-[56px] gap-[8px] flex flex-col'>
        {/* Top row: Title and Badge */}
        <div className='w-full h-[28px] flex justify-between items-center'>
          <span className='text-[var(--color-proposal-text)] font-inter font-semibold text-[18px] leading-[28px]'>
            {proposalTitle}
          </span>
          <Badge className='badge-increase'>Executed</Badge>
        </div>
        {/* Bottom text in top section */}
        <div className='text-[var(--color-proposal-artist)] font-inter font-medium text-[12px] leading-[20px]'>
          Requesting: {requestedTokens} tokens
        </div>
      </div>

      {/* Bottom section */}
      <div className='w-[414px] h-[20px] flex items-center gap-[14px] mt-2'>
        <span className='text-[var(--color-booger-buster)] font-inter font-medium text-[12px] leading-[20px]'>
          Successfully funded and completed
        </span>
      </div>
    </div>
  )
}
