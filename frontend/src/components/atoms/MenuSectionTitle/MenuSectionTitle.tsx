"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MenuSectionTitleProps {
  children: ReactNode
  className?: string
  size?: "sm" | "md" | "lg"
}

export const MenuSectionTitle = ({
  children,
  className,
  size = "md"
}: MenuSectionTitleProps) => {
  // Size mapping for responsiveness
  const sizeClasses = {
    sm: "min-w-[7rem] min-h-[2rem] px-[0.75rem] py-[0.4rem] text-[0.875rem]", // ~14px
    md: "min-w-[9rem] min-h-[2.5rem] px-[1rem] py-[0.5rem] text-[1rem]", // ~16px
    lg: "min-w-[11rem] min-h-[3rem] px-[1.25rem] py-[0.75rem] text-[1.125rem]" // ~18px
  }[size]

  return (
    <div
      className={cn(
        `
        flex items-center justify-start
        font-heading font-semibold
        text-(--color-text-primary)
        bg-(--color-surface-default)
        border border-(--border-color)
        rounded-lg
        tracking-tight select-none
        `,
        sizeClasses,
        className
      )}
      style={{ border: "1px solid var(--border-color)" }}
    >
      {children}
    </div>
  )
}
