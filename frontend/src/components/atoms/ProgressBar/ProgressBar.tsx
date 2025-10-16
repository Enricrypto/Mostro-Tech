"use client"

import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

interface ProgressBarProps
  extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  value: number
  variant?: "blue" | "red" | "green" | "purple"
}

export function ProgressBar({
  value,
  variant = "blue",
  className,
  ...props
}: ProgressBarProps) {
  const trackClass = cn(
    "progress-bar",
    variant === "blue" && "progress-bar-blue",
    variant === "red" && "progress-bar-red",
    variant === "green" && "progress-bar-green",
    variant === "purple" && "progress-bar-purple",
    className
  )

  const indicatorClass = cn(
    variant === "blue" && "progress-bar-blue-indicator",
    variant === "red" && "progress-bar-red-indicator",
    variant === "green" && "progress-bar-green-indicator",
    variant === "purple" && "progress-bar-purple-indicator"
  )

  return (
    <ProgressPrimitive.Root className={trackClass} value={value} {...props}>
      <ProgressPrimitive.Indicator
        className={indicatorClass}
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}
