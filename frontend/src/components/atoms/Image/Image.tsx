"use client"

import { cn } from "@/lib/utils"

export type ImageProps = {
  className?: string
  src?: "artists/luna-eclipse.png" | "logo.png" | "miracle.png" | string
  alt?: string
}

/**
 * A responsive image component.
 * Supports all PNG files available in the public folder.
 */
export function Image({
  className,
  src = "artists/luna-eclipse.png",
  alt = "Image"
}: ImageProps) {
  // Ensure the src includes the leading slash for public folder
  const imageSrc = src.startsWith("/") ? src : `/${src}`

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={cn(
        "object-cover w-full h-auto rounded-md max-w-[336px]",
        className
      )}
    />
  )
}
