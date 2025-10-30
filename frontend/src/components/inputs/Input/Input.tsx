"use client"

import { Input as BaseInput } from "@/components/ui/input"
import { Button } from "@/components/atoms/Button"
import { cn } from "@/lib/utils"

interface InputProps {
  state?: "default" | "focus" | "success" | "error" | "disabled" | "subscribe"
  label?: string
  message?: string
}

export function Input({
  state = "default",
  label = "Email",
  message
}: InputProps) {
  const getMessageColor = () => {
    if (state === "success") return "text-green-500"
    if (state === "error") return "text-red-500"
    return "text-muted-foreground"
  }

  const getButtonVariant = () =>
    state === "subscribe" ? "secondary" : "default"

  const isDisabled = state === "disabled"

  return (
    <div className='flex flex-col gap-2 w-[384px]'>
      <label className='text-sm font-medium text-foreground'>{label}</label>

      <div className='flex gap-2'>
        <BaseInput
          placeholder='Email'
          disabled={isDisabled}
          className={cn(
            state === "focus" && "ring-2 ring-primary border-primary",
            state === "error" && "border-red-500",
            state === "success" && "border-green-500"
          )}
        />
        <Button variant={getButtonVariant()} disabled={isDisabled}>
          Subscribe
        </Button>
      </div>

      {message && <p className={cn("text-sm", getMessageColor())}>{message}</p>}
    </div>
  )
}
