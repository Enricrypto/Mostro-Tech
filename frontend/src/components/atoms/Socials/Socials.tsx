"use client"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import {
  InstagramLogoIcon,
  FacebookLogoIcon,
  SpotifyLogoIcon,
  XLogoIcon,
  TiktokLogoIcon,
  YoutubeLogoIcon,
  DiscordLogoIcon
} from "@phosphor-icons/react"
import type { ComponentProps } from "react"

const socialButtonCVA = cva(
  "inline-flex items-center justify-center transition-all duration-200 ease-out rounded-full border transform hover:scale-105 hover:brightness-110 cursor-pointer",
  {
    variants: {
      themeVariant: {
        black:
          "border-[var(--color-navbar-border)] bg-[var(--color-night)] text-white hover:bg-[var(--color-primary)]",
        blue: "border-[var(--color-skyblue)] bg-[var(--color-skyblue-opacity)] text-[var(--color-highlight)] hover:bg-[var(--color-primary)]",
        yellow:
          "border-[var(--color-dark-blue)] bg-[var(--color-booger-buster)] text-black hover:bg-[var(--color-primary)]"
      },
      size: {
        default:
          "w-[2.75rem] h-[2rem] sm:w-[2.5rem] sm:h-[1.875rem] md:w-[2.75rem] md:h-[2rem]",
        compact:
          "w-[2.25rem] h-[1.75rem] sm:w-[2rem] sm:h-[1.5rem] md:w-[2.25rem] md:h-[1.75rem]"
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
  | "discord"

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
  youtube: YoutubeLogoIcon,
  discord: DiscordLogoIcon
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
        "flex flex-wrap items-center justify-center gap-2 sm:gap-1 md:gap-2",
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
