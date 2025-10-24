"use client"

import { useEffect } from "react"
import * as jdenticon from "jdenticon"
import { ArtistProfileCard } from "@/components/molecules/ArtistProfileCard"
import { usePrivy } from "@privy-io/react-auth"
import { useRouter } from "next/navigation"
import { DataBanner } from "@/components/molecules/DataBanner"
import { TokenHoldingsUserCard } from "@/components/molecules/TokenHoldingsUserCard"
import { PerksCard } from "@/components/molecules/PerksCard"
import { VotingHistory } from "@/components/molecules/VotingHisory"
import { LoadingSpinner } from "@/components/atoms/LoadingSpinner"
import { mockPerks } from "@/mocks/mockPerks"
import { mockTokenHoldings } from "@/mocks/mockTokenHoldings"
import { mockVotingHistory } from "@/mocks/mockVotingHistory"
import { mockDataBanner } from "@/mocks/mockDataBanner"

export default function ProfilePage() {
  const { ready, user } = usePrivy()
  const router = useRouter()

  // Only redirect if Privy is ready and user is definitively not logged in
  useEffect(() => {
    if (ready && !user) {
      router.push("/")
    }
  }, [ready, user, router])

  // Show loading spinner until Privy finishes restoring session
  if (!ready || !user) {
    return <LoadingSpinner text='Loading profile...' />
  }

  const getIdenticon = (value: string, size = 80) => {
    const svg = jdenticon.toSvg(value, size)
    return `data:image/svg+xml;base64,${btoa(svg)}`
  }

  return (
    <div className='flex-1 mt-12'>
      <ArtistProfileCard
        name={user?.farcaster?.username || "Anonymous"}
        walletAddress={user?.wallet?.address || "No wallet"}
        avatarUrl={
          user?.wallet?.address
            ? getIdenticon(user.wallet.address)
            : getIdenticon(user?.farcaster?.username || "Anonymous")
        }
      />

      <section>
        <DataBanner
          totalValue={mockDataBanner.totalValue}
          totalArtists={mockDataBanner.totalArtists}
          totalVotes={mockDataBanner.totalVotes}
          totalPerks={mockDataBanner.totalPerks}
        />
      </section>

      <section className='flex justify-center mt-12'>
        <div>
          <h2 className='text-[var(--color-white)] font-semibold text-[30px] leading-[36px] tracking-[-0.75%]'>
            Token Holdings
          </h2>
          <div
            className='w-[1200px] h-[368px] grid grid-cols-3 gap-[24px] mt-10'
            style={{ opacity: 1 }}
          >
            {mockTokenHoldings.map((mock, idx) => (
              <TokenHoldingsUserCard
                key={idx}
                avatarSrc={mock.avatarSrc}
                userName={mock.userName}
                tokenCount={mock.tokenCount}
                badgeText={mock.badgeText}
                leftTopValue={mock.leftTopValue}
                rightTopPerks={mock.rightTopPerks}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className='mt-20'>
          <h2 className='text-[var(--color-white)] font-semibold text-[30px] leading-[36px] tracking-[-0.75%]'>
            Unlocked Perks
          </h2>
          <div className='grid grid-cols-[1fr_1fr] gap-8 mt-10'>
            {mockPerks.map((mock, idx) => (
              <PerksCard
                key={idx}
                title={mock.title}
                description={mock.description}
                tokenAmount={mock.tokenAmount}
                className='w-full'
              />
            ))}
          </div>
        </div>
      </section>

      <div className='mt-20'>
        <h2 className='text-[var(--color-white)] font-semibold text-[30px] leading-[36px] tracking-[-0.75%]'>
          Voting History
        </h2>
        <section>
          <div className='grid grid-cols-[1fr_1fr] gap-8 mt-10 mb-20'>
            {mockVotingHistory.map((mock, idx) => (
              <VotingHistory
                key={idx}
                title={mock.title}
                artist={mock.artist}
                date={mock.date}
                vote={mock.vote}
                status={mock.status}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
