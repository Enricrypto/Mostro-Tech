import { useState } from "react"
import { Button } from "@/components/atoms/Button"
import { ProposalCard } from "@/components/molecules/ProposalCard"
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
    <div className='flex flex-col w-full max-w-[1200px] mx-auto mb-20'>
      {/* Top bar desktop / iPad */}
      <div className='hidden md:flex justify-between items-center w-full h-[42px]'>
        <h2 className='text-white font-inter font-semibold text-[30px] leading-9'>
          Voting
        </h2>
        <div className='flex align-items justify-between'>
          {(["all", "ongoing", "executed", "closed"] as ProposalStatus[]).map(
            (status) => (
              <Button
                key={status}
                variant={
                  filter === status ? "continue" : "text-white-transparent"
                }
                onClick={() => setFilter(status)}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Button>
            )
          )}
        </div>
      </div>

      {/* Top bar mobile */}
      <div className='flex flex-col md:hidden w-full'>
        <h2 className='text-white font-inter font-semibold text-[30px] leading-9'>
          Voting
        </h2>
        <div className='flex align-items justify-between mt-5'>
          {(["all", "ongoing", "executed", "closed"] as ProposalStatus[]).map(
            (status) => (
              <Button
                key={status}
                variant={
                  filter === status ? "continue" : "text-white-transparent"
                }
                onClick={() => setFilter(status)}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Button>
            )
          )}
        </div>
      </div>

      {/* Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-[19px]'>
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
        {/* <ProposalCard key='create-proposal' /> */}
      </div>
    </div>
  )
}
