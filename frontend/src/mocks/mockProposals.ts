interface Proposal {
  id: number
  status: "ongoing" | "executed" | "closed"
  title: string
  requestedTokens: string
  yesPercentage?: number
  noPercentage?: number
  badgeText?: string
}

export const mockProposals: Proposal[] = [
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
    status: "closed",
    title: "Community Event",
    requestedTokens: "2,490 USDC = 200 tokens"
  },
  {
    id: 4,
    status: "ongoing",
    title: "Remix & Collab Series",
    requestedTokens: "8,000 USDC = 643",
    yesPercentage: 83,
    noPercentage: 17,
    badgeText: "Ongoing"
  },
  {
    id: 5,
    status: "executed",
    title: "Music Video Production",
    requestedTokens: "14,940 USDC = 1,200 tokens"
  },
  {
    id: 6,
    status: "closed",
    title: "Fan Meetup",
    requestedTokens: "3,735 USDC = 300 tokens"
  },
  {
    id: 7,
    status: "ongoing",
    title: "Multimedia EP",
    requestedTokens: "12,000 USDC = 964 tokens",
    yesPercentage: 78,
    noPercentage: 22,
    badgeText: "Ongoing"
  },
  {
    id: 8,
    status: "executed",
    title: "Exclusive NFT Sale",
    requestedTokens: "11,205 USDC = 900 tokens"
  },
  {
    id: 9,
    status: "closed",
    title: "Soundcheck Live Stream",
    requestedTokens: "1,868 USDC = 150 tokens"
  }
]
