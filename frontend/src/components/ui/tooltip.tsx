"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cn } from "@/lib/utils"

type TooltipVariant = "blue" | "white"

interface MyTooltipProps {
  children: React.ReactNode
  content: React.ReactNode
  side?: "top" | "right" | "bottom" | "left"
  align?: "start" | "center" | "end"
  variant: TooltipVariant
}

export const Tooltip: React.FC<MyTooltipProps> = ({
  children,
  content,
  side = "top",
  align = "center",
  variant
}) => {
  const baseStyles = `
    w-[113px] h-[34px] rounded-[6px] gap-[10px] px-[13px] py-[7px] 
    flex items-center justify-center shadow-[0_2px_4px_0_rgba(30,41,59,0.25)]
    text-center text-sm font-medium
  `

  const variantStyles: Record<TooltipVariant, string> = {
    blue: "bg-[#71D6FB] text-black border-none",
    white: "bg-white text-black border border-[#71D6FB]"
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
            className={cn(baseStyles, variantStyles[variant])}
          >
            {content}
            <TooltipPrimitive.Arrow
              className={cn(
                "fill-current",
                variant === "blue" ? "text-[#71D6FB]" : "text-white"
              )}
            />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
