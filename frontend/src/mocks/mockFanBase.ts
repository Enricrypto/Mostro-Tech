export const mockFanbase: { src?: string; initials?: string }[] = [
  { src: "/artists/luna-eclipse.png" },
  { src: "/artists/atlas-monroe.png" },
  { initials: "AB" },
  { src: "/artists/liz-cherry.png" },
  { initials: "CD" },
  { src: "/avatar4.png" },
  { initials: "EF" },
  { src: "/avatar6.png" },
  { src: "/avatar6.png" }
]

// Repeat until we have at least 36 items
while (mockFanbase.length < 36) {
  mockFanbase.push(...mockFanbase)
}

// Trim exactly to 36
mockFanbase.length = 36
