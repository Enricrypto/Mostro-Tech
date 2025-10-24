export type Voting = {
  id: number
  title: string
  artist: string
  date: string
  vote: boolean
  status: string
}

export const mockVotingHistory: Voting[] = [
  {
    id: 1,
    title: "One More Time",
    artist: "Daft Punk",
    date: "2 days ago",
    vote: true,
    status: "Active"
  },
  {
    id: 2,
    title: "D.A.N.C.E.",
    artist: "Justice",
    date: "5 days ago",
    vote: false,
    status: "Executed"
  },
  {
    id: 3,
    title: "Nightcall",
    artist: "Kavinsky",
    date: "3 days ago",
    vote: true,
    status: "Rejected"
  },
  {
    id: 4,
    title: "La Femme d'Argent",
    artist: "Air",
    date: "21 days ago",
    vote: false,
    status: "Active"
  },
  {
    id: 5,
    title: "Lisztomania",
    artist: "Phoenix",
    date: "25 days ago",
    vote: true,
    status: "Executed"
  }
]
