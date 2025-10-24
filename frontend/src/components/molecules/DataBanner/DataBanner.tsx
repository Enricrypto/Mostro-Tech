"use client"
import React, { FC } from "react"
import { MiniDataArtistCard } from "@/components/molecules/MiniDataArtistCard"

interface DataBannerProps {
  totalValue: string
  totalArtists: string
  totalVotes: string
  totalPerks: string
}

export const DataBanner: FC<DataBannerProps> = ({
  totalValue,
  totalArtists,
  totalVotes,
  totalPerks
}) => {
  return (
    <div className='flex w-full gap-4 mt-8'>
      <MiniDataArtistCard
        className='flex-1'
        topText='Total Value'
        bottomText={`$${totalValue}`}
      />
      <MiniDataArtistCard
        className='flex-1'
        topText='Artists Supported'
        bottomText={totalArtists}
      />
      <MiniDataArtistCard
        className='flex-1'
        topText='Total Votes Cast'
        bottomText={totalVotes}
      />
      <MiniDataArtistCard
        className='flex-1'
        topText='Perks Unlocked'
        bottomText={totalPerks}
      />
    </div>
  )
}
