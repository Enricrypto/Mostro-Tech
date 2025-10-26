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
    status: "ongoing",
    title: "Remix & Collab Series",
    requestedTokens: "8,000 USDC = 643",
    yesPercentage: 83,
    noPercentage: 17,
    badgeText: "Ongoing"
  },
  {
    id: 4,
    status: "executed",
    title: "London Showcase & Livestream 2025",
    requestedTokens: "5,000 USDC = 5,000,000"
  },
  {
    id: 5,
    status: "closed",
    title: "Live Remix Album",
    requestedTokens: "8,000 USDC = 8,000"
  },
  {
    id: 6,
    status: "ongoing",
    title: "Multimedia EP",
    requestedTokens: "12,000 USDC = 964",
    yesPercentage: 78,
    noPercentage: 22,
    badgeText: "Ongoing"
  },
  {
    id: 7,
    status: "executed",
    title: "Nordic Tour 2025",
    requestedTokens: "10,000 USDC = 1,000,000"
  }
]
