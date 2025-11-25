"use client"

import { NewLaunchCard } from "@/components/molecules/NewLaunchCard"
import { BadgesRow } from "@/components/dashboard"
import { mockNewLaunchData } from "@/mocks/mockNewLaunchData"

export default function NewLaunchesPage() {
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
          <div className='absolute inset-0 w-screen border-t-2 border-b-2 border-[#121B2B] bg-[#0A111FE5] backdrop-blur-sm pointer-events-none'></div>

          {/* Scrollable content */}
          <div className='relative z-10 mx-auto max-w-[1200px] overflow-x-auto px-4 sm:px-6 md:px-12'>
            <BadgesRow />
          </div>
        </section>
      </div>

      <div className='flex min-h-screen w-full flex-col bg-[#0A111F]'>
        {/* ===== MAIN CONTENT (centered container) ===== */}
        <div className='mx-auto mb-12 mt-12 flex w-full max-w-[1200px] flex-col px-4 sm:px-6 lg:px-8 md:mb-20 md:mt-20'>
          {/* Header */}
          <div className='flex justify-start'>
            <SectionHeader title='New Launches' />
          </div>

          {/* Grid */}
          <section className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {mockNewLaunchData.map((launch) => (
              <NewLaunchCard key={launch.id || launch.name} {...launch} />
            ))}
          </section>
        </div>
      </div>
    </>
  )
}
