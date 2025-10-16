"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

export type AvatarVariant =
  | "rounded-sm"
  | "rounded-md"
  | "circle"
  | "square-sm-lg" // ✅ new variant

interface AvatarProps {
  src?: string
  alt?: string
  className?: string
  variant?: AvatarVariant
}

const VARIANT_CLASSES: Record<AvatarVariant, string> = {
  "rounded-sm":
    "w-[40px] h-[40px] rounded-[26px] bg-gradient-to-b from-[rgba(220,253,99,0)] to-[rgba(220,253,99,0.2)]",
  "rounded-md": "w-[60px] h-[60px] rounded-[30px]",
  circle: "w-[48px] h-[48px] rounded-full",
  "square-sm-lg":
    "w-[151px] h-[151px] rounded-[26px] bg-gradient-to-b from-[rgba(220,253,99,0)] to-[rgba(220,253,99,0.2)]"
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
        "relative overflow-hidden flex-shrink-0",
        VARIANT_CLASSES[variant],
        !src &&
          "bg-gradient-to-b from-[rgba(220,253,99,0)] to-[rgba(220,253,99,0.2)]",
        className
      )}
    >
      {src && <Image src={src} alt={alt} fill className='object-cover' />}
    </div>
  )
}
