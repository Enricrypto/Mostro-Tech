"use client"

import { Hero } from "@/components/hero/Hero"

export default function LandingPage() {
  return (
    <div className='min-h-screen'>
      {/* Fixed floating trigger (top-right) */}

      {/* Page content */}
      <main className='pt-24'>
        <Hero />
      </main>
    </div>
  )
}
