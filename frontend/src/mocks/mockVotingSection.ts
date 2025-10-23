import { VotingSectionProps } from "@/components/molecules/VotingSection"

export const mockVotingSection: VotingSectionProps = {
  description: "Vote on the next project proposal for the DAO.",
  yesVotes: 1200,
  noVotes: 300,
  participants: 148,
  totalVotes: 45000,
  onVoteYes: () => console.log("Voted YES"),
  onVoteNo: () => console.log("Voted NO")
}
