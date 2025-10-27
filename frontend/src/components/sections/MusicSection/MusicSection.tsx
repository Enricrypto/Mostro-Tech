"use client"

import { useEffect, useRef } from "react"
import { FeatureSongCard } from "@/components/display/FeaturedSong"
import { SongCard } from "@/components/display/SongCard"
import { PerksCard } from "@/components/molecules/PerksCard"
import { UpcomingEvent } from "@/components/display/UpcomingEvent"
import { PlayerCard } from "@/components/display/PlayerCard"
import { mockPerks } from "@/mocks/mockPerks"
import { useMusicPlayerStore } from "@/stores/musicPlayerStore"
import { MusicNoteIcon } from "@phosphor-icons/react"
import { formatTime } from "../../../../utils/formatTime"
import type { Artist } from "@/data/artists"

interface MusicSectionProps {
  artist: Artist
  onClaimAccess: (title: string, date: string, location: string) => void
}

export const MusicSection = ({ artist, onClaimAccess }: MusicSectionProps) => {
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

  // Sync audio element with current song
  useEffect(() => {
    if (!audioRef.current) return

    if (currentSong?.audioUrl) {
      audioRef.current.src = currentSong.audioUrl
      audioRef.current.play().catch(() => {})
    } else {
      audioRef.current.pause()
      audioRef.current.src = ""
    }
  }, [currentSong])

  // Sync play/pause
  useEffect(() => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.play().catch(() => {})
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  // Initialize playlist with featuredTracks first
  useEffect(() => {
    if (artist.featuredTracks) setPlaylist(artist.featuredTracks)
  }, [artist.featuredTracks, setPlaylist])

  const handleTimeUpdate = () => {
    if (!audioRef.current) return
    const current = audioRef.current.currentTime
    const dur = audioRef.current.duration || 0
    setCurrentTime(current)
    setProgress(dur ? current / dur : 0)
  }

  const handleSeek = (progressValue: number) => {
    if (!audioRef.current) return
    const dur = audioRef.current.duration || 0
    audioRef.current.currentTime = dur * progressValue
    setProgress(progressValue)
    setCurrentTime(dur * progressValue)
  }

  const handlePlaySong = (song: typeof currentSong) => {
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
          {artist.aboutTheArtist}
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
          {artist.musicDrops?.map((drop, index) => (
            <FeatureSongCard
              key={index}
              musicDrop={drop}
              currentSongName={currentSong?.songName}
              isPlaying={isPlaying}
              onPlay={() =>
                handlePlaySong({
                  songName: drop.title,
                  subtitle: drop.duration,
                  avatarUrl: drop.image,
                  audioUrl: drop.audioUrl,
                  variant: "song-play"
                })
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
              {artist.featuredTracks?.map((track, index) => (
                <SongCard
                  key={index}
                  songName={track.songName}
                  subtitle={track.subtitle}
                  variant={track.variant}
                  unlockAmount={track.unlockAmount}
                  unlockToken={track.unlockToken}
                  onPlay={() => handlePlaySong(track)}
                />
              ))}
            </div>
          </div>

          <div className='flex-1 flex flex-col gap-6'>
            <h2 className='font-inter font-semibold text-[30px] leading-9 text-white'>
              Upcoming Events
            </h2>
            <div className='flex flex-col gap-6 mt-4'>
              {artist.musicEvents?.map((event, index) => (
                <UpcomingEvent
                  key={index}
                  artist={artist}
                  event={event}
                  onClaim={() =>
                    onClaimAccess(event.title, event.date, event.location)
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
