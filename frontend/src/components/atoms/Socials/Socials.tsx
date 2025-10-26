"use client"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import {
  InstagramLogoIcon,
  FacebookLogoIcon,
  SpotifyLogoIcon,
  XLogoIcon,
  TiktokLogoIcon,
  YoutubeLogoIcon
} from "@phosphor-icons/react"
import type { ComponentProps } from "react"

// CVA for social button with hover
const socialButtonCVA = cva(
  "inline-flex items-center justify-center transition-all duration-200 ease-out rounded-full border text-inherit transform hover:scale-105 hover:brightness-110",
  {
    variants: {
      themeVariant: {
        black:
          "border-[var(--color-navbar-border)] bg-[var(--color-night)] text-white hover:bg-[var(--color-night-hover)]",
        blue: "border-[var(--color-skyblue)] bg-[var(--color-skyblue-opacity)] text-[var(--color-yellow)] hover:bg-[var(--color-skyblue-hover)]",
        yellow:
          "border-[var(--color-charcoal)] bg-[var(--color-booger-buster)] text-black hover:bg-[var(--color-booger-buster-hover)]"
      },
      size: {
        default: "w-[44px] h-[32px]",
        compact: "w-9 h-7"
      }
    },
    defaultVariants: {
      themeVariant: "black",
      size: "default"
    }
  }
)

// Social types
export type SocialType =
  | "instagram"
  | "facebook"
  | "spotify"
  | "twitter"
  | "tiktok"
  | "youtube"

// CVA + ComponentProps typing
export type SocialButtonProps = ComponentProps<"button"> &
  VariantProps<typeof socialButtonCVA>

// Mapping social names to icons
const SOCIAL_MAP: Record<SocialType, React.ElementType> = {
  instagram: InstagramLogoIcon,
  facebook: FacebookLogoIcon,
  spotify: SpotifyLogoIcon,
  twitter: XLogoIcon,
  tiktok: TiktokLogoIcon,
  youtube: YoutubeLogoIcon
}

// Socials component
export interface SocialsProps {
  socials: SocialType[]
  size?: "default" | "compact"
  themeVariant?: "black" | "blue" | "yellow"
  onClick?: (social: SocialType) => void
  className?: string
}

export const Socials: React.FC<SocialsProps> = ({
  socials,
  size = "default",
  themeVariant = "black",
  onClick,
  className
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-2",
        size === "compact" && "gap-1",
        className
      )}
    >
      {socials.map((social) => {
        const Icon = SOCIAL_MAP[social]
        return (
          <button
            key={social}
            onClick={() => onClick?.(social)}
            className={cn(socialButtonCVA({ themeVariant, size }))}
          >
            <Icon size={20} color='currentColor' />
          </button>
        )
      })}
    </div>
  )
}
