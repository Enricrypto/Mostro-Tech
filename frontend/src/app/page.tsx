"use client"

import React from "react"
import { Hero } from "@/components/hero/Hero"
import { ArtistProfileCard } from "@/components/molecules/ArtistProfileCard"

export default function LandingPage() {
  const handleDisconnect = () => {
    console.log("Wallet disconnected")
  }

  return (
    <div className='flex flex-col items-center gap-[var(--spacing-6)] p-[var(--spacing-6)] bg-night min-h-screen text-white'>
      <Hero />

      {/* Artist Profile Card */}
      <ArtistProfileCard
        name='Alice Wonderland'
        handle='alice_art'
        walletAddress='0x1234...abcd'
        avatarUrl='/avatar.png'
        onDisconnect={handleDisconnect}
      />
    </div>
  )
}
