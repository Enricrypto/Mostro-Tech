// src/mocks/mockFullArtistData.ts
import type { SocialType } from "@/components/molecules/FullArtistCardProfile"

export const mockFullArtistData: {
  badgeText: string
  genreBadge: string
  artistName: string
  artistDescription: string
  tokenName: string
  tokenPrice: string
  tokenHolders: string
  artistImage?: string
  socials?: SocialType[]
}[] = [
  {
    badgeText: "Top Artist",
    genreBadge: "Indie",
    artistName: "Alice Wonderland",
    artistDescription:
      "Alice is an indie-pop sensation known for her ethereal vocals, dreamy synths, and mesmerizing live performances. Her music blends emotional depth with catchy melodies, captivating audiences around the world.",
    tokenName: "ALICE",
    tokenPrice: "12.34",
    tokenHolders: "1,234",
    artistImage: "/avatar1.png",
    socials: ["instagram", "spotify", "youtube"] as SocialType[]
  },
  {
    badgeText: "Rising Star",
    genreBadge: "Reggae",
    artistName: "Bob Marleyson",
    artistDescription:
      "Bob Marleyson seamlessly fuses reggae and jazz influences to create smooth, soulful tracks that resonate with listeners. His unique sound and lyrical storytelling are earning him a dedicated following across multiple platforms.",
    tokenName: "BOB",
    tokenPrice: "8.91",
    tokenHolders: "987",
    artistImage: "/avatar2.png",
    socials: ["facebook", "twitter", "spotify"] as SocialType[]
  },
  {
    badgeText: "Legend",
    genreBadge: "Pop Rock",
    artistName: "Clara Smith",
    artistDescription:
      "Clara has been topping charts for over a decade with her energetic pop-rock anthems. Known for her powerful vocals and stage presence, she continues to inspire fans worldwide with every new release.",
    tokenName: "CLARA",
    tokenPrice: "23.45",
    tokenHolders: "2,345",
    artistImage: "/avatar3.png",
    socials: ["instagram", "tiktok", "youtube"] as SocialType[]
  }
]
