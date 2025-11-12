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
        "w-full max-w-[480px] md:max-w-[600px] flex flex-col gap-4 rounded-md shadow-md bg-surface-default p-4 font-body border border-border-color"
      )}
    >
      {/* Search Input */}
      <SearchBar value={inputValue} onChange={handleChange} />

      {/* Pill Buttons */}
      <div className='flex flex-wrap gap-2'>
        {buttons.map((label) => (
          <PillButton
            key={label}
            selected={selectedButton === label}
            onClick={() => setSelectedButton(label)}
            className={cn(
              "transition-colors duration-200",
              selectedButton === label
                ? "bg-button-bg-selected text-button-text-selected"
                : "bg-button-bg-default text-button-text-default hover:bg-button-hover"
            )}
          >
            {label}
          </PillButton>
        ))}
      </div>

      {/* Recent Searches */}
      {recentSearches.length > 0 && (
        <div className='flex flex-col gap-1'>
          <MenuSectionTitle>Recent Searches</MenuSectionTitle>
          {recentSearches.map((search) => (
            <MenuItem key={search} label={search} />
          ))}
        </div>
      )}
    </div>
  )
}
