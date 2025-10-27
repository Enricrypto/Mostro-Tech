"use client"

import { useState } from "react"
import { LeaderBoard } from "@/components/molecules/Leaderboard"
import { Avatar } from "@/components/atoms/Avatar"
import { Button } from "@/components/atoms/Button"
import {
  ArrowFatLinesDownIcon,
  ArrowFatLinesUpIcon
} from "@phosphor-icons/react"
import type { Artist } from "@/data/artists"

type CommunitySectionProps = {
  artist: Artist
}

export const CommunitySection = ({ artist }: CommunitySectionProps) => {
  const [expanded, setExpanded] = useState(false)
  const avatarsPerRow = 6
  const visibleRows = 3

  const fanbase = artist.fanbase || []
  const leaderboard = artist.leaderboard || []

  const fansToDisplay = expanded
    ? fanbase
    : fanbase.slice(0, visibleRows * avatarsPerRow)
  const rows = Math.ceil(fansToDisplay.length / avatarsPerRow)

  return (
    <div className='flex w-full max-w-[1200px] gap-[39px]'>
      {/* LEFT COLUMN: Top Holders */}
      <div className='flex flex-col w-[580.5px] gap-6'>
        <h2 className='text-white font-inter font-semibold text-[30px] leading-9'>
          Top Holders
        </h2>
        <div className='flex flex-col gap-6 mt-4'>
          {leaderboard.slice(0, 9).map((holder) => (
            <LeaderBoard
              key={holder.rank}
              rank={holder.rank}
              avatarSrc={holder.avatarSrc}
              username={holder.username}
              score={holder.score}
              tokenSymbol={holder.tokenSymbol}
            />
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN: Fanbase */}
      <div className='flex flex-col w-[580.5px] gap-6'>
        <h2 className='text-white font-inter font-semibold text-[30px] leading-9'>
          Fanbase
        </h2>
        <div className='flex flex-col gap-6 p-6 rounded-[10px] mt-4 bg-[#121B2B] border border-[#2D3953] shadow-md'>
          {[...Array(rows)].map((_, rowIndex) => (
            <div key={rowIndex} className='flex justify-between h-[76px]'>
              {fansToDisplay
                .slice(
                  rowIndex * avatarsPerRow,
                  rowIndex * avatarsPerRow + avatarsPerRow
                )
                .map((fan, index) => (
                  <Avatar
                    key={index}
                    variant={
                      fan.initials
                        ? "square-community-initials"
                        : "square-community"
                    }
                    src={fan.src}
                    initials={fan.initials}
                  />
                ))}
            </div>
          ))}

          <Button
            variant='follow-share'
            className='flex items-center gap-2.5 h-10 rounded-md border px-4 py-2'
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
