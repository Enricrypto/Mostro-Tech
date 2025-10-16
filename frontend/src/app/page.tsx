"use client"

import React from "react"
import { Hero } from "@/components/hero/Hero"
import { SongCard } from "@/components/display/SongCard/SongCard"

export default function LandingPage() {
  return (
    <div className='space-y-4 p-8'>
      <Hero />
      <SongCard
        songName='Skyline Dreams'
        subtitle='Latest Single - 3:45'
        variant='play'
        unlockAmount={250}
        unlockToken='MUS'
      />
    </div>
  )
}
