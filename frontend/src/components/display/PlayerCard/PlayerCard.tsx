"use client"

import { FC } from "react"
import {
  PauseIcon,
  SkipBackIcon,
  SkipForwardIcon,
  PlayIcon
} from "@phosphor-icons/react"
import { Avatar } from "@/components/atoms/Avatar"
import { Button } from "@/components/atoms/Button"
import { ProgressBar } from "@/components/atoms/ProgressBar"

export interface PlayerCardProps {
  songName: string
  songDetails: string
  currentTime: string
  totalTime: string
  progress: number
  avatarUrl?: string
  isPlaying?: boolean
  onPlayPause?: () => void
  onNext?: () => void
  onPrev?: () => void
}

export const PlayerCard: FC<PlayerCardProps> = ({
  songName,
  songDetails,
  currentTime,
  totalTime,
  progress,
  avatarUrl,
  isPlaying,
  onPlayPause,
  onNext,
  onPrev
}) => {
  return (
    <div
      className='w-[1348px] h-[80px] flex justify-between items-center rounded-[16px] px-6'
      style={{
        background: "linear-gradient(270deg, #DCFD63 0%, #71D6FB 100%)",
        backdropFilter: "blur(4px)",
        opacity: 1
      }}
    >
      {/* LEFT SECTION */}
      <div className='flex items-center gap-4 w-[205px] h-[48px]'>
        {avatarUrl && (
          <Avatar src={avatarUrl} className='w-10 h-10 rounded-[26px]' />
        )}
        <div className='flex flex-col justify-center gap-1'>
          <span className='font-semibold text-[18px] leading-[28px] text-black'>
            {songName}
          </span>
          <span className='font-medium text-[12px] leading-[20px] text-black'>
            {songDetails}
          </span>
        </div>
      </div>

      {/* MIDDLE SECTION */}
      <div className='flex items-center gap-4 w-[765px]'>
        {/* Current time */}
        <div className='flex items-center justify-center w-[64px] h-[40px] rounded-[6px] text-white'>
          {currentTime}
        </div>

        {/* Progress bar */}
        <ProgressBar
          value={progress * 100} // Radix Progress expects 0–100
          variant='purple'
          className='w-[533px] h-[16px] rounded-[40px]'
        />

        {/* Total time */}
        <div className='flex items-center justify-center w-[68px] h-[40px] rounded-[6px] text-white'>
          {totalTime}
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className='flex items-center gap-2 w-[120px] h-[40px]'>
        <Button
          className='w-[40px] h-[40px] flex items-center justify-center rounded-[26px] text-black'
          onClick={onPrev}
        >
          <SkipBackIcon size={20} weight='bold' />
        </Button>

        <Button
          className='w-[40px] h-[40px] rounded-[26px] flex items-center justify-center bg-[#6654D3] text-white p-0'
          onClick={onPlayPause}
        >
          {isPlaying ? (
            <PauseIcon size={24} weight='bold' />
          ) : (
            <PlayIcon size={24} weight='bold' />
          )}
        </Button>

        <Button
          className='w-[40px] h-[40px] flex items-center justify-center rounded-[26px] text-black'
          onClick={onNext}
        >
          <SkipForwardIcon size={24} weight='bold' />
        </Button>
      </div>
    </div>
  )
}
