"use client"

import { Hero } from "@/components/hero/Hero"
import { NewLaunchCard } from "@/components/molecules/NewLaunchCard"

export default function LandingPage() {
  return (
    <div className='bg-[#0A111F] min-h-screen w-full flex flex-col items-center'>
      <Hero />

      {/* New Launch Section */}
      <div>
        <NewLaunchCard
          avatarUrl='/avatar.png' // replace with actual avatar
          name='John Doe'
          badgeText='Hip Hop'
          launchInDays={5}
          price={1.0}
          dynamicRightTopText='10K'
          onButtonClick={() => console.log("View Artist clicked")}
        />
      </div>
    </div>
  )
}
