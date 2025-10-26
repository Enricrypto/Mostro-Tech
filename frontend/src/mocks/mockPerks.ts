export type Perk = {
  id: number
  title: string
  description: string
  tokenAmount: number | string
}

export const mockPerks: Perk[] = [
  {
    id: 1,
    title: "Early Access",
    description: "Early Access to New Tracks",
    tokenAmount: "$50 USDC / 5,000 tokens"
  },
  {
    id: 2,
    title: "Beats Package",
    description: "Access to New Music Drops",
    tokenAmount: "$100 USDC / 10,000 tokens"
  },
  {
    id: 3,
    title: "Limited Edition T-Shirt",
    description: "Special Merch",
    tokenAmount: "$60 USDC / 6,000 tokens"
  },
  {
    id: 4,
    title: "European Concert Ticket",
    description: "VIP Access to Concerts",
    tokenAmount: "$30 USDC / 3,000 tokens"
  },
  {
    id: 5,
    title: "Monthly Community Livestream",
    description: "Interactive Connection to Artist",
    tokenAmount: "$80 USDC / 8,000 tokens"
  },
  {
    id: 6,
    title: "Virtual One on One - 1hr",
    description: "Meet and Greet",
    tokenAmount: "$300 USDC / 30,000 tokens"
  }
]
