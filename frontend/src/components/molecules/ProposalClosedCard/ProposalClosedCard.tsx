"use client"

import React from "react"
import { Badge } from "@/components/utils/Badge"
import { cn } from "@/lib/utils"

interface ProposalClosedCardProps {
  title: string
  requestingTokens: number | string
  variant?: "default" | "highlighted" // new variant prop
}

export const ProposalClosedCard: React.FC<ProposalClosedCardProps> = ({
  title,
  requestingTokens,
  variant = "default"
}) => {
  const cardClass = cn(
    "flex flex-col gap-[14px] p-[24px] transition-all duration-300 ease-out",
    {
      "card-proposal-closed-default": variant === "default",
      "card-proposal-closed-highlighted": variant === "highlighted"
    }
  )

  return (
    <div className={cardClass}>
      {/* Top section */}
      <div className='w-full h-[28px] flex justify-between items-center'>
        <span className='font-inter font-semibold text-[18px] leading-[28px] text-[var(--color-proposal-text)] whitespace-nowrap'>
          {title}
        </span>

        <Badge variant='closed'>closed</Badge>
      </div>

      {/* Bottom section */}
      <div className='text-[var(--color-proposal-artist)] font-inter font-medium text-[12px] leading-[20px]'>
        Requesting: {requestingTokens} tokens
      </div>
    </div>
  )
}
