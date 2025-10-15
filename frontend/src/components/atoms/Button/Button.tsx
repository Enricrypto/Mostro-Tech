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
 * - Supports optional icon on left or right
 */
export function Button({
  themeVariant,
  className,
  icon,
  iconPosition = "right",
  children,
  ...props
}: ButtonProps) {
  const variantClass = themeVariant ? `button-${themeVariant}` : ""

  // Base classes for all buttons
  const baseClasses = `
    inline-flex items-center justify-center
    transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `

  // Content renderer: wraps text + icon
  const renderContent = () => (
    <span className='flex items-center w-full'>
      {icon && iconPosition === "left" && (
        <span className='icon flex-shrink-0 mr-2 flex items-center justify-center'>
          {icon}
        </span>
      )}

      <span className='flex-1 truncate'>{children}</span>

      {icon && iconPosition === "right" && (
        <span className='icon flex-shrink-0 ml-2 flex items-center justify-center'>
          {icon}
        </span>
      )}
    </span>
  )

  // Render plain button for themeVariant
  if (themeVariant) {
    return (
      <button
        {...props}
        className={cn(
          baseClasses,
          "inline-flex items-center justify-between gap-2",
          variantClass,
          className
        )}
      >
        {renderContent()}
      </button>
    )
  }

  // Fallback to ChadCN <Button>
  return (
    <BaseButton {...props} className={cn(baseClasses, className)}>
      {renderContent()}
    </BaseButton>
  )
}
