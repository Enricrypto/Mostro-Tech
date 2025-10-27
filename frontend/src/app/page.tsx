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
import { Footer } from "@/components/navigation/Footer"
import { bannerPropsData } from "@/mocks/mockBannerProps"
import { statsCardVariants } from "@/mocks/mockStatsData"
import { mockArtistData } from "@/mocks/mockArtistData"
import { mockLeaderboardData } from "@/mocks/mockLeaderboardData"
import { mockNewLaunchData } from "@/mocks/mockNewLaunchData"
import { trendingTokens } from "@/mocks/mockTrendingTokens"
import { ArrowUpRightIcon } from "@phosphor-icons/react"

// ===== Reusable Section Header =====
const SectionHeader = ({ title }: { title: string }) => (
  <h2 className='font-inter font-semibold text-[30px] leading-9 text-white tracking-tight text-left'>
    {title}
  </h2>
)

// ===== Utility to chunk array =====
const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size))
  }
  return chunks
}

export default function DashboardPage() {
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentSong, setCurrentSong] = useState<{
    title: string
    artist: string
    avatarSrc: string
  } | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const currentBanner = bannerPropsData[currentIndex]

  const handlePlay = (song: {
    title: string
    artist: string
    avatarSrc: string
  }) => {
    setCurrentSong(song)
    setIsPlaying(true)
  }

  const handleClosePlayer = () => {
    setCurrentSong(null)
    setIsPlaying(false)
  }

  // Auto-rotate banner
  useEffect(() => {
    if (isPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerPropsData.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isPlaying])

  return (
    <div className='bg-[#0A111F] min-h-screen w-full flex flex-col'>
      {/* ===== BADGES SECTION (unchanged styles) ===== */}
      <section className='sticky top-[149px] z-10 w-screen left-[00%] right-[50%] -ml-[50vw] -mr-[50vw] border-t-2 border-b-2 border-[#121B2B] bg-[#0A111FE5] backdrop-blur-sm py-5 px-4'>
        <div className='max-w-[1200px] mx-auto'>
          <BadgesRow />
        </div>
      </section>

      {/* ===== ARTIST PROFILE BANNER (unchanged styles) ===== */}
      <section className='relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] mt-20'>
        <ArtistProfileBanner
          {...currentBanner}
          variant={currentBanner.variant}
          onPlay={() =>
            handlePlay({
              ...currentBanner.latestSong,
              avatarSrc: currentBanner.avatarSrc
            })
          }
        />

        {/* Banner dots */}
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
      <section className='flex flex-wrap justify-center gap-6 mt-20 px-4'>
        {statsCardVariants.map((card) => (
          <DashBoardStatsCard key={card.topText} {...card} />
        ))}
      </section>

      {/* ===== TOP ARTISTS ===== */}
      <section className='flex flex-col gap-6 mt-20 px-4'>
        <div className='w-full max-w-[1200px] mx-auto flex justify-between items-center'>
          {/* Title */}
          <div className='flex-1'>
            <SectionHeader title='Top Artists' />
          </div>

          {/* Button aligned right */}
          <div>
            <Button
              variant='follow-share'
              icon={<ArrowUpRightIcon size={20} weight='bold' />}
              iconPosition='right'
              onClick={() => router.push("/all-artists")}
            >
              View All
            </Button>
          </div>
        </div>

        {/* Artists Grid */}
        <div className='max-w-[1200px] mx-auto flex flex-wrap gap-6 mt-10'>
          {mockArtistData.map((artist) => (
            <ArtistCard key={artist.id || artist.artistName} {...artist} />
          ))}
        </div>
      </section>

      {/* ===== TOP HOLDERS ===== */}
      <section className='flex flex-col gap-6 mt-20 px-4'>
        <div className='max-w-[1200px] mx-auto'>
          <SectionHeader title='Top Holders' />
          <div className='mt-10 flex flex-wrap gap-6'>
            {chunkArray(mockLeaderboardData, 5).map((chunk, idx) => (
              <div key={idx} className='flex flex-col gap-6 flex-1'>
                {chunk.map((holder) => (
                  <LeaderBoard key={holder.rank} {...holder} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEW LAUNCHES ===== */}
      <section className='flex flex-col gap-6 mt-20 px-4'>
        <div className='w-full max-w-[1200px] mx-auto flex justify-between items-center'>
          {/* Title */}
          <div className='flex-1'>
            <SectionHeader title='New Launches' />
          </div>

          <div>
            <Button
              variant='follow-share'
              icon={<ArrowUpRightIcon size={20} weight='bold' />}
              iconPosition='right'
              onClick={() => router.push("/launches")}
            >
              View All
            </Button>
          </div>
        </div>
        <div className='max-w-[1200px] mx-auto flex flex-wrap gap-6 mt-10'>
          {mockNewLaunchData.slice(0, 3).map((launch) => (
            <NewLaunchCard key={launch.id || launch.name} {...launch} />
          ))}
        </div>
      </section>

      {/* ===== TRENDING TOKENS ===== */}
      <section className='flex flex-col gap-6 mt-20 mb-30 px-4'>
        <div className='max-w-[1200px] mx-auto'>
          <SectionHeader title='Trending Tokens' />
          {chunkArray(trendingTokens, 3).map((chunk, idx) => (
            <div key={idx} className='flex flex-wrap gap-6 mt-10'>
              {chunk.map((token) => (
                <TrendingTokenCard
                  key={token.id}
                  avatarSrc={token.iconUrl}
                  name={token.name}
                  subtitle={token.tokenName}
                  value={token.price}
                  badgeText={token.change}
                />
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ===== PLAYER ===== */}
      {currentSong && (
        <div className='fixed bottom-0 left-0 w-full px-6 py-4 z-50 flex justify-center'>
          <PlayerCard
            songName={currentSong.title}
            songDetails={currentSong.artist}
            currentTime='0:00'
            totalTime='3:45'
            progress={0}
            avatarUrl={currentSong.avatarSrc ?? currentBanner.avatarSrc}
            isPlaying={isPlaying}
            onPlayPause={() => setIsPlaying((prev) => !prev)}
            onNext={() => {}}
            onPrev={() => {}}
            onClose={handleClosePlayer}
          />
        </div>
      )}
      {/* ===== FOOTER ===== */}
      <div className='relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]'>
        <Footer />
      </div>
    </div>
  )
}
