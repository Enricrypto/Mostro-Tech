"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/atoms/Button"
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

  // Sync localPlaying with global player state
  useEffect(() => {
    setLocalPlaying(currentSongName === musicDrop.title && isPlaying)
  }, [currentSongName, isPlaying, musicDrop.title])

  return (
    <div
      className={cn(
        "artist-music-card flex flex-row items-center gap-4 p-6 rounded-[10px] border-2 border-gray-700 shadow-md",
        "w-[384px] h-[199px] bg-[#121B2B]",
        className
      )}
    >
      {/* Music Drop Image */}
      <div className='w-[151px] h-[151px] rounded-[26px] overflow-hidden shrink-0 relative'>
        <Image
          src={musicDrop.image}
          alt={musicDrop.title}
          fill
          className='object-cover'
        />
      </div>

      {/* Info & Controls */}
      <div className='flex flex-col justify-between flex-1 gap-5 min-w-0'>
        {/* Song Title & Duration */}
        <div className='flex flex-col gap-1 min-w-0'>
          <span className='text-white font-semibold text-[18px] leading-7 truncate block'>
            {musicDrop.title}
          </span>
          <span className='text-(--color-muted) font-medium text-[12px] leading-5 truncate block'>
            {musicDrop.duration}
          </span>
        </div>

        {/* Play/Pause Button */}
        <Button variant='song-play-icon' onClick={onPlay} className='p-0'>
          {localPlaying ? (
            <PauseIcon size={20} weight='bold' className='text-white' />
          ) : (
            <PlayIcon size={20} weight='bold' className='text-white' />
          )}
        </Button>

        {/* Price Badge */}
        <Badge variant='neutral'>{musicDrop.badge}</Badge>
      </div>
    </div>
  )
}
