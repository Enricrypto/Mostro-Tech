"use client"

import { BadgesRow } from "@/components/dashboard"
import { ArtistCard } from "@/components/molecules/ArtistCard"
import { mockAllArtistsData } from "@/mocks/mockAllArtistsData"

export default function AllArtists() {
  return (
    <div className='bg-[#0A111F] min-h-screen w-full flex flex-col items-center'>
      {/* ===== BADGES SECTION ===== */}
      <section className='sticky top-[149px] z-10 w-screen left-[00%] right-[50%] -ml-[50vw] -mr-[50vw] border-t-2 border-b-2 border-[#121B2B] bg-[#0A111FE5] backdrop-blur-sm py-5 px-4'>
        <div className='max-w-[1200px] mx-auto'>
          <BadgesRow />
        </div>
      </section>

      {/* ===== ARTISTS SECTION ===== */}
      <section className='relative flex flex-col items-center mt-[105px] mb-20'>
        <div className='grid grid-cols-3 gap-x-[21px] gap-y-[21px]'>
          {mockAllArtistsData.map((artist, idx) => (
            <ArtistCard key={idx} {...artist} />
          ))}
        </div>
      </section>
    </div>
  )
}
