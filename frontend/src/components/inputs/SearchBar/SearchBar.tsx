"use client"

import { InputField } from "../Input"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

interface SearchBarProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  className?: string
  disabled?: boolean // Add this
}

export function SearchBar({
  placeholder = "Search",
  value,
  onChange,
  className,
  disabled // Destructure disabled prop
}: SearchBarProps) {
  return (
    <div
      className={cn(
        "flex items-center w-[50px] lg:w-60 h-[var(--input-height)] rounded-sm shadow-[var(--shadow-md)] border-[var(--border-color)] bg-[var(--color-surface-default)]",
        className
      )}
    >
      {/* Input wrapper with flex to keep icon inside */}
      <div className='flex items-center w-full h-full px-3'>
        {/* Search icon inside flex */}
        <Search className='text-[var(--color-muted)] h-4 shrink-0' />

        {/* Input fills remaining space */}
        <InputField
          type='text'
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className='w-full h-full font-body text-white placeholder:text-[var(--color-muted)] bg-transparent outline-none border-none'
          disabled={disabled} // Apply disabled prop
        />
      </div>
    </div>
  )
}
