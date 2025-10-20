// mocks/events.ts
export type EventStatus = "on-sale" | "sold-out" | "coming-soon"

export interface Event {
  title: string
  date: string
  time: string
  location: string
  status: EventStatus
}

export const upcomingEvents: Event[] = [
  {
    title: "Moonlight Festival",
    date: "Oct 25",
    time: "20:00",
    location: "Barcelona, Spain",
    status: "on-sale"
  },
  {
    title: "Golden Sounds Tour",
    date: "Nov 3",
    time: "21:30",
    location: "Berlin, Germany",
    status: "sold-out"
  },
  {
    title: "Midnight Jazz Session",
    date: "Nov 15",
    time: "19:00",
    location: "Paris, France",
    status: "coming-soon"
  }
]
