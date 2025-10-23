"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/utils/Badge"
import { Button } from "@/components/atoms/Button"
import {
  CalendarBlankIcon,
  MapPinIcon,
  TicketIcon
} from "@phosphor-icons/react"
import { cva, type VariantProps } from "class-variance-authority"

type EventStatus = "on-sale" | "sold-out" | "coming-soon"

interface Event {
  title: string
  date: string
  time: string
  location: string
  status: EventStatus
}

const upcomingEventCVA = cva(
  "h-[158px] p-6 bg-[#121B2B] border-2 rounded-lg flex flex-col justify-between transition-shadow duration-200",
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

export const UpcomingEvent = ({
  event,
  onClaim,
  className
}: {
  event: Event
  onClaim?: () => void
  className?: string
}) => {
  // Map event statuses to existing badge variants
  const variantMap: Record<EventStatus, "increase" | "closed" | "neutral"> = {
    "on-sale": "increase",
    "sold-out": "closed",
    "coming-soon": "neutral"
  }

  return (
    <div
      className={cn(
        upcomingEventCVA({ variant: "default" }) +
          " hover:border-[#6654d3] hover:shadow-[0_0_16.9px_5px_#6654D380]",
        className
      )}
    >
      {/* Top Section */}
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between items-center'>
          <h3 className='text-white font-semibold text-lg'>{event.title}</h3>

          <Badge variant={variantMap[event.status]}>
            {event.status
              .replace("-", " ")
              .replace(/\b\w/g, (l) => l.toUpperCase())}
          </Badge>
        </div>

        <div className='flex gap-4 items-center text-white text-xs font-medium whitespace-nowrap'>
          <div className='flex items-center gap-2'>
            <CalendarBlankIcon className='w-4 h-4' weight='bold' />
            {event.date} at {event.time}
          </div>

          <div className='flex items-center gap-2'>
            <MapPinIcon className='w-4 h-4' weight='bold' />
            {event.location}
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className='flex items-center gap-3'>
        <Button
          variant='continue'
          icon={<TicketIcon />}
          iconPosition='left'
          onClick={onClaim}
        >
          Claim Access
        </Button>

        <Button variant='follow-share'>Add to Calendar</Button>
      </div>
    </div>
  )
}
