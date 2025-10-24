"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { BadgesRow } from "@/components/dashboard/BadgesRow"
import { FullArtistCard } from "@/components/molecules/FullArtistCardProfile"
import { SectionSelector } from "@/components/navigation/SectionSelector"
import { LeaderBoard } from "@/components/molecules/Leaderboard"
import { Avatar } from "@/components/atoms/Avatar"
import { Button } from "@/components/atoms/Button"
import { MusicSection } from "@/components/display/MusicSection"
import { ProposalsSection } from "@/components/molecules/ProposalsSection"
import { TokenSection } from "@/components/molecules/TokenSection/TokenSection"
import { EventModal } from "@/components/utils/Modal/EventModal"
import { mockFullArtistData } from "@/mocks/mockFullArtistData"
import { mockLeaderboardData } from "@/mocks/mockLeaderboardData"
import { mockFanbase } from "@/mocks/mockFanBase"
import { ArrowUpRightIcon } from "@phosphor-icons/react"

type SectionId = "music" | "community" | "proposals" | "token"

const CommunitySection = () => (
  <div className='flex w-full max-w-[1200px] gap-[39px]'>
    {/* LEFT COLUMN: Top Holders */}
    <div className='flex flex-col w-[580.5px] gap-6'>
      <h2 className='text-white font-inter font-semibold text-[30px] leading-9'>
        Top Holders
      </h2>
      <div className='flex flex-col gap-6 mt-4'>
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
    <div className='flex flex-col w-[580.5px] gap-6'>
      <h2 className='text-white font-inter font-semibold text-[30px] leading-9'>
        Fanbase
      </h2>
      <div className='flex flex-col gap-6 p-6 rounded-[10px] mt-4 bg-[#121B2B] border border-[#2D3953] shadow-md'>
        {[0, 1, 2].map((rowIndex) => (
          <div
            key={rowIndex}
            className='flex justify-between h-[76px] w-[532.5px]'
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
        <Button
          variant='follow-share'
          className='flex items-center w-[532.5px] h-10 gap-2.5 rounded-md border px-4 py-2'
          icon={<ArrowUpRightIcon size={16} weight='bold' />}
          iconPosition='right'
        >
          See all 23 Supporters
        </Button>
      </div>
    </div>
  </div>
)

export default function ArtistPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const sectionFromUrl = searchParams.get("section") as SectionId | null

  const [selectedSection, setSelectedSection] = useState<SectionId>(
    sectionFromUrl || "music"
  )
  const [eventModalData, setEventModalData] = useState<{
    title: string
    date: string
    venue: string
  } | null>(null)

  const artist = mockFullArtistData[0]
  const userHoldsTokens = false

  useEffect(() => {
    if (sectionFromUrl && sectionFromUrl !== selectedSection) {
      setSelectedSection(sectionFromUrl)
    }
  }, [sectionFromUrl, selectedSection])

  const handleBuyToken = () => {
    setSelectedSection("token")
    router.push("?section=token")
  }

  const handleOpenEventModal = (title: string, date: string, venue: string) => {
    setEventModalData({ title, date, venue })
  }

  const handleCloseEventModal = () => setEventModalData(null)

  const handleClaimAccess = () => {
    console.log("User confirmed claim access to livestream")
    handleCloseEventModal()
  }

  const handleViewProposal = () => router.push("./vote")

  const renderSectionContent = () => {
    switch (selectedSection) {
      case "community":
        return <CommunitySection />
      case "proposals":
        return <ProposalsSection onViewProposal={handleViewProposal} />
      case "token":
        return (
          <TokenSection
            onBuyToken={handleBuyToken}
            onSellToken={() => console.log("Sell token")}
          />
        )
      case "music":
      default:
        return <MusicSection onClaimAccess={handleOpenEventModal} />
    }
  }

  return (
    <div className='bg-[#0A111F] min-h-screen w-full flex flex-col items-center pb-[100px]'>
      {selectedSection === "music" && (
        <section className='sticky top-[149px] z-10 w-screen left-0 right-0 border-t-2 border-b-2 border-[#121B2B] bg-[#0A111FE5] backdrop-blur-sm py-5 px-4'>
          <div className='max-w-[1200px] mx-auto'>
            <BadgesRow />
          </div>
        </section>
      )}

      <section className='relative w-full flex justify-center mt-20'>
        <FullArtistCard {...artist} onBuyToken={handleBuyToken} />
      </section>

      <section className='relative w-full flex justify-center mt-20'>
        <SectionSelector
          selected={selectedSection}
          onSelect={(id: string) => setSelectedSection(id as SectionId)}
        />
      </section>

      <section className='relative w-full flex justify-center mt-20'>
        <div className='flex flex-col w-full max-w-[1200px] px-4 mx-auto'>
          {renderSectionContent()}
        </div>
      </section>

      {eventModalData && (
        <div
          className='fixed inset-0 z-50 bg-black/50 flex items-center justify-center'
          onClick={handleCloseEventModal}
        >
          <div onClick={(e) => e.stopPropagation()} className='relative'>
            <EventModal
              {...eventModalData}
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
