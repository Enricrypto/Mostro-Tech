"use client"

import { NewLaunchCard } from "@/components/molecules/NewLaunchCard"
import { mockNewLaunchData } from "@/mocks/mockNewLaunchData"

export default function NewLaunchesPage() {
  const SectionHeader = ({ title }: { title: string }) => (
    <h2 className='text-white font-semibold text-[30px] leading-9 tracking-[-0.75%]'>
      {title}
    </h2>
  )
  return (
    <div className='bg-[#0A111F] min-h-screen w-full flex flex-col items-center'>
      <div className='w-full max-w-[1200px] px-4 flex justify-start mt-20'>
        <SectionHeader title='New Launches' />
      </div>

      {/* ===== NEW LAUNCHES GRID ===== */}
      <section className='flex flex-col gap-[39px] items-center mt-10 mb-20 w-full px-4'>
        <div className='max-w-[1200px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {mockNewLaunchData.map((launch) => (
            <NewLaunchCard key={launch.id || launch.name} {...launch} />
          ))}
        </div>
      </section>
    </div>
  )
}
