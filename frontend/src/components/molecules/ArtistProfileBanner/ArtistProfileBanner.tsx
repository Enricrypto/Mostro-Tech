"use client"

import { Badge } from "@/components/utils/Badge"
import { Avatar } from "@/components/atoms/Avatar"
import { Button } from "@/components/atoms/Button"
import { ArrowUpRightIcon } from "@phosphor-icons/react"

interface ArtistProfileBannerProps {
  artistName: string
  description: string
  tokenHolders: string
  marketCap: string
  followers: string
  avatarSrc: string
  genreBadge: string
  verifiedBadge: string
  variant?: "default" | "purple" | "red"
}

export function ArtistProfileBanner({
  artistName,
  description,
  tokenHolders,
  marketCap,
  followers,
  avatarSrc,
  genreBadge,
  verifiedBadge,
  variant = "default"
}: ArtistProfileBannerProps) {
  const bgColor =
    variant === "purple" ? "#998ce1" : variant === "red" ? "#fd6363" : "#dcfd63"

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className='w-full min-h-[510px] shadow-md py-16'
    >
      {/* Inner container */}
      <div className='flex justify-between w-full'>
        {/* LEFT: Avatar + Badges */}
        <div className='relative flex-1 flex justify-center items-start min-w-[250px]'>
          {/* Fixed-size avatar wrapper (important!) */}
          <div className='relative inline-block'>
            {/* Avatar */}
            <Avatar src={avatarSrc} alt={artistName} variant='square-lg' />

            {/* Lower-left badge */}
            <Badge
              variant='genre'
              className='absolute top-50 -left-40 rotate-[-12deg]
                 w-[131px] h-[39px] gap-2 border border-[#71D6FB]
                 rounded-[28px] bg-white text-black'
            >
              {genreBadge}
            </Badge>

            {/* Upper-right badge */}
            <Badge
              variant='genre'
              className='absolute top-10 left-80 
             rotate-[12deg]
             w-[131px] h-[39px] gap-2 border border-[#71D6FB]
             rounded-[28px] bg-white text-black'
            >
              {verifiedBadge}
            </Badge>
          </div>
        </div>

        {/* RIGHT: Text + Stats + Button */}
        <div className='flex flex-col flex-1 gap-6 min-w-[300px] pr-8'>
          {/* Artist name + description */}
          <div className='flex flex-col gap-4'>
            <h2 className='font-poppins text-[48px] font-normal leading-[48px] text-black'>
              {artistName}
            </h2>
            <p className='font-inter text-[20px] font-normal leading-[28px] text-black'>
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
                <span className='font-inter font-bold text-[40px] leading-[48px] text-black'>
                  {stat.value}
                </span>
                <span className='font-inter text-[16px] leading-[28px] text-black'>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* View Artist Button */}
          <Button
            variant='continue'
            className='w-[288px] h-[40px] px-4 py-2 gap-2 rounded-[6px]
            flex items-center justify-center'
            icon={<ArrowUpRightIcon size={20} weight='bold' />}
            iconPosition='right'
          >
            <span className='font-inter font-medium text-[14px] leading-[24px]'>
              View Artist
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}
