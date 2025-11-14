"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/atoms/Button"
import {
  MusicNotesIcon,
  UsersIcon,
  HandIcon,
  CurrencyDollarIcon
} from "@phosphor-icons/react"

export interface Section {
  id: string
  label: string
  icon: React.ReactNode
}

interface SectionSelectorProps {
  selected: string
  onSelect: (id: string) => void
  className?: string
}

// Hardcoded sections
const sections: Section[] = [
  { id: "music", label: "Music", icon: <MusicNotesIcon size={16} /> },
  { id: "community", label: "Community", icon: <UsersIcon size={16} /> },
  { id: "voting", label: "Voting", icon: <HandIcon size={16} /> },
  { id: "token", label: "Token", icon: <CurrencyDollarIcon size={16} /> }
]

export const SectionSelector: React.FC<SectionSelectorProps> = ({
  selected,
  onSelect,
  className
}) => {
  return (
    <div
      className={cn(
        "flex justify-between items-center w-[368px] md:w-[594px] h-14 p-2 rounded-md border border-(--color-primary) gap-2",
        className
      )}
    >
      {sections.map((section) => {
        const isActive = section.id === selected

        return (
          <Button
            key={section.id}
            variant={isActive ? "session-active" : "session"}
            icon={section.icon}
            iconPosition='left'
            onClick={() => onSelect(section.id)}
            className='flex-1 justify-center gap-2 px-2 py-2 text-[11px] md:text-base'
          >
            {section.label}
          </Button>
        )
      })}
    </div>
  )
}
