export const mockFanbase: { src?: string; initials?: string }[] = [
  { src: "/avatar1.png" },
  { src: "/avatar2.png" },
  { initials: "AB" },
  { src: "/avatar3.png" },
  { initials: "CD" },
  { src: "/avatar4.png" },
  { initials: "EF" },
  { src: "/avatar5.png" },
  { src: "/avatar6.png" }
]

// Repeat until we have at least 18 items
while (mockFanbase.length < 18) {
  mockFanbase.push(...mockFanbase)
}

// Trim exactly to 18
mockFanbase.length = 18
