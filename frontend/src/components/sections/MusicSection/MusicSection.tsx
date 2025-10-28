"use client"

import { useEffect, useRef } from "react"
import { FeatureSongCard } from "@/components/display/FeaturedSong"
import { SongCard } from "@/components/display/SongCard"
import { PerksCard } from "@/components/molecules/PerksCard"
import { UpcomingEvent } from "@/components/display/UpcomingEvent"
import { PlayerCard } from "@/components/display/PlayerCard"
import { mockPerks } from "@/mocks/mockPerks"
import { useMusicPlayerStore, SongData } from "@/stores/musicPlayerStore"
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

  // Play a song and set the corresponding playlist
  const handlePlaySong = (
    song: SongData,
    section: "musicDrops" | "featuredTracks"
  ) => {
    if (!song) return

    let playlist: SongData[] = []

    if (section === "musicDrops" && artist.musicDrops) {
      playlist = artist.musicDrops.map((drop) => ({
        songName: drop.title,
        subtitle: drop.duration,
        avatarUrl: drop.image,
        audioUrl: drop.audioUrl,
        variant: "song-play"
      }))
    } else if (section === "featuredTracks" && artist.featuredTracks) {
      playlist = artist.featuredTracks.map((track) => ({
        songName: track.songName,
        subtitle: track.subtitle,
        avatarUrl: track.avatarUrl,
        audioUrl: track.audioUrl,
        variant: track.variant
      }))
    }

    setPlaylist(playlist)
    setCurrentSong(song)
    setProgress(0)
    setCurrentTime(0)
  }

  // Sync audio element with current song
  useEffect(() => {
    if (!currentSong || !audioRef.current) return

    const audio = audioRef.current
    audio.src = currentSong.audioUrl || ""
    audio.currentTime = 0

    const handleCanPlay = () => {
      if (isPlaying) audio.play().catch(() => {})
    }

    const handleEnded = () => nextSong()

    const handleLoadedMetadata = () => setDuration(audio.duration)

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
      setProgress(audio.duration ? audio.currentTime / audio.duration : 0)
    }

    audio.addEventListener("canplay", handleCanPlay)
    audio.addEventListener("ended", handleEnded)
    audio.addEventListener("loadedmetadata", handleLoadedMetadata)
    audio.addEventListener("timeupdate", handleTimeUpdate)

    return () => {
      audio.pause()
      audio.removeEventListener("canplay", handleCanPlay)
      audio.removeEventListener("ended", handleEnded)
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata)
      audio.removeEventListener("timeupdate", handleTimeUpdate)
    }
  }, [
    currentSong,
    isPlaying,
    nextSong,
    setCurrentTime,
    setProgress,
    setDuration
  ])

  // Sync play/pause
  useEffect(() => {
    if (!audioRef.current) return
    if (isPlaying) audioRef.current.play().catch(() => {})
    else audioRef.current.pause()
  }, [isPlaying])

  // Seek
  const handleSeek = (progressValue: number) => {
    if (!audioRef.current) return
    const audio = audioRef.current
    const newTime = (audio.duration || 0) * progressValue
    audio.currentTime = newTime
    setCurrentTime(newTime)
    setProgress(progressValue)
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
          {artist.musicDrops?.map((drop, index) => {
            const song: SongData = {
              songName: drop.title,
              subtitle: drop.duration,
              avatarUrl: drop.image,
              audioUrl: drop.audioUrl,
              variant: "song-play"
            }

            return (
              <FeatureSongCard
                key={index}
                musicDrop={drop}
                currentSongName={currentSong?.songName}
                isPlaying={isPlaying}
                onPlay={() => handlePlaySong(song, "musicDrops")}
              />
            )
          })}
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
                  onPlay={() => handlePlaySong(track, "featuredTracks")}
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
      <audio ref={audioRef} className='hidden' />

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
