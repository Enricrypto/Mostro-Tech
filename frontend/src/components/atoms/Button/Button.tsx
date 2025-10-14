"use client"

import { Button as BaseButton } from "@/components/ui/button"
import type { ComponentProps, ReactNode } from "react"
import { cn } from "@/lib/utils"

export type ButtonProps = ComponentProps<"button"> & {
  themeVariant?: string
  icon?: ReactNode
  iconPosition?: "left" | "right"
}

/**
 * Smart Button component
 * - Uses ChadCN <Button> when no themeVariant
 * - Uses raw <button> when themeVariant is provided
 */
export function Button({
  themeVariant,
  className,
  icon,
  iconPosition,
  children,
  ...props
}: ButtonProps) {
  const variantClass = themeVariant ? `button-${themeVariant}` : ""
  const baseClasses = `
    inline-flex items-center justify-center
    transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `

  const isIconVariant =
    themeVariant?.includes("icon") || themeVariant === "rounded-icon"

  const renderContent = () => {
    if (!isIconVariant || !icon) return children

    const position: "left" | "right" = iconPosition
      ? iconPosition
      : themeVariant === "cancel-icon-right" || themeVariant === "rounded-icon"
      ? "right"
      : "left"

    return position === "left" ? (
      <>
        {icon} {children}
      </>
    ) : (
      <>
        {children} {icon}
      </>
    )
  }

  // If themeVariant is used, render a plain button (not ChadCN)
  if (themeVariant) {
    return (
      <button {...props} className={cn(baseClasses, variantClass, className)}>
        {renderContent()}
      </button>
    )
  }

  // Otherwise, fallback to ChadCN variant system
  return (
    <BaseButton {...props} className={cn(baseClasses, className)}>
      {children}
    </BaseButton>
  )
}
