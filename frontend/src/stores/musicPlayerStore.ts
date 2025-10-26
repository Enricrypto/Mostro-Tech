import { create } from "zustand"

export interface SongData {
  songName: string
  subtitle?: string
  avatarUrl?: string
  audioUrl?: string
  variant?: "song-play" | "song-unlock"
}

interface MusicPlayerState {
  playlist: SongData[] // Current list of songs
  currentSong: SongData | null // Currently playing song
  isPlaying: boolean
  progress: number // 0 - 1
  currentTime: number
  duration: number

  // Actions
  setPlaylist: (songs: SongData[]) => void
  setCurrentSong: (song: SongData) => void
  playPause: () => void
  setProgress: (progress: number) => void
  setCurrentTime: (time: number) => void
  setDuration: (duration: number) => void
  nextSong: () => void
  prevSong: () => void
  closePlayer: () => void
}

export const useMusicPlayerStore = create<MusicPlayerState>((set, get) => ({
  playlist: [],
  currentSong: null,
  isPlaying: false,
  progress: 0,
  currentTime: 0,
  duration: 0,

  setPlaylist: (songs) => set({ playlist: songs }),

  setCurrentSong: (song) =>
    set({ currentSong: song, isPlaying: true, progress: 0 }),

  playPause: () => set((state) => ({ isPlaying: !state.isPlaying })),

  setProgress: (progress) => set({ progress }),

  setCurrentTime: (currentTime) => set({ currentTime }),

  setDuration: (duration) => set({ duration }),

  nextSong: () => {
    const { currentSong, playlist } = get()
    if (!currentSong || playlist.length === 0) return
    const index = playlist.findIndex((s) => s.songName === currentSong.songName)
    const nextIndex = (index + 1) % playlist.length
    set({ currentSong: playlist[nextIndex], isPlaying: true, progress: 0 })
  },

  prevSong: () => {
    const { currentSong, playlist } = get()
    if (!currentSong || playlist.length === 0) return
    const index = playlist.findIndex((s) => s.songName === currentSong.songName)
    const prevIndex = (index - 1 + playlist.length) % playlist.length
    set({ currentSong: playlist[prevIndex], isPlaying: true, progress: 0 })
  },

  closePlayer: () => set({ currentSong: null, isPlaying: false, progress: 0 })
}))
