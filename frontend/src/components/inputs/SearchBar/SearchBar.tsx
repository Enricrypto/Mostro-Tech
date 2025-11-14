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
        "flex items-center w-[50px] lg:w-60 h-(--input-height) rounded-sm shadow-(--shadow-md) border-(--border-color) bg-(--color-surface-default)",
        className
      )}
    >
      {/* Input wrapper with flex to keep icon inside */}
      <div className='flex items-center w-full h-full px-3'>
        {/* Search icon inside flex */}
        <Search className='text-(--color-muted) h-4 shrink-0' />

        {/* Input fills remaining space */}
        <InputField
          type='text'
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className='w-full h-full font-body text-white placeholder:text-(--color-muted) bg-transparent outline-none border-none'
        />
      </div>
    </div>
  )
}
