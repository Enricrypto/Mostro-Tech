"use client"

import { Hero } from "@/components/hero/Hero"
import { DashBoardStatsCard } from "@/components/templates/DashBoardStatsCard"
import { ChartLineUpIcon } from "@phosphor-icons/react"

export default function LandingPage() {
  // Example data for 6 cards
  const statsCardsData = [
    {
      topText: "Total Streams",
      bottomLeftText: "1.2M",
      bottomRightText: "+12%"
    },
    {
      topText: "Monthly Revenue",
      bottomLeftText: "$45K",
      bottomRightText: "+8%"
    },
    { topText: "Active Fans", bottomLeftText: "35K", bottomRightText: "+5%" },
    { topText: "Top Country", bottomLeftText: "USA", bottomRightText: "+3%" },
    {
      topText: "New Followers",
      bottomLeftText: "4.5K",
      bottomRightText: "+10%"
    },
    { topText: "Songs Released", bottomLeftText: "12", bottomRightText: "+2%" }
  ]

  return (
    <div className='bg-[#0A111F] min-h-screen w-full flex flex-col items-center'>
      <Hero />

      {/* Stats Cards Section */}
      <div className='w-full max-w-[1512px] mt-10 px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {statsCardsData.map((card, idx) => (
            <DashBoardStatsCard
              key={idx}
              topText={card.topText}
              bottomLeftText={card.bottomLeftText}
              bottomRightText={card.bottomRightText}
              icon={<ChartLineUpIcon size={20} color='#DCFD63' />}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
