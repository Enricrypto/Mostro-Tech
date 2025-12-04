"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/utils/Badge"
import { Button } from "@/components/atoms/Button"
import { Tooltip } from "@/components/atoms/Tooltip"

import {
  CalendarBlankIcon,
  MapPinIcon,
  TicketIcon
} from "@phosphor-icons/react"
import { cva } from "class-variance-authority"
import type { Artist } from "@/data/artists"

export type EventStatus = "on-sale" | "sold-out" | "token-holders-only"

const upcomingEventCVA = cva(
  "flex flex-col justify-between w-full h-full p-4 md:p-6 gap-3.5 rounded-[10px] border-2 bg-[#121B2B] transition-shadow duration-200",
  {
    variants: {
      variant: {
        default: "border-[#2D3953]",
        highlighted: "border-[#6654d3] shadow-[0_0_16.9px_5px_#6654D380]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

interface UpcomingEventProps {
  artist: Artist
  event: NonNullable<Artist["musicEvents"]>[number]
  onClaim?: () => void
  className?: string
  itemsLeft?: number // Added
  showItemsLeft?: boolean // Added
}

export const UpcomingEvent = ({
  artist,
  event,
  onClaim,
  className,
  itemsLeft, // Added this line
  showItemsLeft // Added this line
}: UpcomingEventProps) => {
  const variantMap: Record<EventStatus, "increase" | "closed" | "neutral"> = {
    "on-sale": "increase",
    "sold-out": "closed",
    "token-holders-only": "neutral"
  }

  return (
    <div
      className={cn(
        upcomingEventCVA({ variant: "default" }),
        "hover:border-[#6654d3] hover:shadow-[0_0_16.9px_5px_#6654D380]",
        className
      )}
    >
      {/* Top Section */}
      <div className='flex items-center justify-between w-full gap-x-3'>
        {/* Title on the left */}
        <Tooltip variant='blue' content={event.title} side='top'>
          <h3 className='text-white font-semibold text-[14px] md:text-[18px] leading-tight flex-grow md:whitespace-nowrap md:truncate'>
            {event.title}
          </h3>
        </Tooltip>

        {/* Badges on the right */}
        <div className='flex items-center gap-x-3'>
          <Badge
            variant={variantMap[event.status]}
            className='max-w-full text-[9px] md:text-[10px] lg:text-[12px] whitespace-nowrap'
          >
            {event.status
              .replace("-", " ")
              .replace(/\b\w/g, (l) => l.toUpperCase())}
          </Badge>

          {showItemsLeft && itemsLeft !== undefined && itemsLeft > 0 && (
            <Badge
              variant='left'
              className='max-w-full text-[9px] md:text-[10px] lg:text-[12px]'
            >
              {itemsLeft} Left
            </Badge>
          )}
        </div>
      </div>

      {/* Event Details */}
      <div className='flex gap-4 items-center text-white text-[10px] md:text-[12px] font-medium'>
        <div className='flex items-center gap-2 md:gap-2'>
          <CalendarBlankIcon className='w-4 h-4 md:w-5 md:h-5' weight='bold' />
          {event.date} at {event.time}
        </div>

        <div className='flex items-center gap-1 md:gap-2'>
          <MapPinIcon className='w-4 h-4 md:w-5 md:h-5' weight='bold' />
          {event.location}
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className='flex gap-3 mt-2 md:mt-1'>
        <Button
          variant='continue'
          icon={<TicketIcon />}
          iconPosition='left'
          onClick={onClaim}
          className='text-[12px] md:text-[12px] lg:text-[14px] px-3 md:px-4'
        >
          Claim Access
        </Button>

        <Button
          variant='follow-share'
          className='text-[10px] md:text-[12px] lg:text-[14px] px-3 md:px-4'
        >
          Add to Calendar
        </Button>
      </div>
    </div>
  )
}
