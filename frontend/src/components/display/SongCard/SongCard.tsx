"use client"

import { MusicNoteIcon, PlayIcon, LockIcon } from "@phosphor-icons/react"
import { Button } from "@/components/atoms/Button"
import { cva, type VariantProps } from "class-variance-authority"

// Improved responsive design with iPad support (820x1180)
const songCardCVA = cva(
  "w-full min-h-[98px] py-3 px-3 gap-3 flex items-center justify-between rounded-lg border bg-[#121B2B] transition-shadow duration-200 hover:border-[#6654d3] hover:shadow-[0_0_16.9px_5px_#6654D380] sm:p-4 md:py-4 md:px-6",
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
      <div className="flex-shrink-0 w-11.5 h-11.5 sm:w-11.5 sm:h-11.5 md:w-11.5 md:h-11.5 md:relative top-[-8px] rounded-full bg-[var(--color-highlight)] flex items-center justify-center">
        <MusicNoteIcon
          size="clamp(12px, 4vw, 20px)"
          color="var(--color-black)"
          weight="regular"
        />
      </div>

      {/* Text Content - FULL on iPad, no truncation */}
      <div className="flex flex-1 flex-col gap-3.5 min-w-0 overflow-hidden">
        <h3 className="text-white font-semibold text-[clamp(0.9rem,2vw,1.1rem)] leading-5 whitespace-normal break-words md:whitespace-nowrap md:truncate md:text-[18px]">
          {songName}
        </h3>
        <p className="text-[var(--color-grey)] text-[clamp(0.75rem,1.2vw,0.95rem)] leading-[1.2] whitespace-normal break-words md:whitespace-nowrap md:truncate md:text-[12px]">
          {subtitle}
        </p>
      </div>

      {/* Button - fully responsive, no truncation */}
      <div className="flex-shrink-0">
        {variant === "song-play" ? (
          <Button
            variant="song-play"
            icon={<PlayIcon size="clamp(14px, 3vw, 18px)" color="var(--color-black)" weight="regular" />}
            iconPosition="left"
            onClick={onPlay}
            isPlaying={isPlaying}
            className="whitespace-nowrap py-5 px-3.4 sm:py-9 sm:relative sm:top-[-9px] md:py-1 md:px-2.5 md:relative md:top-[-4px]"
          >
            Play
          </Button>
        ) : (
          <Button
            variant="song-unlock"
            icon={<LockIcon size={16} color="var(--color-white)" weight="regular" />}
            iconPosition="left"
            className="min-w-[80px] sm:min-w-[95px] md:min-w-[105px] text-[10px] sm:text-xs md:text-xs px-2 sm:px-2 md:px-2.5 py-1.5 whitespace-nowrap"
          >
            Unlock {unlockAmount} {unlockToken}
          </Button>
        )}
      </div>
    </div>
  )
}
