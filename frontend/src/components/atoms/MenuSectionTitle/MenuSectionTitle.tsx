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
    sm: "w-[120px] h-[32px] px-3 py-1 gap-2 text-sm",
    md: "w-[160px] h-[40px] px-4 py-2 gap-3 text-base",
    lg: "w-[200px] h-[48px] px-6 py-3 gap-4 text-lg"
  }[size]

  return (
    <div
      className={cn(
        "flex items-center font-heading text-black bg-(--color-surface-default)",
        sizeClasses,
        className
      )}
      style={{ border: "1px solid var(--border-color)" }}
    >
      {children}
    </div>
  )
}
