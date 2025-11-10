"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Minimal CVA for base layout, spacing, sizing
export const baseButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all rounded-md outline-none disabled:pointer-events-none disabled:opacity-50 shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-focus)]",
  {
    variants: {
      size: {
        default:
          "h-9 px-4 py-2 text-sm sm:h-10 sm:px-5 sm:py-2.5 md:h-11 md:px-6 md:py-3",
        sm: "h-8 px-3 py-1.5 text-sm sm:h-9 sm:px-4 sm:py-2",
        lg: "h-10 px-6 py-3 text-base sm:h-11 sm:px-7 sm:py-3.5",
        icon: "w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14",
        "icon-sm": "w-8 h-8 sm:w-10 sm:h-10",
        "icon-lg": "w-12 h-12 sm:w-14 sm:h-14"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
)

export type BaseButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof baseButtonVariants> & {
    asChild?: boolean
  }

export const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ size, asChild = false, className, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        ref={ref}
        className={cn(baseButtonVariants({ size }), className)}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)

BaseButton.displayName = "BaseButton"
