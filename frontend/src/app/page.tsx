"use client"

import { useState, useEffect, useRef } from "react"
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
import { formatTime } from "../../utils/formatTime"
import { Feedback } from "@/components/navigation/Feedback"

// ===== Reusable Section Header =====
const SectionHeader = ({ title }: { title: string }) => (
  <h2 className='font-inter font-semibold text-2xl md:text-3xl text-white tracking-tight text-left'>
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
    audioUrl: string
  } | null>(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [progress, setProgress] = useState(0)

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const currentBanner = bannerPropsData[currentIndex]

  // ===== Play a song =====
  const handlePlay = (song: {
    title: string
    artist: string
    avatarSrc: string
    audioUrl: string
  }) => {
    setCurrentSong(song)
    setIsPlaying(true)
    setProgress(0)
    setCurrentTime(0)
  }

  const handleClosePlayer = () => {
    setCurrentSong(null)
    setIsPlaying(false)
    setProgress(0)
    setCurrentTime(0)
  }

  // ===== Auto-rotate banner =====
  useEffect(() => {
    if (isPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerPropsData.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isPlaying])

  // ===== Sync audio element =====
  useEffect(() => {
    if (!audioRef.current) audioRef.current = new Audio()
    const audio = audioRef.current

    if (currentSong) {
      // Ensure previous audio is paused
      audio.pause()
      audio.currentTime = 0

      audio.src = currentSong.audioUrl
      audio.play().catch(() => {})
    } else {
      audio.pause()
      audio.src = ""
      setProgress(0)
      setCurrentTime(0)
      setDuration(0)
    }

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
      setDuration(audio.duration || 0)
      setProgress(audio.duration ? audio.currentTime / audio.duration : 0)
    }

    const handleEnded = () => {
      setIsPlaying(false)
    }

    audio.addEventListener("timeupdate", handleTimeUpdate)
    audio.addEventListener("ended", handleEnded)

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate)
      audio.removeEventListener("ended", handleEnded)
    }
  }, [currentSong])

  // ===== Sync play/pause =====
  useEffect(() => {
    if (!audioRef.current) return
    if (isPlaying) audioRef.current.play().catch(() => {})
    else audioRef.current.pause()
  }, [isPlaying])

  // ===== Seek handler =====
  const handleSeek = (value: number) => {
    if (!audioRef.current) return
    const seekTime = (audioRef.current.duration || 0) * value
    audioRef.current.currentTime = seekTime
    setCurrentTime(seekTime)
    setProgress(value)
  }

  return (
    <>
      <Feedback />
      {/* ===== FULL-WIDTH SECTIONS ===== */}
      <div className='relative w-screen'>
        {/* Badges Section */}
        <section className='relative mt-12 w-screen md:mt-20'>
          {/* Full-width background & borders */}
          <div className='absolute inset-0 w-screen border-t-2 border-b-2 border-[#121B2B] bg-[#0A111FE5] backdrop-blur-sm pointer-events-none'></div>

          {/* Scrollable content */}
          <div className='relative z-10 mx-auto max-w-[1200px] overflow-x-auto px-4 py-5 sm:px-6 md:px-12'>
            <BadgesRow />
          </div>
        </section>

        {/* Artist Profile Banner */}
        <section className='relative mt-12 w-screen md:mt-20'>
          <ArtistProfileBanner
            {...currentBanner}
            variant={currentBanner.variant}
            onPlay={() =>
              handlePlay({
                ...currentBanner.latestSong,
                avatarSrc: currentBanner.avatarSrc,
                audioUrl: currentBanner.latestSong.audioUrl
              })
            }
          />

          {/* Banner dots */}
          <div className='absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2 md:gap-4'>
            {bannerPropsData.map((_, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-3 w-3 cursor-pointer rounded-full transition-all duration-300 md:h-4 md:w-4 ${
                  currentIndex === idx ? "bg-white" : "bg-black/50"
                }`}
              />
            ))}
          </div>
        </section>
      </div>

      {/* ===== MAIN PAGE CONTENT ===== */}
      <div className='mx-auto flex min-h-screen w-full max-w-[1200px] flex-col bg-[#0A111F] px-4 sm:px-6 lg:px-8'>
        {/* ===== STATS CARDS ===== */}
        <section
                              className='mt-12 grid grid-cols-2 grid-rows-3 justify-center items-stretch gap-y-2 gap-x-2
                                 md:mt-20 md:grid-cols-3 md:grid-rows-2 sm:gap-x-3 sm:gap-y-3 lg:gap-x-4 lg:gap-y-4'        >
          {statsCardVariants.map((card) => (
            <DashBoardStatsCard key={card.topText} {...card} />
          ))}
        </section>

        {/* ===== TOP ARTISTS ===== */}
        <section className='mt-12 w-full md:mt-20'>
          <div className='flex items-center justify-between'>
            <SectionHeader title='Top Artists' />
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

<<<<<<< HEAD
          <div
            className='mt-10 grid grid-cols-1 justify-center items-stretch gap-y-2 gap-x-2 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-3 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-4 lg:gap-y-4'
          >
=======
          <div className='mt-10 grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
>>>>>>> ec13ef4 (fix: refactoring)
            {mockArtistData.map((artist) => (
              <ArtistCard
                key={artist.id || artist.artistName}
                {...artist}
                slug={artist.slug}
                showGraduatedBadge={true}
              />
            ))}
          </div>
        </section>

        {/* ===== TOP HOLDERS ===== */}
        <section className='mt-12 w-full md:mt-20'>
          <SectionHeader title='Top Holders' />

          {/* Cards Grid */}
          <div
            className='
      mt-10 grid grid-cols-1 justify-center items-stretch gap-y-2 gap-x-2
      md:grid-cols-2 sm:gap-x-3 sm:gap-y-3 lg:gap-x-4 lg:gap-y-4
    '
          >
            {/* Mobile: first 5 cards */}
            {mockLeaderboardData.slice(0, 5).map((holder, idx) => (
              <LeaderBoard
                key={holder.rank}
                {...holder}
                showScore={false}
                className='md:hidden'
              />
            ))}

            {/* iPad/Desktop: all cards */}
            {mockLeaderboardData.map((holder, idx) => (
              <LeaderBoard
                key={holder.rank}
                {...holder}
                showScore={false}
                className='hidden md:block'
              />
            ))}
          </div>

          {/* Mobile-only Button */}
          <div className='mt-8 block md:hidden'>
            <Button
              variant='follow-share'
              icon={<ArrowUpRightIcon size={20} weight='bold' />}
              iconPosition='right'
              className='w-full'
              onClick={() => router.push("/all-holders")}
            >
              View All
            </Button>
          </div>
        </section>

        {/* ===== NEW LAUNCHES ===== */}
        <section className='mt-12 w-full md:mt-20'>
          <div className='flex items-center justify-between'>
            <SectionHeader title='New Launches' />
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

          <div
            className='
   mt-10 grid grid-cols-1 justify-center items-stretch gap-y-2 gap-x-2
    sm:grid-cols-2 sm:gap-x-3 sm:gap-y-3
    lg:grid-cols-2 lg:gap-x-4 lg:gap-y-4
    xl:grid-cols-3
'
          >
            {mockNewLaunchData.slice(0, 3).map((launch) => (
              <NewLaunchCard key={launch.id} {...launch} />
            ))}
          </div>
        </section>

        {/* ===== TRENDING TOKENS ===== */}
        <section className='mb-12 mt-12 w-full md:mb-20 md:mt-20'>
          <SectionHeader title='Trending Tokens' />

<<<<<<< HEAD
          <div
            className='mt-10 grid grid-cols-1 justify-center items-stretch gap-y-2 gap-x-2 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-3 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-4 lg:gap-y-4'
          >
=======
          <div className='mt-10 grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
>>>>>>> ec13ef4 (fix: refactoring)
            {trendingTokens.map((token) => (
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
        </section>

        {/* ===== PLAYER ===== */}
        {currentSong && (
          <div className='fixed bottom-0 left-0 z-50 flex w-full justify-center px-4 py-4 md:px-6'>
            <PlayerCard
              songName={currentSong.title}
              songDetails={currentSong.artist}
              currentTime={formatTime(currentTime)}
              totalTime={formatTime(duration)}
              progress={progress}
              avatarUrl={currentSong.avatarSrc ?? currentBanner.avatarSrc}
              isPlaying={isPlaying}
              onPlayPause={() => setIsPlaying((prev) => !prev)}
              onNext={() => {}}
              onPrev={() => {}}
              onClose={handleClosePlayer}
              onSeek={handleSeek}
            />
          </div>
        )}
      </div>
    </>
  )
}
