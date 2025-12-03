"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { LeaderBoard } from "@/components/molecules/Leaderboard"
import { Avatar } from "@/components/atoms/Avatar"
import { Button } from "@/components/atoms/Button"
import {
  ArrowFatLinesDownIcon,
  ArrowFatLinesUpIcon,
  ArrowUpRightIcon
} from "@phosphor-icons/react"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import type { Artist } from "@/data/artists"

type CommunitySectionProps = { artist: Artist }

export const CommunitySection = ({ artist }: CommunitySectionProps) => {
  const [expanded, setExpanded] = useState(false)
  const router = useRouter()

  // Breakpoints
  const isMobile = useMediaQuery("(max-width: 767px)")
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)")
  const isDesktop = useMediaQuery("(min-width: 1024px)")

  const leaderboard = artist.leaderboard || []
  const fanbase = artist.fanbase || []

  // -------------------------------
  // TOP HOLDERS LOGIC
  // -------------------------------
  const topHoldersToShow = isDesktop ? 9 : 5
  const showTopHoldersButton = !isDesktop

  // -------------------------------
  // FANBASE GRID LOGIC
  // -------------------------------
  const avatarsPerRow = isTablet ? 4 : 5
  const visibleRows = 2

  const fansToDisplay = expanded
    ? fanbase
    : fanbase.slice(0, avatarsPerRow * visibleRows)

  const rows = Math.ceil(fansToDisplay.length / avatarsPerRow)

  return (
    <div className='w-full flex flex-col md:flex-row gap-[39px] mb-20 justify-center'>
      {/* ============ TOP HOLDERS ============ */}
      <div className='flex flex-col gap-6 md:w-1/2'>
        <h2 className='text-white font-inter font-semibold text-[30px] leading-9'>
          Top Holders
        </h2>

        <div className='flex flex-col gap-6 mt-4'>
          {leaderboard.slice(0, topHoldersToShow).map((holder) => (
            <LeaderBoard
              key={holder.rank}
              rank={holder.rank}
              avatarSrc={holder.avatarSrc}
              username={holder.username}
              score={holder.score}
              tokenSymbol={holder.tokenSymbol}
            />
          ))}

          {showTopHoldersButton && (
            <Button
              variant='follow-share'
              icon={<ArrowUpRightIcon size={20} weight='bold' />}
              iconPosition='right'
              onClick={() => router.push("/all-artists")}
              className='w-full justify-center'
            >
              View All
            </Button>
          )}
        </div>
      </div>

      {/* ============ FANBASE ============ */}
      <div className='flex flex-col gap-6 md:w-1/2'>
        <h2 className='text-white font-inter font-semibold text-[30px] leading-9'>
          Fanbase
        </h2>

        <div className='flex flex-col gap-6 p-3 md:p-4 rounded-[10px] bg-[#121B2B] border border-[#2D3953] shadow-md mt-4'>
          {/* GRID */}
          <div
            className={`grid gap-4`}
            style={{ gridTemplateColumns: `repeat(${avatarsPerRow}, 1fr)` }}
          >
            {fansToDisplay.map((fan, index) => (
              <Avatar
                key={index}
                variant={fan.initials ? "square-sm" : "square-sm-initials"}
                className='md:w-14 md:h-14 sm:w-15 sm:h-15'
                src={fan.src}
                initials={fan.initials}
              />
            ))}
          </div>

          {/* BUTTON */}
          <Button
            variant='follow-share'
            className='flex items-center gap-2.5 h-10 rounded-md border px-4 py-2 justify-center'
            icon={
              expanded ? (
                <ArrowFatLinesUpIcon size={16} weight='bold' />
              ) : (
                <ArrowFatLinesDownIcon size={16} weight='bold' />
              )
            }
            iconPosition='right'
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded ? "Collapse" : "Expand to see all"}
          </Button>
        </div>
      </div>
    </div>
  )
}