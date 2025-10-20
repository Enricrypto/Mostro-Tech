export type Perk = {
  title: string
  description: string
  tokenAmount: number | string
}

export const mockPerks: Perk[] = [
  {
    title: "Early Access",
    description: "Get music before release",
    tokenAmount: 50
  },
  { title: "VIP Chat", description: "Join exclusive chat", tokenAmount: 30 },
  { title: "Merch Discount", description: "Save on merch", tokenAmount: 20 },
  {
    title: "Backstage Pass",
    description: "Access virtual backstage",
    tokenAmount: 100
  },
  { title: "Limited NFT", description: "Claim limited NFT", tokenAmount: 70 },
  { title: "Fan Badge", description: "Special profile badge", tokenAmount: 40 }
]
