"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

interface ProgressBarProps
  extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  value: number
  variant?: "blue" | "red" | "green"
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
    className
  )

  const indicatorClass = cn(
    variant === "blue" && "progress-bar-blue-indicator",
    variant === "red" && "progress-bar-red-indicator",
    variant === "green" && "progress-bar-green-indicator"
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
