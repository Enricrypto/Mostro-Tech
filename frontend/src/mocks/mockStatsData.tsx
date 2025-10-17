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
  totalTokensLaunched: {
    value: 1024,
    change: "+52 today",
    icon: <RocketLaunchIcon size={16} color='#DCFD63' />
  },
  proposalsApproved: {
    value: 512,
    change: "+30 today",
    icon: <CheckCircleIcon size={16} color='#42EE5C' />
  },
  totalMarketCap: {
    value: "12.4K",
    change: "+2.1K today",
    icon: <CurrencyDollarIcon size={16} color='#71D6FB' />
  },
  totalFundingRaised: {
    value: 84,
    change: "+5 this week",
    icon: <WalletIcon size={16} color='#998CE1' />
  },
  artistHolders: {
    value: "3.2K",
    change: "+400 today",
    icon: <CodesandboxLogoIcon size={16} color='#998CE1' />
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
    topText: "Total Market Cap",
    bottomLeftText: statsData.totalMarketCap.value.toString(),
    bottomRightText: statsData.totalMarketCap.change,
    icon: statsData.totalMarketCap.icon
  },
  {
    topText: "Total Funding Raised",
    bottomLeftText: statsData.totalFundingRaised.value.toString(),
    bottomRightText: statsData.totalFundingRaised.change,
    icon: statsData.totalFundingRaised.icon
  },
  {
    topText: "Artist Holders",
    bottomLeftText: statsData.artistHolders.value.toString(),
    bottomRightText: statsData.artistHolders.change,
    icon: statsData.artistHolders.icon
  }
]
