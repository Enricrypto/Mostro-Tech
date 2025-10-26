import { VotingSectionProps } from "@/components/molecules/VotingSection"

export const mockVotingSection: VotingSectionProps = {
  title: "New Album Production",
  artist: "Luna Eclipse",
  description: "Open to all $MLUNA token holders.",
  yesVotes: 1200,
  noVotes: 300,
  participants: 148,
  totalVotes: 45000,
  onVoteYes: () => console.log("Voted YES"),
  onVoteNo: () => console.log("Voted NO")
}
