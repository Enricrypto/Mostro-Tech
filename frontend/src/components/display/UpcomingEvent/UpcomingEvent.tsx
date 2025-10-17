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

export type Event = {
  id: string
  title: string
  date: string
  time: string
  location: string
  status: "on-sale" | "sold-out" | "coming-soon"
}

export type UpcomingEventProps = {
  className?: string
  event?: Event
}

export const UpcomingEvent: React.FC<UpcomingEventProps> = ({
  className,
  event = {
    id: "1",
    title: "Live in Berlin",
    date: "Nov 15, 2025",
    time: "8:00 PM",
    location: "Berghain",
    status: "on-sale"
  }
}) => {
  const getStatusProps = (status: Event["status"]) => {
    switch (status) {
      case "on-sale":
        return {
          text: "On Sale",
          bg: "bg-[#DCFD634D]",
          border: "border-[#DCFD63]",
          textColor: "text-[#DCFD63]"
        }
      case "sold-out":
        return {
          text: "Sold Out",
          bg: "bg-[#FF6B6B4D]",
          border: "border-[#FF6B6B]",
          textColor: "text-[#FF6B6B]"
        }
      case "coming-soon":
        return {
          text: "Coming Soon",
          bg: "bg-[#FFD93D4D]",
          border: "border-[#FFD93D]",
          textColor: "text-[#FFD93D]"
        }
      default:
        return {
          text: "On Sale",
          bg: "bg-[#DCFD634D]",
          border: "border-[#DCFD63]",
          textColor: "text-[#DCFD63]"
        }
    }
  }

  const status = getStatusProps(event.status)

  return (
    <div
      className={cn(
        "w-[580px] h-[158px] p-6 bg-[#121B2B] border-2 border-[#2D3953] rounded-lg shadow-md flex flex-col justify-between",
        className
      )}
    >
      {/* Top Section */}
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between items-center'>
          <div className='text-white font-semibold text-lg truncate'>
            {event.title}
          </div>
          <Badge
            className={cn(
              "text-xs font-medium px-2 py-0.5 rounded-lg border",
              status.bg,
              status.border,
              status.textColor
            )}
          >
            {status.text}
          </Badge>
        </div>

        <div className='flex gap-4 items-center'>
          {/* Date */}
          <div className='flex items-center gap-2 text-white text-xs font-medium truncate'>
            <CalendarBlankIcon className='w-4 h-4' weight='bold' />
            {event.date} at {event.time}
          </div>

          {/* Location */}
          <div className='flex items-center gap-2 text-white text-xs font-medium truncate'>
            <MapPinIcon className='w-4 h-4' weight='bold' />
            {event.location}
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className='flex gap-3'>
        <Button themeVariant='play'>
          <TicketIcon weight='bold' />
          Claim Access
        </Button>

        <Button themeVariant='unlock'>Add to Calendar</Button>
      </div>
    </div>
  )
}
