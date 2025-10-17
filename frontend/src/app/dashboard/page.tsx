"use client"

import { useState } from "react"
import { Navbar } from "@/components/navigation/Navbar"
import { BadgesRow } from "@/components/dashboard/BadgesRow"
import { ArtistProfileBanner } from "@/components/molecules/ArtistProfileBanner"
import { DashBoardStatsCard } from "@/components/templates/DashBoardStatsCard"
import { ArtistCard } from "@/components/molecules/ArtistCard"
import { Button } from "@/components/atoms/Button"
import { bannerPropsData } from "@/mocks/mockBannerProps"
import { statsCardVariants } from "@/mocks/mockStatsData"
import { mockArtistData } from "@/mocks/mockArtistData"
import { ArrowUpRightIcon } from "@phosphor-icons/react"

const VARIANTS: ("default" | "purple" | "red")[] = ["default", "purple", "red"]

export default function DashboardPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentBanner = bannerPropsData[currentIndex] // pick the banner data for the current dot
  const currentVariant = VARIANTS[currentIndex] // pick the corresponding variant

  return (
    <div className='bg-[#0A111F] min-h-screen w-full flex flex-col items-center'>
      {/* Navbar */}
      <div className='pt-8 pr-6 pb-4 pl-6 max-w-[1512px] mx-auto'>
        <Navbar />
      </div>

      {/* Badges container */}
      <div
        className='sticky top-[149px] z-10 w-full'
        style={{
          borderTop: "2px solid #121B2B",
          borderBottom: "2px solid #121B2B",
          background: "#0A111FE5",
          backdropFilter: "blur(4px)"
        }}
      >
        <div className='max-w-[1512px] mx-auto px-[101px] py-[20px]'>
          <BadgesRow />
        </div>
      </div>

      {/* Artist Profile Banner */}
      <div className='relative w-full flex justify-center mt-14'>
        <ArtistProfileBanner {...currentBanner} variant={currentVariant} />

        {/* Dots variant switcher */}
        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4'>
          {VARIANTS.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
                currentIndex === idx ? "bg-white" : "bg-black/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Stats Cards Section */}
      <div
        className='flex flex-wrap justify-start mt-14'
        style={{
          width: "1200px",
          height: "248px",
          gap: "24px"
        }}
      >
        {statsCardVariants.map((card, idx) => (
          <DashBoardStatsCard
            key={idx}
            topText={card.topText}
            bottomLeftText={card.bottomLeftText}
            bottomRightText={card.bottomRightText}
            icon={card.icon}
          />
        ))}
      </div>

      {/* === TOP ARTISTS SECTION === */}
      <section
        className='flex flex-col gap-[39px] items-center mt-20'
        style={{ width: "1512px", height: "474px" }}
      >
        {/* HEADER */}
        <div
          className='flex justify-between items-center'
          style={{ width: "1200px", height: "40px" }}
        >
          {/* LEFT SIDE: Title */}
          <h2
            className='font-inter font-semibold text-[30px] leading-[36px]'
            style={{ letterSpacing: "-0.75%" }}
          >
            Top Artists
          </h2>

          {/* RIGHT SIDE: Button */}
          <Button
            themeVariant='cancel-dark'
            className='w-[116px] h-[40px]'
            icon={<ArrowUpRightIcon size={20} weight='bold' />}
            iconPosition='right'
            onClick={() => console.log("Navigate to New Launches")}
          >
            View All
          </Button>
        </div>
        {/* ARTIST CARDS */}
        <div className='flex gap-6 w-[1200px] justify-start'>
          {mockArtistData.map((artist, idx) => (
            <ArtistCard key={idx} {...artist} />
          ))}
        </div>
      </section>
    </div>
  )
}
