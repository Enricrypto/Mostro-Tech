"use client"

import { MusicNoteIcon, PlayIcon, LockIcon } from "@phosphor-icons/react"
import { Button } from "@/components/atoms/Button"
import { Tooltip } from "@/components/atoms/Tooltip"

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
      <div className='shrink-0 w-11.5 h-11.5 sm:w-11.5 sm:h-11.5 md:w-11.5 md:h-11.5 md:relative -top-2 rounded-full bg-(--color-highlight) flex items-center justify-center'>
        <MusicNoteIcon
          size='clamp(12px, 4vw, 20px)'
          color='var(--color-black)'
          weight='regular'
        />
      </div>

      {/* Text Content - FULL on iPad, no truncation */}
      <div className='flex flex-1 flex-col gap-3.5 min-w-0 overflow-hidden'>
        <Tooltip variant='blue' content={songName} side='top'>
          <h3 className='text-white font-semibold text-[clamp(0.9rem,2vw,1.1rem)] leading-5 whitespace-normal wrap-break-word md:whitespace-nowrap md:truncate md:text-[18px]'>
            {songName}
          </h3>
        </Tooltip>
        <p className='text-(--color-grey) text-[clamp(0.75rem,1.2vw,0.95rem)] leading-[1.2] whitespace-normal wrap-break-word md:whitespace-nowrap md:truncate md:text-[12px]'>
          {subtitle}
        </p>
      </div>

      {/* Button - fully responsive, no truncation */}
      <div className='shrink-0'>
        {variant === "song-play" ? (
          <Button
            variant='song-play'
            icon={
              <PlayIcon
                size='clamp(14px, 3vw, 18px)'
                color='var(--color-black)'
                weight='regular'
              />
            }
            iconPosition='left'
            onClick={onPlay}
            isPlaying={isPlaying}
            className='whitespace-nowrap px-1.5 py-0.5 text-[8px] sm:px-2 sm:py-1 sm:text-[9px] md:px-2.5 md:py-1.5 md:text-[10px]'
          >
            Play
          </Button>
        ) : (
          <Button
            variant='song-unlock'
            icon={
              <LockIcon size={12} color='var(--color-white)' weight='regular' />
            }
            iconPosition='left'
            className='
  whitespace-nowrap max-w-fit shrink-0

  /* Base - very small */
  px-2.5 py-1.5 text-[9px]

  /* sm */
  sm:px-1.5 sm:py-0.5 sm:text-[8px]

  /* iPad Mini (md = 768px) → much smaller */
  md:px-1.5 md:py-0.5 md:text-[7.6px]

  /* lg - still compact */
  lg:px-2 lg:py-1 lg:text-[9px]

  /* xl - normal size */
  xl:px-4 xl:py-2 xl:text-[11px]
'
          >
            Unlock {unlockAmount} {unlockToken}
          </Button>
        )}
      </div>
    </div>
  )
}
