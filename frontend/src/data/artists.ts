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

export const artistsData: Artist[] = [
  {
    id: "1",
    name: "The Weeknd",
    image: "/pawel.png",
    latestSingle: {
      title: "Blinding Lights",
      duration: "3:20",
      audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
    }
  },
  {
    id: "2",
    name: "Dua Lipa",
    image: "/avatar1.png",
    latestSingle: {
      title: "Levitating",
      duration: "3:23",
      audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
    }
  },
  {
    id: "3",
    name: "Drake",
    image: "/miracle.png",
    latestSingle: {
      title: "God's Plan",
      duration: "3:19",
      audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
    }
  },
  {
    id: "4",
    name: "Billie Eilish",
    image: "/logo.png",
    latestSingle: {
      title: "Bad Guy",
      duration: "3:14",
      audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
    }
  },
  {
    id: "5",
    name: "Ed Sheeran",
    image: "/pawel.png",
    latestSingle: {
      title: "Shape of You",
      duration: "3:53",
      audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
    }
  }
]

// Fonction utilitaire pour obtenir un artiste par son ID
export const getArtistById = (id: string): Artist | undefined => {
  return artistsData.find(artist => artist.id === id)
}

// Fonction utilitaire pour obtenir un artiste aléatoire
export const getRandomArtist = (): Artist => {
  const randomIndex = Math.floor(Math.random() * artistsData.length)
  return artistsData[randomIndex]
}

// Fonction utilitaire pour obtenir plusieurs artistes
export const getArtists = (count?: number): Artist[] => {
  if (count && count < artistsData.length) {
    return artistsData.slice(0, count)
  }
  return artistsData
}
