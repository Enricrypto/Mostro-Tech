"use client"

import { useState } from "react"
import { Button } from "@/components/atoms/Button"
import { ProposalOngoingCard } from "../ProposalOngoingCard"
import { ProposalExecutedCard } from "../ProposalExecutedCard"
import { ProposalClosedCard } from "../ProposalClosedCard"
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
    <div
      className='flex flex-col w-[1200px] h-[868px] gap-[39px]'
      style={{ opacity: 1 }}
    >
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
      <div
        className='grid grid-cols-2 gap-[39px]'
        style={{ width: 1200, height: 868 }}
      >
        {filteredProposals.map((proposal) => {
          switch (proposal.status) {
            case "ongoing":
              return (
                <ProposalOngoingCard
                  key={proposal.id}
                  title={proposal.title}
                  requestedValue={proposal.requestedTokens}
                  yesPercentage={proposal.yesPercentage!}
                  noPercentage={proposal.noPercentage!}
                  badgeText={proposal.badgeText!}
                />
              )
            case "executed":
              return (
                <ProposalExecutedCard
                  key={proposal.id}
                  proposalTitle={proposal.title}
                  requestedTokens={proposal.requestedTokens}
                />
              )
            case "closed":
              return (
                <ProposalClosedCard
                  key={proposal.id}
                  title={proposal.title}
                  requestingTokens={proposal.requestedTokens}
                />
              )
            default:
              return null
          }
        })}
      </div>
    </div>
  )
}
