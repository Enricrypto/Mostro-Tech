export const mockSongData: {
  songName: string
  subtitle: string
  variant: "song-play" | "song-unlock" // required now
  unlockAmount?: number
  unlockToken?: string
  avatarUrl: string
}[] = [
  {
    songName: "Sunrise",
    subtitle: "Latest Single - 3:45",
    variant: "song-play",
    avatarUrl: "/avatar1.png"
  },
  {
    songName: "Moonlight",
    subtitle: "Hit Track - 4:12",
    variant: "song-play",
    avatarUrl: "/avatar2.png"
  },
  {
    songName: "Starlight",
    subtitle: "Exclusive - 5:01",
    variant: "song-unlock",
    unlockAmount: 5,
    unlockToken: "MUS",
    avatarUrl: "/avatar3.png"
  },
  {
    songName: "Echoes",
    subtitle: "New Release - 3:30",
    variant: "song-play",
    avatarUrl: "/avatar4.png"
  },
  {
    songName: "Waves",
    subtitle: "Premium Track - 4:00",
    variant: "song-unlock",
    unlockAmount: 3,
    unlockToken: "MUS",
    avatarUrl: "/avatar5.png"
  }
]
