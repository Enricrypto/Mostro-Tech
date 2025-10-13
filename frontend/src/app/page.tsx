import { Hero } from "@/components/hero/Hero"
import { ProposalConfirmationCard } from "@/components/molecules/ProposalConfirmationCard"
import { VotingHistory } from "@/components/display/VotingHistory"

export default function LandingPage() {
  return (
    <>
      <Hero />
      <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <ProposalConfirmationCard
          albumName='Midnights'
          artistName='Taylor Swift'
          avatarSrc='/avatar.png'
        />
        <VotingHistory className="border-gray-300" />
      </div>
    </>
  )
}
