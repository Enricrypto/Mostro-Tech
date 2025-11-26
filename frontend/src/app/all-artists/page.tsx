"use client"

import { BadgesRow } from "@/components/dashboard"
import { ArtistCard } from "@/components/molecules/ArtistCard"
import { mockAllArtistsData } from "@/mocks/mockAllArtistsData"

export default function AllArtists() {
  const SectionHeader = ({ title }: { title: string }) => (
    <h2 className='text-white font-semibold text-2xl md:text-3xl tracking-[-0.75%]'>
      {title}
    </h2>
  )

  return (
    <>
      {/* ===== FULL-WIDTH SECTIONS ===== */}
      <div className='relative w-screen'>
        {/* Badges Section */}
        <section className='relative mt-12 w-screen md:mt-20'>
          {/* Full-width background & borders */}
          <div className='absolute inset-0 w-screen border-t-2 border-b-2 border-[#121B2B] bg-[--color-black] backdrop-blur-sm pointer-events-none'></div>

          {/* Scrollable content */}
          <div className='relative z-10 mx-auto max-w-[1200px] overflow-x-auto px-4 sm:px-6 md:px-12'>
            <BadgesRow />
          </div>
        </section>
      </div>

      <div className='mx-auto flex min-h-screen w-full max-w-[1200px] flex-col bg-[--color-black] px-4 sm:px-6 lg:px-8'>
        {/* ===== ARTISTS GRID ===== */}
        <section className='mt-12 w-full md:mt-20'>
          <SectionHeader title='All Artists' />

          {/* Grid stays centered */}
<div className='mb-12 mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 md:place-items-center md:mb-20 place-items-center'>            {mockAllArtistsData.map((artist) => (
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
