"use client"

import { Hero } from "@/components/hero/Hero"
import MostroColorPalette from "@/components/display/MostroColorPalette"

export default function LandingPage() {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <MostroColorPalette />
      </div>
    </>
  )
}
