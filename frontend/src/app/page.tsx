"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { BadgesRow } from "@/components/dashboard/BadgesRow"
import { ArtistProfileBanner } from "@/components/molecules/ArtistProfileBanner"
import { DashBoardStatsCard } from "@/components/templates/DashBoardStatsCard"
import { ArtistCard } from "@/components/molecules/ArtistCard"
import { Button } from "@/components/atoms/Button"
import { LeaderBoard } from "@/components/molecules/Leaderboard"
import { NewLaunchCard } from "@/components/molecules/NewLaunchCard"
import { TrendingTokenCard } from "@/components/molecules/TrendingTokenCard"
import { PlayerCard } from "@/components/display/PlayerCard"
import { bannerPropsData } from "@/mocks/mockBannerProps"
import { statsCardVariants } from "@/mocks/mockStatsData"
import { mockArtistData } from "@/mocks/mockArtistData"
import { mockLeaderboardData } from "@/mocks/mockLeaderboardData"
import { mockNewLaunchData } from "@/mocks/mockNewLaunchData"
import { trendingTokens } from "@/mocks/mockTrendingTokens"
import { ArrowUpRightIcon } from "@phosphor-icons/react"

export default function DashboardPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentSong, setCurrentSong] = useState<null | {
    title: string
    artist: string
  }>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showPlayer, setShowPlayer] = useState(true)

  const router = useRouter()
  const currentBanner = bannerPropsData[currentIndex]

  const handlePlay = (song: { title: string; artist: string }) => {
    setCurrentSong(song)
    setIsPlaying(true)
  }

  const handleClosePlayer = () => {
    setShowPlayer(false)
    setCurrentSong(null)
  }

  // Auto-rotate banner
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerPropsData.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='bg-[#0A111F] min-h-screen w-full flex flex-col'>
      {/* ===== BADGES SECTION ===== */}
      <section className='sticky top-[149px] z-10 w-screen left-[00%] right-[50%] -ml-[50vw] -mr-[50vw] border-t-2 border-b-2 border-[#121B2B] bg-[#0A111FE5] backdrop-blur-sm py-5 px-4'>
        <div className='max-w-[1200px] mx-auto'>
          <BadgesRow />
        </div>
      </section>

      {/* ===== ARTIST PROFILE BANNER ===== */}
      <section className='relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] mt-20'>
        <ArtistProfileBanner
          {...currentBanner}
          variant={currentBanner.variant}
          onPlay={() => handlePlay(currentBanner.latestSong)}
        />

        {/* Dots */}
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

      {/* ===== STATS CARDS ===== */}
      <section className='flex flex-wrap justify-center gap-6 mt-14 px-4'>
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

      {/* ===== TOP ARTISTS ===== */}
      <section className='flex flex-col gap-6 mt-20 '>
        <div className='w-full max-w-[1200px] mx-auto flex justify-between items-center'>
          <h2 className='font-inter font-semibold text-[30px] leading-[36px] text-white'>
            Top Artists
          </h2>
          <Button
            variant='follow-share'
            icon={<ArrowUpRightIcon size={20} weight='bold' />}
            iconPosition='right'
            onClick={() => router.push("/all-artists")}
          >
            View All
          </Button>
        </div>

        <div className='max-w-[1200px] mx-auto flex flex-wrap gap-6 mt-4'>
          {mockArtistData.map((artist, idx) => (
            <ArtistCard key={idx} {...artist} />
          ))}
        </div>
      </section>

      {/* ===== TOP HOLDERS ===== */}
      <section className='flex flex-col gap-6 mt-20'>
        <div className='max-w-[1200px] mx-auto'>
          <h2 className='font-inter font-semibold text-[30px] leading-[36px] text-white tracking-tight text-left'>
            Top Holders
          </h2>

          <div className='mt-10 flex gap-6 flex-wrap'>
            <div className='flex flex-col gap-6 flex-1'>
              {mockLeaderboardData.slice(0, 5).map((holder, idx) => (
                <LeaderBoard key={idx} {...holder} />
              ))}
            </div>
            <div className='flex flex-col gap-6 flex-1'>
              {mockLeaderboardData.slice(5, 10).map((holder, idx) => (
                <LeaderBoard key={idx + 5} {...holder} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEW LAUNCHES ===== */}
      <section className='flex flex-col gap-6 mt-20'>
        <div className='max-w-[1200px] mx-auto'>
          <h2 className='font-inter font-semibold text-[30px] leading-[36px] text-white tracking-tight text-left'>
            New Launches
          </h2>

          <div className='flex flex-wrap gap-6 mt-10'>
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
        </div>
      </section>

      {/* ===== TRENDING TOKENS ===== */}
      <section className='flex flex-col gap-6 mt-20 mb-20'>
        <div className='max-w-[1200px] mx-auto'>
          <h2 className='font-inter font-semibold text-[30px] leading-[36px] text-white tracking-tight text-left'>
            Trending Tokens
          </h2>

          <div className='flex flex-wrap gap-6 mt-10'>
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

          <div className='flex flex-wrap gap-6 mt-4'>
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
        </div>
      </section>

      {currentSong && (
        <div className='fixed bottom-0 left-0 w-full px-6 py-4 z-50 flex justify-center'>
          <PlayerCard
            songName={currentSong.title}
            songDetails={currentSong.artist}
            currentTime='0:00'
            totalTime='3:45'
            progress={0}
            avatarUrl={currentBanner.avatarSrc}
            isPlaying={isPlaying}
            onPlayPause={() => setIsPlaying((prev) => !prev)}
            onNext={() => {}}
            onPrev={() => {}}
            onClose={handleClosePlayer}
          />
        </div>
      )}
    </div>
  )
}
