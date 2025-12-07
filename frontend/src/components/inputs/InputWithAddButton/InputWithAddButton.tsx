"use client"

import * as React from "react"
import { Input as BaseInput } from "@/components/ui/input"
import { Button } from "@/components/atoms/Button"
import { Plus } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

interface InputWithAddButtonProps {
  label: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onAdd: () => void
}

export function InputWithAddButton({
  label,
  placeholder,
  value,
  onChange,
  onAdd,
}: InputWithAddButtonProps) {
  const isButtonDisabled = value.trim() === ""

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm font-medium text-white">{label}</label>
      <div className="relative flex items-center">
        <BaseInput
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={cn(
            "h-[var(--input-height,48px)] w-full rounded-lg px-4 py-2 font-body text-white placeholder:text-gray-400 bg-black/20 border border-white/30 focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-colors pr-12", // Added pr-12 to make space for the button
          )}
        />
        <Button
          variant="create-proposal-icon" 
          size="icon-sm"
          onClick={onAdd}
          disabled={isButtonDisabled}
          className={cn(
            "absolute right-2 top-1/2 -translate-y-1/2",
            !isButtonDisabled && "bg-[var(--color-skyblue)] border-[var(--color-skyblue)] text-[var(--color-black)] hover:bg-gradient-to-r hover:from-[var(--color-skyblue)] hover:to-[var(--color-purple)]",
          )}
        >
          <Plus size={20} />
        </Button>
      </div>
    </div>
  )
}
