export type Voting = {
  title: string
  artist: string
  date: string
  vote: boolean
  status: string
}

export const mockVotingHistory: Voting[] = [
  {
    title: "One More Time",
    artist: "Daft Punk",
    date: "2 days ago",
    vote: true,
    status: "Active"
  },
  {
    title: "D.A.N.C.E.",
    artist: "Justice",
    date: "5 days ago",
    vote: false,
    status: "Executed"
  },
  {
    title: "Nightcall",
    artist: "Kavinsky",
    date: "3 days ago",
    vote: true,
    status: "Rejected"
  },
  {
    title: "La Femme d'Argent",
    artist: "Air",
    date: "21 days ago",
    vote: false,
    status: "Active"
  },
  {
    title: "Lisztomania",
    artist: "Phoenix",
    date: "25 days ago",
    vote: true,
    status: "Executed"
  }
]
