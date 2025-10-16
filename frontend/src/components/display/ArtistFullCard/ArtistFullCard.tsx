"use client"

import { cn } from "@/lib/utils"
import { useState, useRef } from "react"
import type { Artist } from "@/data/artists"

export type ArtistFullCardProps = {
  className?: string
  artist?: Artist
}

/**
 * ArtistFullCard component with specific styling parameters
 */
export function ArtistFullCard({
  className,
  artist = {
    id: "default",
    name: "Artist Name",
    image: "/pawel.png",
    latestSingle: {
      title: "Latest Single",
      duration: "3:45",
      audioUrl: "/sample-audio.mp3"
    }
  }
}: ArtistFullCardProps) {
  
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handlePlayClick = () => {
    if (!artist.latestSingle.audioUrl) {
      console.warn("Aucun fichier audio disponible")
      return
    }

    if (!audioRef.current) {
      audioRef.current = new Audio(artist.latestSingle.audioUrl)
      audioRef.current.addEventListener('ended', () => {
        setIsPlaying(false)
      })
    }

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true)
      }).catch((error) => {
        console.error("Erreur lors de la lecture audio:", error)
      })
    }
  }
  
  const cardStyle = {
    width: '384px',
    height: '199px',
    transform: 'rotate(0deg)',
    opacity: 1,
    top: '866px',
    left: '151px',
    borderRadius: '10px',
    borderWidth: '2px',
    padding: '24px',
    gap: '14px',
    background: '#121B2B',
    border: '2px solid #2D3953',
    boxShadow: '0px 4px 6px 0px #00000017'
  }

  const frameStyle = {
    width: '336px',
    height: '151px',
    transform: 'rotate(0deg)',
    opacity: 1,
    gap: '24px'
  }

  const imageFrameStyle = {
    width: '151px',
    height: '151px',
    transform: 'rotate(0deg)',
    opacity: 1,
    borderRadius: '26px'
  }

  const contentFrameStyle = {
    width: '161px',
    height: '104px',
    transform: 'rotate(0deg)',
    opacity: 1,
    gap: '8px'
  }

  const artistNameFrameStyle = {
    width: '161px',
    height: '28px',
    transform: 'rotate(0deg)',
    opacity: 1,
    gap: '8px'
  }

  const artistNameTextStyle = {
    width: '161px',
    height: '28px',
    transform: 'rotate(0deg)',
    opacity: 1,
    fontFamily: 'Inter',
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '28px',
    letterSpacing: '0%',
    background: '#121B2B',
    color: '#FFFFFF',
    whiteSpace: 'nowrap' as const,
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }

  const singleTextStyle = {
    width: '161px',
    height: '20px',
    transform: 'rotate(0deg)',
    opacity: 1,
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '20px',
    letterSpacing: '0%',
    background: '#121B2B',
    color: '#FFFFFF',
    whiteSpace: 'nowrap' as const,
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }

  const playButtonStyle = {
    width: '40px',
    height: '40px',
    transform: 'rotate(0deg)',
    opacity: 1,
    borderRadius: '36px',
    borderWidth: '1px',
    gap: '10px',
    paddingTop: '8px',
    paddingRight: '16px',
    paddingBottom: '8px',
    paddingLeft: '16px',
    border: '1px solid #71D6FB',
    background: 'transparent'
  }

  const playIconStyle = {
    width: '20px',
    height: '20px',
    transform: 'rotate(0deg)',
    opacity: 1,
    position: 'relative' as const
  }

  const playVectorStyle = {
    width: '11.666666030883789px',
    height: '15px',
    opacity: 1,
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-40%, -50%)',
    borderWidth: '2px',
    border: '2px solid #FFFFFF'
  }

  return (
    <div 
      style={cardStyle}
      className={cn("flex flex-col", className)}
    >
      <div 
        style={frameStyle}
        className="flex flex-row"
      >
        {/* Image Frame */}
        <div 
          style={imageFrameStyle}
          className="flex items-center justify-center overflow-hidden"
        >
          <img
            src={artist.image}
            alt={`Artist ${artist.name}`}
            className="w-full h-full object-cover"
            style={{ borderRadius: '26px' }}
          />
        </div>

        {/* Content Frame */}
        <div 
          style={contentFrameStyle}
          className="flex flex-col"
        >
          {/* Artist Name Frame */}
          <div 
            style={artistNameFrameStyle}
            className="flex"
          >
            <div 
              style={artistNameTextStyle}
              className="flex items-center"
            >
              {artist.name}
            </div>
          </div>

          {/* Latest Single Text */}
          <div 
            style={singleTextStyle}
            className="flex items-center"
          >
            {artist.latestSingle.title} - {artist.latestSingle.duration}
          </div>

          {/* Play Button */}
          <button 
            style={playButtonStyle}
            className="flex items-center justify-center hover:bg-blue-500/10 transition-colors"
            onClick={handlePlayClick}
          >
            <div style={playIconStyle}>
              {isPlaying ? (
                /* Pause Icon - Two rectangles */
                <div className="flex items-center justify-center space-x-1">
                  <div 
                    style={{
                      width: '3px',
                      height: '15px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '1px'
                    }}
                  />
                  <div 
                    style={{
                      width: '3px',
                      height: '15px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '1px'
                    }}
                  />
                </div>
              ) : (
                /* Play Vector - Triangle */
                <div 
                  style={{
                    ...playVectorStyle,
                    clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
                    backgroundColor: '#FFFFFF'
                  }}
                />
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}