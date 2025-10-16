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
  return (
    <div className={`artist-profile-banner-${variant}`}>
      <div className='flex gap-[54px] w-full max-w-[1325px]'>
        {/* Left side: Avatar + Badges */}
        <div className='relative w-[592px] flex-shrink-0 flex items-start justify-center'>
          <Avatar
            src={avatarSrc}
            alt={artistName}
            variant='square-lg'
            className='w-[288px] h-[288px]'
          />

          {/* Badges */}
          <Badge
            variant='genre'
            className='absolute top-[189px] left-0 w-[131px] h-[39px] px-[8px] py-[2px] gap-2 rotate-[-22.21deg] border border-[#71D6FB] rounded-[28px] bg-white text-black'
          >
            {genreBadge}
          </Badge>

          <Badge
            variant='genre'
            className='absolute top-[85px] left-[456px] w-[131px] h-[39px] px-[8px] py-[2px] gap-2 rotate-[28.17deg]  border border-[#71D6FB] rounded-[28px] bg-white text-black'
          >
            {verifiedBadge}
          </Badge>
        </div>

        {/* Right side: Text + Stats + Button */}
        <div className='flex flex-col justify-between w-[679px] gap-[24px]'>
          {/* Name & Description */}
          <div className='flex flex-col gap-4'>
            <h2 className='font-poppins text-[48px] font-normal leading-[48px] text-black'>
              {artistName}
            </h2>
            <p className='font-inter text-[20px] font-normal leading-[28px] text-black'>
              {description}
            </p>
          </div>

          {/* Stats */}
          <div className='flex gap-6'>
            <div className='flex flex-col gap-1'>
              <span className='font-inter font-bold text-[40px] leading-[48px] text-black'>
                {tokenHolders}
              </span>
              <span className='font-inter text-[16px] leading-[28px] text-black'>
                Token Holders
              </span>
            </div>
            <div className='flex flex-col gap-1'>
              <span className='font-inter font-bold text-[40px] leading-[48px] text-black'>
                {marketCap}
              </span>
              <span className='font-inter text-[16px] leading-[28px] text-black'>
                Market Cap
              </span>
            </div>
            <div className='flex flex-col gap-1'>
              <span className='font-inter font-bold text-[40px] leading-[48px] text-black'>
                {followers}
              </span>
              <span className='font-inter text-[16px] leading-[28px] text-black'>
                Followers
              </span>
            </div>
          </div>

          {/* View Artist Button */}
          <Button
            themeVariant='button-continue'
            className='w-[288px] h-[40px] px-4 py-2 gap-2 rounded-[6px] bg-[#71D6FB] border border-[#71D6FB] flex items-center justify-center'
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
