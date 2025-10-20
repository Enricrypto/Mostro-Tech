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
    image: "/avatar4.png",
    latestSingle: {
      title: "Nebula Dreams",
      duration: "3:45",
      audioUrl: "/audio/nebula-dreams.mp3"
    }
  },
  {
    id: "2",
    name: "Solar Pulse",
    image: "/avatar5.png",
    latestSingle: {
      title: "Photon Rush",
      duration: "4:12",
      audioUrl: "/audio/photon-rush.mp3"
    }
  },
  {
    id: "3",
    name: "Aurora Wave",
    image: "/avatar6.png",
    latestSingle: {
      title: "Polar Lights",
      duration: "3:58",
      audioUrl: "/audio/polar-lights.mp3"
    }
  },
  {
    id: "4",
    name: "Nebula Drift",
    image: "/avatar1.png",
    latestSingle: {
      title: "Cosmic Flow",
      duration: "4:05",
      audioUrl: "/audio/cosmic-flow.mp3"
    }
  },
  {
    id: "5",
    name: "Orbit Echo",
    image: "/avatar2.png",
    latestSingle: {
      title: "Gravity Pulse",
      duration: "3:50",
      audioUrl: "/audio/gravity-pulse.mp3"
    }
  },
  {
    id: "6",
    name: "Stellar Ray",
    image: "/avatar3.png",
    latestSingle: {
      title: "Lightwave",
      duration: "4:20",
      audioUrl: "/audio/lightwave.mp3"
    }
  }
]
