interface Proposal {
  id: number
  status: "ongoing" | "executed" | "closed"
  title: string
  requestedTokens: number
  yesPercentage?: number
  noPercentage?: number
  badgeText?: string
}

export const mockProposals: Proposal[] = [
  {
    id: 1,
    status: "ongoing",
    title: "Release New Album",
    requestedTokens: 1000,
    yesPercentage: 60,
    noPercentage: 40,
    badgeText: "Ongoing"
  },
  {
    id: 2,
    status: "executed",
    title: "Launch NFT Collection",
    requestedTokens: 500
  },
  {
    id: 3,
    status: "closed",
    title: "Community Event",
    requestedTokens: 200
  },
  {
    id: 4,
    status: "ongoing",
    title: "Merchandise Drop",
    requestedTokens: 750,
    yesPercentage: 75,
    noPercentage: 25,
    badgeText: "Ongoing"
  },
  {
    id: 5,
    status: "executed",
    title: "Music Video Production",
    requestedTokens: 1200
  },
  {
    id: 6,
    status: "closed",
    title: "Fan Meetup",
    requestedTokens: 300
  },
  {
    id: 7,
    status: "ongoing",
    title: "Charity Collaboration",
    requestedTokens: 600,
    yesPercentage: 55,
    noPercentage: 45,
    badgeText: "Ongoing"
  },
  {
    id: 8,
    status: "executed",
    title: "Exclusive NFT Sale",
    requestedTokens: 900
  },
  {
    id: 9,
    status: "closed",
    title: "Soundcheck Live Stream",
    requestedTokens: 150
  }
]
