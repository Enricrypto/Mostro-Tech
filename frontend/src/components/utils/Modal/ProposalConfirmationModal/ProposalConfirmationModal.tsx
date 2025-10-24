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
        "w-[425px] h-52 p-6 gap-4 rounded-lg border border-[#2D3953]",
        "flex flex-col bg-linear-to-r from-[#352B6D] via-[#4995E0] to-[#4995E0]"
      )}
    >
      {/* Top Part */}
      <div className='flex items-center gap-4 w-[256px] h-12'>
        <Avatar src={avatarSrc} alt={voterName} variant='rounded-sm' />
        <div className='flex flex-col w-[200px] h-12'>
          <span className='text-white font-inter font-semibold text-[18px] leading-7'>
            {voterName}
          </span>
          {voterSubtext && (
            <span className='text-[#B3B3B3] font-inter font-medium text-[12px] leading-5'>
              {voterSubtext}
            </span>
          )}
        </div>
      </div>

      {/* Middle Part */}
      <div className='font-inter font-normal text-[14px] leading-5 text-white'>
        You just voted{" "}
        <span className={cn("font-semibold", variants[vote])}>“{vote}”</span> to
        this proposal. Check out other proposals from this artist.
      </div>

      {/* Bottom Section */}
      <div className='flexgap-2'>
        <Button
          variant='follow-share'
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
