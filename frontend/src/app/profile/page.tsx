"use client"

import { useEffect, useRef } from "react"
import { usePrivy } from "@privy-io/react-auth"
import { useRouter } from "next/navigation"
import { ProfileCardContainer } from "@/components/molecules/ProfileCardContainer"
import { DataBanner } from "@/components/molecules/DataBanner"
import { TokenHoldingsUserCard } from "@/components/molecules/TokenHoldingsUserCard"
import { PerksCard } from "@/components/molecules/PerksCard"
import { VotingHistory } from "@/components/molecules/VotingHisory"
import { LoadingSpinner } from "@/components/atoms/LoadingSpinner"
import { SongCard } from "@/components/display/SongCard"
import { mockPerksCombined } from "@/mocks/mockPerks"
import { mockTokenHoldings } from "@/mocks/mockTokenHoldings"
import { mockVotingHistory } from "@/mocks/mockVotingHistory"
import { mockDataBanner } from "@/mocks/mockDataBanner"
import { mockSongData } from "@/mocks/mockSongData"
import { mockFavoriteSongs } from "@/mocks/mockFavoriteSongs"
import { mockArtists } from "@/mocks/mockArtists"
import { useMusicPlayerStore } from "@/stores/musicPlayerStore"
import { PlayerCard } from "@/components/display/PlayerCard"
import { formatTime } from "../../../utils/formatTime"

const SectionHeader = ({ title }: { title: string }) => (
  <h2 className='text-white font-semibold text-[30px] leading-9 tracking-[-0.75%]'>
    {title}
  </h2>
)

export default function ProfilePage() {
  const { ready, user } = usePrivy()
  const router = useRouter()
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const {
    currentSong,
    isPlaying,
    progress,
    currentTime,
    duration,
    setCurrentSong,
    setPlaylist,
    playPause,
    nextSong,
    prevSong,
    setProgress,
    setCurrentTime,
    setDuration,
    closePlayer
  } = useMusicPlayerStore()

  // Redirect if not logged in
  useEffect(() => {
    if (ready && !user) router.push("/")
  }, [ready, user, router])

  // Initialize playlist
  useEffect(() => {
    const playlist = [
      ...mockSongData,
      ...mockArtists.map((a) => ({
        songName: a.latestSingle.title,
        subtitle: a.latestSingle.duration || "0:00",
        avatarUrl: a.image,
        audioUrl: a.latestSingle.audioUrl,
        variant: "song-play" as "song-play"
      }))
    ]
    setPlaylist(playlist)
  }, [setPlaylist])

  // Play a song
  const handlePlaySong = (
    song: typeof currentSong | null,
    playlist: typeof mockFavoriteSongs
  ) => {
    if (!song) return
    setCurrentSong(song)
    setPlaylist(playlist) // sets the featured playlist
    if (song.audioUrl && audioRef.current) {
      audioRef.current.src = song.audioUrl
      audioRef.current.play()
    }
  }

  // Auto-play/pause and handle new song
  useEffect(() => {
    if (!audioRef.current) return

    if (!currentSong?.audioUrl) return

    audioRef.current.src = currentSong.audioUrl

    if (isPlaying) {
      audioRef.current.play().catch(() => {})
    } else {
      audioRef.current.pause()
    }
  }, [currentSong, isPlaying])

  // Update progress and currentTime
  const handleTimeUpdate = () => {
    if (!audioRef.current) return
    const current = audioRef.current.currentTime
    const dur = audioRef.current.duration || 0
    setCurrentTime(current)
    setProgress(dur ? current / dur : 0)
  }

  const handleSeek = (progressValue: number) => {
    if (!audioRef.current) return
    const dur = audioRef.current.duration
    audioRef.current.currentTime = dur * progressValue
    setProgress(progressValue)
    setCurrentTime(dur * progressValue)
  }

  if (!ready || !user) return <LoadingSpinner text='Loading profile...' />

  return (
    <div className='flex mt-12 max-w-[1200px] flex-col items-center w-full px-4'>
      {/* Profile Card */}
      <ProfileCardContainer />

      {/* Data Banner */}
      <section className='w-full mt-12'>
        <DataBanner {...mockDataBanner} />
      </section>

      {/* Favorite Tracks */}
      <section className='w-full mt-20 mb-20'>
        <SectionHeader title='Favorite Tracks' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
          {mockFavoriteSongs.map((song, index) => (
            <SongCard
              key={index}
              songName={song.songName}
              subtitle={song.subtitle || "0:00"}
              variant={song.variant as "song-play" | "song-unlock"}
              unlockAmount={song.unlockAmount}
              unlockToken={song.unlockToken}
              onPlay={() => handlePlaySong(song, mockFavoriteSongs)}
              isPlaying={currentSong?.songName === song.songName && isPlaying}
            />
          ))}
        </div>
      </section>

      {/* Token Holdings */}
      <section className='w-full mt-12'>
        <SectionHeader title='Token Holdings' />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
          {mockTokenHoldings.map((holding) => (
            <TokenHoldingsUserCard key={holding.id} {...holding} />
          ))}
        </div>
      </section>

      {/* Unlocked Perks */}
      <section className='w-full mt-20'>
        <SectionHeader title='Unlocked Perks' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
          {mockPerksCombined.map((perk) => (
            <PerksCard
              key={perk.id || perk.title}
              {...perk}
              className='w-full'
            />
          ))}
        </div>
      </section>

      {/* Voting History */}
      <section className='w-full mt-20 mb-20'>
        <SectionHeader title='Voting History' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
          {mockVotingHistory.map((vote) => (
            <VotingHistory key={vote.id} {...vote} />
          ))}
        </div>
      </section>

      {/* Hidden Audio Element (always rendered) */}
      {currentSong?.audioUrl && (
        <audio
          ref={audioRef}
          src={currentSong.audioUrl}
          onTimeUpdate={handleTimeUpdate}
          onEnded={nextSong}
          onLoadedMetadata={() => {
            if (audioRef.current) setDuration(audioRef.current.duration)
          }}
          style={{ display: "none" }} // keeps it hidden
        />
      )}

      {/* PlayerCard */}
      {currentSong && (
        <div className='fixed bottom-0 left-0 w-full px-6 py-4 z-50 flex justify-center'>
          <PlayerCard
            songName={currentSong.songName}
            songDetails={currentSong.subtitle || "0:00"}
            currentTime={formatTime(currentTime)}
            totalTime={formatTime(duration)}
            progress={progress}
            onSeek={handleSeek}
            avatarUrl={currentSong.avatarUrl}
            isPlaying={isPlaying}
            onPlayPause={playPause}
            onNext={nextSong}
            onPrev={prevSong}
            onClose={closePlayer}
          />
        </div>
      )}
    </div>
  )
}
