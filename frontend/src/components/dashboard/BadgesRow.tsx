"use client"

import { useState } from "react"
import { Badge } from "@/components/utils/Badge/Badge"
import { badges, Badge as BadgeType } from "@/mocks/badges"

export function BadgesRow() {
  const [selectedBadge, setSelectedBadge] = useState<number>(1)

  return (
    <div className='flex gap-6 overflow-x-auto py-2 px-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900'>
      {badges.map((badge: BadgeType) => {
        const isSelected = badge.id === selectedBadge
        return (
          <Badge
            key={badge.id}
            variant={isSelected ? "selected" : "unselected"}
            className='cursor-pointer shrink-0'
            onClick={() => setSelectedBadge(badge.id)}
          >
            {badge.label}
          </Badge>
        )
      })}
    </div>
  )
}
