"use client"

import { MusicNoteIcon, PlayIcon, LockIcon } from "@phosphor-icons/react"
import { Button } from "@/components/atoms/Button"
import { cva, type VariantProps } from "class-variance-authority"

const songCardCVA = cva(
  "w-full w-[344px] md:w-[330px] lg:w-[572px] p-3 gap-3 flex items-center justify-between rounded-[10px] border bg-[#121B2B] transition-shadow duration-200 hover:border-[#6654d3] hover:shadow-[0_0_16.9px_5px_#6654D380] md:p-4 lg:p-6",
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
      <div className='w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-(--color-highlight) flex items-center justify-center'>
        <MusicNoteIcon size={24} color='var(--color-black)' weight='regular' />
      </div>

      {/* Middle Section */}
      <div className='flex flex-1 flex-col gap-1'>
        <h3 className='text-white font-semibold text-[12px] md:text-[14px] lg:text-[16px] leading-5'>
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
          icon={
            <PlayIcon size={20} color='var(--color-black)' weight='regular' />
          }
          iconPosition='left'
          onClick={onPlay}
          className='px-2 text-[11px] md:px-3 md:text-[14px] lg:px-6 lg:text-[18px]'
        >
          Play
        </Button>
      ) : (
        <Button
          variant='song-unlock'
          icon={
            <LockIcon size={20} color='var(--color-white)' weight='regular' />
          }
          iconPosition='left'
          className='px-2 text-[12px] md:px-3 md:text-[14px] lg:px-6 lg:text-[18px]'
        >
          Unlock {unlockAmount} {unlockToken}
        </Button>
      )}
    </div>
  )
}
