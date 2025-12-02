"use client"

import { useEffect, useRef, useState } from "react"
import { FeatureSongCard } from "@/components/display/FeaturedSong"
import { SongCard } from "@/components/display/SongCard"
import { PerksCard } from "@/components/molecules/PerksCard"
import { UpcomingEvent } from "@/components/display/UpcomingEvent"
import { PlayerCard } from "@/components/display/PlayerCard"
// import { Button } from "@/components/atoms/Button"
import { CreateFanPerkDialog } from "@/components/molecules/CreateFanPerkDialog"
import {
  mockPerksLuna,
  mockPerksAtlas,
  mockPerksLiz,
  mockPerksCombined
} from "@/mocks/mockPerks"

import { useMusicPlayerStore, SongData } from "@/stores/musicPlayerStore"
import { MusicNoteIcon } from "@phosphor-icons/react"
import { formatTime } from "../../../../utils/formatTime"
import type { Artist } from "@/data/artists"

interface MusicSectionProps {
  artist: Artist
  onClaimAccess: (title: string, date: string, location: string) => void
}

export const MusicSection = ({ artist, onClaimAccess }: MusicSectionProps) => {
  const [isCreatePerkOpen, setCreatePerkOpen] = useState(false)
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
      if (isPlaying) audio.play().catch(() => { })
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
    if (isPlaying) audioRef.current.play().catch(() => { })
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

  const perksForArtist =
    artist.name === "Luna Eclipse"
      ? mockPerksLuna
      : artist.name === "Atlas Monroe"
        ? mockPerksAtlas
        : artist.name === "Liz Cherry"
          ? mockPerksLiz
          : mockPerksCombined

  return (
    <div className='flex flex-col items-center gap-20 w-full max-w-[1200px] mx-auto'>
      {/* About the Artist */}
      <section className='flex flex-col'>
        <h2 className='font-inter font-semibold text-[30px] leading-9 text-white mb-10'>
          About the Artist
        </h2>
        <p className='w-full font-inter font-normal text-[20px] leading-7 text-white'>
          {artist.aboutTheArtist}
        </p>
      </section>

      {/* Music Drops */}
      <section className='relative w-full flex flex-col'>
        <div className='flex flex-col md:flex-row md:gap-4 items-start md:items-center'>
          <div className='flex gap-4 items-center'>
            <MusicNoteIcon
              size={36}
              weight='regular'
              className='text-[#DCFD63]'
            />
            <h2 className='font-inter font-semibold text-[30px] leading-9 text-[#DCFD63]'>
              Music Drops
            </h2>
          </div>

          {/* Move span below on mobile, inline on md+ */}
          <span className='mt-4 md:mt-0 md:ml-2 text-[var(--color-grey)]'>
            Includes Surprise Perk
          </span>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-10 items-stretch'>
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
                showItemsLeft={true} // Display items left badge
              />
            )
          })}
        </div>
      </section>

      {/* Fan Perks */}
      <section className='relative w-full mt-10 flex flex-col'>
        <div className='flex justify-between items-center'>
          <h2 className='font-semibold text-[30px] leading-9 text-white'>
            Fan Perks 
          </h2>
          {/* <Button variant='continue' onClick={() => setCreatePerkOpen(true)}>
            Create New Fan Perk
          </Button> */}
        </div>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 mt-10'>
          {perksForArtist.map((perk, i) => (
            <PerksCard
              key={i}
              title={perk.title}
              name={perk.name}
              showItemsLeft={true}
              itemsLeft={perk.itemsLeft}
              tokenAmount={perk.tokenAmount}
            />
          ))}
        </div>
      </section>

      {/* Featured Tracks + Upcoming Events */}
      <section className='w-full mt-20 mb-20 flex flex-col md:flex-row gap-8 justify-between items-start'>
        {/* Featured Tracks Section */}
        <div className='w-full lg:w-1/2 flex flex-col min-w-0'>
          <h2 className='font-semibold text-2xl sm:text-[28px] lg:text-[30px] leading-7 sm:leading-8 lg:leading-9 text-white mb-6 sm:mb-8 lg:mb-10'>
            Featured Tracks
          </h2>
          <div className='grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6 w-full'>
            {artist.featuredTracks?.map((track, index) => (
              <div key={index} className='w-full'>
                <SongCard
                  songName={track.songName}
                  subtitle={track.subtitle}
                  variant={track.variant}
                  unlockAmount={track.unlockAmount}
                  unlockToken={track.unlockToken}
                  onPlay={() => handlePlaySong(track, "featuredTracks")}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className='w-full lg:w-1/2 flex flex-col mt-8 lg:mt-0 min-w-0'>
          <h2 className='font-semibold text-2xl sm:text-[28px] lg:text-[30px] leading-7 sm:leading-8 lg:leading-9 text-white mb-6 sm:mb-8 lg:mb-10'>
            Upcoming Events
          </h2>
          <div className='flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full'>
            {artist.musicEvents?.map((event, index) => (
              <div key={index} className='w-full lg:scale-95 lg:origin-top'>
                <UpcomingEvent
                  artist={artist}
                  event={event}
                  onClaim={() =>
                    onClaimAccess(event.title, event.date, event.location)
                  }
                  itemsLeft={event.itemsLeft}
                  showItemsLeft={true}
                />
              </div>
            ))}
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
      <CreateFanPerkDialog
        isOpen={isCreatePerkOpen}
        onClose={() => setCreatePerkOpen(false)}
      />
    </div>
  )
}
