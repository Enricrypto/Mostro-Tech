"use client"

import {
  CalendarIcon,
  MapPinIcon,
  CurrencyDollarIcon
} from "@phosphor-icons/react"
import { Button } from "@/components/atoms/Button"

interface EventModalProps {
  title: string
  date: string
  venue: string
  onCancel: () => void
  onBuyOrConfirm: () => void
  variant?: "noTokens" | "claimAccess" // default to "noTokens"
}

export const EventModal: React.FC<EventModalProps> = ({
  title,
  date,
  venue,
  onCancel,
  onBuyOrConfirm,
  variant = "noTokens"
}) => {
  // Determine text and right button label based on variant
  const infoText =
    variant === "noTokens"
      ? "You currently are not holding any $MARTIST token. Buy token to access this event."
      : "Please confirm your claim access to the livestream."

  const rightButtonLabel = variant === "noTokens" ? "Buy Token" : "I'm in"

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'
      onClick={onCancel} // clicking overlay closes modal
    >
      <div
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
        className='bg-linear-to-r from-[#352B6D] via-[#4995E0] to-[#4995E0] border border-[#2D3953] rounded-lg p-6 w-[425px] flex flex-col gap-4'
      >
        {/* Event Title */}
        <h2 className='text-white font-semibold text-[18px] leading-7'>
          {title}
        </h2>

        {/* Date & Venue */}
        <div className='flex gap-4 text-white text-[12px] leading-5 font-medium'>
          <div className='flex items-center gap-2'>
            <CalendarIcon size={16} />
            {date}
          </div>
          <div className='flex items-center gap-2'>
            <MapPinIcon size={16} />
            {venue}
          </div>
        </div>

        {/* Info Text */}
        <p className='text-white text-[14px] leading-5 w-[377px]'>{infoText}</p>

        {/* Buttons */}
        <div className='flex gap-4 w-[218px]'>
          <Button variant='button-cancel' onClick={onCancel} className='flex-1'>
            Cancel
          </Button>
          <Button
            variant={variant === "noTokens" ? "continue" : "continue"} // both buttons use the same button variant
            onClick={onBuyOrConfirm}
            className='flex-1 flex items-center justify-center gap-1'
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
