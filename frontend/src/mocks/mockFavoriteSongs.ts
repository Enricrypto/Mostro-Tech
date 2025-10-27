export const mockFavoriteSongs: {
  songName: string
  subtitle: string
  variant: "song-play" | "song-unlock"
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
    songName: "Can't Love Her Right",
    subtitle: "Atlas Monroe - 3:58",
    variant: "song-play",
    avatarUrl: "/artists/atlas-monroe.png",
    audioUrl: "/atlas-monroe/songs/can't-love-her-right.mp3"
  },
  {
    songName: "Hard To Hold",
    subtitle: "Atlas Monroe - 3:45",
    variant: "song-play",
    avatarUrl: "/artists/atlas-monroe.png",
    audioUrl: "/atlas-monroe/songs/hard-to-hold.mp3"
  },
  {
    songName: "Total Recall",
    subtitle: "Liz Cherry - 3:45",
    variant: "song-play",
    avatarUrl: "/artists/liz-cherry.png",
    audioUrl: "/liz-cherry/songs/burning-up.mp3"
  },
  {
    songName: "Cosmic Waves",
    subtitle: "Liz Cherry - 4:12",
    variant: "song-play",
    avatarUrl: "/artists/liz-cherry.png",
    audioUrl: "/liz-cherry/songs/better-be-best.mp3"
  }
]
