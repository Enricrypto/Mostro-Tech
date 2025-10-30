"use client"

import { DataCard } from "@/components/molecules/DataCard"

interface DashBoardUserProfileDataProps {
  totalArtists: string
  artistsSupported: string
  totalVotesCast: string
  perksUnlocked: string
}

export const DashBoardUserProfileData: React.FC<
  DashBoardUserProfileDataProps
> = ({ totalArtists, artistsSupported, totalVotesCast, perksUnlocked }) => {
  // Hardcoded titles, dynamic values from props
  const cardsData = [
    { title: "Total Artists", value: totalArtists },
    { title: "Artists Supported", value: artistsSupported },
    { title: "Total Votes Cast", value: totalVotesCast },
    { title: "Perks Unlocked", value: perksUnlocked }
  ]

  return (
    <div
      className='flex flex-row gap-[8px] p-[8px]'
      style={{
        width: "981px",
        height: "112px",
        opacity: 1
      }}
    >
      {cardsData.map((card, index) => (
        <DataCard key={index} title={card.title} value={card.value} />
      ))}
    </div>
  )
}
