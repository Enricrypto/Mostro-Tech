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
  { id: "proposals", label: "Proposals", icon: <HandIcon size={16} /> },
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
        "flex justify-between items-center w-[594px] h-[56px] px-3 rounded-[6px] border border-[#6654D3]",
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
            className='flex-1' // spread buttons evenly
          >
            {section.label}
          </Button>
        )
      })}
    </div>
  )
}
