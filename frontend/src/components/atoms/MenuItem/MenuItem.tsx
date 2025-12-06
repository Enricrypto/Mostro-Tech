"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface MenuItemProps {
  label: string
  selected?: boolean
  icon?: ReactNode
  onClick?: () => void
  variant?: "default" | "settings-tab"
}

export const MenuItem = ({ label, selected = false, icon, onClick, variant = "default" }: MenuItemProps) => {
  const baseClasses = `
    flex cursor-pointer select-none items-center
    justify-start font-body font-medium gap-3
    transition-colors duration-200 ease-out
    min-w-[7rem] min-h-[2rem] rounded-md px-3 py-1.5 text-sm
    md:min-w-[9rem] md:min-h-[2.5rem] md:rounded-lg md:px-4 md:py-2 md:text-base
    lg:min-w-[11rem] lg:min-h-[3rem] lg:rounded-xl lg:px-5 lg:py-3 lg:text-lg
  `

  const defaultVariantClasses = selected
    ? "border-[var(--border-color)] bg-[var(--color-surface-selected)] text-[var(--color-text-selected)]"
    : "border-transparent bg-[var(--color-surface-default)] text-[var(--color-text-default)] hover:bg-[var(--color-surface-hover)]"

  const settingsTabVariantClasses = selected
    ? "bg-[var(--color-purple)] text-[var(--color-white)]"
    : "bg-[#121B2B] text-[var(--color-white)] hover:bg-[#1D1E2C]"

  return (
    <div
      onClick={onClick}
      className={cn(
        baseClasses,
        variant === "settings-tab" ? settingsTabVariantClasses : defaultVariantClasses
      )}
    >
      {icon && <span>{icon}</span>}
      {label}
    </div>
  )
}
