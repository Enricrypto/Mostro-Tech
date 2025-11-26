"use client"

import { MusicNoteIcon, PlayIcon, LockIcon } from "@phosphor-icons/react"
import { Button } from "@/components/atoms/Button"
import { cva, type VariantProps } from "class-variance-authority"

// Improved responsive design with better iPad handling
const songCardCVA = cva(
  "w-full max-w-[clamp(320px,90vw,480px)] min-h-[80px] p-3 gap-3 flex items-center justify-between rounded-lg border bg-[#121B2B] transition-shadow duration-200 hover:border-[#6654d3] hover:shadow-[0_0_16.9px_5px_#6654D380] sm:p-4",
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
  subtitle: string
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
      {/* Left Icon */}
      <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-[var(--color-highlight)] flex items-center justify-center">
        <MusicNoteIcon
          size="clamp(16px, 4vw, 20px)"
          color="var(--color-black)"
          weight="regular"
        />
      </div>

      {/* Text Content - Improved truncation */}
      <div className="flex flex-1 flex-col gap-1 min-w-0 overflow-hidden">
        <h3 className="text-white font-semibold text-[clamp(0.8rem,1vw,1rem)] leading-5 truncate">
          {songName}
        </h3>
        <p className="text-[var(--color-grey)] text-[clamp(0.65rem,0.9vw,0.85rem)] leading-[1.2] truncate">
          {subtitle}
        </p>
      </div>

      {/* Button - Improved responsive sizing */}
      <div className="flex-shrink-0">
        {variant === "song-play" ? (
          <Button
            variant="song-play"
            icon={<PlayIcon size={16} color="var(--color-black)" weight="regular" />}
            iconPosition="left"
            onClick={onPlay}
            isPlaying={isPlaying}
            className="min-w-[70px] sm:min-w-[80px] text-xs sm:text-sm"
          >
            Play
          </Button>
        ) : (
          <Button
            variant="song-unlock"
            icon={<LockIcon size={16} color="var(--color-white)" weight="regular" />}
            iconPosition="left"
            className="min-w-[70px] sm:min-w-[80px] text-xs sm:text-sm whitespace-nowrap"
          >
            Unlock {unlockAmount} {unlockToken}
          </Button>
        )}
      </div>
    </div>
  )
}
