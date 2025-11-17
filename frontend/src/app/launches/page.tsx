"use client"

import { NewLaunchCard } from "@/components/molecules/NewLaunchCard"
import { BadgesRow } from "@/components/dashboard"
import { mockNewLaunchData } from "@/mocks/mockNewLaunchData"

export default function NewLaunchesPage() {
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
          <div className='absolute inset-0 w-screen border-t-2 border-b-2 border-[#121B2B] bg-[#0A111FE5] backdrop-blur-sm pointer-events-none'></div>

          {/* Scrollable content */}
          <div className='relative z-10 max-w-[1200px] mx-auto overflow-x-auto py-5 px-4 md:px-12'>
            <BadgesRow />
          </div>
        </section>
      </div>

      <div className='bg-[#0A111F] min-h-screen w-full flex flex-col'>
        {/* ===== MAIN CONTENT (centered container) ===== */}
        <div className='max-w-[1200px] mx-auto w-full flex flex-col px-4 mt-20 mb-20'>
          {/* Header */}
          <div className='flex justify-start'>
            <SectionHeader title='New Launches' />
          </div>

          {/* Grid */}
          <section className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {mockNewLaunchData.map((launch) => (
              <NewLaunchCard key={launch.id || launch.name} {...launch} />
            ))}
          </section>
        </div>
      </div>
    </>
  )
}
