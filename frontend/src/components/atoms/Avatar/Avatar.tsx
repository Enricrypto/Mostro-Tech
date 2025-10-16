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

const VARIANT_CLASSES: Record<AvatarVariant, string> = {
  "rounded-sm": "w-10 h-10 rounded-[26px] opacity-100",
  "rounded-initials": "w-10 h-10 rounded-[26px] gap-2 opacity-100 bg-[#dcfd63]",
  "square-lg":
    "w-[288px] h-[288px] rounded-[26px] opacity-100 bg-gradient-to-b from-[rgba(220,253,99,0)] to-[rgba(220,253,99,0.2)]",
  "square-lg-initials":
    "w-[288px] h-[288px] rounded-[26px] gap-2 pt-3 pb-3 opacity-100 bg-gradient-to-b from-[#71d6fb] to-[#dcfd63]",
  "square-sm-lg":
    "w-[151px] h-[151px] rounded-[26px] opacity-100 bg-gradient-to-b from-[rgba(220,253,99,0)] to-[rgba(220,253,99,0.2)]",
  circle: "w-[48px] h-[48px] rounded-full"
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "Avatar",
  className,
  variant = "rounded-sm"
}) => {
  return (
    <div
      className={cn(
        "avatar relative inline-flex justify-center items-center overflow-hidden flex-shrink-0",
        VARIANT_CLASSES[variant],
        className
      )}
    >
      {src && <Image src={src} alt={alt} fill className='object-cover' />}
    </div>
  )
}
