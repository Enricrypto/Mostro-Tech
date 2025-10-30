// /src/mocks/mockStatsData.ts
import {
  UsersIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  WalletIcon,
  CodesandboxLogoIcon
} from "@phosphor-icons/react"

export const statsData = {
  totalArtists: {
    value: 247,
    change: "+12 this week",
    icon: <UsersIcon size={16} color='#998CE1' />
  },
  totalMarketCap: {
    value: "2.4M",
    change: "+24% this month",
    icon: <CurrencyDollarIcon size={16} color='#71D6FB' />
  },
  activeHolders: {
    value: "8,423",
    change: "+25 today",
    icon: <CodesandboxLogoIcon size={16} color='#998CE1' />
  },
  totalTokensLaunched: {
    value: 153,
    change: "+12% this week",
    icon: <RocketLaunchIcon size={16} color='#DCFD63' />
  },
  proposalsApproved: {
    value: 97,
    change: "+12% this week",
    icon: <CheckCircleIcon size={16} color='#42EE5C' />
  },
  totalFundingRaised: {
    value: "$32K+",
    change: "+2.4K this week",
    icon: <WalletIcon size={16} color='#998CE1' />
  }
}

// Optional: build array for convenience
export const statsCardVariants = [
  {
    topText: "Total Artists",
    bottomLeftText: statsData.totalArtists.value.toString(),
    bottomRightText: statsData.totalArtists.change,
    icon: statsData.totalArtists.icon
  },
  {
    topText: "Total Market Cap",
    bottomLeftText: statsData.totalMarketCap.value.toString(),
    bottomRightText: statsData.totalMarketCap.change,
    icon: statsData.totalMarketCap.icon
  },
  {
    topText: "Active Holders",
    bottomLeftText: statsData.activeHolders.value.toString(),
    bottomRightText: statsData.activeHolders.change,
    icon: statsData.activeHolders.icon
  },
  {
    topText: "Total Tokens Launched",
    bottomLeftText: statsData.totalTokensLaunched.value.toString(),
    bottomRightText: statsData.totalTokensLaunched.change,
    icon: statsData.totalTokensLaunched.icon
  },
  {
    topText: "Proposals Approved",
    bottomLeftText: statsData.proposalsApproved.value.toString(),
    bottomRightText: statsData.proposalsApproved.change,
    icon: statsData.proposalsApproved.icon
  },
  {
    topText: "Total Funding Raised",
    bottomLeftText: statsData.totalFundingRaised.value.toString(),
    bottomRightText: statsData.totalFundingRaised.change,
    icon: statsData.totalFundingRaised.icon
  }
]
