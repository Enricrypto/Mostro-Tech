"use client"

import { useState, useRef } from "react"
import Image from "next/image"
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
        <button
          onClick={handlePlayClick}
          className='w-10 h-10 rounded-full border border-[#71D6FB] flex items-center justify-center hover:bg-[#71D6FB]/10 transition-colors'
        >
          {isPlaying ? (
            <div className='flex gap-1'>
              <span className='w-[3px] h-4 bg-white rounded-sm' />
              <span className='w-[3px] h-4 bg-white rounded-sm' />
            </div>
          ) : (
            <div
              className='w-[12px] h-[15px] bg-white'
              style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
            />
          )}
        </button>
      </div>
    </div>
  )
}
