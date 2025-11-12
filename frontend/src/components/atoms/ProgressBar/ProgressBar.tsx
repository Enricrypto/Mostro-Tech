"use client"

import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// ProgressBar container
const progressBarCVA = cva(
  `
  relative w-full overflow-hidden rounded-[0.5rem]
  h-[0.75rem] sm:h-[0.875rem] md:h-[1rem]
  transition-all duration-300 ease-out
  `,
  {
    variants: {
      variant: {
        blue: "bg-[var(--color-skyblue-opacity)]",
        red: "bg-[var(--color-red-opacity)]",
        green: "bg-[var(--color-green-opacity)]",
        purple: "bg-[var(--color-purple-opacity)]"
      }
    },
    defaultVariants: {
      variant: "blue"
    }
  }
)

// ProgressBar indicator
const progressBarIndicatorCVA = cva(
  `
  h-full transition-all duration-300 ease-out rounded-[0.5rem]
  h-[0.75rem] sm:h-[0.875rem] md:h-[1rem]
  transition-all duration-300 ease-out
  `,
  {
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
  }
)

interface ProgressBarProps
  extends React.ComponentProps<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressBarCVA> {
  value: number
}

export function ProgressBar({
  value,
  variant,
  className,
  ...props
}: ProgressBarProps) {
  return (
    <ProgressPrimitive.Root
      className={cn(progressBarCVA({ variant }), className)}
      value={value}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={progressBarIndicatorCVA({ variant })}
        style={{
          width: `${Math.min(Math.max(value, 0), 100)}%`
        }}
      />
    </ProgressPrimitive.Root>
  )
}
