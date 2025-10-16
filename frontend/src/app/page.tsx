"use client"

import { Hero } from "@/components/hero/Hero"
import { Image } from "@/components/atoms/Image"

export default function LandingPage() {
  return (
    <>
      <Hero />
      
      {/* Image Component with Custom Layout */}
      <div className="p-8 flex justify-center">
        <Image />
      </div>
    </>
  )
}
