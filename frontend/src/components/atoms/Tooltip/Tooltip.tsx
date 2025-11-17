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
  rounded-[0.375rem] gap-[0.625rem]
  px-[0.8125rem] py-[0.4375rem]
  text-sm font-medium text-left
  shadow-[0_0.125rem_0.25rem_0_rgba(30,41,59,0.25)]
  max-w-[20rem] break-words whitespace-pre-wrap
  sm:max-w-[11.25rem] sm:text-xs sm:px-[0.625rem] sm:py-[0.3125rem]
  md:max-w-[20rem] md:text-sm md:px-[0.8125rem] md:py-[0.4375rem]
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
