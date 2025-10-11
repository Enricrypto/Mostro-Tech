import { Button as BaseButton } from "@/components/ui/button"
import type { ComponentProps } from "react"
import { cn } from "@/lib/utils" // utility to merge classNames

export type ButtonProps = ComponentProps<typeof BaseButton> & {
  themeVariant?: "connect" | "pill" // optional: custom variants for your theme.css
}

export function Button({ themeVariant, className, ...props }: ButtonProps) {
  // Map themeVariant to theme.css classes, including fonts, radius, hover, and active states
  const themeClasses = {
    connect: `
      py-3 px-6 
      rounded-[var(--radius-pill)]
      font-body font-medium
      bg-[var(--color-highlight)] text-[var(--color-black)]
      hover:bg-[var(--color-accent-dark)]
      active:bg-[var(--color-primary-light)]
      transition
    `,
    pill: `
      px-4 py-2 
      rounded-[var(--radius-pill)]
      font-body font-medium
      bg-[var(--color-primary)] text-[var(--color-white)]
      hover:bg-[var(--color-primary-light)]
      active:bg-[var(--color-accent-dark)]
      transition
    `
  }

  return (
    <BaseButton
      {...props}
      className={cn(themeVariant ? themeClasses[themeVariant] : "", className)}
    />
  )
}
