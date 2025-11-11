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
    rounded-[6px] gap-[10px]
    px-[13px] py-[7px]
    text-sm font-medium text-left
    shadow-[0_2px_4px_0_rgba(30,41,59,0.25)]
    max-w-xs break-words whitespace-pre-wrap
    sm:max-w-[180px] sm:text-xs sm:px-[10px] sm:py-[5px]
    md:max-w-xs md:text-sm md:px-[13px] md:py-[7px]
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
