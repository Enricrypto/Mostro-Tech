"use client"

import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cn } from "@/lib/utils"

type TooltipVariant = "blue" | "white"

interface TooltipProps {
  children: React.ReactNode
  content: React.ReactNode
  side?: "top" | "right" | "bottom" | "left"
  align?: "start" | "center" | "end"
  variant: TooltipVariant
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  side,
  align,
  variant
}) => {
  const baseStyles = `
  rounded-md gap-2.5
  px-3 py-2
  text-sm font-medium text-left
  shadow-sm
  max-w-[20rem] break-words whitespace-pre-wrap
  sm:max-w-[11.25rem] sm:text-xs sm:px-2 sm:py-1
  md:max-w-[20rem] md:text-sm md:px-3 md:py-2
`

  const variantStyles: Record<TooltipVariant, string> = {
    blue: "bg-[var(--color-accent)] text-[var(--color-black)] border-none",
    white:
      "bg-[var(--color-white)] text-[var(--color-black)] border border-[var(--color-accent)]"
  }

  return (
    <TooltipPrimitive.Provider delayDuration={200}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            align={align}
            sideOffset={8}
            avoidCollisions
            className={cn(baseStyles, variantStyles[variant])}
          >
            {content}
            <TooltipPrimitive.Arrow
              className={cn(
                "fill-current",
                variant === "blue" ? "text-(--color-accent)" : "text-white"
              )}
            />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
