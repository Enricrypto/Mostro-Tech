"use client"

import { DashBoardStatsCard } from "@/components/molecules/DashBoardStatsCard"
import {
  UsersIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  WalletIcon,
  CodesandboxLogoIcon
} from "@phosphor-icons/react"

export const StatsOverview: React.FC = () => {
  // Placeholder stats data
  const statsData = {
    totalArtists: { value: 247, change: "+12 this week" },
    totalTokensLaunched: { value: 1024, change: "+52 today" },
    proposalsApproved: { value: 512, change: "+30 today" },
    totalMarketCap: { value: "12.4K", change: "+2.1K today" },
    totalFundingRaised: { value: 84, change: "+5 this week" },
    artistHolders: { value: "3.2K", change: "+400 today" }
  }

  // Build card variants dynamically
  const cardVariants = [
    {
      topText: "Total Artists",
      bottomLeftText: statsData.totalArtists.value.toString(),
      bottomRightText: statsData.totalArtists.change,
      icon: <UsersIcon size={16} color='#998CE1' />
    },
    {
      topText: "Total Tokens Launched",
      bottomLeftText: statsData.totalTokensLaunched.value.toString(),
      bottomRightText: statsData.totalTokensLaunched.change,
      icon: <RocketLaunchIcon size={16} color='#DCFD63' />
    },
    {
      topText: "Proposals Approved",
      bottomLeftText: statsData.proposalsApproved.value.toString(),
      bottomRightText: statsData.proposalsApproved.change,
      icon: <CheckCircleIcon size={16} color='#42EE5C' />
    },
    {
      topText: "Total Market Cap",
      bottomLeftText: statsData.totalMarketCap.value.toString(),
      bottomRightText: statsData.totalMarketCap.change,
      icon: <CurrencyDollarIcon size={16} color='#71D6FB' />
    },
    {
      topText: "Total Funding Raised",
      bottomLeftText: statsData.totalFundingRaised.value.toString(),
      bottomRightText: statsData.totalFundingRaised.change,
      icon: <WalletIcon size={16} color='#998CE1' />
    },
    {
      topText: "Artist Holders",
      bottomLeftText: statsData.artistHolders.value.toString(),
      bottomRightText: statsData.artistHolders.change,
      icon: <CodesandboxLogoIcon size={16} color='#998CE1' />
    }
  ]

  return (
    <div className='w-[2440px] h-[128px] flex gap-[8px] p-[8px] bg-white overflow-x-auto'>
      {cardVariants.map((card, index) => (
        <DashBoardStatsCard
          key={index}
          topText={card.topText}
          bottomLeftText={card.bottomLeftText}
          bottomRightText={card.bottomRightText}
          icon={card.icon}
        />
      ))}
    </div>
  )
}
