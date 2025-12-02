"use client"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const badgeVariants = cva(
  "inline-flex items-center justify-center font-body leading-5 transition-all duration-200 ease-out",
  {
    variants: {
      variant: {
        // SMALL PILLS - consistent smaller sizing across all screens for better fit
        closed:
          "inline-flex items-center justify-center px-2 py-[2px] gap-1.5 rounded-[10px] border bg-[var(--color-red-opacity)] border-[var(--color-red)] text-[var(--color-red)] text-[9px] cursor-default truncate whitespace-nowrap",
        increase:
          "inline-flex items-center justify-center px-2 py-[2px] gap-1.5 rounded-[10px] border bg-[var(--color-highlight-opacity)] border-[var(--color-highlight)] text-[var(--color-highlight)] text-[9px] cursor-default whitespace-nowrap overflow-hidden truncate",
        decrease:
          "inline-flex items-center justify-center px-2 py-[2px] gap-1 rounded-[10px] border bg-[var(--color-red-opacity)] border-[var(--color-red)] text-[var(--color-red)] text-[9px] cursor-default whitespace-nowrap overflow-hidden truncate",
        neutral:
          "inline-flex items-center justify-center w-fit px-2.5 py-[2px] gap-1.5 rounded-[10px] border bg-[rgba(210,210,213,0.3)] border-[var(--color-muted)] text-white text-[9px] cursor-default whitespace-nowrap overflow-hidden text-ellipsis max-w-full",
        icon: "inline-flex items-center justify-center px-2 py-[2px] gap-1.5 rounded-[10px] border bg-[var(--color-highlight-opacity)] border-[var(--color-highlight)] text-[var(--color-highlight)] text-[9px] cursor-default",
        iconClosed:
          "inline-flex items-center justify-center px-2 py-[2px] gap-1.5 rounded-[10px] border bg-[var(--color-red-opacity)] border-[var(--color-red)] text-[var(--color-red)] text-[9px] cursor-default",
        genre:
          "inline-flex items-center justify-center px-3 py-[3px] gap-2 rounded-[10px] border bg-[var(--color-skyblue-opacity)] border-[var(--color-skyblue)] text-[var(--color-skyblue)] text-sm min-w-[4.5rem] cursor-pointer hover:bg-[var(--color-skyblue)] hover:text-[var(--color-dark-bg)] active:scale-95",
        left:
          "inline-flex items-center justify-center w-fit px-2 py-[2px] gap-1.5 rounded-[10px] border bg-[var(--color-highlight-opacity)] border-[var(--color-highlight)] text-[var(--color-highlight)] whitespace-nowrap overflow-hidden truncate text-[9px] cursor-default",

        // LARGE PILLS - keep height but remove fixed min-width for flexibility
        profileLabel:
          "inline-flex items-center justify-center px-4 py-[2px] gap-2 rounded-[28px] bg-gradient-to-r from-[var(--color-skyblue)] to-[var(--color-highlight)] text-[var(--color-black)]",
        selected:
          "inline-flex items-center justify-center px-4 py-2 rounded-[26px] bg-[var(--color-purple)] text-white",
        unselected:
          "inline-flex items-center justify-center px-4 py-2 rounded-[26px] bg-[var(--color-dark-blue)] text-white"
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
