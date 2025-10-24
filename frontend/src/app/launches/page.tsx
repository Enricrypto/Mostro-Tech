"use client"

import { NewLaunchCard } from "@/components/molecules/NewLaunchCard"
import { mockNewLaunchData } from "@/mocks/mockNewLaunchData"

export default function NewLaunchesPage() {
  return (
    <div className='bg-[#0A111F] min-h-screen w-full flex flex-col items-center'>
      {/* ===== NEW LAUNCHES GRID ===== */}
      <section className='flex flex-col gap-[39px] items-center mt-20 mb-20 w-full px-4'>
        <div className='max-w-[1200px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {mockNewLaunchData.map((launch) => (
            <NewLaunchCard key={launch.id || launch.name} {...launch} />
          ))}
        </div>
      </section>
    </div>
  )
}
