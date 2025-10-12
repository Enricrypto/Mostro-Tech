"use client"

import React from "react"
import { FormProvider, UseFormReturn, FieldValues } from "react-hook-form"
import { cn } from "@/lib/utils"

// Chadcn subcomponents
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl
} from "@/components/ui/form"

type ThemedFormProps<T extends FieldValues> = {
  form: UseFormReturn<T>
  className?: string
  spacing?: string
  children: React.ReactNode
  onSubmit?: (data: T) => void
}

export function ThemedForm<T extends FieldValues>({
  form,
  className,
  spacing = "var(--space-2)",
  children,
  onSubmit
}: ThemedFormProps<T>) {
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit ?? (() => {}))}
        className={cn(
          "flex flex-col font-body text-[var(--color-text-default)]",
          `gap-[${spacing}]`,
          className
        )}
      >
        {children}
      </form>
    </FormProvider>
  )
}

// Re-export Chadcn subcomponents
ThemedForm.Item = FormItem
ThemedForm.Control = FormControl
ThemedForm.Label = FormLabel
ThemedForm.Field = FormField
