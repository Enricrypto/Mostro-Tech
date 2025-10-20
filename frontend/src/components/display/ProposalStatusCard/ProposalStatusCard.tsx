"use client"

import { Badge } from "@/components/utils/Badge"
import { cn } from "@/lib/utils"

interface ProposalStatusCardProps {
  proposalName: string
  artistName: string
  proposalTimeline: string
  badges?: {
    label: string
    variant: string // e.g. "genre", "increase", "closed", etc.
    icon?: React.ReactNode
    className?: string
  }[]
  className?: string
}

/**
 * ProposalStatusCard Component
 * Layout:
 * - Left: Proposal name, Artist, Timeline
 * - Right: Dynamic badges with optional icons
 */
export function ProposalStatusCard({
  proposalName,
  artistName,
  proposalTimeline,
  badges = [],
  className
}: ProposalStatusCardProps) {
  return (
    <div
      className={cn(
        "flex justify-between items-center",
        "w-[462px] h-[132px] p-6 rounded-[10px] border",
        "bg-[#121B2B] border-[#2D3953] shadow-[0px_4px_6px_0px_#00000017]",
        className
      )}
    >
      {/* Left Section */}
      <div className='flex flex-col gap-2 w-[200px]'>
        <p className='font-inter font-semibold text-[18px] leading-[28px] text-white'>
          {proposalName}
        </p>
        <p className='font-inter font-medium text-[12px] leading-[20px] text-[#B3B3B3]'>
          {artistName}
        </p>
        <p className='font-inter font-medium text-[12px] leading-[20px] text-[#B3B3B3]'>
          {proposalTimeline}
        </p>
      </div>

      {/* Right Section */}
      <div className='flex flex-col gap-2 items-end'>
        {badges.map((badge, index) => (
          <Badge
            key={index}
            variant={badge.variant as any}
            icon={badge.icon}
            className={cn(
              "min-w-fit h-[22px] rounded-[10px] border px-[8px] py-[2px] gap-[8px]",
              badge.className
            )}
          >
            {badge.label}
          </Badge>
        ))}
      </div>
    </div>
  )
}
