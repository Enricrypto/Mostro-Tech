export const mockSongData: {
  songName: string
  subtitle: string
  variant: "song-play" | "song-unlock" // required now
  unlockAmount?: number
  unlockToken?: string
  avatarUrl: string
}[] = [
  {
    songName: "Midnight Dreams",
    subtitle: "Latest Single - 3:45",
    variant: "song-play",
    avatarUrl: "/avatar1.png"
  },
  {
    songName: "Prime Time",
    subtitle: "Latest Single - 4:12",
    variant: "song-play",
    avatarUrl: "/avatar2.png"
  },
  {
    songName: "Cosmic Waves",
    subtitle: "Album Track - 4:12",
    variant: "song-unlock",
    unlockAmount: 5,
    unlockToken: "MLUNA",
    avatarUrl: "/avatar3.png"
  },
  {
    songName: "Electric Nights",
    subtitle: "Exclusive Track - 3:58",
    variant: "song-play",
    avatarUrl: "/avatar4.png"
  },
  {
    songName: "Total Recall",
    subtitle: "Latest Single - 3:45",
    variant: "song-unlock",
    unlockAmount: 3,
    unlockToken: "MLUNA",
    avatarUrl: "/avatar5.png"
  }
]
