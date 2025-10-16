"use client"

import React from "react"
import { Hero } from "@/components/hero/Hero"
import { PlayerCard } from "@/components/display/PlayerCard/PlayerCard"

export default function LandingPage() {
  return (
    <div>
      <Hero />
      {/* Render PlayerCard */}
      <PlayerCard
        avatarUrl='/avatar.png'
        songName='Skyline Dreams'
        songDetails='Latest Single - 3:45'
        currentTime='2:10'
        totalTime='3:45'
        progress={0.58} // 58% progress
        onPlayPause={() => console.log("Play/Pause clicked")}
        onNext={() => console.log("Next clicked")}
        onPrev={() => console.log("Prev clicked")}
      />
    </div>
  )
}
