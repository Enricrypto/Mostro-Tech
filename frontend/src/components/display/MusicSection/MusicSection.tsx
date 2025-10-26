"use client"

import { useState, useEffect, useRef } from "react"
import { FeatureSongCard } from "@/components/display/FeaturedSong"
import { SongCard } from "@/components/display/SongCard"
import { PerksCard } from "@/components/molecules/PerksCard"
import { UpcomingEvent } from "@/components/display/UpcomingEvent"
import { PlayerCard } from "../PlayerCard"
import { mockArtists } from "@/mocks/mockArtists"
import { mockPerks } from "@/mocks/mockPerks"
import { mockSongData } from "@/mocks/mockSongData"
import { upcomingEvents } from "@/mocks/mockUpcomingEvents"
import { MusicNoteIcon } from "@phosphor-icons/react"
import { formatTime } from "../../../../utils/formatTime"

// Core song data (used internally, in state, etc.)
export interface SongData {
  songName: string
  subtitle: string
  variant?: "song-play" | "song-unlock"
  unlockAmount?: number
  unlockToken?: string
  avatarUrl?: string
  audioUrl?: string
}

// Used only for components like <SongCard /> or <FeatureSongCard />
export interface SongCardProps extends SongData {
  onPlay?: () => void
}

export const MusicSection = ({
  onClaimAccess
}: {
  onClaimAccess: (title: string, date: string, venue: string) => void
}) => {
  const [currentSong, setCurrentSong] = useState<SongData | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [artistDurations, setArtistDurations] = useState<
    Record<string, string>
  >({})

  const audioRef = useRef<HTMLAudioElement | null>(null)

  // when isPlaying changes, play/pause the real audio element
  useEffect(() => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  // Add getAudioDuration here
  const getAudioDuration = (audioUrl: string): Promise<string> => {
    return new Promise((resolve) => {
      const audio = new Audio(audioUrl)
      audio.addEventListener("loadedmetadata", () => {
        const minutes = Math.floor(audio.duration / 60)
        const seconds = Math.floor(audio.duration % 60)
        const formatted = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
        resolve(formatted)
      })
    })
  }

  // Load actual duration on mount
  useEffect(() => {
    mockArtists.forEach(async (artist) => {
      if (artist.latestSingle.audioUrl) {
        const duration = await getAudioDuration(artist.latestSingle.audioUrl)
        setArtistDurations((prev) => ({ ...prev, [artist.id]: duration }))
      }
    })
  }, [])

  const handleSeek = (progress: number) => {
    if (!audioRef.current) return
    const duration = audioRef.current.duration
    audioRef.current.currentTime = duration * progress // set audio to new time
    setProgress(progress) // update UI immediately
    setCurrentTime(duration * progress)
  }

  // handle song progress
  const handleTimeUpdate = () => {
    if (!audioRef.current) return
    const current = audioRef.current.currentTime
    const duration = audioRef.current.duration || 0

    setCurrentTime(current)
    if (duration && !isNaN(duration)) {
      setProgress(current / duration)
    } else {
      setProgress(0) // fallback to 0 if duration is invalid
    }
  }

  const handlePlaySong = async (song: SongCardProps) => {
    let duration = song.subtitle || "0:00" // fallback if no subtitle

    if (song.audioUrl) {
      duration = await getAudioDuration(song.audioUrl)
    }

    setCurrentSong({
      ...song,
      subtitle: duration,
      variant: song.variant ?? "song-play"
    })

    setIsPlaying(true)
    setProgress(0)

    if (song.audioUrl && audioRef.current) {
      audioRef.current.src = song.audioUrl
      audioRef.current.play()
    }
  }

  const handlePlayPause = () => setIsPlaying((prev) => !prev)

  const handleNext = () => {
    if (!currentSong) return
    const allSongs = [
      ...mockSongData,
      ...mockArtists.map((a) => ({
        songName: a.latestSingle.title,
        subtitle: "0:00",
        avatarUrl: a.image,
        audioUrl: a.latestSingle.audioUrl
      }))
    ]

    const currentIndex = allSongs.findIndex(
      (s) => s.songName === currentSong.songName
    )

    const nextIndex = (currentIndex + 1) % allSongs.length
    setCurrentSong(allSongs[nextIndex])
    setProgress(0)
    setIsPlaying(true)
  }

  const handlePrev = () => {
    if (!currentSong) return
    const allSongs = [
      ...mockSongData,
      ...mockArtists.map((a) => ({
        songName: a.latestSingle.title,
        subtitle: "0:00",
        avatarUrl: a.image,
        audioUrl: a.latestSingle.audioUrl
      }))
    ]

    const currentIndex = allSongs.findIndex(
      (s) => s.songName === currentSong.songName
    )

    const prevIndex = (currentIndex - 1 + allSongs.length) % allSongs.length
    setCurrentSong(allSongs[prevIndex])
    setProgress(0)
    setIsPlaying(true)
  }

  const handleClosePlayer = () => {
    setCurrentSong(null)
    setIsPlaying(false)
  }

  return (
    <div className='flex flex-col items-center gap-20'>
      <section className='flex flex-col gap-[39px] w-full max-w-[1200px] mx-auto py-10'>
        {/* Title */}
        <h2 className='font-inter font-semibold text-[30px] leading-9 text-white'>
          About the Artist
        </h2>

        {/* Description */}
        <p className='w-full font-inter font-normal text-[20px] leading-7 text-white'>
          Luna Eclipse is a pioneering electronic artist known for pushing the
          boundaries of sound design and immersive live experiences. With a
          background in classical music and a passion for technology, Luna
          creates otherworldly soundscapes that transport audiences to new
          dimensions. Her unique blend of atmospheric textures and driving
          rhythms has earned her a devoted following across Europe and beyond.
        </p>
      </section>

      {/* Music Drops */}
      <section className='relative w-full flex flex-col'>
        <div className='flex gap-4'>
          <MusicNoteIcon size={36} weight='fill' className='text-[#DCFD63]' />
          <h2 className='font-inter font-semibold text-[30px] leading-9 text-[#DCFD63]'>
            Music Drops
          </h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-x-[39px] gap-y-[21px] mt-10'>
          {mockArtists.map((artist) => (
            <FeatureSongCard
              key={artist.id}
              artist={{
                ...artist,
                latestSingle: {
                  ...artist.latestSingle,
                  duration: artistDurations[artist.id] || "0:00"
                }
              }}
              onPlay={() =>
                handlePlaySong({
                  songName: artist.latestSingle.title,
                  subtitle: artistDurations[artist.id] || "0:00",
                  avatarUrl: artist.image,
                  audioUrl: artist.latestSingle.audioUrl,
                  variant: "song-play"
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
          <h2 className='font-inter font-semibold text-[30px] leading-9 text-white'>
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
            <h2 className='font-inter font-semibold text-[30px] leading-9 text-white'>
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
            <h2 className='font-inter font-semibold text-[30px] leading-9 text-white'>
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
                      `${event.date} at ${event.time}`,
                      event.location
                    )
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hidden Audio Element */}
      {currentSong && (
        <audio
          ref={audioRef}
          src={currentSong.audioUrl}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleNext}
          onLoadedMetadata={() => {
            if (audioRef.current) {
              setDuration(audioRef.current.duration)
            }
          }}
        />
      )}

      {/* PlayerCard */}
      {currentSong && (
        <div className='fixed bottom-0 left-0 w-full px-6 py-4 z-50 flex justify-center'>
          <PlayerCard
            songName={currentSong.songName}
            songDetails={currentSong.subtitle}
            currentTime={formatTime(currentTime)}
            totalTime={formatTime(duration)}
            progress={progress}
            onSeek={handleSeek}
            avatarUrl={currentSong.avatarUrl}
            isPlaying={isPlaying}
            onPlayPause={handlePlayPause}
            onNext={handleNext}
            onPrev={handlePrev}
            onClose={handleClosePlayer}
          />
        </div>
      )}
    </div>
  )
}
