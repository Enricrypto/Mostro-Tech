export type Voting = {
  title: string
  artist: string
  date: string
  vote: boolean
  status: string
}

export const mockVotingHistory: Voting[] = [
  {
    title: "Song A",
    artist: "Daft Punk",
    date: "2 days ago",
    vote: true,
    status: "Active"
  },
  {
    title: "Song B",
    artist: "Justice",
    date: "5 days ago",
    vote: false,
    status: "Executed"
  },
  {
    title: "Song C",
    artist: "Kavinsky",
    date: "3 days ago",
    vote: true,
    status: "Rejected"
  },
  {
    title: "Song D",
    artist: "Air",
    date: "21 days ago",
    vote: false,
    status: "Active"
  },
  {
    title: "Song E",
    artist: "Phoenix",
    date: "25 days ago",
    vote: true,
    status: "Executed"
  }
]
