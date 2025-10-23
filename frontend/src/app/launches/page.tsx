"use client"

import { NewLaunchCard } from "@/components/molecules/NewLaunchCard"
import { mockNewLaunchData } from "@/mocks/mockNewLaunchData"

export default function NewLaunchesPage() {
  return (
    <div className='bg-[#0A111F] min-h-screen w-full flex flex-col items-center'>
      {/* ===== NEW LAUNCHES SECTION ===== */}
      <section
        className='flex flex-col gap-[39px] items-center mt-20 mb-20'
        style={{ width: "1512px" }}
      >
        {/* ===== GRID (3 per row) ===== */}
        <div className='flex flex-col gap-[24px] w-[1200px]'>
          {[0, 1, 2].map((row) => (
            <div
              key={row}
              className='flex justify-start gap-[24px]'
              style={{ width: "1200px" }}
            >
              {mockNewLaunchData
                .slice(row * 3, row * 3 + 3)
                .map((launch, idx) => (
                  <NewLaunchCard
                    key={idx}
                    avatarUrl={launch.avatarUrl}
                    name={launch.name}
                    badgeText={launch.badgeText}
                    launchInDays={launch.launchInDays}
                    price={launch.price}
                    dynamicRightTopText={launch.dynamicRightTopText}
                    onButtonClick={() => console.log(`View ${launch.name}`)}
                  />
                ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
