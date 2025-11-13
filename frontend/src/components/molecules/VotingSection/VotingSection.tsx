"use client"

import React from "react"
import { Button } from "@/components/atoms/Button"
import { ThumbsUpIcon, ThumbsDownIcon } from "@phosphor-icons/react"
import { VotingProgress } from "../VotingProgress"

export interface VotingSectionProps {
  artist: string
  title: string
  description: string
  yesVotes?: number
  noVotes?: number
  participants: number
  totalVotes: number
  onVoteYes?: () => void
  onVoteNo?: () => void
}

export const VotingSection: React.FC<VotingSectionProps> = ({
  description,
  yesVotes = 0,
  noVotes = 0,
  participants,
  totalVotes,
  onVoteYes,
  onVoteNo
}) => {
  return (
    <div className="flex-1 flex justify-center lg:justify-end w-full text-center lg:text-left ">

      <div className='
        w-full
        flex flex-col gap-6 p-6
        rounded-[0.625rem] border-2 border-[#2D3953]
        sm:p-7 md:p-8 lg:p-10'>
        {/* 1st Part: Voting Title + Description */}
        <div className='flex flex-col gap-4 sm:gap-5 md:gap-6'>
          <span className='font-inter font-semibold
            text-[1.5rem] sm:text-[1.625rem] lg:text-[1.875rem]
            text-white leading-[1.9rem] sm:leading-8'>
            Voting
          </span>
          <p className='
            font-poppins font-normal
            text-[1rem] sm:text-[1.063rem] lg:text-[1.125rem]
            text-white leading-7 sm:leading-7
          '>
            {description}
          </p>
        </div>

        {/* 2nd Part: Voting Progress */}
        <VotingProgress noVotes={noVotes} yesVotes={yesVotes} />

        {/* 3rd Part: Vote Buttons */}
        <div className='grid grid-cols-1 gap-3 sm:gap-4 '>
          <Button
            variant='continue'
            onClick={onVoteYes}
            className='flex items-center justify-center gap-2 text-[1rem]'
            icon={<ThumbsUpIcon size={20} />}
            iconPosition='left'
          >
            Vote Yes
          </Button>
          <Button
            variant='button-cancel-red-border'
            onClick={onVoteNo}
            className='flex items-center justify-center gap-2 text-[1rem]'
            icon={<ThumbsDownIcon size={20} />}
            iconPosition='left'
          >
            Vote No
          </Button>
        </div>

        {/* 4th Part: Separation Line */}
        <div className='w-full border-t border-[#D2D3D5]' />

        {/* 5th Part: Participants & Total Votes */}
        <div className='w-full flex flex-col gap-4'>
          {/* Top row: Participants */}
          <div className='flex justify-between gap-2 items-end '>
            <span className='flex-1 text-left font-inter font-normal text-[16px] text-[#B3B3B3]'>
              Participants
            </span>
            <span className='text-right font-inter font-semibold text-[18px] text-white'>
              {participants.toLocaleString()}
            </span>
          </div>

          {/* Bottom row: Total Votes */}
          <div className='flex justify-between gap-2 items-end '>
            <span className='flex-1 text-left font-inter font-normal text-[16px] text-[#B3B3B3]'>
              Total Votes
            </span>
            <span className='text-right font-inter font-semibold text-[18px] text-white'>
              {totalVotes.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
