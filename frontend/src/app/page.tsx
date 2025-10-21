"use client"

import { Hero } from "@/components/hero/Hero"
import { ProposalsSection } from "@/components/molecules/ProposalsSection"
import { ProfilSetupModal } from "@/components/utils/Modal/ProfilSetupModal"
import { ProposalConfirmationModal } from "@/components/utils/Modal/ProposalConfirmationModal"

export default function LandingPage() {
  // Pour la démo, modal toujours visible
  return (
    <div className='min-h-screen'>
      <ProfilSetupModal
        username=""
        onSave={(data) => alert(JSON.stringify(data))}
        onClose={() => alert('Modal closed')}
      />
      <ProposalConfirmationModal
        vote="YES"
        voterName="Satoshi Nakamoto"
        voterSubtext="Voted for proposal #42"
        avatarSrc="/avatar.png"
        onViewOtherProposals={() => alert('View other proposals')}
      />
      <main className='pt-24'>
        <Hero />

        {/* Render Proposals Section */}
        <section className='mt-20 flex justify-center'>
          <ProposalsSection />
        </section>
      </main>
    </div>
  )
}
