"use client"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { Badge } from "@/components/utils/Badge"
import { Avatar } from "@/components/atoms/Avatar"
import { Button } from "@/components/atoms/Button"
import { ArrowUpRightIcon } from "@phosphor-icons/react"

const artistProfileBannerCVA = cva(
  "relative w-full min-w-[1512px] min-h-[510px] py-16 px-2 flex justify-center rounded-[10px] shadow-md transition-all duration-300 ease-out",
  {
    variants: {
      variant: {
        default: "bg-[#dcfd63]",
        purple: "bg-[#998ce1]",
        red: "bg-[#fd6363]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export interface ArtistProfileBannerProps {
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
  variant
}: ArtistProfileBannerProps) {
  return (
    <div className={cn(artistProfileBannerCVA({ variant }))}>
      <div className='flex gap-16 w-full px-8'>
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
            className='absolute top-[85px] left-[520px] w-[131px] h-[39px] gap-2 rotate-[28.17deg] border border-[#71D6FB] rounded-[28px] bg-white text-black'
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
