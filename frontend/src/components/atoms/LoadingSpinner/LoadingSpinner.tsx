"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  text?: string
  className?: string
  size?: "sm" | "md" | "lg" // base size
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  text = "Loading...",
  className,
  size = "md"
}) => {
  // Base sizes for spinner and text
  const baseSpinnerSize = {
    sm: "w-8 h-8 border-2",
    md: "w-14 h-14 border-4",
    lg: "w-20 h-20 border-4"
  }[size]

  const baseTextSize = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  }[size]

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center w-full h-[400px] gap-4",
        className
      )}
    >
      {/* Spinner Circle */}
      <div
        className={cn(
          `${baseSpinnerSize} rounded-full animate-spin border-t-transparent`,
          "border-(--color-purple)",
          // Responsive overrides
          "sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-20 lg:h-20"
        )}
        style={{
          boxShadow: "0 0 10px var(--color-purple-50)"
        }}
      />

      {/* Loading Text */}
      <span
        className={cn(
          baseTextSize,
          "font-inter text-white font-medium tracking-[-0.5] opacity-80",
          // Responsive text sizing
          "sm:text-base md:text-lg lg:text-xl"
        )}
      >
        {text}
      </span>
    </div>
  )
}
