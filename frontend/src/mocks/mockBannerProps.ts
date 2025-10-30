import type { ArtistProfileBannerProps } from "../components/molecules/ArtistProfileBanner"

export const bannerPropsData: ArtistProfileBannerProps[] &
  { latestSong: { title: string; artist: string; audioUrl: string } }[] = [
  {
    slug: "luna-eclipse",
    artistName: "Luna Eclipse",
    description:
      "Experimental electronic artist and producer pushing boundaries with immersive soundscapes and innovative production techniques. Known for sold-out shows across Europe.",
    tokenHolders: "12.3K",
    marketCap: "$1.2M",
    followers: "8.7K",
    avatarSrc: "/artists/luna-eclipse.png",
    genreBadge: "Immersive",
    verifiedBadge: "Electronic",
    variant: "default",
    latestSong: {
      title: "Weekend Glow",
      artist: "Luna Eclipse",
      audioUrl: "/luna-eclipse/songs/weekend-glow.mp3"
    }
  },
  {
    slug: "atlas-monroe",
    artistName: "Atlas Monroe",
    description:
      "Alt-rock powerhouse merging emotional intensity with anthemic soundscapes. Known for electrifying performances and soaring guitar riffs across the US indie circuit.",
    tokenHolders: "8.9K",
    marketCap: "$950K",
    followers: "5.4K",
    avatarSrc: "/artists/atlas-monroe.png",
    genreBadge: "Anthemic",
    verifiedBadge: "Rock",
    variant: "purple",
    latestSong: {
      title: "Can't Love Her Right",
      artist: "Atlas Monroe",
      audioUrl: "/atlas-monroe/songs/can't-love-her-right.mp3"
    }
  },
  {
    slug: "liz-cherry",
    artistName: "Liz Cherry",
    description:
      "Hip hop & R&B artist blending soulful vocals with raw lyricism. Redefining authenticity through poetry, rhythm, and empowerment. Celebrated for her magnetic live sessions across the UK.",
    tokenHolders: "15.1K",
    marketCap: "$2.3M",
    followers: "10.2K",
    avatarSrc: "/artists/liz-cherry.png",
    genreBadge: "Soulful",
    verifiedBadge: "R&B",
    variant: "red",
    latestSong: {
      title: "Burning Up",
      artist: "Liz Cherry",
      audioUrl: "/liz-cherry/songs/burning-up.mp3"
    }
  }
]
