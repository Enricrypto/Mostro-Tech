"use client"

import { useEffect, useRef } from "react"
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
import { useMusicPlayerStore } from "@/stores/musicPlayerStore"

export const MusicSection = ({
  onClaimAccess
}: {
  onClaimAccess: (title: string, date: string, venue: string) => void
}) => {
  const {
    currentSong,
    isPlaying,
    progress,
    currentTime,
    duration,
    setCurrentSong,
    playPause,
    setProgress,
    setCurrentTime,
    setDuration,
    nextSong,
    prevSong,
    closePlayer,
    setPlaylist
  } = useMusicPlayerStore()

  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Auto-play/pause and handle new song
  useEffect(() => {
    if (!audioRef.current) return

    if (currentSong?.audioUrl) {
      audioRef.current.src = currentSong.audioUrl
      audioRef.current.play().catch(() => {
        // Handle autoplay restrictions
      })
    } else if (!currentSong) {
      audioRef.current.pause()
      audioRef.current.src = ""
    }
  }, [currentSong])

  // Initialize playlist
  useEffect(() => {
    const playlist = [
      ...mockSongData,
      ...mockArtists.map((a) => ({
        songName: a.latestSingle.title,
        subtitle: a.latestSingle.duration || "0:00",
        avatarUrl: a.image,
        audioUrl: a.latestSingle.audioUrl
      }))
    ]
    setPlaylist(playlist)
  }, [setPlaylist])

  // Update progress
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

  const handlePlaySong = (song: typeof currentSong | null) => {
    if (!song) return
    setCurrentSong(song)
    setProgress(0)
    if (song.audioUrl && audioRef.current) {
      audioRef.current.src = song.audioUrl
      audioRef.current.play()
    }
  }

  return (
    <div className='flex flex-col items-center gap-20'>
      {/* About the Artist */}
      <section className='flex flex-col gap-[39px] w-full max-w-[1200px] mx-auto py-10'>
        <h2 className='font-inter font-semibold text-[30px] leading-9 text-white'>
          About the Artist
        </h2>
        <p className='w-full font-inter font-normal text-[20px] leading-7 text-white'>
          Luna Eclipse is a pioneering electronic artist and producer known for
          pushing the boundaries of sound design and immersive live experiences.
          With a background in classical music and a passion for technology,
          Luna creates otherworldly soundscapes that transport audiences to new
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
                  ...artist.latestSingle
                }
              }}
              onPlay={() =>
                handlePlaySong({
                  songName: artist.latestSingle.title,
                  subtitle: artist.latestSingle.duration || "0:00",
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
        <h2 className='font-inter font-semibold text-[30px] leading-9 text-white'>
          Fan Perks
        </h2>
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
          onEnded={() => nextSong()}
          onLoadedMetadata={() => {
            if (audioRef.current) setDuration(audioRef.current.duration)
          }}
        />
      )}

      {/* PlayerCard */}
      {currentSong && (
        <div className='fixed bottom-0 left-0 w-full px-6 py-4 z-50 flex justify-center'>
          <PlayerCard
            songName={currentSong.songName}
            songDetails={currentSong.subtitle || "0:00"} // fallback if undefined
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
