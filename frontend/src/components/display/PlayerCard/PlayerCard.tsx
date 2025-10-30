"use client"

import { FC } from "react"
import {
  PauseIcon,
  SkipBackIcon,
  SkipForwardIcon,
  PlayIcon,
  XIcon
} from "@phosphor-icons/react"
import { Avatar } from "@/components/atoms/Avatar"
import { Button } from "@/components/atoms/Button"
import { SeekBar } from "@/components/atoms/SeekBar"

export interface PlayerCardProps {
  songName: string
  songDetails: string
  currentTime: string
  totalTime: string
  progress: number
  onSeek?: (progress: number) => void
  avatarUrl?: string
  isPlaying?: boolean
  onPlayPause?: () => void
  onNext?: () => void
  onPrev?: () => void
  onClose?: () => void
}

export const PlayerCard: FC<PlayerCardProps> = ({
  songName,
  songDetails,
  currentTime,
  totalTime,
  progress,
  onSeek,
  avatarUrl,
  isPlaying,
  onPlayPause,
  onNext,
  onPrev,
  onClose
}) => {
  return (
    <div
      className='relative w-[1348px] h-20 flex justify-between items-center rounded-2xl px-6 overflow-visible'
      style={{
        background: "linear-gradient(270deg, #DCFD63 0%, #71D6FB 100%)",
        backdropFilter: "blur(4px)",
        opacity: 1,
        position: "relative"
      }}
    >
      {/* LEFT SECTION */}
      <div className='flex items-center gap-4 w-[205px] h-12'>
        {avatarUrl && (
          <Avatar src={avatarUrl} className='w-10 h-10 rounded-[26px]' />
        )}
        <div className='flex flex-col justify-center gap-1 whitespace-nowrap'>
          <span className='font-semibold text-[18px] leading-7 text-black'>
            {songName}
          </span>
          <span className='font-medium text-[12px] leading-5 text-black'>
            {songDetails}
          </span>
        </div>
      </div>

      {/* MIDDLE SECTION */}
      <div className='flex items-center gap-4 w-[765px]'>
        <div className='flex items-center justify-center w-16 h-10 rounded-md text-white'>
          {currentTime}
        </div>

        <SeekBar
          value={progress}
          onChange={(val: number) => onSeek && onSeek(val)}
          variant='purple'
          className='w-[533px] h-4 rounded-[40px]'
        />

        <div className='flex items-center justify-center w-[68px] h-10 rounded-md text-white'>
          {totalTime}
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className='flex items-center gap-3 h-10 pr-4'>
        <Button
          className='w-10 h-10 flex items-center justify-center rounded-[26px] text-black'
          onClick={onPrev}
        >
          <SkipBackIcon size={20} weight='bold' />
        </Button>

        <Button
          className='w-10 h-10 rounded-[26px] flex items-center justify-center bg-[#6654D3] text-white p-0'
          onClick={onPlayPause}
        >
          {isPlaying ? (
            <PauseIcon size={24} weight='bold' />
          ) : (
            <PlayIcon size={24} weight='bold' />
          )}
        </Button>

        <Button
          className='w-10 h-10 flex items-center justify-center rounded-[26px] text-black'
          onClick={onNext}
        >
          <SkipForwardIcon size={24} weight='bold' />
        </Button>
        {/* Close button */}
        {onClose && (
          <Button
            onClick={onClose}
            className='absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-600 text-white hover:bg-gray-500 transition p-0'
          >
            <XIcon size={18} weight='bold' />
          </Button>
        )}
      </div>
    </div>
  )
}
