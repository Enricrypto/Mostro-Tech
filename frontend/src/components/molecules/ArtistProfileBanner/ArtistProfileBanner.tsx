"use client"

import { useRouter } from "next/navigation"
import { Badge } from "@/components/utils/Badge"
import { Avatar } from "@/components/atoms/Avatar"
import { Button } from "@/components/atoms/Button"
import { ArrowUpRightIcon, PlayIcon } from "@phosphor-icons/react"

export interface ArtistProfileBannerProps {
  slug: string
  artistName: string
  description: string
  tokenHolders: string
  marketCap: string
  followers: string
  avatarSrc: string
  genreBadge: string
  verifiedBadge: string
  variant?: "default" | "purple" | "red"
  onPlay?: () => void
}

export function ArtistProfileBanner({
  slug,
  artistName,
  description,
  tokenHolders,
  marketCap,
  followers,
  avatarSrc,
  genreBadge,
  verifiedBadge,
  variant = "default",
  onPlay
}: ArtistProfileBannerProps) {
  const router = useRouter()

  // Map variant to theme colors
  const bgColor =
    variant === "purple"
      ? "var(--color-primary)"
      : variant === "red"
      ? "var(--color-red)"
      : "var(--color-highlight)"

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className='w-full min-h-[510px] py-16 shadow-md'
    >
      <div className='flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between w-full px-6 md:px-16 gap-8 text-center md:text-left'>
        {/* LEFT: Avatar + Badges */}
        <div className='relative flex-1 flex justify-center items-start'>
          <div className='relative inline-block group'>
            {/* Avatar */}
            <Avatar src={avatarSrc} alt={artistName} variant='square-lg' />

            {/* Hover overlay with gradient + play button */}
            <div
              className='absolute inset-0 rounded-[26px] opacity-0 group-hover:opacity-100 
              transition-opacity duration-300 flex items-end justify-start p-[29px]'
              style={{
                background:
                  "linear-gradient(180deg, rgba(43, 43, 43, 0.25) 0%, rgba(0, 0, 0, 0.5) 100%)"
              }}
            >
              <button
                onClick={onPlay}
                className='w-[52px] h-[52px] rounded-[36px] border border-(--color-muted) 
                 flex items-center justify-center bg-(--color-grey) p-[8px_16px]'
              >
                <PlayIcon size={24} weight='bold' color='white' />
              </button>
            </div>

            {/* Lower-left badge */}
            <Badge
              variant='genre'
              className='hidden lg:flex absolute top-50 -left-40 -rotate-12
                 w-[131px] h-[39px] gap-2 border border-(--color-accent)
                 rounded-[28px] bg-white text-black
                 text-[clamp(0.7rem,1vw,0.875rem)]
                 justify-center items-center'
            >
              {genreBadge}
            </Badge>

            {/* Upper-right badge */}
            <Badge
              variant='genre'
              className='hidden lg:flex absolute top-10 left-78 rotate-12 
                 w-[131px] h-[39px] gap-2 border border-(--color-accent)
                 rounded-[28px] bg-white text-black
                 text-[clamp(0.7rem,1vw,0.875rem)]
                 justify-center items-center'
            >
              {verifiedBadge}
            </Badge>
          </div>
        </div>

        {/* RIGHT: Text + Stats + Button */}
        <div className='flex flex-col flex-1 gap-6'>
          {/* Artist Name & Description */}
          <div className='flex flex-col gap-4'>
            <h2 className='text-[clamp(2rem,4vw,3rem)] leading-tight text-black'>
              {artistName}
            </h2>
            <p className='text-[clamp(1rem,2vw,1.25rem)] leading-7 text-black'>
              {description}
            </p>
          </div>

          {/* Stats */}
          <div className='flex gap-6 flex-wrap'>
            {[
              { label: "Token Holders", value: tokenHolders },
              { label: "Market Cap", value: marketCap },
              { label: "Followers", value: followers }
            ].map((stat) => (
              <div key={stat.label} className='flex flex-col gap-1'>
                <span className='font-bold text-[clamp(2rem,4vw,2.5rem)] leading-tight text-black'>
                  {stat.value}
                </span>
                <span className='text-[clamp(0.875rem,1.5vw,1rem)] leading-6 text-black'>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* View Artist Button */}
          <Button
            variant='continue'
            className='md:max-w-[288px] h-10 px-4 py-2 gap-2 rounded-md'
            icon={<ArrowUpRightIcon size={20} weight='bold' />}
            iconPosition='right'
            onClick={() => router.push(`/artists/${slug}`)}
          >
            <span className='font-inter font-medium text-[14px] leading-6'>
              View Artist
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}
