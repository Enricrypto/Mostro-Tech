// This component needs to be refactored
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MenuSectionTitleProps {
  children: ReactNode
  className?: string
}

export const MenuSectionTitle = ({
  children,
  className
}: MenuSectionTitleProps) => {
  return (
    <div
      className={cn(
        "flex items-center font-heading text-p text-[var(--color-black)]",
        "w-[var(--menu-section-width)] h-[var(--menu-section-height)]",
        "gap-[var(--menu-item-gap)] px-[var(--menu-item-padding-x)] py-[var(--menu-item-padding-y)]",
        "bg-[var(--color-surface-default)]",
        className
      )}
      style={{ border: "1px solid var(--border-color)" }}
    >
      {children}
    </div>
  )
}
