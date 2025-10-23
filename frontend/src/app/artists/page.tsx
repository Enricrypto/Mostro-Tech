"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { BadgesRow } from "@/components/dashboard/BadgesRow"
import { FullArtistCard } from "@/components/molecules/FullArtistCardProfile"
import { SectionSelector } from "@/components/navigation/SectionSelector"
import { LeaderBoard } from "@/components/molecules/Leaderboard"
import { Avatar } from "@/components/atoms/Avatar"
import { Button } from "@/components/atoms/Button"
import { MusicSection } from "@/components/display/MusicSection"
import { ProposalsSection } from "@/components/molecules/ProposalsSection"
import { EventModal } from "@/components/utils/Modal/EventModal"
import { mockFullArtistData } from "@/mocks/mockFullArtistData"
import { mockLeaderboardData } from "@/mocks/mockLeaderboardData"
import { mockFanbase } from "@/mocks/mockFanBase"
import { ArrowUpRightIcon } from "@phosphor-icons/react"

type SectionId = "music" | "community" | "proposals" | "token"

export default function ArtistPage() {
  const userHoldsTokens = false
  const artist = mockFullArtistData[0]

  const [selectedSection, setSelectedSection] = useState<SectionId>("music")

  const router = useRouter()

  // Modal State
  const [eventModalData, setEventModalData] = useState<{
    title: string
    date: string
    venue: string
  } | null>(null)

  const handleBuyToken = () => {
    router.push("/token") // redirect to token page
  }

  // Open Modal from Event
  const handleOpenEventModal = (title: string, date: string, venue: string) => {
    setEventModalData({ title, date, venue })
  }

  // Close Modal
  const handleCloseEventModal = () => {
    setEventModalData(null)
  }

  // Function to claim access to event
  const handleClaimAccess = () => {
    console.log("User confirmed claim access to livestream")
    // TODO: Add claim logic here
    handleCloseEventModal() // close modal after claiming
  }

  // Function to view proposal
  const handleViewProposal = () => {
    router.push("./vote") // navigate to Vote page for that proposal
  }

  // Map selected section to JSX content
  const sectionContentMap = {
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
    proposals: <ProposalsSection onViewProposal={handleViewProposal} />,
    token: <div className='text-white mt-4'>Token Section Placeholder</div>
  }

  return (
    <div className='bg-[#0A111F] min-h-screen w-full flex flex-col items-center pb-[100px]'>
      {selectedSection === "music" && (
        <section className='sticky top-[149px] z-10 w-screen left-[00%] right-[50%] -ml-[50vw] -mr-[50vw] border-t-2 border-b-2 border-[#121B2B] bg-[#0A111FE5] backdrop-blur-sm py-5 px-4'>
          <div className='max-w-[1200px] mx-auto'>
            <BadgesRow />
          </div>
        </section>
      )}

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
          onBuyToken={handleBuyToken}
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
          {selectedSection === "music" ? (
            <MusicSection onClaimAccess={handleOpenEventModal} />
          ) : (
            sectionContentMap[selectedSection]
          )}
        </div>
      </section>

      {eventModalData && (
        <div
          className='fixed inset-0 z-50 bg-black/50 flex items-center justify-center'
          onClick={handleCloseEventModal} // clicking the overlay closes modal
        >
          <div
            onClick={(e) => e.stopPropagation()} // prevent clicks inside modal from closing
            className='relative'
          >
            <EventModal
              title={eventModalData.title}
              date={eventModalData.date}
              venue={eventModalData.venue}
              onCancel={handleCloseEventModal}
              onBuyOrConfirm={
                userHoldsTokens ? handleClaimAccess : handleBuyToken
              }
              variant={userHoldsTokens ? "claimAccess" : "noTokens"}
            />
          </div>
        </div>
      )}
    </div>
  )
}
