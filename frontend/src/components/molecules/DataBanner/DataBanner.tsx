"use client"
import React, { FC } from "react"
import { MiniDataArtistCard } from "@/components/atoms/MiniDataArtistCard"

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
    <div
      className='
    w-full 
    grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4
    mt-8 md:mt-12
  '
      style={{
        rowGap: "clamp(1rem, 2vw, 2rem)",
        columnGap: "clamp(1rem, 3vw, 2rem)"
      }}
    >
      <MiniDataArtistCard
        className='w-full'
        topText='Total Value'
        bottomText={`$${totalValue}`}
      />
      <MiniDataArtistCard
        className='w-full'
        topText='Artists Supported'
        bottomText={totalArtists}
      />
      <MiniDataArtistCard
        className='w-full'
        topText='Total Votes Cast'
        bottomText={totalVotes}
      />
      <MiniDataArtistCard
        className='w-full'
        topText='Perks Unlocked'
        bottomText={totalPerks}
      />
    </div>
  )
}
