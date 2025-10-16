"use client"

import React from "react"
import { Hero } from "@/components/hero/Hero"
import { NewLaunchCard } from "@/components/molecules/NewLaunchCard"
import { Image } from "@/components/atoms/Image"
import { ArrowUpRightIcon, CalendarBlankIcon } from "@phosphor-icons/react"

export default function LandingPage() {
  const handleDisconnect = () => {
    console.log("Wallet disconnected")
  }

  return (
    <div className='flex flex-col items-center gap-[var(--spacing-6)] p-[var(--spacing-6)] bg-night min-h-screen text-white'>
      <Hero />
      
      {/* Image Component */}
      <div className="mt-8">
        <Image />
      </div>
      
      <h2 className='text-h3 mt-8'>New Launches</h2>

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
