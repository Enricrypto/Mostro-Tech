// components/atoms/Avatar/Avatar.tsx
"use client"

import Image from "next/image"
import React from "react"
import { cn } from "@/lib/utils"

interface AvatarProps {
  src?: string // optional, fallback to gradient if no image
  alt?: string
  className?: string
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "Avatar",
  className
}) => {
  return (
    <div
      className={cn(
        "w-10 h-10 rounded-[26px] flex-shrink-0 relative overflow-hidden",
        "bg-gradient-to-b from-[rgba(220,253,99,0)] to-[rgba(220,253,99,0.2)]",
        className
      )}
    >
      {src && (
        <Image src={src} alt={alt} fill className='object-cover' sizes='40px' />
      )}
    </div>
  )
}
