import { TokenHoldingsUserCardProps } from "@/components/molecules/TokenHoldingsUserCard"

export const mockTokenHoldings: TokenHoldingsUserCardProps[] = [
  {
    id: 1,
    avatarSrc: "/avatar1.png",
    userName: "Alice",
    tokenCount: 1,
    badgeText: "+24%",
    leftTopValue: 1000,
    rightTopPerks: 5
  },
  {
    id: 2,
    avatarSrc: "/avatar2.png",
    userName: "Bob",
    tokenCount: 3,
    badgeText: "+18%",
    leftTopValue: 500,
    rightTopPerks: 2
  },
  {
    id: 3,
    avatarSrc: "/avatar3.png",
    userName: "Charlie",
    tokenCount: 7,
    badgeText: "-34%",
    leftTopValue: 2000,
    rightTopPerks: 8
  },
  {
    id: 4,
    avatarSrc: "/avatar4.png",
    userName: "Dave",
    tokenCount: 2,
    badgeText: "+5%",
    leftTopValue: 800,
    rightTopPerks: 3
  },
  {
    id: 5,
    avatarSrc: "/avatar5.png",
    userName: "Eve",
    tokenCount: 4,
    badgeText: "-3%",
    leftTopValue: 1200,
    rightTopPerks: 6
  },
  {
    id: 6,
    avatarSrc: "/avatar6.png",
    userName: "Frank",
    tokenCount: 5,
    badgeText: "+55%",
    leftTopValue: 1500,
    rightTopPerks: 7
  }
]
