"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

// Custom badge variants defined in theme.css
const customBadgeVariants = cva(
  "inline-flex items-center justify-center text-xs font-medium w-fit whitespace-nowrap shrink-0 px-[8px] py-[2px] gap-1 transition-colors duration-200",
  {
    variants: {
      variant: {
        primary: "badge-primary",
        secondary: "badge-secondary",
        success: "badge-success",
        warning: "badge-warning",
        info: "badge-info",
        destructive: "badge-destructive",
        outline: "badge-outline",
        closed: "badge-closed",
        component2: "badge-component2",
        genre: "badge-genre",
        profileLabel: "badge-profile-label",
        neutral: "badge-neutral",
        icon: "badge-icon",
        iconClosed: "badge-icon-closed"
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
 * - variant: selects badge container style (from theme.css)
 * - icon: optional React node inside badge
 */
export function Badge({
  className,
  variant = "primary",
  icon,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(customBadgeVariants({ variant }), className)}
      {...props}
    >
      {icon && (
        <span className='inline-flex w-3 h-3 mr-1 text-inherit'>{icon}</span>
      )}
      {children}
    </span>
  )
}
