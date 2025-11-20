"use client"

import { LockOpenIcon } from "@phosphor-icons/react"
import { Badge } from "@/components/utils/Badge"
import { Tooltip } from "@/components/atoms/Tooltip"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const perksCardCVA = cva(
  "flex flex-col justify-between p-[18px] gap-1.5 rounded-[10px] border flex-shrink-0 bg-[var(--color-night)] transition-shadow duration-200 hover:border-[var(--color-purple)] hover:shadow-[0_0_16.9px_5px_var(--color-purple-opacity)]",
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
  itemsLeft?: number
  showItemsLeft?: boolean
}

export function PerksCard({
  title,
  name,
  tokenAmount,
  variant,
  className,
  itemsLeft,
  showItemsLeft
}: PerksCardProps) {
  return (
    <div className={cn(perksCardCVA({ variant }), className)}>
      {/* Top Section */}
      <Tooltip variant='blue' content={title} side='top'>
        <div className='flex justify-between items-center text-white'>
          <span
            className='
        flex-1 overflow-hidden text-ellipsis whitespace-nowrap
        font-semibold text-[12px] md:text-[20px] leading-7
      '
          >
            {title}
          </span>

          <LockOpenIcon size={20} className='ml-2 shrink-0' />
        </div>
      </Tooltip>

      {/* Middle Section */}
      <div className='font-medium text-[12px] leading-5 text-(--color-grey) truncate'>
        {name}
      </div>

      {/* Bottom Section - Badge */}
      <div className='flex items-center flex-wrap gap-2'>
        <Badge variant='neutral' className='text-[8.5px] w-max md:text-[12px]'>
          {tokenAmount} tokens
        </Badge>
        {showItemsLeft && (
          <Badge variant='left' className='text-[8.5px] w-max md:text-[12px]'>
            {itemsLeft} Left
          </Badge>
        )}
      </div>
    </div>
  )
}
