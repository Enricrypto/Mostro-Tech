"use client"

import { BadgesRow } from "@/components/dashboard/BadgesRow"
import { NewLaunchCard } from "@/components/molecules/NewLaunchCard"
import { mockNewLaunchData } from "@/mocks/mockNewLaunchData"

export default function NewLaunchesPage() {
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
