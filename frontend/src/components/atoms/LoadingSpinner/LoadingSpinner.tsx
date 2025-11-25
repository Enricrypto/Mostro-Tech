"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const spinnerCVA = cva(
  "rounded-full animate-spin border-t-transparent border-solid",
  {
    variants: {
      size: {
        sm: "w-8 h-8 border-2 sm:w-10 sm:h-10 md:w-12 md:h-12",
        md: "w-14 h-14 border-4 sm:w-16 sm:h-16 md:w-20 md:h-20",
        lg: "w-20 h-20 border-4 sm:w-24 sm:h-24 md:w-28 md:h-28"
      },
      color: {
        purple: "border-[var(--color-purple)]",
        blue: "border-[var(--color-skyblue)]",
        red: "border-[var(--color-red)]",
        green: "border-[var(--color-green)]"
      }
    },
    defaultVariants: {
      size: "md",
      color: "purple"
    }
  }
)

const textCVA = cva("font-inter font-medium opacity-80", {
  variants: {
    size: {
      sm: "text-sm sm:text-base md:text-lg",
      md: "text-base sm:text-lg md:text-xl",
      lg: "text-lg sm:text-xl md:text-2xl"
    }
  },
  defaultVariants: {
    size: "md"
  }
})

export interface LoadingSpinnerProps extends VariantProps<typeof spinnerCVA> {
  text?: string
  className?: string
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  text = "Loading...",
  size = "md",
  color = "purple",
  className
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center w-full h-64 sm:h-80 md:h-[400px] gap-4",
        className
      )}
    >
      {/* Spinner */}
      <div
        className={cn(spinnerCVA({ size, color }))}
        style={{ boxShadow: "0 0 10px var(--color-purple-50)" }}
      />

      {/* Loading Text */}
      <span className={textCVA({ size })}>{text}</span>
    </div>
  )
}
