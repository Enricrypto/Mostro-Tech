"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/atoms/Button"
import { PlayIcon, PauseIcon } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"
import type { Artist } from "@/data/artists"

export type FeatureSongCardProps = {
  className?: string
  artist: Artist
  currentSongName?: string
  isPlaying?: boolean
  onPlay?: () => void
}

export const FeatureSongCard: React.FC<FeatureSongCardProps> = ({
  className,
  artist,
  currentSongName,
  isPlaying = false,
  onPlay
}) => {
  const [localPlaying, setLocalPlaying] = useState(false)

  // Sync localPlaying with global player state
  useEffect(() => {
    setLocalPlaying(currentSongName === artist.latestSingle.title && isPlaying)
  }, [currentSongName, isPlaying, artist.latestSingle.title])

  return (
    <div
      className={cn(
        "artist-music-card flex flex-row items-center gap-4 p-6 rounded-[10px] border-2 border-[var(--color-datacard-border)] shadow-md",
        "w-[384px] h-[199px] bg-[#121B2B]",
        className
      )}
    >
      {/* Artist Image */}
      <div className='w-[151px] h-[151px] rounded-[26px] overflow-hidden flex-shrink-0 relative'>
        <Image
          src={artist.image}
          alt={`Artist ${artist.name}`}
          fill
          className='object-cover'
        />
      </div>

      {/* Info & Controls */}
      <div className='flex flex-col justify-between flex-1 gap-2'>
        {/* Artist Name & Latest Single */}
        <div className='flex flex-col gap-1'>
          <span className='text-white font-semibold text-[18px] leading-[28px] truncate'>
            {artist.name}
          </span>
          <span className='text-[var(--color-muted)] font-medium text-[12px] leading-[20px] truncate'>
            {artist.latestSingle.title} - {artist.latestSingle.duration}
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
      </div>
    </div>
  )
}
