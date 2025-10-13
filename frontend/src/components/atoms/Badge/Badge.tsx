"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Badge as BaseBadge } from "@/components/ui/badge"
import { cva, type VariantProps } from "class-variance-authority"

// Base badge class with variants applied via theme.css
const customBadgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border text-xs font-medium w-fit whitespace-nowrap shrink-0 px-[8px] py-[2px] transition-colors duration-200",
  {
    variants: {
      variant: {
        primary: "badge-primary",
        secondary: "badge-secondary",
        success: "badge-success",
        warning: "badge-warning",
        info: "badge-info",
        destructive: "badge-destructive",
        outline: "badge-outline"
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
)

export interface BadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof customBadgeVariants> {
  icon?: React.ReactNode // optional icon prop
}

/**
 * Badge component with optional icon support
 */
export function Badge({
  className,
  variant,
  icon,
  children,
  ...props
}: BadgeProps) {
  return (
    <BaseBadge
      className={cn(customBadgeVariants({ variant }), className)}
      {...props}
    >
      {icon && <span className='inline-flex w-3 h-3 mr-1'>{icon}</span>}
      {children}
    </BaseBadge>
  )
}
