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
      className='relative w-full max-w-[1348px] p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-linear-to-r from-[#DCFD63] to-[#71D6FB] backdrop-blur-sm overflow-visible'
      style={{ position: "relative" }}
    >
      {/* ================= DESKTOP / TABLET ================= */}
      <div className='hidden sm:flex items-center justify-between w-full gap-4'>
        {/* LEFT SECTION */}
        <div className='flex items-center gap-4 min-w-[245px] sm:min-w-[200px]'>
          {avatarUrl && (
            <Avatar className='w-10 h-10 rounded-[26px]' src={avatarUrl} />
          )}
          <div className='flex flex-col justify-center gap-1 w-full truncate'>
            <span className='font-semibold text-[18px] leading-7 text-black truncate'>
              {songName}
            </span>
            <span className='font-medium text-[12px] leading-5 text-black truncate'>
              {songDetails}
            </span>
          </div>
        </div>

        {/* MIDDLE SECTION */}
        <div className='flex items-center gap-4 w-[765px]'>
          <div className='flex items-center justify-center w-16 h-10 text-black'>
            {currentTime}
          </div>

          <SeekBar
            value={progress}
            onChange={(val) => onSeek && onSeek(val)}
            variant='purple'
            className='flex-1 h-4 rounded-[40px]'
          />

          <div className='flex items-center justify-center w-16 h-10 text-black'>
            {totalTime}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className='flex items-center gap-3'>
          <Button
            variant='text-white-transparent'
            className='w-10 h-10 flex items-center justify-center rounded-[26px] text-black'
            onClick={onPrev}
            icon={<SkipBackIcon size={20} weight='bold' />}
          />

          <Button
            size='icon-sm'
            className='rounded-[26px] flex items-center justify-center bg-[#6654D3] text-white p-0 w-10 h-10'
            onClick={onPlayPause}
            icon={isPlaying ? (
              <PauseIcon size={24} weight='bold' />
            ) : (
              <PlayIcon size={24} weight='bold' />
            )}
          />

          <Button
            variant='text-white-transparent'
            className='w-10 h-10 flex items-center justify-center rounded-[26px] text-black'
            onClick={onNext}
            icon={<SkipForwardIcon size={24} weight='bold' />}
          />
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className='flex flex-col sm:hidden w-full gap-2'>
        {/* Top row: LEFT + RIGHT inline */}
        <div className='flex justify-between items-center w-full'>
          {/* LEFT SECTION */}
          <div className='flex items-center gap-3 w-full'>
            {avatarUrl && (
              <Avatar className='w-10 h-10 rounded-[26px]' src={avatarUrl} />
            )}
            <div className='flex flex-col justify-center gap-1 max-w-[115px] truncate'>
              <span className='font-semibold text-[14px] leading-6 text-black truncate'>
                {songName}
              </span>
              <span className='font-medium text-[10px] leading-4 text-black truncate'>
                {songDetails}
              </span>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className='flex items-center gap-2'>
            <Button
              variant='text-white-transparent'
              className='w-10 h-10 flex items-center justify-center rounded-[26px] text-black'
              onClick={onPrev}
              icon={<SkipBackIcon size={20} weight='bold' />}
            />

            <Button
              size='icon-sm'
              className='rounded-[26px] flex items-center justify-center bg-[#6654D3] text-white p-0 w-10 h-10'
              onClick={onPlayPause}
              icon={isPlaying ? (
                <PauseIcon size={24} weight='bold' />
              ) : (
                <PlayIcon size={24} weight='bold' />
              )}
            />

            <Button
              variant='text-white-transparent'
              className='w-10 h-10 flex items-center justify-center rounded-[26px] text-black'
              onClick={onNext}
              icon={<SkipForwardIcon size={24} weight='bold' />}
            />
          </div>
        </div>

        {/* Bottom row: MIDDLE SECTION (seekbar) */}
        <div className='flex items-center gap-4 w-full mt-2'>
          <div className='flex items-center justify-center w-12 h-8 text-black'>
            {currentTime}
          </div>

          <SeekBar
            value={progress}
            onChange={(val) => onSeek && onSeek(val)}
            variant='purple'
            className='flex-1 h-3 rounded-[40px]'
          />

          <div className='flex items-center justify-center w-12 h-8 text-black'>
            {totalTime}
          </div>
        </div>
      </div>

      {/* CLOSE BUTTON */}
      {onClose && (
        <Button
          size='icon-xs'
          onClick={onClose}
          className='absolute top-1.5 right-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-600 text-white hover:bg-gray-500'
        >
          <XIcon size={16} weight='bold' />
        </Button>
      )}
    </div>
  )
}
