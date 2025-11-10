"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Base CVA styles (responsive + variant-aware)
export const baseAlertDialogVariants = cva(
  "data-[state=open]:animate-in data-[state=closed]:animate-out " +
    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 " +
    "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 " +
    "fixed top-[50%] left-[50%] z-50 grid translate-x-[-50%] translate-y-[-50%] " +
    "rounded-lg border shadow-lg duration-200 p-4 sm:p-6 flex flex-col gap-4 " +
    "w-[calc(100%-2rem)] max-w-md sm:max-w-lg",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-alert-night)] border-[var(--color-alert-blue)] text-[var(--color-alert-grey)]",
        alert:
          "bg-[var(--color-alert-night)] border-[var(--color-alert-red)] text-[var(--color-alert-red)]",
        confirm:
          "bg-[var(--color-alert-night)] border-[var(--color-alert-green)] text-[var(--color-alert-green)]"
      },
      size: {
        sm: "text-sm sm:text-base",
        md: "text-base sm:text-lg"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
)

export type BaseAlertDialogProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Content
> &
  VariantProps<typeof baseAlertDialogVariants> & {
    onPointerDownOutside?: (event: any) => void
    onInteractOutside?: (event: any) => void
  }

// Root wrapper
function AlertDialog({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot='alert-dialog' {...props} />
}

// Trigger
function AlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return (
    <AlertDialogPrimitive.Trigger data-slot='alert-dialog-trigger' {...props} />
  )
}

// Portal
function AlertDialogPortal({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return (
    <AlertDialogPrimitive.Portal data-slot='alert-dialog-portal' {...props} />
  )
}

// Overlay
function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot='alert-dialog-overlay'
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out " +
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 " +
          "fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px]",
        className
      )}
      {...props}
    />
  )
}

// Content (the responsive + variant part)
function AlertDialogContent({
  className,
  variant,
  size,
  ...props
}: BaseAlertDialogProps) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay
        onClick={() => props.onPointerDownOutside?.({} as any)}
      />
      <AlertDialogPrimitive.Content
        data-slot='alert-dialog-content'
        className={cn(baseAlertDialogVariants({ variant, size }), className)}
        {...props}
      />
    </AlertDialogPortal>
  )
}

// Header
function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot='alert-dialog-header'
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

// Footer
function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot='alert-dialog-footer'
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

// Title
function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot='alert-dialog-title'
      className={cn("text-lg sm:text-xl font-semibold", className)}
      {...props}
    />
  )
}

// Description
function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot='alert-dialog-description'
      className={cn("text-muted-foreground text-sm sm:text-base", className)}
      {...props}
    />
  )
}

// Action
function AlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action>) {
  return (
    <AlertDialogPrimitive.Action
      data-slot='alert-dialog-action'
      className={cn("button-alert-green-primary", className)}
      {...props}
    />
  )
}

// Cancel
function AlertDialogCancel({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) {
  return (
    <AlertDialogPrimitive.Cancel
      data-slot='alert-dialog-cancel'
      className={cn("button-alert-secondary", className)}
      {...props}
    />
  )
}

// Exports
export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel
}
