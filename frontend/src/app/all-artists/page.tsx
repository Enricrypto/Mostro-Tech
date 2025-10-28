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
    <div className='bg-[#0A111F] min-h-screen w-full flex flex-col'>
      {/* ===== BADGES SECTION ===== */}
      <section className='top-[149px] -ml-[50vw] -mr-[50vw] border-t-2 border-b-2 border-[#121B2B] bg-[#0A111FE5] backdrop-blur-sm py-5 px-4 mt-20'>
        <div className='max-w-[1200px] mx-auto'>
          <BadgesRow />
        </div>
      </section>

      {/* ===== ARTISTS GRID ===== */}
      <section className='relative flex flex-col items-center mt-20 mb-20 w-full gap-10'>
        {/* Header wrapper: full width and left-aligned */}
        <div className='w-full max-w-[1200px] px-4 flex justify-start'>
          <SectionHeader title='All Artists' />
        </div>

        {/* Grid stays centered */}
        <div className='max-w-[1200px] w-full px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[21px]'>
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
  )
}
