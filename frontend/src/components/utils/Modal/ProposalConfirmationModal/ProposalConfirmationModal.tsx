"use client"

import { Avatar } from "@/components/atoms/Avatar"
import { ArrowRightIcon } from "@phosphor-icons/react"
import { Button } from "@/components/atoms/Button"
import { cn } from "@/lib/utils"

interface ProposalConfirmationModalProps {
  vote: "YES" | "NO"
  voterName: string
  voterSubtext?: string
  onViewOtherProposals: () => void
  avatarSrc?: string
}

export const ProposalConfirmationModal: React.FC<
  ProposalConfirmationModalProps
> = ({ vote, voterName, voterSubtext, onViewOtherProposals, avatarSrc }) => {
  // Dynamic color variants for vote text
  const variants = {
    YES: "text-[var(--color-green)]",
    NO: "text-[var(--color-red)]"
  }

  return (
    <div
      className={cn(
        "w-[425px] h-[208px] p-6 gap-4 rounded-[8px] border border-[#2D3953]",
        "flex flex-col bg-gradient-to-r from-[#352B6D] via-[#4995E0] to-[#4995E0]"
      )}
    >
      {/* Top Part */}
      <div className='flex items-center gap-4 w-[256px] h-[48px]'>
        <Avatar src={avatarSrc} alt={voterName} variant='rounded-sm' />
        <div className='flex flex-col gap-2 w-[200px] h-[48px]'>
          <span className='text-white font-inter font-semibold text-[18px] leading-[28px]'>
            {voterName}
          </span>
          {voterSubtext && (
            <span className='text-[#B3B3B3] font-inter font-medium text-[12px] leading-[20px]'>
              {voterSubtext}
            </span>
          )}
        </div>
      </div>

      {/* Middle Part */}
      <div className='w-[377px] h-[40px] font-inter font-normal text-[14px] leading-[20px]'>
        You just voted{" "}
        <span className={cn("font-semibold", variants[vote])}>“{vote}”</span> to
        this proposal. Check out other proposals from this artist.
      </div>

      {/* Bottom Section */}
      <div className='flex w-[377px] h-[40px] gap-2'>
        <Button
          themeVariant='proposal'
          icon={<ArrowRightIcon />}
          iconPosition='right'
          onClick={onViewOtherProposals}
        >
          View Other Proposals
        </Button>
      </div>
    </div>
  )
}
