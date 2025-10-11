"use client"

import { Button } from "@/components/atoms/Button/Button"
import { ArrowRight } from "lucide-react"

interface ProposalActionButtonProps {
  text: string
  onClick?: () => void
}

export const ProposalActionButton = ({
  text,
  onClick
}: ProposalActionButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className='
        w-[165px] h-[40px]
        flex items-center justify-between
        px-4 py-2 gap-[10px]
        rounded-[var(--radius-proposal-button)]
        border border-[var(--color-proposal-button-border)]
        bg-transparent
        font-inter font-medium
        text-[var(--text-proposal-button)]
        leading-[var(--leading-proposal-button)]
        transition
      '
    >
      <span>{text}</span>
      <ArrowRight size={16} strokeWidth={2} color='#FFFFFF' />
    </Button>
  )
}
