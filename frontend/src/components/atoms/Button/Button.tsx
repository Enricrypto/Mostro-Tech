"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Minimal base button atom
export const baseButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all rounded-md outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      size: {
        default: "h-10 px-4 sm:px-5 md:px-6",
        sm: "h-8 px-3 sm:px-4",
        lg: "h-12 px-6 sm:px-8",
        icon: "w-10 h-10 sm:w-12 sm:h-12",
        "icon-xs": "w-6 h-6 sm:w-7 sm:h-7",
        "icon-sm": "w-8 h-8 sm:w-10 sm:h-10",
        "icon-lg": "w-12 h-12 sm:w-14 sm:h-14"
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

// All visual variants live in Button
export type ButtonProps = BaseButtonProps & {
  variant?: keyof typeof buttonVisualVariants
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
}

const buttonVisualVariants = {
  continue: `
    bg-[var(--color-skyblue)] 
    text-[var(--color-black)] 
    hover:bg-gradient-to-r hover:from-[var(--color-skyblue)] hover:to-[var(--color-purple)]
  `,
  link: `
    cursor-pointer font-normal text-white text-base 
    hover:underline hover:text-[var(--color-highlight)] bg-transparent
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
    w-4 h-4 rounded-full border border-[var(--color-skyblue)] text-white 
    hover:bg-[var(--color-skyblue-opacity)]
  `,
  highlight: `
    py-3 px-6 rounded-full bg-[var(--color-highlight)] text-black 
    hover:bg-[var(--color-highlight-opacity)]
  `,
  "connect-wallet": `
    bg-[var(--color-skyblue)] text-black 
    hover:bg-gradient-to-r hover:from-[var(--color-skyblue)] hover:to-[var(--color-purple)]
  `,
  "song-play": `
    bg-[var(--color-skyblue)] text-black 
    hover:bg-gradient-to-r hover:from-[var(--color-skyblue)] hover:to-[var(--color-purple)] hover:text-white
  `,
  "song-play-icon": `
    w-10 h-10 rounded-full border border-[var(--color-skyblue)] hover:bg-blue-500/10
  `,
  "song-unlock": `
    border border-[var(--color-skyblue)] bg-transparent text-white 
    hover:bg-[var(--color-skyblue-opacity)] hover:text-black
  `,
  "buy-token": `
    bg-[var(--color-skyblue)] text-black 
    hover:bg-gradient-to-r hover:from-[var(--color-skyblue)] hover:to-[var(--color-purple)]
  `,
  "join-fun-club": `
    bg-[var(--color-skyblue)] text-black 
    hover:bg-gradient-to-r hover:from-[var(--color-skyblue)] hover:to-[var(--color-purple)]
  `,
  "session-active": `
    bg-[var(--color-purple)] text-white
  `,
  "button-cancel-red-border": `
    border border-[var(--color-red)] bg-transparent text-[var(--color-red)] 
    hover:bg-[var(--color-red-opacity)]
  `,
  "text-white-transparent": `
    bg-transparent border-none text-white font-medium text-[14px] leading-[24px] 
    rounded-[6px] px-4 py-2 hover:opacity-80
  `,
  session: `
    bg-transparent text-[var(--color-gray-text)]
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
  `
}

// Button component
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
        {icon && iconPosition === "left" && (
          <span className='icon'>{icon}</span>
        )}
        <span className='button-label'>{children}</span>
        {icon && iconPosition === "right" && (
          <span className='icon'>{icon}</span>
        )}
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
