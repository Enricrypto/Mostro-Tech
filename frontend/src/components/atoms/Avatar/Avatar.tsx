"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"

const baseAvatar =
  "relative inline-flex justify-center items-center overflow-hidden flex-shrink-0 font-body font-semibold text-black"

export const avatarVariants = cva(baseAvatar, {
  variants: {
    variant: {
      "rounded-sm": "w-10 h-10 rounded-[26px]",
      "square-sm": "w-10 h-10 rounded-[6px]",
      "rounded-initials": "w-10 h-10 rounded-[26px]",
      "square-lg": "w-[18rem] h-[18rem] rounded-[26px]",
      "square-lg-initials":
        "w-[18rem] h-[18rem] rounded-[26px] pt-3 pb-3 bg-[var(--color-highlight)] text-black",
      "square-md": "w-[9.5rem] h-[9.5rem] rounded-[26px]",
      "square-md-initials":
        "w-[9.5rem] h-[9.5rem] rounded-[26px] pt-2 pb-2 bg-[var(--color-highlight)] text-black",
      "square-community": "w-[4.75rem] h-[4.75rem] rounded-[15px]",
      "square-community-initials":
        "w-[4.75rem] h-[4.75rem] rounded-[15px] pt-3 pb-3 bg-[var(--color-highlight)] text-black",
      circle: "w-10 h-10 rounded-full"
    },
    responsive: {
      true: "sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
    }
  },
  defaultVariants: {
    variant: "rounded-sm"
  }
})

export type AvatarVariant =
  | "rounded-sm"
  | "square-sm"
  | "rounded-initials"
  | "square-lg"
  | "square-lg-initials"
  | "square-md"
  | "square-md-initials"
  | "square-community"
  | "square-community-initials"
  | "circle"

export interface AvatarProps {
  src?: string
  alt?: string
  className?: string
  variant?: AvatarVariant
  initials?: string
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "Avatar",
  className,
  variant,
  initials
}) => {
  const displayInitial = initials || alt[0]

  return (
    <div className={cn(avatarVariants({ variant }), className)}>
      {src?.trim() ? (
        <Image src={src} alt={alt} fill className='object-cover' sizes='100%' />
      ) : (
        <span className='text-[1rem] sm:text-[0.875rem] md:text-[1rem] lg:text-[1.125rem]'>
          {displayInitial}
        </span>
      )}
    </div>
  )
}
