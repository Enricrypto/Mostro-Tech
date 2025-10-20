// src/mocks/mockFullArtistData.ts
import type { SocialType } from "@/components/molecules/FullArtistCardProfile"

export const mockFullArtistData: {
  badgeText: string
  artistName: string
  artistHandle: string
  artistDescription: string
  tokenName: string
  tokenPrice: string
  tokenHolders: string
  artistImage?: string
  socials?: SocialType[]
}[] = [
  {
    badgeText: "Top Artist",
    artistName: "Alice Wonderland",
    artistHandle: "@alicew",
    artistDescription:
      "Alice is an indie-pop sensation known for her ethereal vocals and dreamy synths.",
    tokenName: "ALICE",
    tokenPrice: "12.34",
    tokenHolders: "1,234",
    artistImage: "/avatar1.png",
    socials: ["instagram", "spotify", "youtube"] as SocialType[]
  },
  {
    badgeText: "Rising Star",
    artistName: "Bob Marleyson",
    artistHandle: "@bobmarleyson",
    artistDescription:
      "Bob blends reggae and jazz influences to create smooth, soulful tracks.",
    tokenName: "BOB",
    tokenPrice: "8.91",
    tokenHolders: "987",
    artistImage: "/avatar2.png",
    socials: ["facebook", "twitter", "spotify"] as SocialType[]
  },
  {
    badgeText: "Legend",
    artistName: "Clara Smith",
    artistHandle: "@clarasmith",
    artistDescription:
      "Clara has been topping charts for over a decade with her pop-rock anthems.",
    tokenName: "CLARA",
    tokenPrice: "23.45",
    tokenHolders: "2,345",
    artistImage: "/avatar3.png",
    socials: ["instagram", "tiktok", "youtube"] as SocialType[]
  }
]
