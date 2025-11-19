"use client"

import { BadgesRow } from "@/components/dashboard"
import { ArtistCard } from "@/components/molecules/ArtistCard"
import { mockAllArtistsData } from "@/mocks/mockAllArtistsData"

export default function AllArtists() {
  const SectionHeader = ({ title }: { title: string }) => (
    <h2 className='text-white font-semibold text-[30px] leading-9 tracking-[-0.75%]'>
      {title}
    </h2>
  )

  return (
    <>
      {/* ===== FULL-WIDTH SECTIONS ===== */}
      <div className='relative w-screen'>
        {/* Badges Section */}
        <section className='relative mt-20 w-screen'>
          {/* Full-width background & borders */}
          <div className='absolute inset-0 w-screen border-t-2 border-b-2 border-[#121B2B] bg-[--color-black] backdrop-blur-sm pointer-events-none'></div>

          {/* Scrollable content */}
          <div className='relative z-10 max-w-[1200px] mx-auto overflow-x-auto py-5 px-4 md:px-12'>
            <BadgesRow />
          </div>
        </section>
      </div>

      <div className='bg-[--color-black] min-h-screen w-full max-w-[1200px] mx-auto flex flex-col'>
        {/* ===== ARTISTS GRID ===== */}
        <section className='w-full mt-20 px-4'>
          <SectionHeader title='All Artists' />

          {/* Grid stays centered */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-20 place-items-center md:place-items-center'>
            {mockAllArtistsData.map((artist) => (
              <ArtistCard
                key={artist.id}
                {...artist}
                id={artist.id}
                slug={artist.slug}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
