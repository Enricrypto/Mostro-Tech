// mocks/events.ts
export type EventStatus = "on-sale" | "sold-out" | "token-holders-only"

export interface Event {
  title: string
  date: string
  time: string
  location: string
  status: EventStatus
}

export const upcomingEvents: Event[] = [
  {
    title: "Live in Berlin",
    date: "Nov 15, 2025",
    time: "20:00",
    location: "Berlin, Germany",
    status: "on-sale"
  },
  {
    title: "Stuido Session Livestream",
    date: "Oct 30, 2025 ",
    time: "21:30",
    location: "Online",
    status: "sold-out"
  },
  {
    title: "Midnight Jazz Session",
    date: "Nov 15",
    time: "19:00",
    location: "Paris, France",
    status: "token-holders-only"
  }
]
