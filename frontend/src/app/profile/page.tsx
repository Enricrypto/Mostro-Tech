"use client"

import { useEffect } from "react"
import * as jdenticon from "jdenticon"
import { usePrivy } from "@privy-io/react-auth"
import { useRouter } from "next/navigation"

import { ProfileCard } from "@/components/molecules/ProfileCard"
import { DataBanner } from "@/components/molecules/DataBanner"
import { TokenHoldingsUserCard } from "@/components/molecules/TokenHoldingsUserCard"
import { PerksCard } from "@/components/molecules/PerksCard"
import { VotingHistory } from "@/components/molecules/VotingHisory"
import { LoadingSpinner } from "@/components/atoms/LoadingSpinner"

import { mockPerks } from "@/mocks/mockPerks"
import { mockTokenHoldings } from "@/mocks/mockTokenHoldings"
import { mockVotingHistory } from "@/mocks/mockVotingHistory"
import { mockDataBanner } from "@/mocks/mockDataBanner"

const SectionHeader = ({ title }: { title: string }) => (
  <h2 className='text-white font-semibold text-[30px] leading-9 tracking-[-0.75%]'>
    {title}
  </h2>
)

export default function ProfilePage() {
  const { ready, user } = usePrivy()
  const router = useRouter()

  useEffect(() => {
    if (ready && !user) {
      router.push("/")
    }
  }, [ready, user, router])

  if (!ready || !user) {
    return <LoadingSpinner text='Loading profile...' />
  }

  const getIdenticon = (value: string, size = 80) => {
    const svg = jdenticon.toSvg(value, size)
    return `data:image/svg+xml;base64,${btoa(svg)}`
  }

  const avatarValue =
    user?.wallet?.address || user?.farcaster?.username || "Anonymous"

  return (
    <div className='flex-1 mt-12 flex flex-col items-center w-full px-4'>
      <ProfileCard
        name={user?.farcaster?.username || "Anonymous"}
        walletAddress={user?.wallet?.address || "No wallet"}
        avatarUrl={getIdenticon(avatarValue)}
      />

      {/* Data Banner */}
      <section className='w-full max-w-[1200px] mt-12'>
        <DataBanner {...mockDataBanner} />
      </section>

      {/* Token Holdings */}
      <section className='w-full max-w-[1200px] mt-12'>
        <SectionHeader title='Token Holdings' />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
          {mockTokenHoldings.map((holding) => (
            <TokenHoldingsUserCard
              key={holding.id || holding.userName}
              {...holding}
            />
          ))}
        </div>
      </section>

      {/* Unlocked Perks */}
      <section className='w-full max-w-[1200px] mt-20'>
        <SectionHeader title='Unlocked Perks' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-10'>
          {mockPerks.map((perk) => (
            <PerksCard
              key={perk.id || perk.title}
              {...perk}
              className='w-full'
            />
          ))}
        </div>
      </section>

      {/* Voting History */}
      <section className='w-full max-w-[1200px] mt-20 mb-20'>
        <SectionHeader title='Voting History' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-10'>
          {mockVotingHistory.map((vote) => (
            <VotingHistory key={vote.id || vote.title} {...vote} />
          ))}
        </div>
      </section>
    </div>
  )
}
