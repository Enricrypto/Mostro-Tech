"use client"

import { useState } from "react"
import { BadgesRow } from "@/components/dashboard/BadgesRow"
import { FullArtistCard } from "@/components/molecules/FullArtistCardProfile"
import { SectionSelector } from "@/components/navigation/SectionSelector"
import { FeatureSongCard } from "@/components/display/FeaturedSong"
import { SongCard } from "@/components/display/SongCard"
import { PerksCard } from "@/components/molecules/PerksCard"
import { UpcomingEvent } from "@/components/display/UpcomingEvent"
import { LeaderBoard } from "@/components/molecules/Leaderboard"
import { Avatar } from "@/components/atoms/Avatar"
import { Button } from "@/components/atoms/Button"
import { MusicSection } from "@/components/display/MusicSection"
import { ProposalsSection } from "@/components/molecules/ProposalsSection"
import { mockFullArtistData } from "@/mocks/mockFullArtistData"
import { mockArtists } from "@/mocks/mockArtists"
import { mockPerks } from "@/mocks/mockPerks"
import { mockSongData } from "@/mocks/mockSongData"
import { upcomingEvents } from "@/mocks/mockUpcomingEvents"
import { mockLeaderboardData } from "@/mocks/mockLeaderboardData"
import { mockFanbase } from "@/mocks/mockFanBase"
import { MusicNoteIcon, ArrowUpRightIcon } from "@phosphor-icons/react"

type SectionId = "music" | "community" | "proposals" | "token"

export default function ArtistPage() {
  const [selectedSection, setSelectedSection] = useState<SectionId>("music")

  const artist = mockFullArtistData[0]

  // Map selected section to JSX content
  const sectionContentMap = {
    music: <MusicSection />,
    community: (
      <div
        className='flex w-full max-w-[1200px] gap-[39px]'
        style={{ height: "1156px" }}
      >
        {/* LEFT COLUMN: Top Holders */}
        <div className='flex flex-col w-[580.5px] gap-[24px]'>
          <h2 className='text-white font-inter font-semibold text-[30px] leading-[36px]'>
            Top Holders
          </h2>
          <div className='flex flex-col gap-[24px] mt-4'>
            {mockLeaderboardData.slice(0, 9).map((holder) => (
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
        <div className='flex flex-col w-[580.5px] gap-[24px]'>
          <h2 className='text-white font-inter font-semibold text-[30px] leading-[36px]'>
            Fanbase
          </h2>

          <div
            className='flex flex-col gap-[24px] p-[24px] rounded-[10px] mt-4'
            style={{
              width: "580.5px",
              height: "376px",
              background: "#121B2B",
              border: "2px solid #2D3953",
              boxShadow: "0px 4px 6px 0px #00000017"
            }}
          >
            {[0, 1, 2].map((rowIndex) => (
              <div
                key={rowIndex}
                className='flex justify-between'
                style={{
                  width: "532.5px",
                  height: "76px"
                }}
              >
                {mockFanbase
                  .slice(rowIndex * 6, rowIndex * 6 + 6)
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
            {/* Button at the bottom */}
            <Button
              variant='follow-share' // or your preferred variant
              className='flex items-center w-[532.5px] h-[40px] gap-[10px] rounded-[6px] border-[1px] px-4 py-2'
              icon={<ArrowUpRightIcon size={16} weight='bold' />}
              iconPosition='right'
            >
              See all 23 Supporters
            </Button>
          </div>
        </div>
      </div>
    ),
    proposals: (
      <div className='mt-4'>
        <ProposalsSection />
      </div>
    ),
    token: <div className='text-white mt-4'>Token Section Placeholder</div>
  }

  return (
    <div className='bg-[#0A111F] min-h-screen w-full flex flex-col items-center pb-[100px]'>
      {/* Badges */}
      <section
        className='sticky top-[149px] z-10 w-full bg-[#0A111FE5]'
        style={{
          borderTop: "2px solid #121B2B",
          borderBottom: "2px solid #121B2B",
          backdropFilter: "blur(4px)"
        }}
      >
        <div className='max-w-[1512px] mx-auto px-[101px] py-[20px]'>
          <BadgesRow />
        </div>
      </section>

      {/* Full Artist Card */}
      <section className='relative w-full flex justify-center mt-20'>
        <FullArtistCard
          badgeText={artist.badgeText}
          artistName={artist.artistName}
          artistHandle={artist.artistHandle}
          artistDescription={artist.artistDescription}
          tokenName={artist.tokenName}
          tokenPrice={artist.tokenPrice}
          tokenHolders={artist.tokenHolders}
          artistImage={artist.artistImage}
          socials={artist.socials}
        />
      </section>

      {/* Section Selector */}
      <section className='relative w-full flex justify-center mt-20'>
        <SectionSelector
          selected={selectedSection}
          onSelect={(id: string) => setSelectedSection(id as SectionId)}
        />
      </section>

      {/* Render Section Content */}
      <section className='relative w-full flex justify-center mt-20'>
        <div className='flex flex-col w-full max-w-[1200px] px-4 mx-auto'>
          {sectionContentMap[selectedSection]}
        </div>
      </section>
    </div>
  )
}
