"use client"

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
        `
        flex select-none items-center justify-start
        rounded-lg border border-(--border-color) bg-(--color-surface-default)
        font-heading font-semibold tracking-tight text-(--color-text-primary)
        `,
        // Responsive Sizing
        `
        min-w-[7rem] min-h-[2rem] px-3 py-1.5 text-sm
        md:min-w-[9rem] md:min-h-[2.5rem] md:px-4 md:py-2 md:text-base
        lg:min-w-[11rem] lg:min-h-[3rem] lg:px-5 lg:py-3 lg:text-lg
        `,
        className
      )}
    >
      {children}
    </div>
  )
}
