"use client"

import { useState } from "react"
import { Button } from "@/components/atoms/Button"
import Image from "next/image"
import { PlayIcon, PauseIcon } from "@phosphor-icons/react"

export interface ArtistType {
  id: string
  name: string
  image: string
  latestSingle: {
    title: string
    duration: string
    audioUrl: string
  }
}

export function ArtistFullCard({
  artist,
  className
}: {
  artist: ArtistType
  className?: string
}) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayClick = () => {
    setIsPlaying((prev) => !prev)
    const audio = new Audio(artist.latestSingle.audioUrl)
    isPlaying ? audio.pause() : audio.play()
  }

  return (
    <div
      className={`flex flex-col items-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[384px] p-5 sm:p-6 bg-[#121B2B] rounded-[10px] border border-[#2D3953] shadow-[0_4px_6px_0_#00000017] ${
        className || ""
      }`}
    >
      <div className='relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32'>
        <Image
          src={artist.image}
          alt={artist.name}
          fill
          className='rounded-full object-cover'
          sizes='(max-width: 640px) 96px, (max-width: 768px) 112px, 128px'
        />
      </div>

      {/* Artist Name */}
      <h3 className='mt-3 text-[18px] sm:text-[20px] font-bold text-white text-center truncate'>
        {artist.name}
      </h3>

      {/* Latest Single */}
      <p className='text-[13px] sm:text-[14px] text-gray-300 text-center truncate'>
        {artist.latestSingle.title}
      </p>

      {/* Play / Pause Button */}
      <Button
        variant='song-play-icon'
        onClick={handlePlayClick}
        className='mt-4 p-0 flex items-center justify-center'
      >
        {isPlaying ? (
          <PauseIcon size={22} weight='bold' className='text-white' />
        ) : (
          <PlayIcon size={22} weight='bold' className='text-white' />
        )}
      </Button>
    </div>
  )
}
