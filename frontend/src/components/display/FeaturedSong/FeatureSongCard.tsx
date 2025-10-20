"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/atoms/Button"
import { PlayIcon, PauseIcon } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"
import type { Artist } from "@/data/artists"

export type FeatureSongCardProps = {
  className?: string
  artist: Artist
}

export const FeatureSongCard: React.FC<FeatureSongCardProps> = ({
  className,
  artist
}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handlePlayClick = () => {
    if (!artist.latestSingle.audioUrl) return

    if (!audioRef.current) {
      audioRef.current = new Audio(artist.latestSingle.audioUrl)
      audioRef.current.addEventListener("ended", () => setIsPlaying(false))
    }

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(console.error)
    }
  }

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

        {/* Play Button */}
        <Button
          variant='songPlayIcon'
          onClick={handlePlayClick}
          className='p-0' // optional: removes extra padding
        >
          {isPlaying ? (
            <PauseIcon size={20} weight='bold' className='text-white' />
          ) : (
            <PlayIcon size={20} weight='bold' className='text-white' />
          )}
        </Button>
      </div>
    </div>
  )
}
