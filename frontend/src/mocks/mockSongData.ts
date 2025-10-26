export const mockSongData: {
  songName: string
  subtitle: string
  variant: "song-play" | "song-unlock" // required now
  unlockAmount?: number
  unlockToken?: string
  avatarUrl: string
  audioUrl: string
}[] = [
  {
    songName: "Midnight Dreams",
    subtitle: "Luna Eclipse - 3:45",
    variant: "song-play",
    avatarUrl: "/avatar1.png",
    audioUrl: "/midnight-dreams.mp3"
  },
  {
    songName: "Prime Time",
    subtitle: "Luna Eclipse - 4:12",
    variant: "song-play",
    avatarUrl: "/avatar1.png",
    audioUrl: "/prime-time.mp3"
  },
  {
    songName: "Cosmic Waves",
    subtitle: "Luna Eclipse - 4:12",
    variant: "song-unlock",
    unlockAmount: 5,
    unlockToken: "MLUNA",
    avatarUrl: "/avatar1.png",
    audioUrl: "/cosmic-waves.mp3"
  },
  {
    songName: "Electric Nights",
    subtitle: "Luna Eclipse - 3:58",
    variant: "song-play",
    avatarUrl: "/avatar1.png",
    audioUrl: "/electric-nights.mp3"
  },
  {
    songName: "Total Recall",
    subtitle: "Luna Eclipse - 3:45",
    variant: "song-unlock",
    unlockAmount: 3,
    unlockToken: "MLUNA",
    avatarUrl: "/avatar1.png",
    audioUrl: "/total-recall.mp3"
  }
]
