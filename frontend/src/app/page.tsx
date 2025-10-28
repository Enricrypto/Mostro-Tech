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
import { Footer } from "@/components/navigation/Footer"
import { bannerPropsData } from "@/mocks/mockBannerProps"
import { statsCardVariants } from "@/mocks/mockStatsData"
import { mockArtistData } from "@/mocks/mockArtistData"
import { mockLeaderboardData } from "@/mocks/mockLeaderboardData"
import { mockNewLaunchData } from "@/mocks/mockNewLaunchData"
import { trendingTokens } from "@/mocks/mockTrendingTokens"
import { ArrowUpRightIcon } from "@phosphor-icons/react"
import { formatTime } from "../../utils/formatTime"

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
    <div className='bg-[#0A111F] min-h-screen w-full flex flex-col'>
      {/* ===== BADGES SECTION ===== */}
      <section className='top-[149px] -ml-[50vw] -mr-[50vw] border-t-2 border-b-2 border-[#121B2B] bg-[#0A111FE5] backdrop-blur-sm py-5 px-4 mt-20'>
        <div className='max-w-[1200px] mx-auto'>
          <BadgesRow />
        </div>
      </section>

      {/* ===== ARTIST PROFILE BANNER ===== */}
      <section className='relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] mt-10'>
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
          <div className='flex-1'>
            <SectionHeader title='Top Artists' />
          </div>

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

        <div className='max-w-[1200px] mx-auto flex flex-wrap gap-6 mt-10'>
          {mockArtistData.map((artist) => (
            <ArtistCard
              key={artist.id || artist.artistName}
              {...artist}
              slug={artist.slug}
            />
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
  )
}
