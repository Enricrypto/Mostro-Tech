import { Input as BaseInput } from "@/components/ui/input"
import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

export type InputProps = ComponentProps<typeof BaseInput> & {
  themeVariant?: "default" | "search"
}

export function InputField({ themeVariant, className, ...props }: InputProps) {
  const themeClasses = {
    default: `
      h-[var(--input-height)]
      w-full
      rounded-[var(--radius-sm)]
      px-[var(--space-sm)]
      py-[var(--space-xs)]
      font-body
      text-[var(--color-black)]
      placeholder:text-[var(--color-muted)]
      bg-[var(--color-surface-default)]
      border border-[var(--border-color)]
      shadow-[var(--shadow-md)]
      focus:outline-none
      focus:ring-0
    `,
    search: `
      h-[var(--input-height)]
      w-full
      rounded-[var(--radius-sm)]
      px-[var(--space-sm)]
      py-[var(--space-xs)]
      font-body
      text-[var(--color-black)]
      placeholder:text-[var(--color-muted)]
      bg-[var(--color-surface-default)]
      border border-[var(--border-color)]
      shadow-[var(--shadow-md)]
      focus:outline-none
      focus:ring-[var(--color-primary)]
    `
  }

  return (
    <BaseInput
      {...props}
      className={cn(
        // Neutralize shadcn base styles
        "border-transparent bg-transparent focus-visible:ring-0 focus-visible:border-transparent",
        themeVariant ? themeClasses[themeVariant] : "",
        className
      )}
    />
  )
}
