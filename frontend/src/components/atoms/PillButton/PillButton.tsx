"use client"

import { cn } from "@/lib/utils"
import type { ComponentProps } from "react"
import {
  InstagramLogoIcon,
  FacebookLogoIcon,
  SpotifyLogoIcon,
  XLogoIcon,
  TiktokLogoIcon
} from "@phosphor-icons/react"

export type SocialType =
  | "instagram"
  | "facebook"
  | "spotify"
  | "twitter"
  | "tiktok"

export type PillButtonProps = ComponentProps<"button"> & {
  themeVariant?: "primary" | "secondary" | "black" | "blue" | "yellow"
  selected?: boolean
  social?: SocialType
}

const SOCIAL_MAP: Record<SocialType, React.ElementType> = {
  instagram: InstagramLogoIcon,
  facebook: FacebookLogoIcon,
  spotify: SpotifyLogoIcon,
  twitter: XLogoIcon,
  tiktok: TiktokLogoIcon
}

export const PillButton = ({
  className,
  children,
  social,
  themeVariant = "primary",
  selected = false,
  ...props
}: PillButtonProps) => {
  // Base styles — remove fixed width/height so it resizes with content
  const baseStyles = cn(
    "inline-flex items-center justify-center gap-2",
    "w-auto h-[var(--pill-button-height)]", // dynamic width
    "px-[var(--spacing-3)] py-[var(--spacing-1)] rounded-pill font-body transition",
    "border border-[var(--color-primary)]"
  )

  const variantStyles = {
    primary: cn(
      selected
        ? "bg-[var(--color-primary)] text-[var(--color-white)]"
        : "bg-[var(--color-white)] text-[var(--color-black)] hover:bg-[var(--hover-primary)]"
    ),
    secondary: cn(
      selected
        ? "bg-[var(--color-accent-dark)] text-[var(--color-white)]"
        : "bg-[var(--color-accent)] text-[var(--color-black)] hover:bg-[var(--hover-accent)]"
    ),
    black: cn(
      "bg-[var(--color-night)] text-[var(--color-white)] border-[var(--color-charcoal)]"
    ),
    blue: cn(
      "bg-[var(--color-skyblue-opacity)] text-[var(--color-white)] border border-[var(--color-skyblue)]"
    ),
    yellow: cn(
      "bg-[var(--color-booger-buster)] text-[var(--color-black)] border-[var(--color-charcoal)]"
    )
  }
  const SocialIcon = social ? SOCIAL_MAP[social] : null

  return (
    <button
      {...props}
      className={cn(baseStyles, variantStyles[themeVariant], className)}
    >
      {SocialIcon && <SocialIcon size={24} />}
      {children}
    </button>
  )
}
