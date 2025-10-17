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
    <div className={`artist-profile-banner-${variant} w-full`}>
      <div className='flex gap-16 w-full px-8'>
        {" "}
        {/* full width with padding */}
        {/* Left side: Avatar + Badges */}
        <div className='relative flex-1 flex items-start justify-center'>
          <Avatar src={avatarSrc} alt={artistName} variant='square-lg' />

          <Badge
            variant='genre'
            className='absolute top-[189px] left-8 w-[131px] h-[39px] gap-2 rotate-[-22.21deg] border border-[#71D6FB] rounded-[28px] bg-white text-black'
          >
            {genreBadge}
          </Badge>

          <Badge
            variant='genre'
            className='absolute top-[85px] left-[520] w-[131px] h-[39px] gap-2 rotate-[28.17deg] border border-[#71D6FB] rounded-[28px] bg-white text-black'
          >
            {verifiedBadge}
          </Badge>
        </div>
        {/* Right side: Text + Stats + Button */}
        <div className='flex flex-col flex-1 justify-between gap-6'>
          <div className='flex flex-col gap-4'>
            <h2 className='font-poppins text-[48px] font-normal leading-[48px] text-black'>
              {artistName}
            </h2>
            <p className='font-inter text-[20px] font-normal leading-[28px] text-black'>
              {description}
            </p>
          </div>

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
