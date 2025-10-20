"use client"

import { LockIcon } from "@phosphor-icons/react"
import { Badge } from "@/components/utils/Badge"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const perksCardCVA = cva(
  "flex flex-col justify-between w-[374px] h-[134px] p-[18px] gap-[14px] rounded-[10px] border flex-shrink-0 bg-[#121B2B] transition-shadow duration-200",
  {
    variants: {
      variant: {
        default: "border-[#998CE1]",
        highlighted: "border-[#6654d3] shadow-[0_0_16.9px_5px_#6654D380]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export interface PerksCardProps extends VariantProps<typeof perksCardCVA> {
  title: string
  description: string
  tokenAmount: string | number
  className?: string
}

export function PerksCard({
  title,
  description,
  tokenAmount,
  variant,
  className
}: PerksCardProps) {
  return (
    <div className={cn(perksCardCVA({ variant }), className)}>
      {/* Top Section */}
      <div className='flex justify-between items-center text-white'>
        <span className='flex items-center justify-start font-inter font-semibold text-[18px] leading-[28px]'>
          {title}
        </span>
        <LockIcon size={20} />
      </div>

      {/* Middle Section */}
      <div className='font-inter font-medium text-[12px] leading-[20px] text-[#B3B3B3]'>
        {description}
      </div>

      {/* Bottom Section - Badge */}
      <Badge variant='neutral' className='self-start inline-flex'>
        {tokenAmount} tokens
      </Badge>
    </div>
  )
}
