"use client"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"

// CVA for PillButton with responsive sizes
const pillButtonCVA = cva(
  `
  inline-flex items-center justify-center gap-[0.5rem]
  rounded-full font-body transition-all duration-200 ease-out
  min-h-[2.5rem] sm:min-h-[2.75rem] md:min-h-[3rem]
  px-[1.2rem] sm:px-[1.6rem] md:px-[2rem]
  whitespace-nowrap
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
  `,
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
        false: "opacity-100"
      },
      size: {
        sm: "text-[0.875rem] sm:text-[0.9rem] md:text-[1rem]",
        md: "text-[1rem] sm:text-[1.05rem] md:text-[1.125rem]",
        lg: "text-[1.125rem] sm:text-[1.25rem] md:text-[1.375rem]"
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
