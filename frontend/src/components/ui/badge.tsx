import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        /* New variants: neutral & left
           - Both variants should use the same responsive font-size and padding so
             badges look consistent across breakpoints and across component
             usages. We set truncation and a reasonable max width for neutral
             (which may contain longer strings), while `left` can naturally
             shrink to its content but keeps the same font/padding so heights
             match. */
        neutral:
          "border-transparent bg-[var(--color-night)] text-white whitespace-nowrap overflow-hidden truncate px-2 py-0.5 text-[7px] sm:text-[6px] md:text-[7px] lg:text-[8px] w-fit max-w-[120px] md:max-w-[200px] lg:max-w-[280px]",
        left:
          "border-transparent bg-[var(--color-purple)] text-white whitespace-nowrap overflow-hidden truncate px-2 py-0.5 text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] w-fit max-w-[80px] md:max-w-[110px] lg:max-w-[130px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
