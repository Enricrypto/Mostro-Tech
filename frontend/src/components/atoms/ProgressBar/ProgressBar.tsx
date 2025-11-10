"use client"

import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// ProgressBar container
const progressBarCVA = cva(
  "relative overflow-hidden rounded-[40px] w-full", // width full, height handled by size variant
  {
    variants: {
      variant: {
        blue: "bg-[var(--color-skyblue-opacity)]",
        red: "bg-[var(--color-red-opacity)]",
        green: "bg-[var(--color-green-opacity)]",
        purple: "bg-[var(--color-purple-opacity)]"
      },
      size: {
        sm: "h-2 sm:h-3 md:h-4",
        md: "h-4 sm:h-5 md:h-6",
        lg: "h-6 sm:h-7 md:h-8"
      }
    },
    defaultVariants: {
      variant: "blue",
      size: "md"
    }
  }
)

// ProgressBar indicator
const progressBarIndicatorCVA = cva("h-full transition-all rounded-[40px]", {
  variants: {
    variant: {
      blue: "bg-[var(--color-skyblue)]",
      red: "bg-[var(--color-red)]",
      green: "bg-[var(--color-green)]",
      purple: "bg-[var(--color-purple)]"
    }
  },
  defaultVariants: {
    variant: "blue"
  }
})

interface ProgressBarProps
  extends React.ComponentProps<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressBarCVA> {
  value: number
}

export function ProgressBar({
  value,
  variant = "blue",
  size = "md",
  className,
  ...props
}: ProgressBarProps) {
  return (
    <ProgressPrimitive.Root
      className={cn(progressBarCVA({ variant, size }), className)}
      value={value}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={progressBarIndicatorCVA({ variant })}
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}
