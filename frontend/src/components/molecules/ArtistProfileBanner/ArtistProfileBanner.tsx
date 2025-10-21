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
  // background color based on variant
  const bgColor =
    variant === "purple" ? "#998ce1" : variant === "red" ? "#fd6363" : "#dcfd63"

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className='w-full min-h-[510px] shadow-md py-16'
    >
      {/* Inner container: left = avatar + badges, right = stats */}
      <div className='flex justify-between w-full '>
        {/* Left: Avatar + badges */}
        <div className='relative flex-1 flex justify-center items-start min-w-[250px]'>
          {/* Avatar */}
          <Avatar src={avatarSrc} alt={artistName} variant='square-lg' />

          {/* Badges */}
          <Badge
            variant='genre'
            className='absolute top-[70%] left-30 w-[131px] h-[39px] gap-2 rotate-[-22deg] border border-[#71D6FB] rounded-[28px] bg-white text-black'
          >
            {genreBadge}
          </Badge>

          <Badge
            variant='genre'
            className='absolute top-[20%] left-[580px] w-[131px] h-[39px] gap-2 rotate-[28deg] border border-[#71D6FB] rounded-[28px] bg-white text-black'
          >
            {verifiedBadge}
          </Badge>
        </div>

        {/* Right: Text + Stats + Button */}
        <div className='flex flex-col flex-1 gap-6 min-w-[300px]'>
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

          {/* Button */}
          <Button
            variant='continue'
            className='w-[288px] h-[40px] px-4 py-2 gap-2 rounded-[6px] flex items-center justify-center'
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
