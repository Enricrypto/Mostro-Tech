"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { FundingOverviewSection } from "@/components/molecules/FundingOverviewSection"
import { VotingSection } from "@/components/molecules/VotingSection"
import { ProposalConfirmationModal } from "@/components/utils/Modal/ProposalConfirmationModal"
import { Button } from "@/components/atoms/Button"
import { mockFundingOverview } from "@/mocks/mockFundingOverview"
import { mockVotingSection } from "@/mocks/mockVotingSection"
import { ArrowUpRightIcon } from "@phosphor-icons/react"

export default function VotePage() {
  const [showModal, setShowModal] = useState(false)
  const [voteType, setVoteType] = useState<"YES" | "NO" | null>(null)

  const handleVote = (vote: "YES" | "NO") => {
    setVoteType(vote)
    setShowModal(true)
  }

  const handleViewOtherProposals = () => {
    setShowModal(false)
    setVoteType(null)
    // optionally navigate to other proposals
  }

  const router = useRouter()

  const handleNavigate = () => {
    router.push("/artists")
  }

  return (
    <div className='bg-[#0A111F] flex flex-col w-full items-center'>
      <div className='flex justify-start w-full mt-10'>
        <Button
          variant='text-white-transparent'
          className='flex items-center justify-center gap-2'
          icon={<ArrowUpRightIcon size={20} />}
          iconPosition='left'
          onClick={handleNavigate}
        >
          Back to Artist
        </Button>
      </div>
      <div className='flex w-[1200px] h-[776px] gap-[24px] mt-10 mb-20'>
        <FundingOverviewSection {...mockFundingOverview} />
        <VotingSection
          {...mockVotingSection}
          onVoteYes={() => handleVote("YES")}
          onVoteNo={() => handleVote("NO")}
        />
      </div>

      {showModal && voteType && (
        <div
          className='fixed inset-0 z-50 bg-black/50 flex items-center justify-center'
          onClick={() => setShowModal(false)} // click outside closes modal
        >
          <div
            onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside modal
            className='relative'
          >
            <ProposalConfirmationModal
              vote={voteType}
              voterName='Your Name'
              voterSubtext='Fan Club Member'
              onViewOtherProposals={handleViewOtherProposals}
              avatarSrc='/avatar1.png'
            />
          </div>
        </div>
      )}
    </div>
  )
}
