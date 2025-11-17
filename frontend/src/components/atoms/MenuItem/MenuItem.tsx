"use client"

import { cn } from "@/lib/utils"

interface MenuItemProps {
  label: string
  selected?: boolean
  size?: "sm" | "md" | "lg"
}

export const MenuItem = ({
  label,
  selected = false,
  size = "md"
}: MenuItemProps) => {
  // Base size mapping
  const sizeClasses = {
    sm: "min-w-[7rem] min-h-[2rem] px-[0.75rem] py-[0.4rem] text-[0.875rem] rounded-[0.375rem]",
    md: "min-w-[9rem] min-h-[2.5rem] px-[1rem] py-[0.5rem] text-[1rem] rounded-[0.5rem]",
    lg: "min-w-[11rem] min-h-[3rem] px-[1.25rem] py-[0.75rem] text-[1.125rem] rounded-[0.625rem]"
  }[size]

  return (
    <div
      className={cn(
        `
        flex items-center justify-start
        font-body font-medium
        transition-colors duration-200 ease-out
        border border-transparent
        cursor-pointer select-none
        `,

        sizeClasses,
        selected
          ? "bg-(--color-surface-selected) text-(--color-text-selected)"
          : "bg-(--color-surface-default) hover:bg-(--color-surface-hover) text-(--color-text-default)"
      )}
      style={{ border: selected ? "1px solid var(--border-color)" : "none" }}
    >
      {label}
    </div>
  )
}
