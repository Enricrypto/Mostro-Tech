"use client"

import { cn } from "@/lib/utils"

export type ImageProps = {
  className?: string
  src?: "avatar.png" | "logo.png" | "miracle.png" | string
  alt?: string
}

// Available PNG images in public folder
const AVAILABLE_PNG_IMAGES = [
  "avatar.png",
  "logo.png", 
  "miracle.png"
] as const

// Constants for fixed styling
const IMAGE_STYLES = {
  width: 336,
  height: 150,
  borderRadius: 6,
  angle: 0,
  opacity: 1
} as const

/**
 * Image component with fixed dimensions and styling
 * Supports all PNG files available in the public folder
 */
export function Image({
  className,
  src = "avatar.png",
  alt = "Image"
}: ImageProps) {
  
  // Ensure the src includes the leading slash for public folder
  const imageSrc = src.startsWith('/') ? src : `/${src}`
  
  const imageStyle = {
    width: `${IMAGE_STYLES.width}px`,
    height: `${IMAGE_STYLES.height}px`,
    borderRadius: `${IMAGE_STYLES.borderRadius}px`,
    transform: `rotate(${IMAGE_STYLES.angle}deg)`,
    opacity: IMAGE_STYLES.opacity
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      style={imageStyle}
      className={cn("object-cover", className)}
    />
  )
}