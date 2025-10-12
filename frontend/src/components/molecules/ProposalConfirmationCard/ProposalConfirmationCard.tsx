"use client"

import { ProposalConfirmationHeader } from "../ProposalConfirmationHeader"
import { ProposalActionButton } from "@/components/atoms/ProposalActionButton"
import { ProposalDescription } from "@/components/atoms/ProposalDescription"

interface ProposalConfirmationCardProps {
  albumName: string
  artistName: string
  avatarSrc?: string
  description?: string
  buttonText?: string
  onButtonClick?: () => void
}

export const ProposalConfirmationCard = ({
  albumName,
  artistName,
  avatarSrc,
  description = "You just voted “NO” to this proposal. Check out other proposals from this artist.",
  buttonText = "View Other Proposals",
  onButtonClick
}: ProposalConfirmationCardProps) => {
  return (
    <div
      className='
        w-[425px] h-[208px]
        p-[24px] flex flex-col gap-[16px]
        rounded-[var(--radius-card)]
        border border-[var(--color-proposal-card-border)]
      '
      style={{
        background: "var(--color-proposal-card-bg)" // gradient from theme.css
      }}
    >
      {/* Header: Avatar + Album/Artist */}
      <ProposalConfirmationHeader
        albumName={albumName}
        artistName={artistName}
        avatarSrc={avatarSrc}
      />

      {/* Description */}
      <ProposalDescription text={description} />

      {/* Action Button */}
      <ProposalActionButton text={buttonText} onClick={onButtonClick} />
    </div>
  )
}
