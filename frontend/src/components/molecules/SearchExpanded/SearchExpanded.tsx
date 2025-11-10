// This component needs to be refactored

"use client"

import { useState } from "react"
import { SearchBar } from "@/components/inputs/SearchBar"
import { PillButton } from "@/components/atoms/PillButton"
import { MenuSectionTitle } from "@/components/atoms/MenuSectionTitle"
import { MenuItem } from "@/components/atoms/MenuItem"
import { cn } from "@/lib/utils"

interface SearchExpandedProps {
  recentSearches?: string[]
  onSearch?: (query: string) => void
}

export const SearchExpanded = ({
  recentSearches = [],
  onSearch
}: SearchExpandedProps) => {
  const [inputValue, setInputValue] = useState("")
  const [selectedButton, setSelectedButton] = useState("Button 1")

  const buttons = ["Button 1", "Button 2", "Button 3"]

  const handleChange = (value: string) => {
    setInputValue(value)
    onSearch?.(value)
  }

  return (
    <div
      className={cn(
        "w-(--card-width) h-(--card-height) flex flex-col gap-(--space-lg) rounded-sm shadow-(--shadow-md) bg-(--color-surface-default) p-(--space-md) font-body"
      )}
      style={{ border: "1px solid var(--border-color)" }}
    >
      <SearchBar value={inputValue} onChange={handleChange} />

      <div className='flex gap-(--space-sm)'>
        {buttons.map((label) => (
          <PillButton
            key={label}
            selected={selectedButton === label}
            onClick={() => setSelectedButton(label)}
            className={cn(
              selectedButton === label
                ? "bg-(--color-button-bg-selected) text-(--color-button-text-selected)"
                : "bg-(--color-button-bg-default) text-(--color-button-text-default) hover:bg-(--color-button-hover)"
            )}
          >
            {label}
          </PillButton>
        ))}
      </div>

      <div className='flex flex-col gap-(--space-xs)'>
        <MenuSectionTitle>Recent Searches</MenuSectionTitle>
        {recentSearches.map((search) => (
          <MenuItem key={search} label={search} />
        ))}
      </div>
    </div>
  )
}
