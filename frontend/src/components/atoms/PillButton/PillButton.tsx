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
  // Compute theme-driven classes
  const baseStyles = cn(
    "w-[var(--pill-button-width)] h-[var(--pill-button-height)]",
    "px-[var(--space-md)] py-[var(--space-xs)] rounded-pill font-body transition",
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
