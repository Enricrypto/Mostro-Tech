"use client"

import { useState } from "react"
import { BadgesRow } from "@/components/dashboard/BadgesRow"
import { FullArtistCard } from "@/components/molecules/FullArtistCardProfile"
import { SectionSelector } from "@/components/navigation/SectionSelector"
import { mockFullArtistData } from "@/mocks/mockFullArtistData"

export default function NewLaunchesPage() {
  const [selectedSection, setSelectedSection] = useState("music")
  const artist = mockFullArtistData[0]
  return (
    <div className='bg-[#0A111F] min-h-screen w-full flex flex-col items-center'>
      {/* ===== BADGES SECTION ===== */}
      <section
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
      </section>

      <section className='relative w-full flex justify-center mt-20'>
        <FullArtistCard
          badgeText={artist.badgeText}
          artistName={artist.artistName}
          artistHandle={artist.artistHandle}
          artistDescription={artist.artistDescription}
          tokenName={artist.tokenName}
          tokenPrice={artist.tokenPrice}
          tokenHolders={artist.tokenHolders}
          artistImage={artist.artistImage} // <-- this passes the avatar
          socials={artist.socials}
        />
      </section>

      <section className='relative w-full flex justify-center mt-20'>
        <SectionSelector
          selected={selectedSection}
          onSelect={(id) => setSelectedSection(id)}
        />
      </section>
    </div>
  )
}
