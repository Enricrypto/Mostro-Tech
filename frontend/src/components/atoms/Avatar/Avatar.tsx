"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"

export const avatarVariants = cva(
  "relative inline-flex justify-center items-center overflow-hidden flex-shrink-0",
  {
    variants: {
      variant: {
        "rounded-sm": "w-10 h-10 rounded-[26px]",
        "rounded-initials": "w-10 h-10 rounded-[26px] gap-2",
        "square-lg": "w-[288px] h-[288px] rounded-[26px]",
        "square-lg-initials":
          "w-[288px] h-[288px] rounded-[26px] gap-2 pt-3 pb-3",
        "square-sm-lg": "w-[151px] h-[151px] rounded-[26px]",
        circle: "w-10 h-10 rounded-full"
      }
    },
    defaultVariants: {
      variant: "rounded-sm"
    }
  }
)

export interface AvatarProps {
  src?: string
  alt?: string
  className?: string
  variant?:
    | "rounded-sm"
    | "rounded-initials"
    | "square-lg"
    | "square-lg-initials"
    | "square-sm-lg"
    | "circle"
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "Avatar",
  className,
  variant
}) => {
  return (
    <div className={cn(avatarVariants({ variant }), className)}>
      {typeof src === "string" && src.trim() !== "" && (
        <Image src={src} alt={alt} fill className='object-cover' sizes='100%' />
      )}
    </div>
  )
}
