"use client"

import { useState } from "react"
import { Button } from "@/components/atoms/Button"
import { InputField, InputWithAddButton, RadioGroup } from "@/components/inputs"
import { X } from "@phosphor-icons/react"

export function ProposalSettings() {
  const [proposalTitle, setProposalTitle] = useState("")
  const [fundingGoal, setFundingGoal] = useState("")
  const [votingDuration, setVotingDuration] = useState("")
  const [description, setDescription] = useState("")
  const [selectedPerk, setSelectedPerk] = useState<string | null>(null)
  const [fundingAllocationItem, setFundingAllocationItem] = useState("")
  const [fundingAllocations, setFundingAllocations] = useState<string[]>([])

  const handleAddFundingAllocation = () => {
    if (fundingAllocationItem.trim() !== "") {
      setFundingAllocations([...fundingAllocations, fundingAllocationItem.trim()])
      setFundingAllocationItem("")
    }
  }

  const handleRemoveFundingAllocation = (itemToRemove: string) => {
    setFundingAllocations(fundingAllocations.filter(item => item !== itemToRemove));
  };

  const perkOptions = [
    { value: "music-drops", label: "Music Drops" },
    { value: "livestream", label: "Livestream" },
    { value: "concert-tickets", label: "Concert Tickets" },
    { value: "merch", label: "Merch" },
    { value: "vip-meet-greet", label: "VIP Meet & Greet" },
    { value: "onchain-voting", label: "Onchain Voting" },
  ]

  const textAreaStyles = `
    w-full
    rounded-md
    px-3
    py-2
    font-body
    text-white
    placeholder:text-gray-400
    bg-black/20
    border border-white/30
    focus:outline-none
    focus:ring-1
    focus:ring-[var(--color-primary)]
    transition-colors
  `

  return (
    <div className="bg-[#121B2B] p-4 sm:p-6 md:p-8 rounded-2xl border border-[var(--color-navbar-border)] shadow-lg text-white w-full max-w-4xl mx-auto">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-white">
          Create New Proposal
        </h1>
        <p className="text-sm text-gray-400 text-center mb-8">
          Submit a proposal for your community to vote on. Token holders will
          decide together.
        </p>

        <div className="flex flex-col gap-6">
          <InputField
            label="Proposal Title"
            placeholder="e.g., European Tour 2026"
            value={proposalTitle}
            onChange={(e) => setProposalTitle(e.target.value)}
            themeVariant="profile-setup"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Funding Goal"
              placeholder="e.g., 15,000 USDC"
              value={fundingGoal}
              onChange={(e) => setFundingGoal(e.target.value)}
              themeVariant="profile-setup"
            />
            <InputField
              label="Voting Duration"
              placeholder="e.g., 7 days"
              value={votingDuration}
              onChange={(e) => setVotingDuration(e.target.value)}
              themeVariant="profile-setup"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="description" className="text-sm font-medium text-white">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Explain your project in detail"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className={textAreaStyles}
            />
          </div>

          <RadioGroup
            label="Proposal Perk"
            description="You can select any perk from your existing list. To add new perks, simply go to the “Create Perks” section."
            options={perkOptions}
            selectedValue={selectedPerk}
            onChange={setSelectedPerk}
          />

          <InputWithAddButton
            label="Funding Allocation"
            placeholder="e.g., Venue"
            value={fundingAllocationItem}
            onChange={(e) => setFundingAllocationItem(e.target.value)}
            onAdd={handleAddFundingAllocation}
          />
          {fundingAllocations.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {fundingAllocations.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-700 text-white px-3 py-1 rounded-full text-sm"
                >
                  {item}
                  <X
                    size={16}
                    className="ml-2 cursor-pointer text-[var(--color-skyblue)]"
                    onClick={() => handleRemoveFundingAllocation(item)}
                  />
                </div>
              ))}
            </div>
          )}

          <div className="mt-4">
            <Button
              variant="continue"
              className="w-full"
              size="lg"
            >
              Create Proposal
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}