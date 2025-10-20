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
    setIsPlaying(!isPlaying)
    const audio = new Audio(artist.latestSingle.audioUrl)
    isPlaying ? audio.pause() : audio.play()
  }

  return (
    <div
      className={`flex flex-col items-center p-4 bg-gray-800 rounded-md ${
        className || ""
      }`}
    >
      <Image
        src={artist.image}
        alt={artist.name}
        width={128} // 32 * 4 for Tailwind w-32
        height={128} // 32 * 4 for Tailwind h-32
        className='rounded-full object-cover'
      />
      <h3 className='mt-2 text-lg font-bold'>{artist.name}</h3>
      <p className='text-sm text-gray-300'>{artist.latestSingle.title}</p>

      <Button
        variant='songPlayIcon'
        onClick={handlePlayClick}
        className='mt-4 p-0'
      >
        {isPlaying ? (
          <PauseIcon size={20} weight='bold' className='text-white' />
        ) : (
          <PlayIcon size={20} weight='bold' className='text-white' />
        )}
      </Button>
    </div>
  )
}
