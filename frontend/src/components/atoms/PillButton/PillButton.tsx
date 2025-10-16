"use client"

import { cn } from "@/lib/utils"
import type { ComponentProps } from "react"

export type PillButtonProps = ComponentProps<"button"> & {
  themeVariant?: "primary" | "secondary" | "black" | "blue" | "yellow"
  selected?: boolean
}

export const PillButton = ({
  className,
  children,
  themeVariant = "primary",
  selected = false,
  ...props
}: PillButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "pill-button",
        `pill-button--${themeVariant}`,
        selected && `pill-button--${themeVariant}-selected`,
        className
      )}
    >
      {children}
    </button>
  )
}
