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
  }
  currentSongName?: string
  isPlaying?: boolean
  onPlay: () => void
  className?: string
}

export const FeatureSongCard: React.FC<FeatureSongCardProps> = ({
  musicDrop,
  currentSongName,
  isPlaying = false,
  onPlay,
  className
}) => {
  const [localPlaying, setLocalPlaying] = useState(false)

  useEffect(() => {
    setLocalPlaying(currentSongName === musicDrop.title && isPlaying)
  }, [currentSongName, isPlaying, musicDrop.title])

  return (
    <div
      className={cn(
        "artist-music-card flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 p-4 sm:p-5 rounded-[10px] border border-[#2D3953] shadow-[0_4px_6px_0_#00000017]",
        "bg-[#121B2B] w-full max-w-[calc(50%-0.5rem)] sm:max-w-sm md:max-w-[280px] lg:max-w-[384px]",
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
      <div className='flex flex-col justify-between flex-1 min-w-0 sm:text-left w-full gap-3 sm:gap-4'>
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

        {/* Play + Badge inline on mobile, stacked on tablet/desktop */}
        <div className='flex w-36 h-6 justify-between sm:flex-col sm:items-start sm:w-auto sm:h-auto sm:gap-3'>
          <Button
            variant='song-play-icon'
            onClick={onPlay}
            className='p-1 w-6 h-6 sm:w-auto sm:h-auto'
          >
            {localPlaying ? (
              <PauseIcon
                size={12}
                weight='bold'
                className='md:size-4 text-white'
              />
            ) : (
              <PlayIcon
                size={12}
                weight='bold'
                className='md:size-4 text-white'
              />
            )}
          </Button>

          <Badge
            variant='neutral'
            className='w-fit px-1 py-1 text-[9px] md:px-2 md:py-1 md:text-[10px] lg:px-3 lg:py-1 lg:text-[11px] whitespace-nowrap shrink'
          >
            {musicDrop.badge}
          </Badge>
        </div>
      </div>
    </div>
  )
}
