"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { FundingOverviewSection } from "@/components/sections/FundingOverviewSection"
import { VotingSection } from "@/components/molecules/VotingSection"
import { ProposalConfirmationModal } from "@/components/utils/Modal/ProposalConfirmationModal"
import { Button } from "@/components/atoms/Button"
import { mockFundingOverview } from "@/mocks/mockFundingOverview"
import { mockVotingSection } from "@/mocks/mockVotingSection"
import { ArrowUpRightIcon } from "@phosphor-icons/react"
import { artistsData } from "@/data/artists"

export default function VotePage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Grab the artist slug from URL (e.g. /vote?artist=luna-eclipse)
  const artistSlug = searchParams.get("artist")

  // Optional: Find the artist object (for safety / display)
  const artist = artistsData.find((a) => a.slug === artistSlug)

  const [voteType, setVoteType] = useState<"YES" | "NO" | null>(null)

  const handleVote = (vote: "YES" | "NO") => setVoteType(vote)
  const handleCloseModal = () => setVoteType(null)
  const handleViewOtherProposals = () => {
    handleCloseModal()
    router.push("/vote")
  }
  // Navigate back to that same artist page
  const handleNavigateBack = () => {
    if (artist) router.push(`/artists/${artist.slug}`)
    else router.push("/all-artists") // fallback
  }

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
        <FundingOverviewSection {...mockFundingOverview} />
        <VotingSection
          {...mockVotingSection}
          onVoteYes={() => handleVote("YES")}
          onVoteNo={() => handleVote("NO")}
        />
      </div>

      {/* Confirmation Modal */}
      {voteType && (
        <div
          className='fixed inset-0 z-50 bg-black/50 flex items-center justify-center'
          onClick={handleCloseModal}
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
    </div>
  )
}
