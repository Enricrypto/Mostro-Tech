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
        className='text-(--color-alert-red) w-6 h-6 sm:w-7 sm:h-7'
        weight='regular'
      />
    ) : variant === "confirmIcon" ? (
      <CheckCircleIcon
        className='text-(--color-alert-green) w-6 h-6 sm:w-7 sm:h-7'
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
        className='max-w-sm w-[90vw] sm:max-w-md sm:w-[80vw] md:max-w-lg md:w-[60vw] p-4 sm:p-5 md:p-6'
      >
        <AlertDialogHeader>
          <div className='flex items-start gap-2 sm:gap-3 md:gap-4'>
            {icon && <div className='shrink-0'>{icon}</div>}
            <div className='flex flex-col gap-1 sm:gap-2 md:gap-3'>
              {title && (
                <AlertDialogTitle className='text-base sm:text-lg md:text-xl'>
                  {title}
                </AlertDialogTitle>
              )}
              {description && (
                <AlertDialogDescription className='text-sm sm:text-base md:text-lg'>
                  {description}
                </AlertDialogDescription>
              )}
            </div>
          </div>
        </AlertDialogHeader>

        <AlertDialogFooter className='flex flex-col sm:flex-row gap-2 sm:-gap-3 mt-4'>
          <AlertDialogCancel className='text-sm sm:text-base md:text-lg'>
            {cancelText}
          </AlertDialogCancel>
          <AlertDialogAction className='text-sm sm:text-base md:text-lg'>
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
