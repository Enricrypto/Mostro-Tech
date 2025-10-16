"use client"

import { cn } from "@/lib/utils"
import {
  InstagramLogoIcon,
  FacebookLogoIcon,
  SpotifyLogoIcon,
  XLogoIcon,
  TiktokLogoIcon,
  YoutubeLogoIcon
} from "@phosphor-icons/react"

export type SocialType =
  | "instagram"
  | "facebook"
  | "spotify"
  | "twitter"
  | "tiktok"
  | "youtube" // added YouTube

export interface SocialsProps {
  socials: SocialType[]
  variant?: "default" | "compact"
  themeVariant?: "black" | "blue" | "yellow"
  onClick?: (social: SocialType) => void
  className?: string
}

const SOCIAL_MAP: Record<SocialType, React.ElementType> = {
  instagram: InstagramLogoIcon,
  facebook: FacebookLogoIcon,
  spotify: SpotifyLogoIcon,
  twitter: XLogoIcon,
  tiktok: TiktokLogoIcon,
  youtube: YoutubeLogoIcon // added YouTube
}

export const Socials: React.FC<SocialsProps> = ({
  socials,
  variant = "default",
  themeVariant = "black",
  onClick,
  className
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-[8px]",
        variant === "compact" && "gap-[4px]",
        className
      )}
    >
      {socials.map((social) => {
        const Icon = SOCIAL_MAP[social]
        return (
          <button
            key={social}
            onClick={() => onClick?.(social)}
            className={cn(
              "social-button",
              `social-button--${themeVariant}`,
              variant === "compact" && "social-button--compact"
            )}
          >
            <Icon size={20} color='currentColor' />
          </button>
        )
      })}
    </div>
  )
}
