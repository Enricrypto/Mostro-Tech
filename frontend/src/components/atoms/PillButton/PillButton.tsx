"use client"

import { cn } from "@/lib/utils"
import type { ComponentProps } from "react"

export type PillButtonProps = ComponentProps<"button"> & {
  themeVariant?: "primary" | "secondary"
  selected?: boolean
}

export const PillButton = ({
  className,
  children,
  themeVariant = "primary",
  selected = false,
  ...props
}: PillButtonProps) => {
  // Base styles — remove fixed width/height so it resizes with content
  const baseStyles = cn(
    "w-auto h-[var(--pill-button-height)]", // dynamic width
    "px-[var(--spacing-3)] py-[var(--spacing-1)] rounded-pill font-body transition",
    "border border-[var(--color-primary)]"
  )

  const variantStyles = {
    primary: cn(
      selected
        ? "bg-[var(--color-primary)] text-[var(--color-white)]"
        : "bg-[var(--color-white)] text-[var(--color-black)] hover:bg-[var(--hover-primary)]"
    ),
    secondary: cn(
      selected
        ? "bg-[var(--color-accent-dark)] text-[var(--color-white)]"
        : "bg-[var(--color-accent)] text-[var(--color-black)] hover:bg-[var(--hover-accent)]"
    )
  }

  return (
    <button
      {...props}
      className={cn(baseStyles, variantStyles[themeVariant], className)}
    >
      {children}
    </button>
  )
}
