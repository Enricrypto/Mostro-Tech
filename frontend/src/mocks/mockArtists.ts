export type Artist = {
  id: string
  name: string
  image: string
  latestSingle: {
    title: string
    duration: string
    audioUrl?: string
  }
}

export const mockArtists: Artist[] = [
  {
    id: "1",
    name: "Luna Eclipse",
    image: "/luna-eclipse/images/weekend-glow.png",
    latestSingle: {
      title: "Weekend Glow",
      duration: "0:00",
      audioUrl: "/luna-eclipse/songs/weekend-glow.mp3"
    }
  },
  {
    id: "2",
    name: "Luna Eclipse",
    image: "/luna-eclipse/images/black-cat.png",
    latestSingle: {
      title: "Black Cat",
      duration: "0:00",
      audioUrl: "/luna-eclipse/songs/black-cat.mp3"
    }
  },
  {
    id: "3",
    name: "Luna Eclipse",
    image: "/luna-eclipse/images/neon-bounce.png",
    latestSingle: {
      title: "Neon Bounce",
      duration: "0:00",
      audioUrl: "/luna-eclipse/songs/neon-bounce.mp3"
    }
  },
  {
    id: "4",
    name: "Luna Eclipse",
    image: "/luna-eclipse/images/take-back-the-night.png",
    latestSingle: {
      title: "Take Back The Night",
      duration: "0:00",
      audioUrl: "/luna-eclipse/songs/take-back-the-night.mp3"
    }
  },
  {
    id: "5",
    name: "Luna Eclipse",
    image: "/luna-eclipse/images/deeper-kind.png",
    latestSingle: {
      title: "Deeper Kind",
      duration: "0:00",
      audioUrl: "/luna-eclipse/songs/deeper-kind.mp3"
    }
  },
  {
    id: "6",
    name: "Luna Eclipse",
    image: "/luna-eclipse/images/free-to-believe.png",
    latestSingle: {
      title: "Free to Believe",
      duration: "0:00",
      audioUrl: "/luna-eclipse/songs/free-to-believe.mp3"
    }
  }
]
