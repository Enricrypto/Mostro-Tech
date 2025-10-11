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
        "relative flex items-center w-[274px] h-[var(--input-height)] rounded-[var(--radius-sm)] shadow-[var(--shadow-md)]",
        className
      )}
      style={{
        border: "1px solid var(--border-color)",
        background: "var(--color-surface-default)"
      }}
    >
      <Search className='absolute left-[var(--space-sm)] text-[var(--color-muted)] w-4 h-4' />
      <InputField
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className='pl-9 w-full h-full font-body text-[var(--color-black)] placeholder:text-[var(--color-muted)] bg-transparent'
      />
    </div>
  )
}
