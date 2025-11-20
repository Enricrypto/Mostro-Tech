"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { FundingOverviewSection } from "@/components/sections/FundingOverviewSection"
import { VotingSection } from "@/components/molecules/VotingSection"
import { ProposalConfirmationModal } from "@/components/utils/Modal/ProposalConfirmationModal"
import { BuyTokenModal } from "@/components/utils/Modal/BuyTokenModal"
import { NotEnoughTokensModal } from "@/components/utils/Modal/NotEnoughTokensModal"
import { Button } from "@/components/atoms/Button"
import { mockFundingOverview } from "@/mocks/mockFundingOverview"
import { mockVotingSection } from "@/mocks/mockVotingSection"
import { ArrowUpRightIcon } from "@phosphor-icons/react"
import { artistsData } from "@/data/artists"
import { PerksCard } from "@/components/molecules/PerksCard"
import {
  mockPerksLuna,
  mockPerksAtlas,
  mockPerksLiz,
  mockPerksCombined
} from "@/mocks/mockPerks"

export default function VotePage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Artist from URL
  const artistSlug = searchParams.get("artist")
  const artist = artistsData.find((a) => a.slug === artistSlug)

  // State
  const [voteType, setVoteType] = useState<"YES" | "NO" | null>(null)
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false)
  const [showNotEnoughTokensModal, setShowNotEnoughTokensModal] =
    useState(false)
  const [selectedTokenName, setSelectedTokenName] = useState<string | null>(
    null
  )

  // Replace with real token check
  const userHasTokens = false

  // Handlers
  const handleVote = (vote: "YES" | "NO") => {
    if (!userHasTokens) {
      setSelectedTokenName(artist?.token?.name || "ARTIST_TOKEN")
      setShowNotEnoughTokensModal(true)
      return
    }
    setVoteType(vote)
  }

  const handleCloseVoteModal = () => setVoteType(null)
  const handleCloseBuyModal = () => setIsBuyModalOpen(false)
  const handleCloseNotEnoughTokensModal = () =>
    setShowNotEnoughTokensModal(false)

  const handleViewOtherProposals = () => {
    handleCloseVoteModal()
    router.push("/vote")
  }

  const handleNavigateBack = () => {
    if (artist) router.push(`/artists/${artist.slug}`)
    else router.push("/all-artists")
  }

  const perksForArtist = artist
    ? artist.name === "Luna Eclipse"
      ? mockPerksLuna
      : artist.name === "Atlas Monroe"
      ? mockPerksAtlas
      : artist.name === "Liz Cherry"
      ? mockPerksLiz
      : mockPerksCombined
    : mockPerksCombined

  return (
    <div className='bg-[#0A111F] flex flex-col w-full items-center px-4'>
      {/* Back Button */}
      <div className='flex justify-start w-full mt-10 max-w-[1200px]'>
        <Button
          variant='text-white-transparent'
          className='flex items-center gap-2'
          icon={<ArrowUpRightIcon size={20} />}
          iconPosition='left'
          onClick={handleNavigateBack}
        >
          Back to Artist
        </Button>
      </div>

      {/* Main Content */}
      <div className='flex flex-col lg:flex-row w-full max-w-[1200px] gap-6 mt-10 mb-20'>
        <div className='flex-1'>
          <FundingOverviewSection {...mockFundingOverview} />
        </div>
        <div>
          <VotingSection
            {...mockVotingSection}
            onVoteYes={() => handleVote("YES")}
            onVoteNo={() => handleVote("NO")}
          />
        </div>
      </div>

      {/* Proposal Perks */}
      <section className='relative w-full max-w-[1200px] mt-5 mb-20 flex flex-col'>
        <div className='flex justify-between items-center'>
          <h2 className='font-semibold text-[30px] leading-9 text-white'>
            Proposal Perks
          </h2>
          {/* <Button variant='continue' onClick={() => setCreatePerkOpen(true)}>
            Create New Fan Perk
          </Button> */}
        </div>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 mt-10'>
          {perksForArtist.map((perk, i) => (
            <PerksCard
              key={i}
              title={perk.title}
              name={perk.name}
              tokenAmount={perk.tokenAmount}
              itemsLeft={127}
              showItemsLeft={true}
            />
          ))}
        </div>
      </section>

      {/* Vote Confirmation Modal */}
      {voteType && (
        <div
          className='fixed inset-0 z-50 bg-black/50 flex items-center justify-center'
          onClick={handleCloseVoteModal}
        >
          <div onClick={(e) => e.stopPropagation()} className='relative'>
            <ProposalConfirmationModal
              vote={voteType}
              title={mockVotingSection.title}
              artist={mockVotingSection.artist}
              onViewOtherProposals={handleViewOtherProposals}
              avatarSrc='/artists/luna-eclipse.png'
            />
          </div>
        </div>
      )}

      {/* Not Enough Tokens Modal */}
      {showNotEnoughTokensModal && selectedTokenName && (
        <NotEnoughTokensModal
          tokenName={selectedTokenName}
          onClose={handleCloseNotEnoughTokensModal}
          onBuy={() => {
            setShowNotEnoughTokensModal(false)
            setIsBuyModalOpen(true)
          }}
        />
      )}

      {/* Buy Token Modal */}
      {isBuyModalOpen && selectedTokenName && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60'>
          <BuyTokenModal
            tokenSymbol={selectedTokenName}
            onClose={handleCloseBuyModal}
            onConfirm={() => {
              console.log("Confirmed purchase for", selectedTokenName)
              setIsBuyModalOpen(false)
            }}
          />
        </div>
      )}
    </div>
  )
}
