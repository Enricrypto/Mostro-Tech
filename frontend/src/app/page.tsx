"use client"

import { Hero } from "@/components/hero/Hero"
import { NewLaunchCard } from "@/components/molecules/NewLaunchCard"
import { Image } from "@/components/atoms/Image"
import { ArrowUpRightIcon, CalendarBlankIcon } from "@phosphor-icons/react"

export default function LandingPage() {
  return (
    <div className='flex flex-col items-center gap-[var(--spacing-6)] p-[var(--spacing-6)] bg-night min-h-screen text-white'>
      <Hero />
      
      {/* Image Component */}
      <div className="mt-8">
        <Image />
      </div>
      
      <h2 className='text-h3 mt-8'>New Launches</h2>

      {/* Render cards */}
      <div className='flex flex-wrap gap-6 justify-center'>
        <NewLaunchCard
          avatarUrl='/avatar.png'
          name='Artist One'
          badgeText='Pop'
          launchInDays={5}
          price={1500}
          dynamicRightTopText='1000'
          onButtonClick={() => alert("View Artist clicked!")}
          variant='highlighted'
        />
      </div>
    </div>
  )
}
