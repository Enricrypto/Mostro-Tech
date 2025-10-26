"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { BadgesRow } from "@/components/dashboard/BadgesRow"
import { FullArtistCard } from "@/components/molecules/FullArtistCardProfile"
import { SectionSelector } from "@/components/navigation/SectionSelector"
import { MusicSection } from "@/components/display/MusicSection"
import { CommunitySection } from "@/components/molecules/CommunitySection"
import { ProposalsSection } from "@/components/molecules/ProposalsSection"
import { TokenSection } from "@/components/molecules/TokenSection/TokenSection"
import { EventModal } from "@/components/utils/Modal/EventModal"
import { mockFullArtistData } from "@/mocks/mockFullArtistData"

type SectionId = "music" | "community" | "voting" | "token"

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
      case "voting":
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
