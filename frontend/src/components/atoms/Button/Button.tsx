"use client"

import * as React from "react"
import { BaseButton, BaseButtonProps } from "@/components/ui/button"

export type ButtonProps = Omit<BaseButtonProps, "asChild"> & {
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "default",
      size = "default",
      icon,
      iconPosition = "right",
      children,
      ...props
    },
    ref
  ) => {
    const content = (
      <>
        {icon && iconPosition === "left" && (
          <span className='icon'>{icon}</span>
        )}
        <span className='button-label'>{children}</span>
        {icon && iconPosition === "right" && (
          <span className='icon'>{icon}</span>
        )}
      </>
    )

    return (
      <BaseButton ref={ref} variant={variant} size={size} {...props}>
        {content}
      </BaseButton>
    )
  }
)

Button.displayName = "Button"
