"use client"

import React from "react"
import { Avatar } from "@/components/atoms/Avatar/Avatar"

interface ProposalConfirmationHeaderProps {
  albumName: string
  artistName: string
  avatarSrc?: string
}

export const ProposalConfirmationHeader: React.FC<
  ProposalConfirmationHeaderProps
> = ({ albumName, artistName, avatarSrc }) => {
  return (
    <div className='flex items-center gap-4'>
      <Avatar src={avatarSrc} />
      <div className='flex flex-col gap-1'>
        <span className='proposal-album-text'>{albumName}</span>
        <span className='proposal-artist-text'>{artistName}</span>
      </div>
    </div>
  )
}
