"use client"

import { Button } from "@/components/atoms/Button"
import {
  CalendarIcon,
  MapPinIcon,
  CurrencyDollarIcon
} from "@phosphor-icons/react"

interface EventModalProps {
  title: string
  date: string
  venue: string
  onCancel: () => void
  onBuyOrConfirm: () => void
  variant?: "noTokens" | "claimAccess"
  tokenName: string
}

export const EventModal: React.FC<EventModalProps> = ({
  title,
  date,
  venue,
  onCancel,
  onBuyOrConfirm,
  variant = "noTokens",
  tokenName
}) => {
  const infoText =
    variant === "noTokens"
      ? `You currently are not holding any ${tokenName} tokens. Buy token to access this event.`
      : "Please confirm your claim access to the livestream."

  const rightButtonLabel =
    variant === "noTokens" ? `Buy ${tokenName}` : "I'm in"

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'
      onClick={onCancel} // clicking overlay closes modal
    >
      <div
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
        className='
          w-full max-w-md
          bg-linear-to-r from-[#352B6D] via-[#4995E0] to-[#4995E0]
          border border-[#2D3953] rounded-lg
          p-6 sm:p-8
          flex flex-col gap-6
        '
      >
        {/* Title */}
        <h2 className='text-white font-semibold text-lg sm:text-xl'>{title}</h2>

        {/* Date & Venue */}
        <div className='flex flex-col sm:flex-row gap-2 sm:gap-6 text-white text-sm font-medium'>
          <div className='flex items-center gap-2'>
            <CalendarIcon size={16} />
            {date}
          </div>
          <div className='flex items-center gap-2'>
            <MapPinIcon size={16} />
            {venue}
          </div>
        </div>

        {/* Info text */}
        <p className='text-white text-sm'>{infoText}</p>

        {/* Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 mt-4'>
          <Button variant='button-cancel' onClick={onCancel} className='flex-1'>
            Cancel
          </Button>

          <Button
            variant='continue'
            onClick={onBuyOrConfirm}
            className='flex-1 flex items-center justify-center gap-2'
            icon={
              variant === "noTokens" ? (
                <CurrencyDollarIcon size={16} />
              ) : undefined
            }
            iconPosition='left'
          >
            {rightButtonLabel}
          </Button>
        </div>
      </div>
    </div>
  )
}
