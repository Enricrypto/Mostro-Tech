"use client"
import { ArtistProfileCard } from "@/components/molecules/ArtistProfileCard"
import { usePrivy } from "@privy-io/react-auth"
import { useRouter } from "next/navigation"
import { DataBanner } from "@/components/molecules/DatasBanner"
import { TokenHoldingsUserCard } from "@/components/molecules/TokenHoldingsUserCard"
// import { useState, useEffect } from "react"
import { PerksCard } from "@/components/molecules/PerksCard"
import { VotingHistory } from "@/components/molecules/VotingHisory"
import { mockPerks } from "@/mocks/mockPerks"
import { mockTokenHoldings } from "@/mocks/mockTokenHoldings"
import { mockVotingHistory } from "@/mocks/mockVotingHistory"

export default function ProfilPage() {
  return (
    <div className='flex-1 mt-12'>
      {/* <ArtistProfileCard
        name={user}
        handle={email}
        walletAddress={wallet}
        avatarUrl={avatar}
        onDisconnect={handleDisconnect}
      /> */}
      <section>
        <DataBanner />
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
            {mockTokenHoldings.map((mockTokenHoldings, idx) => (
              <TokenHoldingsUserCard
                key={idx}
                avatarSrc={mockTokenHoldings.avatarSrc}
                userName={mockTokenHoldings.userName}
                tokenCount={mockTokenHoldings.tokenCount}
                badgeText={mockTokenHoldings.badgeText}
                leftTopValue={mockTokenHoldings.leftTopValue}
                rightTopPerks={mockTokenHoldings.rightTopPerks}
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
            {mockPerks.map((mockPerks, idx) => (
              <PerksCard
                key={idx}
                title={mockPerks.title}
                description={mockPerks.description}
                tokenAmount={mockPerks.tokenAmount}
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
            {mockVotingHistory.map((mockVotingHistory, idx) => (
              <VotingHistory
                key={idx}
                title={mockVotingHistory.title}
                artist={mockVotingHistory.artist}
                date={mockVotingHistory.date}
                vote={mockVotingHistory.vote}
                status={mockVotingHistory.status}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
