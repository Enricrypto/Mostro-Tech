import { Hero } from "@/components/hero/Hero"
import { ProposalConfirmationCard } from "@/components/molecules/ProposalConfirmationCard"
import { VotingHistory } from "@/components/display/VotingHistory"
import { Tooltip } from "@/components/atoms/Tooltip"
import { Button } from "@/components/ui/button"

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
        <div style={{ marginTop: '50px' }}>
          <Tooltip content="This is a tooltip">
            <Button variant="default" size="default">
              Tooltip
            </Button>
          </Tooltip>
        </div>
      </div>
    </>
  )
}
