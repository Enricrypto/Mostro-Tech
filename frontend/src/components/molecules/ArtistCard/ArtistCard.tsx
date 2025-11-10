"use client"

import { useRouter } from "next/navigation"
import { Avatar } from "@/components/atoms/Avatar/Avatar"
import { Badge } from "@/components/utils/Badge/Badge"
import { Button } from "@/components/atoms/Button/Button"
import { Tooltip } from "@/components/atoms/Tooltip"
import {
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowUpRightIcon
} from "@phosphor-icons/react"
import { cn } from "@/lib/utils"
import React from "react"

interface ArtistCardProps {
  id: number
  slug: string
  artistName: string
  tokenName: string
  avatarSrc: string
  badgeText: string
  description: string
  holders: string | number
  marketCap: string | number
  totalSupply: string | number
  genre: string
}

export function ArtistCard({
  id,
  slug,
  artistName,
  tokenName,
  avatarSrc,
  badgeText,
  description,
  holders,
  marketCap,
  totalSupply,
  genre
}: ArtistCardProps) {
  const router = useRouter()

  // Extract numeric value from badge text
  const numberValue = parseFloat(badgeText.replace(/[^0-9.-]+/g, ""))
  // Determine badge variant
  const badgeVariant = numberValue > 0 ? "increase" : "decrease"

  // Determine icon & color based on the artist popularity or numberValue
  const isIncrease = numberValue > 0 // or artist.popularityChange > 0
  const Icon = numberValue > 0 ? ArrowUpIcon : ArrowDownIcon

  return (
    <div
      className={cn(
        "w-[384px] rounded-[10px] border-2 border-[#2D3953] bg-[#121B2B]",
        "shadow-[0px_4px_6px_0px_#00000017] p-6 flex flex-col gap-4",
        "transition-all duration-300 ease-out hover:scale-[1.02] hover:border-[#dcfd63]"
      )}
    >
      {/* Top Section: Avatar + Genre Badge + Artist Info */}
      <div className='flex gap-6'>
        {/* Left column: Avatar + Genre */}
        <div className='flex flex-col items-start gap-4'>
          <Avatar variant='square-md' src={avatarSrc} alt={artistName} />
          <Badge variant='genre'>{genre}</Badge>
        </div>

        {/* Right column: Artist Name + Token + Badge */}
        <div className='flex flex-col justify-start gap-4'>
          <p className='text-white font-inter font-medium text-[24px] leading-7 tracking-[-0.5%] whitespace-nowrap overflow-hidden'>
            {artistName}
          </p>

          <div className='flex items-center gap-[15px]'>
            <p className='text-white font-inter text-[16px] leading-5'>
              ${tokenName}
            </p>
            <Badge
              variant={badgeVariant}
              icon={<Icon weight='bold' size={14} className='text-current' />}
            >
              {badgeText}
            </Badge>
          </div>
        </div>
      </div>

      {/* Description */}
      <Tooltip
        content={description || "No description provided."}
        variant='blue'
        side='top'
        align='center'
      >
        <p className='text-[#B3B3B3] font-medium text-[12px] leading-5 w-full line-clamp-2 mt-2'>
          {description || "No description provided."}
        </p>
      </Tooltip>

      {/* Stats Section */}
      <div className='flex gap-9 mt-4'>
        <div className='flex flex-col items-start gap-1'>
          <p className='text-white font-poppins text-[18px] leading-5'>
            {holders}
          </p>
          <p className='text-[#B3B3B3] font-inter text-[12px] leading-4'>
            Holders
          </p>
        </div>

        <div className='flex flex-col items-start gap-1'>
          <p className='text-white font-poppins text-[18px] leading-5'>
            ${marketCap}
          </p>
          <p className='text-[#B3B3B3] font-inter text-[12px] leading-4 whitespace-nowrap'>
            Market Cap
          </p>
        </div>

        <div className='flex flex-col items-start gap-1'>
          <p className='text-white font-poppins text-[18px] leading-5'>
            {totalSupply}
          </p>
          <p className='text-[#B3B3B3] font-inter text-[12px] leading-4 whitespace-nowrap'>
            Total Supply
          </p>
        </div>
      </div>

      {/* View Artist Button */}
      <Button
        variant='follow-share'
        icon={<ArrowUpRightIcon weight='fill' size={16} />}
        className='w-full h-10 mt-4 px-4 py-2 gap-2.5'
        onClick={() => router.push(`/artists/${slug}`)}
      >
        View Artist
      </Button>
    </div>
  )
}
