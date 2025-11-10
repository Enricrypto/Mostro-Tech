// components/molecules/Alert.tsx
"use client"

import React from "react"
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction
} from "@/components/ui/alert-dialog"

import { WarningCircleIcon, CheckCircleIcon } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

type Variant = "default" | "alertIcon" | "confirmIcon"

export function Alert({
  trigger,
  title,
  description,
  variant = "default",
  confirmText = "Confirm",
  cancelText = "Cancel",
  useTrigger = true,
  open: initialOpen = false
}: {
  trigger?: React.ReactNode
  title?: string
  description?: string
  variant?: Variant
  confirmText?: string
  cancelText?: string
  useTrigger?: boolean
  open?: boolean
}) {
  const [open, setOpen] = React.useState(initialOpen)

  const variantToBaseVariant = {
    default: "default",
    alertIcon: "alert",
    confirmIcon: "confirm"
  } as const

  const icon =
    variant === "alertIcon" ? (
      <WarningCircleIcon
        className='text-(--color-alert-red)'
        size={24}
        weight='regular'
      />
    ) : variant === "confirmIcon" ? (
      <CheckCircleIcon
        className='text-(--color-alert-green)'
        size={24}
        weight='regular'
      />
    ) : null

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      {useTrigger && trigger && (
        <AlertDialogTrigger>{trigger}</AlertDialogTrigger>
      )}

      <AlertDialogContent
        variant={variantToBaseVariant[variant]}
        onPointerDownOutside={() => setOpen(false)}
      >
        <AlertDialogHeader>
          <div className='flex items-start gap-3'>
            {icon && <div className='shrink-0'>{icon}</div>}
            <div className='flex flex-col gap-2'>
              {title && <AlertDialogTitle>{title}</AlertDialogTitle>}
              {description && (
                <AlertDialogDescription>{description}</AlertDialogDescription>
              )}
            </div>
          </div>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>{cancelText}</AlertDialogCancel>
          <AlertDialogAction>{confirmText}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
