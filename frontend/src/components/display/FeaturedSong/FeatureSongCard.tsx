"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/atoms/Button"
import { Tooltip } from "@/components/atoms/Tooltip"
import { PlayIcon, PauseIcon } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/utils/Badge"

export interface FeatureSongCardProps {
  musicDrop: {
    title: string
    duration: string
    audioUrl: string
    image: string
    badge: string
    itemsLeft?: number // Added
  }
  currentSongName?: string
  isPlaying?: boolean
  onPlay: () => void
  className?: string
  showItemsLeft?: boolean // Added
}

export const FeatureSongCard: React.FC<FeatureSongCardProps> = ({
  musicDrop,
  currentSongName,
  isPlaying = false,
  onPlay,
  className,
  showItemsLeft // Added this line
}) => {
  const [localPlaying, setLocalPlaying] = useState(false)

  useEffect(() => {
    setLocalPlaying(currentSongName === musicDrop.title && isPlaying)
  }, [currentSongName, isPlaying, musicDrop.title])

  return (
    <div
      className={cn(
        "artist-music-card flex flex-col sm:flex-row items-start sm:items-center md:items-start md:gap-5 p-4 rounded-[10px] border border-[#2D3953] shadow-[0_4px_6px_0_#00000017]",
        "bg-[#121B2B] w-full min-w-0",
        "transition-all duration-200",
        className
      )}
    >
      {/* Image — hidden on mobile, scaled down on iPad */}
      <div className='relative hidden sm:block w-[100px] md:w-[120px] h-[120px] md:h-[130px] rounded-[15px] overflow-hidden shrink-0'>
        <Image
          src={musicDrop.image}
          alt={musicDrop.title}
          fill
          className='object-cover'
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px'
        />
      </div>

      {/* Info & Controls */}
      <div className='flex flex-col justify-between flex-1 min-w-0 sm:text-left w-full gap-3 md:gap-4'>
        {/* Top Row — title + duration inline on mobile */}
        <div className='flex flex-col sm:flex-col gap-1 min-w-0'>
          <div className='flex flex-col justify-center sm:justify-start gap-2'>
            <Tooltip
              content={musicDrop.title}
              side='top'
              align='center'
              variant='blue'
            >
              <span className='text-white font-semibold text-[16px] sm:text-[18px] md:text-[16px] lg:text-[20px] leading-7 truncate cursor-default'>
                {musicDrop.title}
              </span>
            </Tooltip>
            <span className='text-(--color-muted) font-medium text-[12px] sm:text-[13px] md:text-[11px] lg:text-[13px] leading-5 truncate'>
              {musicDrop.duration}
            </span>
          </div>
        </div>

        {/* Play + Badge */}
        <div className='flex items-center gap-3 min-w-0'>
          {/* Play Button */}
          <Button
            variant='song-play-icon'
            onClick={onPlay}
            className='p-1 md:p-2 w-7 h-7 md:w-10 md:h-10 shrink-0'
          >
            {localPlaying ? (
              <PauseIcon weight='bold' className='text-white' />
            ) : (
              <PlayIcon weight='bold' className='text-white' />
            )}
          </Button>

          {/* Badges Container - constrained to prevent overflow */}
          <div className='flex flex-col gap-2 min-w-0 flex-1'>
            <Badge variant="neutral" className='md:text-[8px]'>
              {musicDrop.badge}
            </Badge>
            {showItemsLeft && (
              <Badge variant='left'>
                {musicDrop.itemsLeft} Left
              </Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

