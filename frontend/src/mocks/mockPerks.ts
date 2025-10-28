export type Perk = {
  id: number
  title: string
  name: string
  tokenAmount: number | string
}

export const mockPerksCombined: Perk[] = [
  {
    id: 1,
    title: "Early Access to New Tracks",
    name: "Luna Eclipse",
    tokenAmount: "$50 USDC / 5,000"
  },
  {
    id: 2,
    title: "Beats Package",
    name: "Atlas Monroe",
    tokenAmount: "$100 USDC / 10,000"
  },
  {
    id: 3,
    title: "Private Production Workshop",
    name: "Liz Cherry",
    tokenAmount: "$200 USDC / 20,000"
  },
  {
    id: 4,
    title: "VIP Backstage Pass",
    name: "Atlas Monroe",
    tokenAmount: "$150 USDC / 15,000"
  },
  {
    id: 5,
    title: "Virtual One on One - 1hr",
    name: "Luna Eclipse",
    tokenAmount: "$300 USDC / 30,000"
  }
]

export const mockPerksLuna: Perk[] = [
  {
    id: 1,
    title: "Early Access to New Tracks",
    name: "Luna Eclipse",
    tokenAmount: "$50 USDC / 5,000"
  },
  {
    id: 2,
    title: "Beats Package",
    name: "Luna Eclipse",
    tokenAmount: "$100 USDC / 10,000"
  },
  {
    id: 3,
    title: "Private Production Workshop",
    name: "Luna Eclipse",
    tokenAmount: "$200 USDC / 20,000"
  },
  {
    id: 4,
    title: "Exclusive Remix Drop",
    name: "Luna Eclipse",
    tokenAmount: "$60 USDC / 6,000"
  },
  {
    id: 5,
    title: "Limited Edition Hoodie",
    name: "Luna Eclipse",
    tokenAmount: "$80 USDC / 8,000"
  },
  {
    id: 6,
    title: "Virtual One on One - 1hr",
    name: "Luna Eclipse",
    tokenAmount: "$300 USDC / 30,000"
  }
]

export const mockPerksAtlas: Perk[] = [
  {
    id: 1,
    title: "European Concert Ticket",
    name: "Atlas Monroe",
    tokenAmount: "$30 USDC / 3,000"
  },
  {
    id: 2,
    title: "Limited Edition T-Shirt",
    name: "Atlas Monroe",
    tokenAmount: "$60 USDC / 6,000"
  },
  {
    id: 3,
    title: "VIP Backstage Pass",
    name: "Atlas Monroe",
    tokenAmount: "$150 USDC / 15,000"
  },
  {
    id: 4,
    title: "Signed Vinyl Record",
    name: "Atlas Monroe",
    tokenAmount: "$100 USDC / 10,000"
  },
  {
    id: 5,
    title: "Exclusive Guitar Tutorial",
    name: "Atlas Monroe",
    tokenAmount: "$200 USDC / 20,000"
  },
  {
    id: 6,
    title: "Private Acoustic Session (30min)",
    name: "Atlas Monroe",
    tokenAmount: "$300 USDC / 30,000"
  }
]

export const mockPerksLiz: Perk[] = [
  {
    id: 1,
    title: "Monthly Community Livestream",
    name: "Liz Cherry",
    tokenAmount: "$80 USDC / 8,000"
  },
  {
    id: 2,
    title: "Virtual One on One - 1hr",
    name: "Liz Cherry",
    tokenAmount: "$300 USDC / 30,000"
  },
  {
    id: 3,
    title: "Exclusive Acoustic Version",
    name: "Liz Cherry",
    tokenAmount: "$50 USDC / 5,000"
  },
  {
    id: 4,
    title: "Signed Polaroid Set",
    name: "Liz Cherry",
    tokenAmount: "$60 USDC / 6,000"
  },
  {
    id: 5,
    title: "Private Listening Session",
    name: "Liz Cherry",
    tokenAmount: "$150 USDC / 15,000"
  },
  {
    id: 6,
    title: "Personalized Song Dedication",
    name: "Liz Cherry",
    tokenAmount: "$200 USDC / 20,000"
  }
]
