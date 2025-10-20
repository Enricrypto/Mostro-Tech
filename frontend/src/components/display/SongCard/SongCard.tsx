"use client"

import { MusicNoteIcon, PlayIcon, LockIcon } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/atoms/Button"

interface SongCardProps {
  songName: string
  subtitle: string // e.g., "Latest Single - 3:45"
  variant?: "song-play" | "song-unlock"
  unlockAmount?: number
  unlockToken?: string
  onPlay?: () => void
}

export function SongCard({
  songName,
  subtitle,
  variant,
  unlockAmount,
  unlockToken,
  onPlay
}: SongCardProps) {
  return (
    <div
      className={cn(
        "song-card flex items-center justify-between gap-[var(--spacing-3)]"
      )}
    >
      {/* Left Section (Icon) */}
      <div className='song-card__icon'>
        <MusicNoteIcon size={24} color='var(--color-black)' weight='fill' />
      </div>

      {/* Middle Section */}
      <div className='song-card__text'>
        <h3 className='song-card__title'>{songName}</h3>
        <p
          className='song-card__subtitle'
          style={{ color: "var(--color-grey)" }}
        >
          {subtitle}
        </p>
      </div>

      {/* Right Section (Button) */}
      {variant === "song-play" ? (
        <Button
          variant='song-play'
          icon={<PlayIcon size={20} color='var(--color-black)' weight='fill' />}
          iconPosition='left'
          onClick={onPlay}
        >
          Play
        </Button>
      ) : (
        <Button
          variant='song-unlock'
          icon={<LockIcon size={20} color='var(--color-white)' weight='fill' />}
          iconPosition='left'
        >
          Unlock {unlockAmount} {unlockToken}
        </Button>
      )}
    </div>
  )
}
