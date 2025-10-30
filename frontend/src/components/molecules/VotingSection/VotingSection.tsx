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
    <div className='w-[382px] h-[598px] flex flex-col gap-6 p-6 rounded-[10px] border-2 border-[#2D3953]'>
      {/* 1st Part: Voting Title + Description */}
      <div className='flex flex-col gap-6'>
        <span className='font-inter font-semibold text-[30px] text-white leading-9'>
          Voting
        </span>
        <p className='font-poppins font-normal text-[18px] text-white leading-7'>
          {description}
        </p>
      </div>

      {/* 2nd Part: Voting Progress */}
      <VotingProgress noVotes={noVotes} yesVotes={yesVotes} />

      {/* 3rd Part: Vote Buttons */}
      <div className='flex flex-col gap-4'>
        <Button
          variant='continue'
          onClick={onVoteYes}
          className='flex items-center justify-center gap-2'
          icon={<ThumbsUpIcon size={20} />}
          iconPosition='left'
        >
          Vote Yes
        </Button>
        <Button
          variant='button-cancel-red-border'
          onClick={onVoteNo}
          className='flex items-center justify-center gap-2'
          icon={<ThumbsDownIcon size={20} />}
          iconPosition='left'
        >
          Vote No
        </Button>
      </div>

      {/* 4th Part: Separation Line */}
      <div className='w-[334px] border-t border-[#D2D3D5]' />

      {/* 5th Part: Participants & Total Votes */}
      <div className='w-[334px] flex flex-col gap-2'>
        {/* Top row: Participants */}
        <div className='flex justify-between'>
          <span className='font-inter font-normal text-[16px] text-[#B3B3B3]'>
            Participants
          </span>
          <span className='font-inter font-semibold text-[18px] text-white'>
            {participants.toLocaleString()}
          </span>
        </div>

        {/* Bottom row: Total Votes */}
        <div className='flex justify-between'>
          <span className='font-inter font-normal text-[16px] text-[#B3B3B3]'>
            Total Votes
          </span>
          <span className='font-inter font-semibold text-[18px] text-white'>
            {totalVotes.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  )
}
