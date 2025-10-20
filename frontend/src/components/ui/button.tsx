"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Base CVA for buttons
export const baseButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all rounded-md outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary-light",
        secondary: "bg-accent text-black hover:bg-accent-dark",
        subscribe: "bg-green text-white hover:bg-green-opacity",
        disabled: "bg-gray-500 text-gray-300 cursor-not-allowed",
        continue:
          "bg-[var(--color-skyblue)] text-[var(--color-black)] hover:bg-gradient-to-r hover:from-[#71d6fb] hover:to-[#6654d3]",
        link: "cursor-pointer font-normal text-white text-base hover:underline hover:text-[var(--color-highlight)] bg-transparent",
        "button-cancel":
          "border border-[var(--color-skyblue)] bg-transparent text-white hover:bg-[var(--color-skyblue-opacity)]",
        "button-cancel-white":
          "bg-[var(--color-light-gray)] text-[var(--color-gray-text)] hover:bg-[var(--color-gray-hover)] hover:text-black",
        "button-cancel-red":
          "bg-[var(--color-red)] text-black hover:bg-[var(--color-red-dark)]",
        "button-cancel-black":
          "border border-black bg-transparent text-black hover:bg-black hover:text-white",
        "rounded-icon":
          "w-10 h-10 rounded-full border border-[var(--color-skyblue)] bg-white text-black hover:bg-[var(--color-skyblue-opacity)]",
        highlight:
          "py-3 px-6 rounded-full bg-[var(--color-highlight)] text-black hover:bg-[var(--color-highlight-opacity)]",
        "connect-wallet":
          "bg-[var(--color-skyblue)] text-black hover:bg-gradient-to-r hover:from-[#71d6fb] hover:to-[#6654d3]",
        "song-play":
          "bg-[var(--color-skyblue)] text-black hover:bg-gradient-to-r hover:from-[#71d6fb] hover:to-[#6654d3] hover:text-white",
        songPlayIcon:
          "w-10 h-10 rounded-full bg-[var(--color-skyblue)] hover:bg-blue-500/10",
        "song-unlock":
          "border border-[var(--color-skyblue)] bg-transparent text-white hover:bg-[var(--color-skyblue-opacity)] hover:text-black",
        "buy-token":
          "bg-[var(--color-skyblue)] text-white hover:bg-gradient-to-r hover:from-[#71d6fb] hover:to-[#6654d3]",
        "join-fun-club":
          "bg-[var(--color-skyblue)] text-white hover:bg-gradient-to-r hover:from-[#71d6fb] hover:to-[#6654d3]",
        "session-active": "bg-[#6654D3] text-white",
        session: "bg-transparent text-[#B3B3B3] ",
        yes: "bg-[var(--color-green)] text-black hover:bg-[var(--color-green-hover)]",
        no: "bg-[var(--color-red)] text-black hover:bg-[var(--color-red-hover)]",
        voted:
          "bg-[var(--color-light-gray)] text-[var(--color-gray-text)] hover:bg-[var(--color-light-gray-hover)]",
        "follow-share":
          "bg-[var(--color-dark-bg)] text-white border border-[var(--color-skyblue)] hover:bg-[var(--color-dark-bg-hover)]"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 py-1.5",
        lg: "h-10 px-6 py-3",
        icon: "w-10 h-10",
        "icon-sm": "w-8 h-8",
        "icon-lg": "w-12 h-12"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

export type BaseButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof baseButtonVariants> & {
    asChild?: boolean
    themeVariant?: string
    icon?: React.ReactNode
    iconPosition?: "left" | "right"
  }

export const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
  (
    { variant, size, asChild = false, className, icon, iconPosition, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        ref={ref}
        className={cn(baseButtonVariants({ variant, size }), className)}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <span className='icon'>{icon}</span>
        )}
        {props.children}
        {icon && iconPosition === "right" && (
          <span className='icon'>{icon}</span>
        )}
      </Comp>
    )
  }
)

BaseButton.displayName = "BaseButton"
