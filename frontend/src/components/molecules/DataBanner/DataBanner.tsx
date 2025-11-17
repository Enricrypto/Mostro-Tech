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
    grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-4
    mt-8 md:justify-items-center
  '
    >
      <MiniDataArtistCard topText='Total Value' bottomText={`$${totalValue}`} />
      <MiniDataArtistCard
        topText='Artists Supported'
        bottomText={totalArtists}
      />
      <MiniDataArtistCard topText='Total Votes Cast' bottomText={totalVotes} />
      <MiniDataArtistCard topText='Perks Unlocked' bottomText={totalPerks} />
    </div>
  )
}
