import type { ArtistProfileBannerProps } from "../components/molecules/ArtistProfileBanner"

export const bannerPropsData: ArtistProfileBannerProps[] &
  { latestSong: { title: string; artist: string } }[] = [
  {
    artistName: "Jane Doe",
    description: "Music innovator and blockchain enthusiast.",
    tokenHolders: "12.3K",
    marketCap: "$1.2M",
    followers: "8.7K",
    avatarSrc: "/avatar1.png",
    genreBadge: "Experimental",
    verifiedBadge: "Jazz",
    variant: "default",
    latestSong: { title: "Song 1", artist: "Jane Doe" } // <-- add this
  },
  {
    artistName: "John Smith",
    description: "Electronic music producer and NFT collector.",
    tokenHolders: "8.9K",
    marketCap: "$950K",
    followers: "5.4K",
    avatarSrc: "/avatar2.png",
    genreBadge: "Electronic",
    verifiedBadge: "Rock",
    variant: "purple",
    latestSong: { title: "Song 2", artist: "John Smith" }
  },
  {
    artistName: "Alice Johnson",
    description: "Hip-hop artist building a decentralized fan platform.",
    tokenHolders: "15.1K",
    marketCap: "$2.3M",
    followers: "10.2K",
    avatarSrc: "/avatar3.png",
    genreBadge: "Hip-Hop",
    verifiedBadge: "Pop",
    variant: "red",
    latestSong: { title: "Song 3", artist: "Alice Johnson" }
  }
]
