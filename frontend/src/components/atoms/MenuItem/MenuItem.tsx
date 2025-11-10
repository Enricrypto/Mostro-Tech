"use client"

import { cn } from "@/lib/utils"

interface MenuItemProps {
  label: string
  selected?: boolean
  size?: "sm" | "md" | "lg" // optional size prop for additional control
}

export const MenuItem = ({
  label,
  selected = false,
  size = "md"
}: MenuItemProps) => {
  // Base size mapping
  const sizeClasses = {
    sm: "w-[120px] h-[32px] px-3 py-1 gap-2 rounded-[6px] text-sm",
    md: "w-[160px] h-[40px] px-4 py-2 gap-3 rounded-[8px] text-base",
    lg: "w-[200px] h-[48px] px-6 py-3 gap-4 rounded-[10px] text-lg"
  }[size]

  return (
    <div
      className={cn(
        "flex items-center font-body transition-colors duration-200",
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
