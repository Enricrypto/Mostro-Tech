"use client"

import { Hero } from "@/components/hero/Hero"
import { ProposalConfirmationModal } from "@/components/modal/ProposalConfirmationModal"

export default function LandingPage() {
  return (
    <>
      <Hero />
      <ProposalConfirmationModal
        vote='YES'
        voterName='John Doe'
        voterSubtext='Collector'
        avatarSrc='/avatar.png'
        onViewOtherProposals={() => {
          console.log("View other proposals clicked")
        }}
      />
    </>
  )
}
