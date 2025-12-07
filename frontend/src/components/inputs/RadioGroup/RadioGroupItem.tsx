"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface RadioGroupItemProps {
  value: string
  label: string
  isSelected: boolean
  onClick: (value: string) => void
}

export const RadioGroupItem = ({
  value,
  label,
  isSelected,
  onClick,
}: RadioGroupItemProps) => {
  return (
    <div
      onClick={() => onClick(value)}
      className={cn(
        "flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-colors",
        "border-white/30 bg-black/20"
      )}
    >
      <div
        className={cn(
          "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0",
          isSelected ? "border-[var(--color-primary)]" : "border-gray-500"
        )}
      >
        {isSelected && <div className="w-3 h-3 rounded-full bg-[var(--color-accent)]" />}
      </div>
      <span className="text-white font-medium">{label}</span>
    </div>
  )
}
