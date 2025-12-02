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
  showGraduatedBadge?: boolean
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
  genre,
  showGraduatedBadge = false
}: ArtistCardProps) {
  const router = useRouter()

  // Extract numeric value from badge text
  const numberValue = parseFloat(badgeText.replace(/[^0-9.-]+/g, ""))
  // Determine badge variant
  const badgeVariant = numberValue > 0 ? "increase" : "decrease"

  // Determine icon & color based on the artist popularity or numberValue
  const Icon = numberValue > 0 ? ArrowUpIcon : ArrowDownIcon

  return (
    <div
      className={cn(
        `
        w-full max-w-[24rem] sm:max-w-md md:max-w-lg
        rounded-xl border-2 border-(--color-dark-blue)
       bg-(--color-dark-bg) shadow-[0px_4px_6px_0px_#00000017]
        p-4 sm:p-5 md:p-6
        flex flex-col gap-4
        transition-all duration-300 ease-out
        hover:scale-[1.02] hover:border-(--color-highlight)
        `
      )}
    >
      {/* Top Section: Avatar + Genre Badge + Artist Info */}
      <div className='flex gap-4'>
        {/* Left column: Avatar + Genre */}
        <div className='flex flex-col items-start gap-3 sm:gap-4'>
          <Avatar variant='square-md' src={avatarSrc} alt={artistName} />
          <Badge
            variant='genre'
            className='w-fit text-[clamp(0.7rem,1vw,0.725rem)] px-[clamp(0.25rem,0.5vw,0.3rem)]'
          >
            {genre}
          </Badge>
        </div>

        {/* Right column: Artist Name + Token + Badge */}
        <div className='flex flex-col justify-start gap-3 sm:gap-4'>
          <p className='font-medium leading-7 tracking-[-0.5%] text-white text-[clamp(1.1rem,1.8vw,1.35rem)] overflow-hidden text-ellipsis break-word'>
            {artistName}
          </p>

          {showGraduatedBadge ? (
            // If showGraduatedBadge is true, put Graduated badge first, then badgeVariant badge
            <>
              <p className='leading-5 text-white text-[clamp(0.9rem,1.5vw,1rem)]'>
                ${tokenName}
              </p>
              <div className='flex items-center gap-1.5 sm:gap-1.5 min-w-0'>
                <Badge // Graduated Badge
                  variant='neutral'
                  className='w-fit text-[clamp(0.7rem,1vw,0.7rem)] px-[clamp(0.25rem,0.5vw,0.23rem)]'
                >
                  Graduated
                </Badge>
                <Badge // badgeVariant Badge
                  variant={badgeVariant}
                  icon={
                    <Icon weight='bold' size={14} className='text-current' />
                  }
                  className='text-[clamp(0.7rem,1vw,0.7rem)] px-[clamp(0.25rem,0.5vw,0.23rem)]'
                >
                  {badgeText}
                </Badge>
              </div>
            </>
          ) : (
            // If showGraduatedBadge is false, keep original layout for badgeVariant badge
            <div className='flex items-center gap-3.5 sm:gap-4 min-w-0'>
              <p className='leading-5 text-white text-[clamp(0.9rem,1.5vw,1rem)]'>
                ${tokenName}
              </p>
              <Badge // badgeVariant Badge
                variant={badgeVariant}
                icon={<Icon weight='bold' size={14} className='text-current' />}
                className='text-[clamp(0.7rem,1vw,0.725rem)] px-[clamp(0.25rem,0.5vw,0.3rem)]'
              >
                {badgeText}
              </Badge>
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <Tooltip
        content={description || "No description provided."}
        variant='blue'
        side='top'
        align='center'
      >
        <p className='text-(--color-grey) font-medium w-full line-clamp-2 mt-2 text-xs leading-5'>
          {description || "No description provided."}
        </p>
      </Tooltip>

      {/* Stats Section */}
      <div className='flex justify-around md:justify-start gap-9 mt-4'>
        {[
          { label: "Holders", value: holders },
          { label: "Market Cap", value: `$${marketCap}` },
          { label: "Total Supply", value: totalSupply }
        ].map(({ label, value }) => (
          <div key={label} className='flex flex-col items-start gap-1'>
            <p className='font-poppins text-lg leading-5 text-white'>{value}</p>
            <p className='font-inter text-xs leading-4 text-(--color-grey) whitespace-nowrap'>
              {label}
            </p>
          </div>
        ))}
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
