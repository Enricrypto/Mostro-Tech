"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"

const baseAvatar =
  "relative inline-flex justify-center items-center overflow-hidden flex-shrink-0"
const initialsStyles = "gap-2 bg-[var(--color-highlight)] text-black"

export const avatarVariants = cva(baseAvatar, {
  variants: {
    variant: {
      "rounded-sm": "w-10 h-10 rounded-[26px]",
      "square-sm": "w-10 h-10 rounded-[6px]",
      "rounded-initials": `w-10 h-10 rounded-[26px] ${initialsStyles}`,
      "square-lg": "w-[288px] h-[288px] rounded-[26px]",
      "square-lg-initials": `w-[288px] h-[288px] rounded-[26px] pt-3 pb-3 ${initialsStyles}`,
      "square-sm-lg": "w-[151px] h-[151px] rounded-[26px]",
      "square-sm-lg-initials": `w-[151px] h-[151px] rounded-[26px] pt-2 pb-2 ${initialsStyles}`,
      "square-community": "w-[76px] h-[76px] rounded-[15px]",
      "square-community-initials": `w-[76px] h-[76px] rounded-[15px] pt-3 pb-3 ${initialsStyles}`,
      circle: "w-10 h-10 rounded-full"
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
  | "square-sm-lg"
  | "square-sm-lg-initials"
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
        <span className='text-black'>{displayInitial}</span>
      )}
    </div>
  )
}
