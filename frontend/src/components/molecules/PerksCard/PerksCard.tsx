"use client"

import { LockOpenIcon } from "@phosphor-icons/react"
import { Badge } from "@/components/utils/Badge"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const perksCardCVA = cva(
  "flex flex-col justify-between w-[374px] h-[134px] p-[18px] gap-[14px] rounded-[10px] border flex-shrink-0 bg-[var(--color-night)] transition-shadow duration-200 hover:border-[var(--color-purple)] hover:shadow-[0_0_16.9px_5px_var(--color-purple-opacity)]",
  {
    variants: {
      variant: {
        default: "border-[var(--color-primary)]",
        highlighted:
          "border-[var(--color-purple)] shadow-[0_0_16.9px_5px_var(--color-purple-opacity)]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export interface PerksCardProps extends VariantProps<typeof perksCardCVA> {
  title: string
  name: string
  tokenAmount: string | number
  className?: string
}

export function PerksCard({
  title,
  name,
  tokenAmount,
  variant,
  className
}: PerksCardProps) {
  return (
    <div className={cn(perksCardCVA({ variant }), className)}>
      {/* Top Section */}
      <div className='flex justify-between items-center text-white'>
        <span className='flex items-center font-inter font-semibold text-[18px] leading-7 truncate max-w-[260px]'>
          {title}
        </span>
        <LockOpenIcon size={20} />
      </div>

      {/* Middle Section */}
      <div className='font-inter font-medium text-[12px] leading-5 text-(--color-grey) truncate'>
        {name}
      </div>

      {/* Bottom Section - Badge */}
      <Badge variant='neutral' className='w-max'>
        {tokenAmount} tokens
      </Badge>
    </div>
  )
}
