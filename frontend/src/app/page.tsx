import { Hero } from "@/components/hero/Hero"
import { ProposalConfirmationCard } from "@/components/molecules/ProposalConfirmationCard"

export default function LandingPage() {
  return (
    <>
      <Hero />
      <ProposalConfirmationCard
        albumName='Midnights'
        artistName='Taylor Swift'
        avatarSrc='/avatar.png'
      />
    </>
  )
}
