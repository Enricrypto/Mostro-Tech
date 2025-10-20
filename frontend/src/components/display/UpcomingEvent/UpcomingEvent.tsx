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

type EventStatus = "on-sale" | "sold-out" | "coming-soon"

interface Event {
  title: string
  date: string
  time: string
  location: string
  status: EventStatus
}

export const UpcomingEvent = ({
  event,
  className
}: {
  event: Event
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
        "h-[158px] p-6 bg-[#121B2B] border-2 border-[#2D3953] rounded-lg shadow-md flex flex-col justify-between",
        className
      )}
    >
      {/* Top Section */}
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between items-center'>
          <h3 className='text-white font-semibold text-lg truncate'>
            {event.title}
          </h3>

          <Badge variant={variantMap[event.status]}>
            {event.status
              .replace("-", " ")
              .replace(/\b\w/g, (l) => l.toUpperCase())}
          </Badge>
        </div>

        <div className='flex gap-4 items-center text-white text-xs font-medium'>
          <div className='flex items-center gap-2 truncate'>
            <CalendarBlankIcon className='w-4 h-4' weight='bold' />
            {event.date} at {event.time}
          </div>

          <div className='flex items-center gap-2 truncate'>
            <MapPinIcon className='w-4 h-4' weight='bold' />
            {event.location}
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className='flex items-center gap-3'>
        <Button variant='continue' icon={<TicketIcon />} iconPosition='left'>
          Claim Access
        </Button>

        <Button variant='follow-share'>Add to Calendar</Button>
      </div>
    </div>
  )
}
