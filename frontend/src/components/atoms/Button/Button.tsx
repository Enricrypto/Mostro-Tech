"use client"

import { Button as BaseButton } from "@/components/ui/button"
import type { ComponentProps, ReactNode } from "react"
import { cn } from "@/lib/utils"

export type ButtonProps = ComponentProps<"button"> & {
  themeVariant?: string
  icon?: ReactNode
  iconPosition?: "left" | "right"
}

export function Button({
  themeVariant,
  className,
  icon,
  iconPosition = "right",
  children,
  ...props
}: ButtonProps) {
  // Accept either "button-cancel-dark" or "cancel-dark" (keeps you flexible)
  const variantClass = themeVariant?.startsWith("button-")
    ? themeVariant
    : themeVariant
    ? `button-${themeVariant}`
    : ""

  // keep layout concerns in CSS, not here
  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap", // single flex parent only
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    className ?? ""
  )

  const renderContent = () => (
    <>
      {icon && iconPosition === "left" && (
        <span className='icon' aria-hidden>
          {icon}
        </span>
      )}

      <span className='button-label'>{children}</span>

      {icon && iconPosition === "right" && (
        <span className='icon' aria-hidden>
          {icon}
        </span>
      )}
    </>
  )

  if (themeVariant) {
    return (
      <button {...props} className={cn(baseClasses, variantClass)}>
        {renderContent()}
      </button>
    )
  }

  return (
    <BaseButton {...props} className={cn(baseClasses)}>
      {renderContent()}
    </BaseButton>
  )
}
