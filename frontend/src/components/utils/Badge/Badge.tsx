"use client"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const badgeVariants = cva(
  "inline-flex items-center justify-center font-body text-sm leading-6 transition-all duration-200 ease-out",
  {
    variants: {
      variant: {
        // SMALL PILLS - auto-size
        closed:
          "min-w-[80px] inline-flex items-center justify-center px-2 py-[2px] gap-2 rounded-[10px] border bg-[var(--color-red-opacity)] border-[var(--color-red)] text-[var(--color-red)] text-[13px] cursor-default",
        increase:
          "min-w-[80px] inline-flex items-center justify-center px-2 py-[2px] gap-2 rounded-[10px] border bg-[var(--color-highlight-opacity)] border-[var(--color-highlight)] text-[var(--color-highlight)] text-[13px] cursor-default",
        decrease:
          "min-w-[80px] inline-flex items-center justify-center px-2 py-[2px] gap-2 rounded-[10px] border bg-[var(--color-red-opacity)] border-[var(--color-red)] text-[var(--color-red)] text-[13px] cursor-default",
        neutral:
          "min-w-[80px] inline-flex items-center justify-center px-2 py-[2px] gap-2 rounded-[10px] border bg-[rgba(210,210,213,0.3)] border-[var(--color-muted)] text-white text-[13px] cursor-default",
        icon: "min-w-[80px] inline-flex items-center justify-center px-2 py-[2px] gap-2 rounded-[10px] border bg-[var(--color-highlight-opacity)] border-[var(--color-highlight)] text-[var(--color-highlight)] text-[13px] cursor-default",
        iconClosed:
          "min-w-[80px] inline-flex items-center justify-center px-2 py-[2px] gap-2 rounded-[10px] border bg-[var(--color-red-opacity)] border-[var(--color-red)] text-[var(--color-red)] text-[13px] cursor-default",
        genre:
          "min-w-[80px] inline-flex items-center justify-center px-2 py-[2px] gap-2 rounded-[10px] border bg-[var(--color-skyblue-opacity)] border-[var(--color-skyblue)] text-[var(--color-skyblue)] text-[13px] cursor-pointer hover:bg-[var(--color-skyblue)] hover:text-[var(--color-dark-bg)] active:scale-95",

        // LARGE PILLS - keep height but remove fixed min-width for flexibility
        profileLabel:
          "min-w-[80px] inline-flex items-center justify-center px-4 py-[2px] gap-2 rounded-[28px] bg-gradient-to-r from-[var(--color-skyblue)] to-[var(--color-highlight)] text-[var(--color-black)]",
        selected:
          "min-w-[80px] inline-flex items-center justify-center px-4 py-2 rounded-[26px] bg-[var(--color-purple)] text-white",
        unselected:
          "min-w-[80px] inline-flex items-center justify-center px-4 py-2 rounded-[26px] bg-[var(--color-dark-blue)] text-white"
      }
    },
    defaultVariants: {
      variant: "closed"
    }
  }
)

export interface BadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode
}

export function Badge({
  className,
  variant,
  icon,
  children,
  ...props
}: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      {icon && <span className='inline-flex w-4 h-4'>{icon}</span>}
      {children}
    </span>
  )
}
