"use client"

import { cn } from "@/lib/utils"

export type TextVariant = "h1" | "h2" | "h3" | "h4" | "p" | "small" | "large"

interface TextProps {
  children: React.ReactNode
  variant?: TextVariant
  className?: string
}

export const Text: React.FC<TextProps> = ({
  children,
  variant = "p",
  className
}) => {
  const baseClasses = "font-body text-p"
  const variantClasses: Record<TextVariant, string> = {
    h1: "text-h1 font-heading",
    h2: "text-h2 font-heading",
    h3: "text-h3 font-heading",
    h4: "text-h4 font-heading",
    p: "text-p",
    small: "text-small",
    large: "text-large leading-large"
  }

  return (
    <p className={cn(baseClasses, variantClasses[variant], className)}>
      {children}
    </p>
  )
}
