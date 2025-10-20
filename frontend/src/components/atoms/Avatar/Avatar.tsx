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
        "rounded-initials":
          "w-10 h-10 rounded-[26px] gap-2 bg-[var(--color-highlight)] text-black",
        "square-lg": "w-[288px] h-[288px] rounded-[26px]",
        "square-lg-initials":
          "w-[288px] h-[288px] rounded-[26px] gap-2 pt-3 pb-3 bg-[var(--color-highlight)] text-black",
        "square-sm-lg": "w-[151px] h-[151px] rounded-[26px]",
        "square-sm-lg-initials":
          "w-[151px] h-[151px] rounded-[26px] gap-2 pt-2 pb-2 bg-[var(--color-highlight)] text-black",
        "square-community": "w-[76px] h-[76px] rounded-[15px]",
        "square-community-initials":
          "w-[76px] h-[76px] rounded-[15px] gap-2 pt-3 pb-3 bg-[var(--color-highlight)] text-black",
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
    | "square-sm-lg-initials"
    | "square-community"
    | "square-community-initials"
    | "circle"
  initials?: string
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "Avatar",
  className,
  variant,
  initials
}) => {
  return (
    <div className={cn(avatarVariants({ variant }), className)}>
      {src && src.trim() !== "" ? (
        <Image src={src} alt={alt} fill className='object-cover' sizes='100%' />
      ) : initials ? (
        <span className='text-black'>{initials}</span>
      ) : (
        <span className='text-black'>{alt[0]}</span>
      )}
    </div>
  )
}
