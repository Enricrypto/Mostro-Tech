import { useState } from "react"
import { Button } from "@/components/atoms/Button"
import { ProposalCard } from "../ProposalCard"
import { mockProposals } from "@/mocks/mockProposals"

type ProposalStatus = "all" | "ongoing" | "executed" | "closed"

interface Proposal {
  id: number
  status: ProposalStatus
  title: string
  requestedTokens: number
  yesPercentage?: number
  noPercentage?: number
  badgeText?: string
}

export function ProposalsSection() {
  const [filter, setFilter] = useState<ProposalStatus>("all")

  const filteredProposals: Proposal[] =
    filter === "all"
      ? mockProposals
      : mockProposals.filter((p) => p.status === filter)

  return (
    <div className='flex flex-col w-[1200px] h-[868px] gap-[39px]'>
      {/* Top bar */}
      <div className='flex justify-between items-center w-full h-[42px]'>
        <h2 className='text-white font-inter font-semibold text-[30px] leading-[36px]'>
          Proposals
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
        {filteredProposals.map((proposal) => {
          // Skip anything that isn't a valid card variant
          if (proposal.status === "all") return null

          return (
            <ProposalCard
              key={proposal.id}
              status={proposal.status} // now safe
              title={proposal.title}
              requestedTokens={proposal.requestedTokens}
              yesPercentage={proposal.yesPercentage}
              noPercentage={proposal.noPercentage}
              badgeText={proposal.badgeText}
            />
          )
        })}
      </div>
    </div>
  )
}
