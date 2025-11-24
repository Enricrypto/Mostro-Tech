"use client"

import { cn } from "@/lib/utils"

interface MenuItemProps {
  label: string
  selected?: boolean
}

export const MenuItem = ({ label, selected = false }: MenuItemProps) => {
  return (
    <div
      className={cn(
        `
        flex cursor-pointer select-none items-center
        justify-start font-body font-medium
        transition-colors duration-200 ease-out
        `,
        // Responsive sizing
        `
        min-w-[7rem] min-h-[2rem] rounded-md px-3 py-1.5 text-sm
        md:min-w-[9rem] md:min-h-[2.5rem] md:rounded-lg md:px-4 md:py-2 md:text-base
        lg:min-w-[11rem] lg:min-h-[3rem] lg:rounded-xl lg:px-5 lg:py-3 lg:text-lg
        `,
        // State-based styling
        selected
          ? "border-[var(--border-color)] bg-(--color-surface-selected) text-(--color-text-selected)"
          : "border-transparent bg-(--color-surface-default) text-(--color-text-default) hover:bg-(--color-surface-hover)"
      )}
    >
      {label}
    </div>
  )
}
