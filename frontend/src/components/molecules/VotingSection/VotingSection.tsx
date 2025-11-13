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
        flex flex-col 
        gap-2.5 sm:gap-3.5 md:gap-4.5 lg:gap-6
        rounded-[0.625rem] border-2 border-[#2D3953]
        p-5 sm:p-6 md:p-8 lg:p-10'>
        
        {/* 1st Part: Voting Title + Description */}
        <div className='flex flex-col gap-3 sm:gap-4.5 md:gap-5.5 lg:gap-7'>
          <span className='font-inter font-semibold
            text-[1.125rem] sm:text-[1.25rem] md:text-[1.375rem] lg:text-[1.5rem]
            text-white leading-6.5 sm:leading-7 md:leading-7.5 lg:leading-8'>
            Voting
          </span>
          <p className='
            font-poppins font-normal
            text-[0.938rem] sm:text-[1rem] md:text-[1.063rem] lg:text-[1.125rem]
            text-white leading-5.5 sm:leading-6 md:leading-6.5 lg:leading-7
          '>
            {description}
          </p>
        </div>

        {/* 2nd Part: Voting Progress */}
        <VotingProgress noVotes={noVotes} yesVotes={yesVotes} />

        {/* 3rd Part: Vote Buttons */}
        <div className='grid grid-cols-1 gap-2.5 sm:gap-3.5 md:gap-5 lg:gap-6 '>
          <Button
            variant='continue'
            onClick={onVoteYes}
            className='flex items-center justify-center gap-2 
              text-[0.813rem] sm:text-[0.875rem] md:text-[0.938rem] lg:text-[1rem]'
            icon={<ThumbsUpIcon size={20} />}
            iconPosition='left'
          >
            Vote Yes
          </Button>
          <Button
            variant='button-cancel-red-border'
            onClick={onVoteNo}
            className='flex items-center justify-center gap-2 
              text-[0.813rem] sm:text-[0.875rem] md:text-[0.938rem] lg:text-[1rem]'
            icon={<ThumbsDownIcon size={20} />}
            iconPosition='left'
          >
            Vote No
          </Button>
        </div>

        {/* 4th Part: Separation Line */}
        <div className='w-full border-t border-[#D2D3D5] mt-1.5 sm:mt-2 md:mt-3 lg:mt-5 ' />

        {/* 5th Part: Participants & Total Votes */}
        <div className='w-full flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 '>
          {/* Top row: Participants */}
          <div className='flex justify-between gap-2 items-end '>
            <span className='flex-1 text-left font-inter font-normal 
              text-[0.813rem] sm:text-[0.875rem] md:text-[0.938rem] lg:text-[1rem] text-[#B3B3B3]'>
              Participants
            </span>
            <span className='text-right font-inter font-semibold 
              text-[0.938rem] sm:text-[1rem] md:text-[1.063rem] lg:text-[1.125rem] text-white'>
              {participants.toLocaleString()}
            </span>
          </div>

          {/* Bottom row: Total Votes */}
          <div className='flex justify-between gap-2 items-end '>
            <span className='flex-1 text-left font-inter font-normal 
              text-[0.813rem] sm:text-[0.875rem] md:text-[0.938rem] lg:text-[1rem] text-[#B3B3B3]'>
              Total Votes
            </span>
            <span className='text-right font-inter font-semibold 
              text-[0.938rem] sm:text-[1rem] md:text-[1.063rem] lg:text-[1.125rem] text-white'>
              {totalVotes.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

