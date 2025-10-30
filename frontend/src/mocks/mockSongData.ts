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
    avatarUrl: "/artists/luna-eclipse.png",
    audioUrl: "/luna-eclipse/songs/midnight-dreams.mp3"
  },
  {
    songName: "Prime Time",
    subtitle: "Luna Eclipse - 4:12",
    variant: "song-play",
    avatarUrl: "/artists/luna-eclipse.png",
    audioUrl: "/luna-eclipse/songs/prime-time.mp3"
  },
  {
    songName: "Cosmic Waves",
    subtitle: "Luna Eclipse - 4:12",
    variant: "song-unlock",
    unlockAmount: 5,
    unlockToken: "MLUNA",
    avatarUrl: "/artists/luna-eclipse.png",
    audioUrl: "/luna-eclipse/songs/cosmic-waves.mp3"
  },
  {
    songName: "Electric Nights",
    subtitle: "Luna Eclipse - 3:58",
    variant: "song-play",
    avatarUrl: "/artists/luna-eclipse.png",
    audioUrl: "/luna-eclipse/songs/electric-nights.mp3"
  },
  {
    songName: "Total Recall",
    subtitle: "Luna Eclipse - 3:45",
    variant: "song-unlock",
    unlockAmount: 3,
    unlockToken: "MLUNA",
    avatarUrl: "/artists/luna-eclipse.png",
    audioUrl: "/luna-eclipse/songs/total-recall.mp3"
  }
]
