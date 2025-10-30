// src/components/molecules/ProposalStatusCard.tsx
"use client"

import { Badge } from "@/components/utils/Badge"
import { cn } from "@/lib/utils"
import type { Artist } from "@/data/artists"
import type { ProposalData } from "@/components/sections/ProposalsSection"

interface ProposalStatusCardProps {
  proposal: ProposalData
  artist: Artist
  className?: string
}

export function ProposalStatusCard({
  proposal,
  artist,
  className
}: ProposalStatusCardProps) {
  const badges = [
    { label: proposal.badgeText, variant: "increase" } // map variants as needed
  ]

  return (
    <div
      className={cn(
        "flex justify-between items-center w-[462px] h-[132px] p-6 rounded-[10px] border bg-[#121B2B] border-[#2D3953] shadow-[0px_4px_6px_0px_#00000017]",
        className
      )}
    >
      {/* Left Section */}
      <div className='flex flex-col gap-2 w-[200px]'>
        <p className='font-inter font-semibold text-[18px] leading-7 text-white'>
          {proposal.title}
        </p>
        <p className='font-inter font-medium text-[12px] leading-5 text-[#B3B3B3]'>
          {artist.name}
        </p>
        <p className='font-inter font-medium text-[12px] leading-5 text-[#B3B3B3]'>
          Requested: {proposal.requestedTokens}
        </p>
      </div>

      {/* Right Section */}
      <div className='flex flex-col gap-2 items-end'>
        {badges.map((badge, index) => (
          <Badge
            key={index}
            variant={badge.variant as any}
            className='min-w-fit h-[22px] rounded-[10px] border px-2 py-0.5 gap-2'
          >
            {badge.label}
          </Badge>
        ))}
      </div>
    </div>
  )
}
