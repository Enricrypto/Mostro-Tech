"use client"

import { Hero } from "@/components/hero/Hero"
import { TrendingTokenCard } from "@/components/molecules/TrendingTokenCard"

export default function LandingPage() {
  return (
    <>
      <Hero />
      <TrendingTokenCard
        avatarSrc='/avatar.png'
        name='Bitcoin'
        subtitle='Requesting: 50,000 tokens'
        value='$28,000'
        badgeText='+24%'
      />
    </>
  )
}
