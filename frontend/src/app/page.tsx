"use client"

import { Hero } from "@/components/hero/Hero"
import { ProposalsSection } from "@/components/molecules/ProposalsSection"

export default function LandingPage() {
  return (
    <div className='min-h-screen'>
      <main className='pt-24'>
        <Hero />

        {/* Render Proposals Section */}
        <section className='mt-20 flex justify-center'>
          <ProposalsSection />
        </section>
      </main>
    </div>
  )
}
