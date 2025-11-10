"use client"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"

// CVA for PillButton with responsive sizes
const pillButtonCVA = cva(
  "inline-flex items-center justify-center gap-2 rounded-full transition-all duration-200 ease-out font-body",
  {
    variants: {
      themeVariant: {
        primary: "border border-[var(--color-primary)] bg-white text-black",
        secondary:
          "border border-[var(--color-accent)] bg-[var(--color-accent)] text-black",
        black:
          "border border-[var(--color-charcoal)] bg-[var(--color-night)] text-white",
        blue: "border border-[var(--color-skyblue)] bg-[var(--color-skyblue-opacity)] text-[var(--color-yellow)]",
        yellow:
          "border border-[var(--color-charcoal)] bg-[var(--color-booger-buster)] text-black"
      },
      selected: {
        true: "font-semibold opacity-90",
        false: ""
      },
      size: {
        sm: "text-sm px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5",
        md: "text-base px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3",
        lg: "text-lg px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4"
      }
    },
    defaultVariants: {
      themeVariant: "primary",
      selected: false,
      size: "md"
    }
  }
)

export type PillButtonProps = ComponentProps<"button"> &
  VariantProps<typeof pillButtonCVA>

export const PillButton = ({
  className,
  themeVariant,
  selected,
  size,
  children,
  ...props
}: PillButtonProps) => {
  return (
    <button
      {...props}
      className={cn(pillButtonCVA({ themeVariant, selected, size }), className)}
    >
      {children}
    </button>
  )
}
