import { useState } from "react"
import { Button } from "@/components/atoms/Button"
import { ProposalCard } from "../../molecules/ProposalCard"
import type { Artist } from "@/data/artists"

type ProposalStatus = "all" | "ongoing" | "executed" | "closed"

export interface ProposalData {
  id: number
  status: ProposalStatus
  title: string
  requestedTokens: string
  yesPercentage?: number
  noPercentage?: number
  badgeText?: string
}

interface ProposalsSectionProps {
  artist: Artist
  onViewProposal: (proposalId: number) => void
}

export function ProposalsSection({
  artist,
  onViewProposal
}: ProposalsSectionProps) {
  const [filter, setFilter] = useState<ProposalStatus>("all")

  const proposals: ProposalData[] = artist.proposals || []

  // Desired order for statuses
  const statusOrder: Record<ProposalStatus, number> = {
    all: 0,
    ongoing: 1,
    executed: 2,
    closed: 3
  }

  // Filter proposals by selected tab
  const filteredProposals: ProposalData[] =
    filter === "all" ? proposals : proposals.filter((p) => p.status === filter)

  // Sort proposals by status according to our desired order
  const sortedProposals = [...filteredProposals].sort(
    (a, b) => statusOrder[a.status] - statusOrder[b.status]
  )

  return (
    <div className='flex flex-col w-[1200px] h-[868px] gap-[39px] mb-20'>
      {/* Top bar */}
      <div className='flex justify-between items-center w-full h-[42px]'>
        <h2 className='text-white font-inter font-semibold text-[30px] leading-9'>
          Voting
        </h2>
        <div className='flex gap-4'>
          {(["all", "ongoing", "executed", "closed"] as ProposalStatus[]).map(
            (status) => (
              <Button
                key={status}
                variant={filter === status ? "continue" : "default"}
                onClick={() => setFilter(status)}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Button>
            )
          )}
        </div>
      </div>

      {/* Cards Grid */}
      <div className='grid grid-cols-2 gap-x-[19px] gap-y-[19px]'>
        {sortedProposals.map((proposal) => {
          // Skip anything that isn't a valid card variant
          if (proposal.status === "all") return null

          return (
            <ProposalCard
              key={proposal.id}
              status={proposal.status}
              title={proposal.title}
              requestedTokens={proposal.requestedTokens}
              yesPercentage={proposal.yesPercentage}
              noPercentage={proposal.noPercentage}
              badgeText={proposal.badgeText}
              onViewProposal={() => onViewProposal(proposal.id)}
            />
          )
        })}
      </div>
    </div>
  )
}
