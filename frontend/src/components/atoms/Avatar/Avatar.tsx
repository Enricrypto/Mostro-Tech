"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

export type AvatarVariant =
  | "rounded-sm"
  | "rounded-initials"
  | "square-lg"
  | "square-lg-initials"
  | "square-sm-lg"
  | "circle"

interface AvatarProps {
  src?: string
  alt?: string
  className?: string
  variant?: AvatarVariant
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "Avatar",
  className,
  variant = "rounded-sm"
}) => {
  return (
    <div className={cn("avatar", `avatar--${variant}`, className)}>
      {src && (
        <Image src={src} alt={alt} fill className='object-cover' sizes='100%' />
      )}
    </div>
  )
}
