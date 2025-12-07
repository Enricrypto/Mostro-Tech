"use client"

import * as React from "react"
import { RadioGroupItem } from "./RadioGroupItem"

interface RadioGroupProps {
  options: { value: string; label: string }[]
  selectedValue: string | null
  onChange: (value: string) => void
  label: string
  description?: string
}

export const RadioGroup = ({
  options,
  selectedValue,
  onChange,
  label,
  description,
}: RadioGroupProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <label className="text-sm font-medium text-white">{label}</label>
        {description && (
          <p className="text-sm text-gray-400">{description}</p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option) => (
          <RadioGroupItem
            key={option.value}
            value={option.value}
            label={option.label}
            isSelected={selectedValue === option.value}
            onClick={onChange}
          />
        ))}
      </div>
    </div>
  )
}
