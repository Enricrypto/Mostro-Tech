export type Voting = {
	id: number,
    title: string,
    artist: string,
    date: string,
    vote: boolean,
    status: string,
}

export const votingHistory: Voting[] = [
  {
    id: 1,
    title: "Song A",
    artist: "Daft Punk",
    date: "2025-10-01",
    vote: true,
    status: "Approved",
  },
  {
    id: 2,
    title: "Song B",
    artist: "Justice",
    date: "2025-10-02",
    vote: false,
    status: "Pending",
  },
  {
    id: 3,
    title: "Song C",
    artist: "Kavinsky",
    date: "2025-10-03",
    vote: true,
    status: "Rejected",
  },
  {
    id: 4,
    title: "Song D",
    artist: "Air",
    date: "2025-10-04",
    vote: false,
    status: "Approved",
  },
  {
    id: 5,
    title: "Song E",
    artist: "Phoenix",
    date: "2025-10-05",
    vote: true,
    status: "Pending",
  },
];