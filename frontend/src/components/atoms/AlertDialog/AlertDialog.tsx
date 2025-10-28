"use client"

import React from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog"
import { WarningCircleIcon, CheckCircleIcon } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

export type AlertDialogProps = {
  trigger?: React.ReactNode
  useTrigger: boolean
  status?: boolean
  title?: string
  description?: string
  confirm?: string
  cancel?: string
  color?: string
  icon?: React.ReactNode
  iconEdit?: React.ReactNode
  iconPosition?: "left" | "right"
}

type Variant = "default" | "alert" | "confirm" | "alertIcon" | "confirmIcon"

type VariantClasses = {
  background: string
  title: string
  text: string
  primary_button: string
  secondary_button: string
  icon: React.ReactNode | null
}

export type AlertProps = {
  trigger?: React.ReactNode // If you want a personnal trigger
  useTrigger?: boolean // true if you want a default trigger than open the alert dialog, false if you want open the alert dialog at calling of this component
  open?: boolean // Initial state
  title?: string // Title of the alert dialog
  description?: string // Description of the alert
  confirm_cancel?: boolean // If you want to activate default confirm/cancel buttons
  confirmEdit?: string // If you want to modify the text of confirm button
  cancelEdit?: string // If you want to modify the text of cancel button
  variant?: Variant // To choose the color variant
  iconEdit?: React.ReactNode // If you want to personnalize the icon
  className?: string
  // iconPosition?: "left" | "right"
}

export function Alert({
  trigger,
  useTrigger = true,
  open: initialOpen = false,
  title,
  description,
  confirm_cancel = true,
  confirmEdit = "Confirm",
  cancelEdit = "Cancel",
  variant = "default",
  iconEdit = null,
  className,
  ...props
}: //iconPosition = "left",
AlertProps): React.JSX.Element {
  const [open, setOpen] = React.useState(initialOpen)

  const VARIANT_MAP: Record<Variant, VariantClasses> = {
    default: {
      background:
        "bg-[var(--color-alert-night)] border border-[var(--color-alert-blue)]",
      title: "text-[var(--color-alert-blue)]",
      text: "text-[var(--color-alert-grey)]",
      primary_button: "button-alert-primary",
      secondary_button: "button-alert-secondary",
      icon: null
    },
    alert: {
      background:
        "bg-[var(--color-alert-night)] border border-[var(--color-alert-red)]",
      title: "text-[var(--color-alert-red)]",
      text: "text-[var(--color-alert-red)]",
      primary_button: "button-alert-red-primary",
      secondary_button: "button-alert-red-secondary",
      icon: null
    },
    confirm: {
      background:
        "bg-[var(--color-alert-night)] border border-[var(--color-alert-green)]",
      title: "text-[var(--color-alert-green)]",
      text: "text-[var(--color-alert-green)]",
      primary_button: "button-alert-green-primary",
      secondary_button: "button-alert-green-secondary",
      icon: null
    },
    alertIcon: {
      background:
        "bg-[var(--color-alert-night)] border border-[var(--color-alert-red)]",
      title: "text-[var(--color-alert-red)]",
      text: "text-[var(--color-alert-red)]",
      primary_button: "button-alert-red-primary",
      secondary_button: "button-alert-red-secondary",
      icon: (
        <WarningCircleIcon
          className='text-(--color-alert-red)'
          size={24}
          weight='regular'
        />
      )
    },
    confirmIcon: {
      background:
        "bg-[var(--color-alert-night)] border border-[var(--color-alert-green)]",
      title: "text-[var(--color-alert-green)]",
      text: "text-[var(--color-alert-green)]",
      primary_button: "button-alert-green-primary",
      secondary_button: "button-alert-green-secondary",
      icon: (
        <CheckCircleIcon
          className='text-(--color-alert-green)'
          size={24}
          weight='regular'
        />
      )
    }
  }

  const icon = iconEdit ?? VARIANT_MAP[variant].icon

  return (
    <AlertDialog open={open} onOpenChange={setOpen} {...props}>
      {useTrigger && trigger && (
        <AlertDialogTrigger>{trigger}</AlertDialogTrigger>
      )}

      <AlertDialogContent
        className={cn(VARIANT_MAP[variant].background)}
        onPointerDownOutside={() => setOpen(false)}
        onInteractOutside={() => setOpen(false)}
      >
        <AlertDialogHeader>
          <div className='p-2 h-full flex gap-2'>
            {icon && <div className='w-1/10 flex justify-center'> {icon} </div>}

            <div className='flex flex-col flex-1 gap-2'>
              <div className='flex-1 flex'>
                {
                  <AlertDialogTitle className={VARIANT_MAP[variant].title}>
                    {title}
                  </AlertDialogTitle>
                }
              </div>
              <div className='flex-1 flex'>
                {
                  <AlertDialogDescription className={VARIANT_MAP[variant].text}>
                    {description}
                  </AlertDialogDescription>
                }
              </div>
            </div>
          </div>
        </AlertDialogHeader>

        <AlertDialogFooter>
          {confirm_cancel && (
            <AlertDialogCancel
              className={VARIANT_MAP[variant].secondary_button}
            >
              {cancelEdit}
            </AlertDialogCancel>
          )}
          {confirm_cancel && (
            <AlertDialogAction className={VARIANT_MAP[variant].primary_button}>
              {confirmEdit}
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
