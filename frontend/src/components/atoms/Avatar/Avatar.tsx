// components/atoms/Avatar/Avatar.tsx
"use client"

import Image from "next/image"
import React from "react"
import { cn } from "@/lib/utils"

interface AvatarProps {
  src?: string
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
        // ✅ Keep only layout-related classes
        "relative overflow-hidden flex-shrink-0",
        // ✅ Apply fallback background only if no src
        !src &&
          "bg-gradient-to-b from-[rgba(220,253,99,0)] to-[rgba(220,253,99,0.2)]",
        className // external variants applied here
      )}
    >
      {src && (
        <Image
          src={src}
          alt={alt}
          fill
          className='object-cover'
          sizes='(max-width: 640px) 32px, 40px'
        />
      )}
    </div>
  )
}
