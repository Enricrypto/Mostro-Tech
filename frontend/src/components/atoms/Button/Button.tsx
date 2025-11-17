"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Base button atom with responsive sizing
export const baseButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all rounded-md outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:w-4 [&_svg:not([class*='size-'])]:h-4 shrink-0 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-primary)] cursor-pointer",
  {
    variants: {
      size: {
        default: "h-10 px-4 text-base sm:h-10 sm:px-5 md:h-10 md:px-6",
        sm: "h-8 px-3 text-sm sm:h-8 sm:px-4 md:h-9 md:px-4",
        lg: "h-12 px-5 text-lg sm:h-12 sm:px-6 md:h-14 md:px-8",
        icon: "w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14",
        "icon-xs": "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8",
        "icon-sm": "w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10",
        "icon-lg": "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
)

export type BaseButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof baseButtonVariants> & {
    asChild?: boolean
  }

export const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ size, asChild = false, className, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        ref={ref}
        className={cn(baseButtonVariants({ size }), className)}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)

BaseButton.displayName = "BaseButton"

// Button visual variants with responsive padding / height
export const buttonVisualVariants = {
  continue: `
    bg-[var(--color-skyblue)] text-[var(--color-black)]
    hover:bg-gradient-to-r hover:from-[var(--color-skyblue)] hover:to-[var(--color-purple)]
  `,
  highlight: `
    py-2 px-5 sm:py-3 sm:px-6 md:py-4 md:px-8
    rounded-full bg-[var(--color-highlight)] text-black
    hover:bg-[var(--color-highlight-opacity)]
  `,
  link: `
    text-white font-normal bg-transparent
    hover:underline hover:text-[var(--color-highlight)]
  `,
  "button-cancel": `
    border border-[var(--color-skyblue)] bg-transparent
    text-white hover:bg-[var(--color-skyblue-opacity)]
  `,
  "button-cancel-white": `
    bg-[var(--color-light-gray)] text-[var(--color-gray-text)]
    hover:bg-[var(--color-gray-hover)] hover:text-black
  `,
  "button-cancel-red": `
    bg-[var(--color-red)] text-black hover:bg-[var(--color-red-opacity)]
  `,
  "button-cancel-black": `
    border border-black bg-transparent text-black
    hover:bg-black hover:text-white
  `,
  "rounded-icon": `
    sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border border-[var(--color-skyblue)] text-white
    hover:bg-[var(--color-skyblue-opacity)]
  `,
  "connect-wallet": `
    py-2 px-4 sm:py-3 sm:px-5 md:py-4 md:px-6
    bg-[var(--color-skyblue)] text-black
    hover:bg-gradient-to-r hover:from-[var(--color-skyblue)] hover:to-[var(--color-purple)]
  `,
  "song-play": `
    py-2 px-4 sm:py-3 sm:px-5 md:py-4 md:px-6
    bg-[var(--color-skyblue)] text-black
    hover:bg-gradient-to-r hover:from-[var(--color-skyblue)] hover:to-[var(--color-purple)] hover:text-white
  `,
  "song-play-icon": `
    w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
    rounded-full border border-[var(--color-skyblue)] hover:bg-blue-500/10
  `,
  "song-unlock": `
    border border-[var(--color-skyblue)] bg-transparent text-white
    hover:bg-[var(--color-skyblue-opacity)] hover:text-black
  `,
  "buy-token": `
    py-2 px-4 sm:py-3 sm:px-5 md:py-4 md:px-6
    bg-[var(--color-skyblue)] text-black
    hover:bg-gradient-to-r hover:from-[var(--color-skyblue)] hover:to-[var(--color-purple)]
  `,
  "join-fun-club": `
    py-2 px-4 sm:py-3 sm:px-5 md:py-4 md:px-6
    bg-[var(--color-skyblue)] text-black
    hover:bg-gradient-to-r hover:from-[var(--color-skyblue)] hover:to-[var(--color-purple)]
  `,
  "session-active": `
    py-2 px-4 sm:py-3 sm:px-5 md:py-4 md:px-6
    bg-[var(--color-purple)] text-white
  `,
  "button-cancel-red-border": `
    border border-[var(--color-red)] bg-transparent text-[var(--color-red)]
    hover:bg-[var(--color-red-opacity)]
  `,
  "text-white-transparent": `
    bg-transparent border-none text-white font-medium
    text-[0.875rem] sm:text-[0.875rem] md:text-[0.875rem]
    rounded-[6px] px-3 py-2 hover:opacity-80
  `,
  session: `
    bg-transparent text-[var(--color-gray-text)] py-2 px-4 sm:py-3 sm:px-5 md:py-4 md:px-6
  `,
  yes: `
    bg-[var(--color-green)] text-black border border-[var(--color-green)]
    hover:bg-transparent hover:text-white transition-colors duration-200
  `,
  no: `
    bg-[var(--color-red)] text-black border border-[var(--color-red)]
    hover:bg-transparent hover:text-white transition-colors duration-200
  `,
  voted: `
    bg-[var(--color-light-gray)] text-[var(--color-gray-text)]
    hover:bg-[var(--color-light-gray-hover)]
  `,
  "follow-share": `
    bg-[var(--color-dark-bg)] text-white border border-[var(--color-skyblue)]
    hover:bg-[var(--color-dark-bg-hover)]
  `,
  "create-proposal-icon": `
    bg-transparent text-white border border-white rounded-md
    hover:bg-white/10
  `,
  "primary-action": `
    bg-[var(--color-highlight)] text-black font-bold
    hover:opacity-90
  `,
  "secondary-action": `
    bg-transparent text-white border border-white
    hover:bg-white/10
  `
}

// Button component
export type ButtonProps = BaseButtonProps & {
  variant?: keyof typeof buttonVisualVariants
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "continue",
      size,
      icon,
      iconPosition = "right",
      children,
      className,
      ...props
    },
    ref
  ) => {
    const content = (
      <>
        {icon && iconPosition === "left" && <span>{icon}</span>}
        <span className='button-label truncate overflow-hidden whitespace-nowrap min-w-0'>
          {children} {/* text will truncate */}
        </span>
        {icon && iconPosition === "right" && <span>{icon}</span>}
      </>
    )

    return (
      <BaseButton
        ref={ref}
        size={size}
        className={cn(buttonVisualVariants[variant], className)}
        {...props}
      >
        {content}
      </BaseButton>
    )
  }
)

Button.displayName = "Button"
