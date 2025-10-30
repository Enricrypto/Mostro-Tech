"use client"

import { MusicNoteIcon, PlayIcon, LockIcon } from "@phosphor-icons/react"
import { Button } from "@/components/atoms/Button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const songCardCVA = cva(
  "w-[580px] h-[104px] flex items-center justify-between gap-[14px] rounded-[10px] border bg-[#121B2B] p-6 transition-shadow duration-200 hover:border-[#6654d3] hover:shadow-[0_0_16.9px_5px_#6654D380]",
  {
    variants: {
      variant: {
        "song-play": "border-[#998CE1]",
        "song-unlock": "border-[#998CE1]"
      }
    },
    defaultVariants: {
      variant: "song-play"
    }
  }
)

interface SongCardProps extends VariantProps<typeof songCardCVA> {
  songName: string
  subtitle: string // e.g., "Latest Single - 3:45"
  unlockAmount?: number
  unlockToken?: string
  onPlay?: () => void
  isPlaying?: boolean
}

export function SongCard({
  songName,
  subtitle,
  variant,
  unlockAmount,
  unlockToken,
  onPlay,
  isPlaying
}: SongCardProps) {
  return (
    <div className={songCardCVA({ variant })}>
      {/* Left Section (Icon) */}
      <div className='w-12 h-12 rounded-full bg-(--color-highlight) flex items-center justify-center'>
        <MusicNoteIcon size={24} color='var(--color-black)' weight='fill' />
      </div>

      {/* Middle Section */}
      <div className='flex flex-1 flex-col items-start justify-center gap-1'>
        <h3 className='text-white font-semibold text-[16px] leading-5'>
          {songName}
        </h3>
        <p className='text-(--color-grey) text-[10px] leading-[18px]'>
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
