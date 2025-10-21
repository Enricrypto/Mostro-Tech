"use client"

import { useState, useEffect } from "react"
import { BadgesRow } from "@/components/dashboard/BadgesRow"
import { ArtistProfileBanner } from "@/components/molecules/ArtistProfileBanner"
import { DashBoardStatsCard } from "@/components/templates/DashBoardStatsCard"
import { ArtistCard } from "@/components/molecules/ArtistCard"
import { Button } from "@/components/atoms/Button"
import { LeaderBoard } from "@/components/molecules/Leaderboard"
import { NewLaunchCard } from "@/components/molecules/NewLaunchCard"
import { TrendingTokenCard } from "@/components/molecules/TrendingTokenCard"
import { bannerPropsData } from "@/mocks/mockBannerProps"
import { statsCardVariants } from "@/mocks/mockStatsData"
import { mockArtistData } from "@/mocks/mockArtistData"
import { mockLeaderboardData } from "@/mocks/mockLeaderboardData"
import { mockNewLaunchData } from "@/mocks/mockNewLaunchData"
import { trendingTokens } from "@/mocks/mockTrendingTokens"
import { ArrowUpRightIcon } from "@phosphor-icons/react"

export default function DashboardPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentBanner = bannerPropsData[currentIndex] // pick the banner data for the current dot

  // Auto-rotate effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerPropsData.length)
    }, 5000) // change every 5 seconds
    return () => clearInterval(interval) // cleanup on unmount
  }, [])

  return (
    <div className='bg-[#0A111F] min-h-screen w-full flex flex-col items-center'>
      {/* ===== BADGES SECTION ===== */}
      <section className='sticky top-[149px] z-10 w-full border-t-2 border-b-2 border-[#121B2B] bg-[#0A111FE5] backdrop-blur-sm py-5 px-[101px] flex justify-between items-center'>
        <BadgesRow />
      </section>

      {/* ===== ARTIST PROFILE BANNER SECTION ===== */}
      <section className='relative w-full flex justify-center mt-20'>
        {/* Pass variant directly from the data */}
        <ArtistProfileBanner
          {...currentBanner}
          variant={currentBanner.variant}
        />

        {/* Dots variant switcher */}
        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4'>
          {bannerPropsData.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
                currentIndex === idx ? "bg-white" : "bg-black/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ===== STATS CARDS SECTION ===== */}
      <section className='flex flex-wrap justify-center mt-14 w-full gap-6'>
        {statsCardVariants.map((card, idx) => (
          <DashBoardStatsCard
            key={idx}
            topText={card.topText}
            bottomLeftText={card.bottomLeftText}
            bottomRightText={card.bottomRightText}
            icon={card.icon}
          />
        ))}
      </section>

      {/* ===== TOP ARTISTS SECTION ===== */}
      <section className='flex flex-col gap-10 mt-20 w-full items-center'>
        <div className='flex justify-between items-center w-full px-4 max-w-[1200px] mx-auto'>
          <h2
            className='font-inter font-semibold text-[30px] leading-[36px] text-white'
            style={{ letterSpacing: "-0.75%" }}
          >
            Top Artists
          </h2>
          <Button
            variant='follow-share'
            icon={<ArrowUpRightIcon size={20} weight='bold' />}
            iconPosition='right'
            onClick={() => console.log("Navigate to New Launches")}
          >
            View All
          </Button>
        </div>

        <div className='flex gap-6 w-[1200px] justify-start'>
          {mockArtistData.map((artist, idx) => (
            <ArtistCard key={idx} {...artist} />
          ))}
        </div>
      </section>

      {/* ===== TOP HOLDERS SECTION ===== */}
      <section
        className='flex flex-col gap-[24px] mt-20 items-center'
        style={{ width: "1200px" }}
      >
        <h2
          className='font-inter font-semibold text-[30px] leading-[36px] text-white w-full'
          style={{ letterSpacing: "-0.75%" }}
        >
          Top Holders
        </h2>

        <div
          className='flex justify-between mt-5'
          style={{ width: "1200px", gap: "39px" }}
        >
          <div className='flex flex-col gap-[39px]'>
            {mockLeaderboardData.slice(0, 5).map((holder, idx) => (
              <LeaderBoard key={idx} {...holder} />
            ))}
          </div>
          <div className='flex flex-col gap-[39px]'>
            {mockLeaderboardData.slice(5, 10).map((holder, idx) => (
              <LeaderBoard key={idx + 5} {...holder} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEW LAUNCHES SECTION ===== */}
      <section
        className='flex flex-col gap-[24px] mt-20 items-center'
        style={{ width: "1200px" }}
      >
        <h2
          className='font-inter font-semibold text-[30px] leading-[36px] text-white w-full'
          style={{ letterSpacing: "-0.75%" }}
        >
          New Launches
        </h2>

        <div
          className='flex justify-start gap-[24px] mt-5'
          style={{ width: "1200px" }}
        >
          {mockNewLaunchData.slice(0, 3).map((launch, idx) => (
            <NewLaunchCard
              key={idx}
              avatarUrl={launch.avatarUrl}
              name={launch.name}
              badgeText={launch.badgeText}
              launchInDays={launch.launchInDays}
              price={launch.price}
              dynamicRightTopText={launch.dynamicRightTopText}
              onButtonClick={() => console.log(`View ${launch.name}`)}
            />
          ))}
        </div>
      </section>

      {/* ===== TRENDING TOKENS SECTION ===== */}
      <section
        className='flex flex-col gap-[24px] mt-20 mb-20 items-center'
        style={{ width: "1200px" }}
      >
        <h2 className='text-white font-inter font-semibold text-[30px] leading-[36px] tracking-[-0.75%] w-full'>
          Trending Tokens
        </h2>

        <div className='w-[1200px] h-[148px] flex gap-[24px] mt-5'>
          {trendingTokens.slice(0, 3).map((token) => (
            <TrendingTokenCard
              key={token.id}
              avatarSrc={token.iconUrl}
              name={token.name}
              subtitle={token.value}
              value={token.price}
              badgeText={token.change}
            />
          ))}
        </div>

        <div className='w-[1200px] h-[148px] flex gap-[24px]'>
          {trendingTokens.slice(3, 6).map((token) => (
            <TrendingTokenCard
              key={token.id}
              avatarSrc={token.iconUrl}
              name={token.name}
              subtitle={token.value}
              value={token.price}
              badgeText={token.change}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
