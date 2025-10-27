// src/data/artistsData.ts
import type { SocialType } from "@/components/atoms/Socials/Socials"
import type { ProposalData } from "@/components/sections/ProposalsSection"
import type { EventStatus } from "@/components/display/UpcomingEvent"

// ------------------- Artist Interface -------------------
export interface Artist {
  id: string
  name: string
  image: string
  latestSingle: {
    title: string
    duration: string
    audioUrl?: string
  }
  badgeText: string
  genreBadge: string
  description: string
  aboutTheArtist?: string
  token?: {
    name: string
    price: string
    holders: string
  }
  socials?: SocialType[]
  leaderboard?: {
    rank: number
    avatarSrc: string
    username: string
    score: number
    tokenSymbol: string
  }[]
  fanbase?: { src?: string; initials?: string }[]
  musicEvents?: {
    title: string
    date: string
    time: string
    location: string
    status: EventStatus
  }[]
  proposals?: ProposalData[]
  featuredTracks?: {
    songName: string
    subtitle: string
    variant: "song-play" | "song-unlock"
    unlockAmount?: number
    unlockToken?: string
    avatarUrl: string
    audioUrl: string
  }[]
  musicDrops?: {
    title: string
    duration: string
    audioUrl: string
    image: string
  }[]
}

// ------------------- Mock Fanbase -------------------
const mockFanbase: { src?: string; initials?: string }[] = [
  { src: "/pawel.png" },
  { src: "/miracle.png" },
  { initials: "AB" },
  { initials: "TK" },
  { initials: "CD" },
  { src: "/avatar4.png" },
  { initials: "EF" },
  { src: "/avatar6.png" },
  { src: "/avatar6.png" }
]

// Expand to exactly 36 items
while (mockFanbase.length < 36) {
  mockFanbase.push(...mockFanbase.slice(0, 36 - mockFanbase.length))
}

// ------------------- Mock Proposals -------------------
const mockProposals: ProposalData[] = [
  // ---------------- Executed ----------------
  {
    id: 4,
    status: "executed",
    title: "London Showcase & Livestream 2025",
    requestedTokens: "5,000 USDC = 5,000,000"
  },
  {
    id: 7,
    status: "executed",
    title: "Nordic Tour 2025",
    requestedTokens: "10,000 USDC = 1,000,000"
  },

  // ---------------- Closed ----------------
  {
    id: 5,
    status: "closed",
    title: "Live Remix Album",
    requestedTokens: "8,000 USDC = 8,000"
  },

  // ---------------- Ongoing ----------------
  {
    id: 1,
    status: "ongoing",
    title: "European Tour 2026",
    requestedTokens: "10,000 USDC = 803",
    yesPercentage: 77,
    noPercentage: 23,
    badgeText: "Ongoing"
  },
  {
    id: 2,
    status: "ongoing",
    title: "New Album Production",
    requestedTokens: "20,000 USDC = 1606",
    yesPercentage: 75,
    noPercentage: 25,
    badgeText: "Ongoing"
  },
  {
    id: 3,
    status: "ongoing",
    title: "Remix & Collab Series",
    requestedTokens: "8,000 USDC = 643",
    yesPercentage: 83,
    noPercentage: 17,
    badgeText: "Ongoing"
  },
  {
    id: 6,
    status: "ongoing",
    title: "Multimedia EP",
    requestedTokens: "12,000 USDC = 964",
    yesPercentage: 78,
    noPercentage: 22,
    badgeText: "Ongoing"
  }
]

// ------------------- Artists Data -------------------
export const artistsData: Artist[] = [
  // ---------------- Luna Eclipse ----------------
  {
    id: "1",
    name: "Luna Eclipse",
    image: "/artists/luna-eclipse.png",
    latestSingle: {
      title: "Weekend Glow",
      duration: "0:00",
      audioUrl: "/luna-eclipse/songs/weekend-glow.mp3"
    },
    badgeText: "Featured Artist of the Month",
    genreBadge: "Electronic",
    description:
      "Experimental electronic artist and producer pushing boundaries with immersive soundscapes and innovative production techniques. Known for sold-out shows across Europe.",
    aboutTheArtist:
      "Luna Eclipse is a pioneering electronic artist known for pushing the boundaries of sound design and immersive live experiences. With a background in classical music and a passion for technology, Luna creates otherworldly soundscapes that transport audiences to new dimensions. Her unique blend of atmospheric textures and driving rhythms has earned her a devoted following across Europe and beyond.",
    token: {
      name: "MLUN",
      price: "12.34",
      holders: "1.2K"
    },
    socials: ["instagram", "twitter", "youtube"] as SocialType[],
    leaderboard: [
      {
        rank: 1,
        avatarSrc: "/avatar6.png",
        username: "mostrofan.sol",
        score: 10200,
        tokenSymbol: "MLUN"
      },
      {
        rank: 2,
        avatarSrc: "/avatar6.png",
        username: "cryptomuse.sol",
        score: 9800,
        tokenSymbol: "MLUN"
      },
      {
        rank: 3,
        avatarSrc: "/avatar6.png",
        username: "blockbeatz.sol",
        score: 9200,
        tokenSymbol: "MLUN"
      },
      {
        rank: 4,
        avatarSrc: "/avatar6.png",
        username: "synthqueen.sol",
        score: 8900,
        tokenSymbol: "MLUN"
      },
      {
        rank: 5,
        avatarSrc: "/avatar6.png",
        username: "djstellar.sol",
        score: 8600,
        tokenSymbol: "MLUN"
      },
      {
        rank: 6,
        avatarSrc: "/avatar6.png",
        username: "melodymaker.sol",
        score: 8300,
        tokenSymbol: "MLUN"
      },
      {
        rank: 7,
        avatarSrc: "/avatar6.png",
        username: "soundwave.sol",
        score: 8000,
        tokenSymbol: "MLUN"
      },
      {
        rank: 8,
        avatarSrc: "/avatar6.png",
        username: "nightpulse.sol",
        score: 7700,
        tokenSymbol: "MLUN"
      },
      {
        rank: 9,
        avatarSrc: "/avatar6.png",
        username: "beatdropper.sol",
        score: 7400,
        tokenSymbol: "MLUN"
      },
      {
        rank: 10,
        avatarSrc: "/avatar6.png",
        username: "loopmaster.sol",
        score: 7100,
        tokenSymbol: "MLUN"
      }
    ],
    fanbase: mockFanbase,
    musicEvents: [
      {
        title: "Live in Berlin",
        date: "2025-11-15",
        time: "20:00",
        location: "Berghain",
        status: "on-sale"
      },
      {
        title: "Amsterdam Festival",
        date: "2025-12-05",
        time: "18:00",
        location: "Paradiso",
        status: "sold-out"
      }
    ],
    proposals: mockProposals,
    musicDrops: [
      {
        title: "Weekend Glow",
        duration: "0:00",
        audioUrl: "/luna-eclipse/songs/weekend-glow.mp3",
        image: "/luna-eclipse/images/weekend-glow.png"
      },
      {
        title: "Black Cat",
        duration: "0:00",
        audioUrl: "/luna-eclipse/songs/black-cat.mp3",
        image: "/luna-eclipse/images/black-cat.png"
      },
      {
        title: "Neon Bounce",
        duration: "0:00",
        audioUrl: "/luna-eclipse/songs/neon-bounce.mp3",
        image: "/luna-eclipse/images/neon-bounce.png"
      },
      {
        title: "Take Back The Night",
        duration: "0:00",
        audioUrl: "/luna-eclipse/songs/take-back-the-night.mp3",
        image: "/luna-eclipse/images/take-back-the-night.png"
      },
      {
        title: "Deeper Kind",
        duration: "0:00",
        audioUrl: "/luna-eclipse/songs/deeper-kind.mp3",
        image: "/luna-eclipse/images/deeper-kind.png"
      },
      {
        title: "Free to Believe",
        duration: "0:00",
        audioUrl: "/luna-eclipse/songs/free-to-believe.mp3",
        image: "/luna-eclipse/images/free-to-believe.png"
      }
    ],
    featuredTracks: [
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
  },

  // ---------------- Atlas Monroe ----------------
  {
    id: "2",
    name: "Atlas Monroe",
    image: "/artists/atlas-monroe.png",
    latestSingle: {
      title: "Placeholder Song 1",
      duration: "0:00",
      audioUrl: "/placeholder.mp3"
    },
    badgeText: "Upcoming Artist",
    genreBadge: "Rock",
    description:
      "Alt-rock powerhouse merging emotional intensity with anthemic soundscapes. known for electrifying performances and soaring guitar riffs across the US indie circuit.",
    aboutTheArtist:
      "Atlas Monroe is a dynamic alt-rock artist celebrated for merging raw emotional intensity with anthemic soundscapes. Known for electrifying live performances and soaring guitar riffs, Atlas captivates audiences across the US indie circuit. Their music blends heartfelt lyrics with explosive energy, creating an unforgettable experience for every listener.",
    token: { name: "MATL", price: "8.91", holders: "890" },
    socials: ["facebook", "twitter", "spotify"] as SocialType[],
    leaderboard: [
      {
        rank: 1,
        avatarSrc: "/avatar6.png",
        username: "mostrofan.sol",
        score: 10200,
        tokenSymbol: "MATL"
      },
      {
        rank: 2,
        avatarSrc: "/avatar6.png",
        username: "cryptomuse.sol",
        score: 9800,
        tokenSymbol: "MATL"
      },
      {
        rank: 3,
        avatarSrc: "/avatar6.png",
        username: "blockbeatz.sol",
        score: 9200,
        tokenSymbol: "MATL"
      },
      {
        rank: 4,
        avatarSrc: "/avatar6.png",
        username: "synthqueen.sol",
        score: 8900,
        tokenSymbol: "MATL"
      },
      {
        rank: 5,
        avatarSrc: "/avatar6.png",
        username: "djstellar.sol",
        score: 8600,
        tokenSymbol: "MATL"
      },
      {
        rank: 6,
        avatarSrc: "/avatar6.png",
        username: "melodymaker.sol",
        score: 8300,
        tokenSymbol: "MATL"
      },
      {
        rank: 7,
        avatarSrc: "/avatar6.png",
        username: "soundwave.sol",
        score: 8000,
        tokenSymbol: "MATL"
      },
      {
        rank: 8,
        avatarSrc: "/avatar6.png",
        username: "nightpulse.sol",
        score: 7700,
        tokenSymbol: "MATL"
      },
      {
        rank: 9,
        avatarSrc: "/avatar6.png",
        username: "beatdropper.sol",
        score: 7400,
        tokenSymbol: "MATL"
      },
      {
        rank: 10,
        avatarSrc: "/avatar6.png",
        username: "loopmaster.sol",
        score: 7100,
        tokenSymbol: "MATL"
      }
    ],
    fanbase: mockFanbase,
    musicEvents: [
      {
        title: "Tokyo Electronic Night",
        date: "2026-02-05",
        time: "22:00",
        location: "Womb",
        status: "on-sale"
      },
      {
        title: "New York Rooftop Concert",
        date: "2026-03-12",
        time: "20:30",
        location: "Brooklyn Mirage",
        status: "sold-out"
      }
    ],
    proposals: mockProposals,
    musicDrops: [
      {
        title: "Can't Love Her Right",
        duration: "0:00",
        audioUrl: "/atlas-monroe/songs/can't-love-her-right.mp3",
        image: "/atlas-monroe/images/can't-love-her-right.jpeg"
      },
      {
        title: "Hard To Hold",
        duration: "0:00",
        audioUrl: "/atlas-monroe/songs/hard-to-hold.mp3",
        image: "/atlas-monroe/images/hard-to-hold.jpg"
      },
      {
        title: "All About You",
        duration: "0:00",
        audioUrl: "/atlas-monroe/songs/all-about-you.mp3",
        image: "/atlas-monroe/images/all-about-you.jpeg"
      },
      {
        title: "Broken Promises",
        duration: "0:00",
        audioUrl: "/atlas-monroe/songs/broken-promises.mp3",
        image: "/atlas-monroe/images/broken-promises.jpeg"
      },
      {
        title: "Across the Universe",
        duration: "0:00",
        audioUrl: "/atlas-monroe/songs/across-the-universe.mp3",
        image: "/atlas-monroe/images/across-the-universe.jpeg"
      },
      {
        title: "Daisy After Dark",
        duration: "0:00",
        audioUrl: "/atlas-monroe/songs/daisy-after-dark.mp3",
        image: "/atlas-monroe/images/daisy-after-dark.jpeg"
      }
    ],
    featuredTracks: [
      {
        songName: "Broken Promises",
        subtitle: "Atlas Monroe - 3:30",
        variant: "song-play",
        avatarUrl: "/atlas-monroe/songs/broken-promises.jpeg",
        audioUrl: "/atlas-monroe/images/broken-promises.mp3"
      },
      {
        songName: "Daisy After Dark",
        subtitle: "Atlas Monroe - 4:00",
        variant: "song-unlock",
        unlockAmount: 3,
        unlockToken: "MATL",
        avatarUrl: "/atlas-monroe/images/daisy-after-dark.jpeg",
        audioUrl: "/atlas-monroe/songs/daisy-after-dark.mp3"
      },
      {
        songName: "Across the Universe",
        subtitle: "Atlas Monroe - 3:30",
        variant: "song-play",
        avatarUrl: "/atlas-monroe/images/across-the-universe.jpeg",
        audioUrl: "/atlas-monroe/songs/across-the-universe.mp3"
      },
      {
        songName: "All About You",
        subtitle: "Atlas Monroe - 4:00",
        variant: "song-unlock",
        unlockAmount: 3,
        unlockToken: "MATL",
        avatarUrl: "/atlas-monroe/images/all-about-you.jpeg",
        audioUrl: "/atlas-monroe/songs/all-about-you.mp3"
      },
      {
        songName: "Hard To Hold",
        subtitle: "Atlas Monroe - 3:30",
        variant: "song-play",
        avatarUrl: "/atlas-monroe/images/hard-to-hold.jpg",
        audioUrl: "/atlas-monroe/songs/hard-to-hold.mp3"
      }
    ]
  },

  // ---------------- Liz Cherry ----------------
  {
    id: "3",
    name: "Liz Cherry",
    image: "/artists/liz-cherry.png",
    latestSingle: {
      title: "Placeholder Song 1",
      duration: "0:00",
      audioUrl: "/placeholder.mp3"
    },
    badgeText: "Rising Star",
    genreBadge: "R&B",
    description:
      "Hip hop & R&B artist blending soulful vocals with raw lyricism. Redefining authenticity through poetry, rhythm, and empowerment. Celebrated for her magnetic live sessions across the UK.",
    aboutTheArtist:
      "Liz Cherry is an innovative R&B and hip-hop artist who fuses soulful vocals with incisive, heartfelt lyricism. Redefining authenticity through poetry, rhythm, and empowerment, Liz’s performances are magnetic and intimate, leaving a lasting impression on audiences across the UK. Her unique sound pushes the boundaries of contemporary R&B while staying deeply personal and relatable.",
    token: { name: "MLIZ", price: "6.45", holders: "540" },
    socials: ["instagram", "twitter", "youtube"] as SocialType[],
    leaderboard: [
      {
        rank: 1,
        avatarSrc: "/avatar6.png",
        username: "mostrofan.sol",
        score: 10200,
        tokenSymbol: "MLIZ"
      },
      {
        rank: 2,
        avatarSrc: "/avatar6.png",
        username: "cryptomuse.sol",
        score: 9800,
        tokenSymbol: "MLIZ"
      },
      {
        rank: 3,
        avatarSrc: "/avatar6.png",
        username: "blockbeatz.sol",
        score: 9200,
        tokenSymbol: "MLIZ"
      },
      {
        rank: 4,
        avatarSrc: "/avatar6.png",
        username: "synthqueen.sol",
        score: 8900,
        tokenSymbol: "MLIZ"
      },
      {
        rank: 5,
        avatarSrc: "/avatar6.png",
        username: "djstellar.sol",
        score: 8600,
        tokenSymbol: "MLIZ"
      },
      {
        rank: 6,
        avatarSrc: "/avatar6.png",
        username: "melodymaker.sol",
        score: 8300,
        tokenSymbol: "MLIZ"
      },
      {
        rank: 7,
        avatarSrc: "/avatar6.png",
        username: "soundwave.sol",
        score: 8000,
        tokenSymbol: "MLIZ"
      },
      {
        rank: 8,
        avatarSrc: "/avatar6.png",
        username: "nightpulse.sol",
        score: 7700,
        tokenSymbol: "MLIZ"
      },
      {
        rank: 9,
        avatarSrc: "/avatar6.png",
        username: "beatdropper.sol",
        score: 7400,
        tokenSymbol: "MLIZ"
      },
      {
        rank: 10,
        avatarSrc: "/avatar6.png",
        username: "loopmaster.sol",
        score: 7100,
        tokenSymbol: "MLIZ"
      }
    ],
    fanbase: mockFanbase,
    musicEvents: [
      {
        title: "Paris Night Vibes",
        date: "2025-12-20",
        time: "21:30",
        location: "Le Trianon",
        status: "on-sale"
      },
      {
        title: "London Underground Show",
        date: "2026-01-10",
        time: "19:00",
        location: "O2 Academy Islington",
        status: "on-sale"
      }
    ],
    proposals: mockProposals,
    musicDrops: [
      {
        title: "Burning Up",
        duration: "0:00",
        audioUrl: "/liz-cherry/songs/burning-up.mp3",
        image: "/liz-cherry/images/burning-up.jpg"
      },
      {
        title: "Better Be Best",
        duration: "0:00",
        audioUrl: "/liz-cherry/songs/better-be-best.mp3",
        image: "/liz-cherry/images/better-be-best.jpeg"
      },
      {
        title: "Bottom Dollar",
        duration: "0:00",
        audioUrl: "/liz-cherry/songs/bottom-dollar.mp3",
        image: "/liz-cherry/images/bottom-dollar.jpg"
      },
      {
        title: "Party All Night Long",
        duration: "0:00",
        audioUrl: "/liz-cherry/songs/party-all-night-long.mp3",
        image: "/liz-cherry/images/party-all-night-long.jpeg"
      },
      {
        title: "What's The Plan",
        duration: "0:00",
        audioUrl: "/liz-cherry/songs/what's-the-plan.mp3",
        image: "/liz-cherry/images/what's-the-plan.jpeg"
      },
      {
        title: "Crown On My Head",
        duration: "0:00",
        audioUrl: "/liz-cherry/songs/crown-on-my-head.mp3",
        image: "/liz-cherry/images/crown-on-my-head.jpeg"
      }
    ],
    featuredTracks: [
      {
        songName: "Mock Track 1",
        subtitle: "Liz Cherry - 3:30",
        variant: "song-unlock",
        unlockAmount: 3,
        unlockToken: "MLIZ",
        avatarUrl: "/artists/liz-cherry.png",
        audioUrl: "/liz-cherry/songs/crown-on-my-head.mp3"
      },
      {
        songName: "Mock Track 2",
        subtitle: "Liz Cherry - 4:00",
        variant: "song-play",
        avatarUrl: "/artists/liz-cherry.png",
        audioUrl: "/liz-cherry/songs/crown-on-my-head.mp3"
      },
      {
        songName: "Mock Track 2",
        subtitle: "Liz Cherry - 4:00",
        variant: "song-play",
        avatarUrl: "/artists/liz-cherry.png",
        audioUrl: "/liz-cherry/songs/crown-on-my-head.mp3"
      },
      {
        songName: "Mock Track 2",
        subtitle: "Liz Cherry - 4:00",
        variant: "song-play",
        avatarUrl: "/artists/liz-cherry.png",
        audioUrl: "/liz-cherry/songs/crown-on-my-head.mp3"
      },
      {
        songName: "Mock Track 2",
        subtitle: "Liz Cherry - 4:00",
        variant: "song-unlock",
        unlockAmount: 3,
        unlockToken: "MLIZ",
        avatarUrl: "/artists/liz-cherry.png",
        audioUrl: "/liz-cherry/songs/crown-on-my-head.mp3"
      }
    ]
  }
]
