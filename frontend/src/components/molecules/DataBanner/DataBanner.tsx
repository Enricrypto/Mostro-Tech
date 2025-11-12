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
        w-full flex flex-wrap justify-center items-center
        gap-4 sm:gap-6 md:gap-8
        mt-8 md:mt-12
      '
      style={{
        rowGap: "clamp(1rem, 2vw, 2rem)", // vertical spacing between rows
        columnGap: "clamp(1rem, 3vw, 2rem)" // horizontal spacing between columns
      }}
    >
      <MiniDataArtistCard
        className='flex-1 min-w-[clamp(10rem, 40%, 14rem)]'
        topText='Total Value'
        bottomText={`$${totalValue}`}
      />
      <MiniDataArtistCard
        className='flex-1 min-w-[clamp(10rem, 40%, 14rem)]'
        topText='Artists Supported'
        bottomText={totalArtists}
      />
      <MiniDataArtistCard
        className='flex-1 min-w-[clamp(10rem, 40%, 14rem)]'
        topText='Total Votes Cast'
        bottomText={totalVotes}
      />
      <MiniDataArtistCard
        className='flex-1 min-w-[clamp(10rem, 40%, 14rem)]'
        topText='Perks Unlocked'
        bottomText={totalPerks}
      />
    </div>
  )
}
