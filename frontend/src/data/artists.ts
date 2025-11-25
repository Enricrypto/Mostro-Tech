// src/data/artistsData.ts
import type { SocialType } from "@/components/atoms/Socials/Socials"
import type { ProposalData } from "@/components/sections/ProposalsSection"
import type { EventStatus } from "@/components/display/UpcomingEvent"

// ------------------- Artist Interface -------------------
export interface Artist {
  id: number
  slug: string
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
    itemsLeft?: number // Added for units left
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
    badge: string
    itemsLeft?: number // Added for units left
  }[]
}

// ------------------- Mock Fanbase -------------------
const mockFanbase: { src?: string; initials?: string }[] = [
  { src: "/token-holders/holder-3.jpeg" },
  { src: "/token-holders/holder-2.jpeg" },
  { initials: "AB" },
  { src: "/token-holders/holder-6.jpeg" },
  { initials: "CD" },
  { src: "/avatar4.png" },
  { initials: "DJ" },
  { src: "/token-holders/holder-10.png" },
  { src: "/token-holders/holder-5.jpeg" }
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
    id: 1,
    slug: "luna-eclipse",
    name: "Luna Eclipse",
    image: "/artists/luna-eclipse.png",
    latestSingle: {
      title: "Weekend Glow",
      duration: "1:00",
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
    socials: ["instagram", "twitter", "discord"] as SocialType[],
    leaderboard: [
      {
        rank: 1,
        avatarSrc: "/token-holders/holder-1.jpeg",
        username: "mostrofan.sol",
        score: 10200,
        tokenSymbol: "MLUN"
      },
      {
        rank: 2,
        avatarSrc: "/token-holders/holder-2.jpeg",
        username: "cryptomuse.sol",
        score: 9800,
        tokenSymbol: "MLUN"
      },
      {
        rank: 3,
        avatarSrc: "/token-holders/holder-3.jpeg",
        username: "blockbeatz.sol",
        score: 9200,
        tokenSymbol: "MLUN"
      },
      {
        rank: 4,
        avatarSrc: "/token-holders/holder-4.jpeg",
        username: "synthqueen.sol",
        score: 8900,
        tokenSymbol: "MLUN"
      },
      {
        rank: 5,
        avatarSrc: "/token-holders/holder-5.jpeg",
        username: "djstellar.sol",
        score: 8600,
        tokenSymbol: "MLUN"
      },
      {
        rank: 6,
        avatarSrc: "/token-holders/holder-6.jpeg",
        username: "melodymaker.sol",
        score: 8300,
        tokenSymbol: "MLUN"
      },
      {
        rank: 7,
        avatarSrc: "/token-holders/holder-7.jpeg",
        username: "soundwave.sol",
        score: 8000,
        tokenSymbol: "MLUN"
      },
      {
        rank: 8,
        avatarSrc: "/token-holders/holder-8.jpeg",
        username: "nightpulse.sol",
        score: 7700,
        tokenSymbol: "MLUN"
      },
      {
        rank: 9,
        avatarSrc: "/token-holders/holder-9.jpeg",
        username: "beatdropper.sol",
        score: 7400,
        tokenSymbol: "MLUN"
      },
      {
        rank: 10,
        avatarSrc: "/token-holders/holder-10.png",
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
        status: "on-sale",
        itemsLeft: 100
      },
      {
        title: "Amsterdam Festival",
        date: "2025-12-05",
        time: "18:00",
        location: "Paradiso",
        status: "sold-out",
        itemsLeft: 3
      }
    ],
    proposals: mockProposals,
    musicDrops: [
      {
        title: "Weekend Glow",
        duration: "1:00",
        audioUrl: "/luna-eclipse/songs/weekend-glow.mp3",
        image: "/luna-eclipse/images/weekend-glow.png",
        badge: "$5 USDC = 500 Tokens",
        itemsLeft: 150
      },
      {
        title: "Black Cat",
        duration: "1:00",
        audioUrl: "/luna-eclipse/songs/black-cat.mp3",
        image: "/luna-eclipse/images/black-cat.png",
        badge: "$5 USDC = 500 Tokens",
        itemsLeft: 80
      },
      {
        title: "Neon Bounce",
        duration: "1:00",
        audioUrl: "/luna-eclipse/songs/neon-bounce.mp3",
        image: "/luna-eclipse/images/neon-bounce.png",
        badge: "$5 USDC = 500 Tokens",
        itemsLeft: 250
      },
      {
        title: "Take Back The Night",
        duration: "3:44",
        audioUrl: "/luna-eclipse/songs/take-back-the-night.mp3",
        image: "/luna-eclipse/images/take-back-the-night.png",
        badge: "$5 USDC = 500 Tokens",
        itemsLeft: 120
      },
      {
        title: "Deeper Kind",
        duration: "2:35",
        audioUrl: "/luna-eclipse/songs/deeper-kind.mp3",
        image: "/luna-eclipse/images/deeper-kind.png",
        badge: "$5 USDC = 500 Tokens",
        itemsLeft: 30
      },
      {
        title: "Free to Believe",
        duration: "4:36",
        audioUrl: "/luna-eclipse/songs/free-to-believe.mp3",
        image: "/luna-eclipse/images/free-to-believe.png",
        badge: "$5 USDC = 500 Tokens",
        itemsLeft: 5
      }
    ],
    featuredTracks: [
      {
        songName: "Midnight Dreams",
        subtitle: "Luna Eclipse - 3:15",
        variant: "song-play",
        avatarUrl: "/artists/luna-eclipse.png",
        audioUrl: "/luna-eclipse/songs/midnight-dreams.mp3"
      },
      {
        songName: "Prime Time",
        subtitle: "Luna Eclipse - 3:19",
        variant: "song-play",
        avatarUrl: "/artists/luna-eclipse.png",
        audioUrl: "/luna-eclipse/songs/prime-time.mp3"
      },
      {
        songName: "Cosmic Waves",
        subtitle: "Luna Eclipse - 1:00",
        variant: "song-unlock",
        unlockAmount: 5,
        unlockToken: "MLUNA",
        avatarUrl: "/artists/luna-eclipse.png",
        audioUrl: "/luna-eclipse/songs/cosmic-waves.mp3"
      },
      {
        songName: "Electric Nights",
        subtitle: "Luna Eclipse - 1:00",
        variant: "song-play",
        avatarUrl: "/artists/luna-eclipse.png",
        audioUrl: "/luna-eclipse/songs/electric-nights.mp3"
      },
      {
        songName: "Total Recall",
        subtitle: "Luna Eclipse - 3:03",
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
    id: 2,
    slug: "atlas-monroe",
    name: "Atlas Monroe",
    image: "/artists/atlas-monroe.png",
    latestSingle: {
      title: "Can't Love Her Right",
      duration: "2:27",
      audioUrl: "/atlas-monroe/songs/can't-love-her-right.mp3"
    },
    badgeText: "Upcoming Artist",
    genreBadge: "Rock",
    description:
      "Alt-rock powerhouse merging emotional intensity with anthemic soundscapes. known for electrifying performances and soaring guitar riffs across the US indie circuit.",
    aboutTheArtist:
      "Atlas Monroe is a dynamic alt-rock artist celebrated for merging raw emotional intensity with anthemic soundscapes. Known for electrifying live performances and soaring guitar riffs, Atlas has captivated audiences across the US indie circuit with his music that blends heartfelt lyrics with explosive energy.",
    token: { name: "MATL", price: "8.91", holders: "890" },
    socials: ["instagram", "twitter", "discord"] as SocialType[],
    leaderboard: [
      {
        rank: 1,
        avatarSrc: "/token-holders/holder-1.jpeg",
        username: "mostrofan.sol",
        score: 10200,
        tokenSymbol: "MATL"
      },
      {
        rank: 2,
        avatarSrc: "/token-holders/holder-2.jpeg",
        username: "cryptomuse.sol",
        score: 9800,
        tokenSymbol: "MATL"
      },
      {
        rank: 3,
        avatarSrc: "/token-holders/holder-3.jpeg",
        username: "blockbeatz.sol",
        score: 9200,
        tokenSymbol: "MATL"
      },
      {
        rank: 4,
        avatarSrc: "/token-holders/holder-4.jpeg",
        username: "synthqueen.sol",
        score: 8900,
        tokenSymbol: "MATL"
      },
      {
        rank: 5,
        avatarSrc: "/token-holders/holder-5.jpeg",
        username: "djstellar.sol",
        score: 8600,
        tokenSymbol: "MATL"
      },
      {
        rank: 6,
        avatarSrc: "/token-holders/holder-6.jpeg",
        username: "melodymaker.sol",
        score: 8300,
        tokenSymbol: "MATL"
      },
      {
        rank: 7,
        avatarSrc: "/token-holders/holder-7.jpeg",
        username: "soundwave.sol",
        score: 8000,
        tokenSymbol: "MATL"
      },
      {
        rank: 8,
        avatarSrc: "/token-holders/holder-8.jpeg",
        username: "nightpulse.sol",
        score: 7700,
        tokenSymbol: "MATL"
      },
      {
        rank: 9,
        avatarSrc: "/token-holders/holder-9.jpeg",
        username: "beatdropper.sol",
        score: 7400,
        tokenSymbol: "MATL"
      },
      {
        rank: 10,
        avatarSrc: "/token-holders/holder-10.png",
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
        status: "on-sale",
        itemsLeft: 250
      },
      {
        title: "New York Rooftop Concert",
        date: "2026-03-12",
        time: "20:30",
        location: "Brooklyn Mirage",
        status: "sold-out",
        itemsLeft: 0
      }
    ],
    proposals: mockProposals,
    musicDrops: [
      {
        title: "Can't Love Her Right",
        duration: "2:27",
        audioUrl: "/atlas-monroe/songs/can't-love-her-right.mp3",
        image: "/atlas-monroe/images/can't-love-her-right.jpeg",
        badge: "$5 USDC = 500 Tokens",
        itemsLeft: 200
      },
      {
        title: "Hard To Hold",
        duration: "1:00",
        audioUrl: "/atlas-monroe/songs/hard-to-hold.mp3",
        image: "/atlas-monroe/images/hard-to-hold.jpg",
        badge: "$5 USDC = 500 Tokens",
        itemsLeft: 90
      },
      {
        title: "All About You",
        duration: "1:00",
        audioUrl: "/atlas-monroe/songs/all-about-you.mp3",
        image: "/atlas-monroe/images/all-about-you.jpeg",
        badge: "$5 USDC = 500 Tokens",
        itemsLeft: 300
      },
      {
        title: "Broken Promises",
        duration: "4:21",
        audioUrl: "/atlas-monroe/songs/broken-promises.mp3",
        image: "/atlas-monroe/images/broken-promises.jpeg",
        badge: "$5 USDC = 500 Tokens",
        itemsLeft: 180
      },
      {
        title: "Across the Universe",
        duration: "1:00",
        audioUrl: "/atlas-monroe/songs/across-the-universe.mp3",
        image: "/atlas-monroe/images/across-the-universe.jpeg",
        badge: "$5 USDC = 500 Tokens",
        itemsLeft: 40
      },
      {
        title: "Daisy After Dark",
        duration: "3:15",
        audioUrl: "/atlas-monroe/songs/daisy-after-dark.mp3",
        image: "/atlas-monroe/images/daisy-after-dark.jpeg",
        badge: "$5 USDC = 500 Tokens",
        itemsLeft: 10
      }
    ],
    featuredTracks: [
      {
        songName: "Broken Promises",
        subtitle: "Atlas Monroe - 4:21",
        variant: "song-play",
        avatarUrl: "/atlas-monroe/images/broken-promises.jpeg",
        audioUrl: "/atlas-monroe/songs/broken-promises.mp3"
      },
      {
        songName: "Daisy After Dark",
        subtitle: "Atlas Monroe - 3:15",
        variant: "song-unlock",
        unlockAmount: 3,
        unlockToken: "MATL",
        avatarUrl: "/atlas-monroe/images/daisy-after-dark.jpeg",
        audioUrl: "/atlas-monroe/songs/daisy-after-dark.mp3"
      },
      {
        songName: "Across the Universe",
        subtitle: "Atlas Monroe - 1:00",
        variant: "song-play",
        avatarUrl: "/atlas-monroe/images/across-the-universe.jpeg",
        audioUrl: "/atlas-monroe/songs/across-the-universe.mp3"
      },
      {
        songName: "All About You",
        subtitle: "Atlas Monroe - 1:00",
        variant: "song-unlock",
        unlockAmount: 3,
        unlockToken: "MATL",
        avatarUrl: "/atlas-monroe/images/all-about-you.jpeg",
        audioUrl: "/atlas-monroe/songs/all-about-you.mp3"
      },
      {
        songName: "Hard To Hold",
        subtitle: "Atlas Monroe - 1:00",
        variant: "song-play",
        avatarUrl: "/atlas-monroe/images/hard-to-hold.jpg",
        audioUrl: "/atlas-monroe/songs/hard-to-hold.mp3"
      }
    ]
  },

  // ---------------- Liz Cherry ----------------
  {
    id: 3,
    slug: "liz-cherry",
    name: "Liz Cherry",
    image: "/artists/liz-cherry.png",
    latestSingle: {
      title: "Burning Up",
      duration: "0:00",
      audioUrl: "/liz-cherry/songs/burning-up.mp3"
    },
    badgeText: "Rising Star",
    genreBadge: "R&B",
    description:
      "Hip hop & R&B artist blending soulful vocals with raw lyricism. Redefining authenticity through poetry, rhythm, and empowerment. Celebrated for her magnetic live sessions across the UK.",
    aboutTheArtist:
      "Liz Cherry is an innovative R&B and hip-hop artist who fuses soulful vocals with incisive, heartfelt lyricism. Redefining authenticity through poetry, rhythm, and empowerment, Liz’s performances are magnetic and intimate, leaving a lasting impression on audiences across the UK. Her unique, warm sound dances at the boundaries of contemporary R&B.",
    token: { name: "MLIZ", price: "6.45", holders: "540" },
    socials: ["instagram", "twitter", "discord"] as SocialType[],
    leaderboard: [
      {
        rank: 1,
        avatarSrc: "/token-holders/holder-1.jpeg",
        username: "mostrofan.sol",
        score: 10200,
        tokenSymbol: "MLIZ"
      },
      {
        rank: 2,
        avatarSrc: "/token-holders/holder-2.jpeg",
        username: "cryptomuse.sol",
        score: 9800,
        tokenSymbol: "MLIZ"
      },
      {
        rank: 3,
        avatarSrc: "/token-holders/holder-3.jpeg",
        username: "blockbeatz.sol",
        score: 9200,
        tokenSymbol: "MLIZ"
      },
      {
        rank: 4,
        avatarSrc: "/token-holders/holder-4.jpeg",
        username: "synthqueen.sol",
        score: 8900,
        tokenSymbol: "MLIZ"
      },
      {
        rank: 5,
        avatarSrc: "/token-holders/holder-5.jpeg",
        username: "djstellar.sol",
        score: 8600,
        tokenSymbol: "MLIZ"
      },
      {
        rank: 6,
        avatarSrc: "/token-holders/holder-6.jpeg",
        username: "melodymaker.sol",
        score: 8300,
        tokenSymbol: "MLIZ"
      },
      {
        rank: 7,
        avatarSrc: "/token-holders/holder-7.jpeg",
        username: "soundwave.sol",
        score: 8000,
        tokenSymbol: "MLIZ"
      },
      {
        rank: 8,
        avatarSrc: "/token-holders/holder-8.jpeg",
        username: "nightpulse.sol",
        score: 7700,
        tokenSymbol: "MLIZ"
      },
      {
        rank: 9,
        avatarSrc: "/token-holders/holder-9.jpeg",
        username: "beatdropper.sol",
        score: 7400,
        tokenSymbol: "MLIZ"
      },
      {
        rank: 10,
        avatarSrc: "/token-holders/holder-10.png",
        username: "loopmaster.sol",
        score: 7100,
        tokenSymbol: "MLIZ"
      }
    ],
    fanbase: mockFanbase,
    musicEvents: [
      {
        title: "Paris Jam Session",
        date: "2025-12-20",
        time: "21:30",
        location: "Le Trianon",
        status: "on-sale",
        itemsLeft: 75
      },
      {
        title: "London Underground Show",
        date: "2026-01-10",
        time: "19:00",
        location: "O2 Academy Islington",
        status: "on-sale",
        itemsLeft: 20
      }
    ],
    proposals: mockProposals,
    musicDrops: [
      {
        title: "Burning Up",
        duration: "2:12",
        audioUrl: "/liz-cherry/songs/burning-up.mp3",
        image: "/liz-cherry/images/burning-up.jpg",
        badge: "$5 USDC = 500 Tokens",
        itemsLeft: 250
      },
      {
        title: "Better Be Best",
        duration: "2:05",
        audioUrl: "/liz-cherry/songs/better-be-best.mp3",
        image: "/liz-cherry/images/better-be-best.jpeg",
        badge: "$5 USDC = 500 Tokens",
        itemsLeft: 110
      },
      {
        title: "Bottom Dollar",
        duration: "2:05",
        audioUrl: "/liz-cherry/songs/bottom-dollar.mp3",
        image: "/liz-cherry/images/bottom-dollar.jpg",
        badge: "$5 USDC = 500 Tokens",
        itemsLeft: 300
      },
      {
        title: "Party All Night Long",
        duration: "1:00",
        audioUrl: "/liz-cherry/songs/party-all-night-long.mp3",
        image: "/liz-cherry/images/party-all-night-long.jpeg",
        badge: "$5 USDC = 500 Tokens",
        itemsLeft: 190
      },
      {
        title: "What's The Plan",
        duration: "1:00",
        audioUrl: "/liz-cherry/songs/what's-the-plan.mp3",
        image: "/liz-cherry/images/what's-the-plan.jpeg",
        badge: "$5 USDC = 500 Tokens",
        itemsLeft: 60
      },
      {
        title: "Crown On My Head",
        duration: "3:26",
        audioUrl: "/liz-cherry/songs/crown-on-my-head.mp3",
        image: "/liz-cherry/images/crown-on-my-head.jpeg",
        badge: "$5 USDC = 500 Tokens",
        itemsLeft: 15
      }
    ],
    featuredTracks: [
      {
        songName: "Crown On My Head",
        subtitle: "Liz Cherry - 3:26",
        variant: "song-unlock",
        unlockAmount: 3,
        unlockToken: "MLIZ",
        avatarUrl: "/artists/liz-cherry.png",
        audioUrl: "/liz-cherry/songs/crown-on-my-head.mp3"
      },
      {
        songName: "Better Be Best",
        subtitle: "Liz Cherry - 2:05",
        variant: "song-play",
        avatarUrl: "/artists/liz-cherry.png",
        audioUrl: "/liz-cherry/songs/better-be-best.mp3"
      },
      {
        songName: "Heart First",
        subtitle: "Liz Cherry - 3:28",
        variant: "song-play",
        avatarUrl: "/artists/liz-cherry.png",
        audioUrl: "/liz-cherry/songs/heart-first.mp3"
      },
      {
        songName: "Out Of My Mind",
        subtitle: "Liz Cherry - 1:00",
        variant: "song-play",
        avatarUrl: "/artists/liz-cherry.png",
        audioUrl: "/liz-cherry/songs/out-of-my-mind.mp3"
      },
      {
        songName: "Hidden Treasure",
        subtitle: "Liz Cherry - 2:45",
        variant: "song-unlock",
        unlockAmount: 3,
        unlockToken: "MLIZ",
        avatarUrl: "/artists/liz-cherry.png",
        audioUrl: "/liz-cherry/songs/hidden-treasure.mp3"
      }
    ]
  }
]
