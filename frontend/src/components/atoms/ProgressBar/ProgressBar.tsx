"use client"

import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const progressBarCVA = cva(
  "relative overflow-hidden rounded-[40px] w-[334px] h-[16px]",
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
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}
