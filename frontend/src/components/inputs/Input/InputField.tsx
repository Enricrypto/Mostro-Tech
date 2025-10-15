import { Input as BaseInput } from "@/components/ui/input"
import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

export type InputProps = ComponentProps<typeof BaseInput> & {
  name?: string
  label?: string
  themeVariant?: "default" | "search"
  state?: "default" | "error" | "success" | "disabled"
  message?: string
}

export function InputField({
  name,
  label,
  themeVariant = "default",
  className,
  state = "default",
  message,
  ...props
}: InputProps) {
  const themeClasses = {
    default: `
      h-[var(--input-height,40px)]
      w-full
      rounded-[var(--radius-sm,6px)]
      px-[var(--space-sm,12px)]
      py-[var(--space-xs,8px)]
      font-body
      text-[var(--color-black,#1A1A1A)]
      placeholder:text-[var(--color-muted,#B3B3B3)]
      bg-[var(--color-surface-default,#FFFFFF)]
      border border-[var(--border-color,#CBD5E1)]
      shadow-[var(--shadow-md)]
      focus:outline-none
      focus:ring-0
    `,
    search: `
      h-[var(--input-height,40px)]
      w-full
      rounded-[var(--radius-sm,6px)]
      px-[var(--space-sm,12px)]
      py-[var(--space-xs,8px)]
      font-body
      text-[var(--color-black,#1A1A1A)]
      placeholder:text-[var(--color-muted,#B3B3B3)]
      bg-[var(--color-surface-default,#FFFFFF)]
      border border-[var(--border-color,#CBD5E1)]
      shadow-[var(--shadow-md)]
      focus:outline-none
      focus:ring-[var(--color-primary,#DCFD63)]
    `
  }

  const stateClasses = {
    error: "border-red-500 focus:border-red-500",
    success: "border-green-500 focus:border-green-500",
    disabled: "opacity-50 cursor-not-allowed",
    default: ""
  }

  const messageColor =
    state === "error"
      ? "text-red-500"
      : state === "success"
      ? "text-green-600"
      : "text-muted-foreground"

  return (
    <div className='flex flex-col gap-1 w-full'>
      {label && (
        <label
          htmlFor={name}
          className='text-sm font-medium text-[var(--color-text-default,#1A1A1A)]'
        >
          {label}
        </label>
      )}

      <BaseInput
        id={name}
        name={name}
        disabled={state === "disabled"}
        {...props}
        className={cn(
          "border-transparent bg-transparent focus-visible:ring-0 transition-colors",
          themeClasses[themeVariant],
          stateClasses[state],
          className
        )}
      />

      {message && (
        <p className={cn("text-sm mt-1 font-medium", messageColor)}>
          {message}
        </p>
      )}
    </div>
  )
}
