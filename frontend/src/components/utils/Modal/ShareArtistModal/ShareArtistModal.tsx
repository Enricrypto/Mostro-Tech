"use client"

import { useState } from "react"
import { CopySimpleIcon } from "@phosphor-icons/react"
import { artistsData } from "@/data/artists"

interface ShareArtistModalProps {
  artistSlug: string
  onClose: () => void
}

export const ShareArtistModal = ({
  artistSlug,
  onClose
}: ShareArtistModalProps) => {
  const [copied, setCopied] = useState(false)

  const artist = artistsData.find((a) => a.slug === artistSlug)
  if (!artist) return null

  const artistUrl = `https://musicverse.io/artist/${artist.slug}`

  const handleCopy = () => {
    navigator.clipboard.writeText(artistUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className='fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50'
      onClick={onClose} // <-- Click outside closes modal
    >
      <div
        className='w-full max-w-md bg-linear-to-br from-[#352B6D] to-[#4995E0] rounded-lg border border-[#2D3953] p-6 flex flex-col gap-4'
        onClick={(e) => e.stopPropagation()} // <-- Prevent close when clicking inside
      >
        {/* Header */}
        <h2 className='text-white font-inter font-semibold text-lg'>
          Share Artist
        </h2>

        {/* Description */}
        <p className='text-white font-inter text-base leading-5'>
          Spread the word about {artist.name}! Invite your friends to explore
          their sound and join the community.
        </p>

        {/* URL + Copy */}
        <button
          onClick={handleCopy}
          className='w-full h-10 border border-slate-300 rounded-md px-3 flex items-center justify-between relative'
        >
          <span className='text-white text-base truncate'>{artistUrl}</span>
          <CopySimpleIcon size={16} color='#FFFFFF' />

          {copied && (
            <span className='absolute -top-7 right-0 bg-slate-800 text-white text-sm font-medium px-2 py-1 rounded opacity-90'>
              Copied!
            </span>
          )}
        </button>
      </div>
    </div>
  )
}
