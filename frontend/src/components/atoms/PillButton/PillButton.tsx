"use client"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"

// CVA for PillButton
const pillButtonCVA = cva(
  "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ease-out font-body text-[14px] leading-[24px]",
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
      }
    },
    defaultVariants: {
      themeVariant: "primary",
      selected: false
    }
  }
)

export type PillButtonProps = ComponentProps<"button"> &
  VariantProps<typeof pillButtonCVA>

export const PillButton = ({
  className,
  themeVariant,
  selected,
  children,
  ...props
}: PillButtonProps) => {
  return (
    <button
      {...props}
      className={cn(pillButtonCVA({ themeVariant, selected }), className)}
    >
      {children}
    </button>
  )
}
