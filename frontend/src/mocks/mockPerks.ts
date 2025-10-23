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
    description: "Get music before release",
    tokenAmount: 50
  },
  {  id: 2, title: "VIP Chat", description: "Join exclusive chat", tokenAmount: 30 },
  {  id: 3, title: "Merch Discount", description: "Save on merch", tokenAmount: 20 },
  {
    id: 4, title: "Backstage Pass",
    description: "Access virtual backstage",
    tokenAmount: 100
  },
  { id: 5,title: "Limited NFT", description: "Claim limited NFT", tokenAmount: 70 },
  { id: 6,title: "Fan Badge", description: "Special profile badge", tokenAmount: 40 }
]
