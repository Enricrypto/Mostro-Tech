"use client"

import { InputField } from "../Input"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

interface SearchBarProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  className?: string
}

export function SearchBar({
  placeholder = "Search",
  value,
  onChange,
  className
}: SearchBarProps) {
  return (
    <div
      className={cn(
        "flex items-center w-full max-w-[274px] h-[var(--input-height)] rounded-[var(--radius-sm)] shadow-[var(--shadow-md)] border-[var(--border-color)] bg-[var(--color-surface-default)]",
        className
      )}
    >
      {/* Input wrapper with flex to keep icon inside */}
      <div className='flex items-center w-full h-full px-6'>
        {/* Search icon inside flex */}
        <Search className='text-[var(--color-muted)] h-4 flex-shrink-0' />

        {/* Input fills remaining space */}
        <InputField
          type='text'
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className='ml-2 w-full h-full font-body text-[var(--color-black)] placeholder:text-[var(--color-muted)] bg-transparent outline-none border-none'
        />
      </div>
    </div>
  )
}
