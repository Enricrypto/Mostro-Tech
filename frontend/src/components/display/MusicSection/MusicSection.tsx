"use client"

import { useState } from "react"
import { FeatureSongCard } from "@/components/display/FeaturedSong"
import { SongCard } from "@/components/display/SongCard"
import { PerksCard } from "@/components/molecules/PerksCard"
import { UpcomingEvent } from "@/components/display/UpcomingEvent"
import { BadgesRow } from "@/components/dashboard"
import { PlayerCard } from "../PlayerCard"
import { mockArtists } from "@/mocks/mockArtists"
import { mockPerks } from "@/mocks/mockPerks"
import { mockSongData } from "@/mocks/mockSongData"
import { upcomingEvents } from "@/mocks/mockUpcomingEvents"
import { MusicNoteIcon } from "@phosphor-icons/react"

interface SongCardProps {
  songName: string
  subtitle: string
  variant?: "song-play" | "song-unlock"
  unlockAmount?: number
  unlockToken?: string
  avatarUrl?: string
  onPlay?: () => void
}

export const MusicSection = ({
  onClaimAccess
}: {
  onClaimAccess: (title: string, date: string, venue: string) => void
}) => {
  const [currentSong, setCurrentSong] = useState<SongCardProps | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  const handlePlaySong = (song: (typeof mockSongData)[number]) => {
    setCurrentSong({
      songName: song.songName,
      subtitle: song.subtitle,
      variant: song.variant ?? "song-play", // fallback if undefined
      unlockAmount: song.unlockAmount,
      unlockToken: song.unlockToken,
      avatarUrl: song.avatarUrl
    })
    setIsPlaying(true)
    setProgress(0)
  }

  const handlePlayPause = () => setIsPlaying((prev) => !prev)

  const handleNext = () => {
    if (!currentSong) return

    const currentIndex = mockSongData.findIndex(
      (s) => s.songName === currentSong.songName
    )

    const nextIndex = (currentIndex + 1) % mockSongData.length

    const nextSong = mockSongData[nextIndex]

    setCurrentSong({
      ...nextSong,
      unlockAmount: nextSong.unlockAmount
    })

    setProgress(0)
    setIsPlaying(true)
  }

  const handlePrev = () => {
    if (!currentSong) return

    const currentIndex = mockSongData.findIndex(
      (s) => s.songName === currentSong.songName
    )

    const prevIndex =
      (currentIndex - 1 + mockSongData.length) % mockSongData.length

    const prevSong = mockSongData[prevIndex]

    setCurrentSong({
      ...prevSong,
      unlockAmount: prevSong.unlockAmount
    })

    setProgress(0)
    setIsPlaying(true)
  }

  return (
    <div className='flex flex-col items-center gap-20'>
      {/* Music Drops */}
      <section className='relative w-full flex flex-col'>
        <div className='flex gap-4'>
          <MusicNoteIcon size={36} weight='fill' className='text-[#DCFD63]' />
          <h2 className='font-inter font-semibold text-[30px] leading-[36px] text-[#DCFD63]'>
            Music Drops
          </h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-x-[39px] gap-y-[21px] mt-10'>
          {mockArtists.map((artist) => (
            <FeatureSongCard
              key={artist.id}
              artist={artist}
              onPlay={() =>
                handlePlaySong({
                  songName: artist.latestSingle.title,
                  subtitle: artist.latestSingle.duration,
                  variant: "song-play",
                  avatarUrl: artist.image
                })
              }
              isPlaying={
                currentSong?.songName === artist.latestSingle.title && isPlaying
              }
            />
          ))}
        </div>
      </section>

      {/* Fan Perks */}
      <section className='relative w-full mt-20 flex flex-col'>
        <div className='flex'>
          <h2 className='font-inter font-semibold text-[30px] leading-[36px] text-white'>
            Fan Perks
          </h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-x-[39px] gap-y-[29px] mt-10'>
          {mockPerks.map((perk, i) => (
            <PerksCard
              key={i}
              title={perk.title}
              description={perk.description}
              tokenAmount={perk.tokenAmount}
            />
          ))}
        </div>
      </section>

      {/* Featured Tracks + Upcoming Events */}
      <section className='relative w-full mt-20 mb-20'>
        <div className='flex gap-5'>
          {/* Featured Tracks */}
          <div className='flex flex-col gap-6'>
            <h2 className='font-inter font-semibold text-[30px] leading-[36px] text-white'>
              Featured Tracks
            </h2>
            <div className='flex flex-col gap-6 mt-4'>
              {mockSongData.map((song, index) => (
                <SongCard
                  key={index}
                  songName={song.songName}
                  subtitle={song.subtitle}
                  variant={song.variant as "song-play" | "song-unlock"}
                  unlockAmount={song.unlockAmount}
                  unlockToken={song.unlockToken}
                  onPlay={() => handlePlaySong(song)}
                />
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className='flex-1 flex flex-col gap-6'>
            <h2 className='font-inter font-semibold text-[30px] leading-[36px] text-white'>
              Upcoming Events
            </h2>
            <div className='flex flex-col gap-6 mt-4'>
              {upcomingEvents.map((event, index) => (
                <UpcomingEvent
                  key={index}
                  event={event}
                  onClaim={() =>
                    onClaimAccess(
                      event.title,
                      event.date + " at " + event.time,
                      event.location
                    )
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PlayerCard */}
      {currentSong && (
        <div className='fixed bottom-0 left-0 w-full px-6 py-4 z-50 flex justify-center'>
          <PlayerCard
            songName={currentSong.songName}
            songDetails={currentSong.subtitle}
            currentTime='0:00'
            totalTime={currentSong.unlockAmount?.toString() || "3:45"}
            progress={progress}
            avatarUrl={currentSong.avatarUrl}
            isPlaying={isPlaying}
            onPlayPause={handlePlayPause}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        </div>
      )}
    </div>
  )
}
