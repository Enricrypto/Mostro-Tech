"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams, useParams } from "next/navigation"
import { BadgesRow } from "@/components/dashboard/BadgesRow"
import { FullArtistCard } from "@/components/molecules/FullArtistCard"
import { SectionSelector } from "@/components/navigation/SectionSelector"
import { MusicSection } from "@/components/sections/MusicSection"
import { CommunitySection } from "@/components/sections/CommunitySection"
import { ProposalsSection } from "@/components/sections/ProposalsSection"
import { TokenSection } from "@/components/sections/TokenSection/TokenSection"
import { EventModal } from "@/components/utils/Modal/EventModal"
import { BuyTokenModal } from "@/components/utils/Modal/BuyTokenModal"
import { MusicNoteIcon } from "@phosphor-icons/react"
import { artistsData } from "@/data/artists"

type SectionId = "music" | "community" | "voting" | "token"

export default function ArtistPage() {
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false)
  const [selectedTokenName, setSelectedTokenName] = useState<string | null>(
    null
  )
  const [selectedSection, setSelectedSection] = useState<SectionId>("music")
  const [eventModalData, setEventModalData] = useState<{
    title: string
    date: string
    venue: string
  } | null>(null)

  const userHoldsTokens = false
  const router = useRouter()
  const searchParams = useSearchParams()
  const { slug } = useParams()
  const artist = artistsData.find((a) => a.slug === slug)

  // Set initial section from URL query
  useEffect(() => {
    const sectionFromUrl = searchParams.get("section") as SectionId | null
    if (sectionFromUrl && sectionFromUrl !== selectedSection) {
      setSelectedSection(sectionFromUrl)
    }
  }, [searchParams, selectedSection])

  if (!artist)
    return (
      <div
        className='flex flex-col items-center justify-center h-64 rounded-2xl p-6 text-center mt-50'
        style={{
          background:
            "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
          color: "var(--color-white)",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)"
        }}
      >
        <MusicNoteIcon size={48} weight='duotone' />
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: 600,
            marginBottom: "0.25rem"
          }}
        >
          Artist Not Found
        </h2>
        <p style={{ fontSize: "1rem", color: "var(--color-light-gray)" }}>
          We're curating something special! This page is a work in progress.
          Stay tuned.
        </p>
      </div>
    )

  // Handlers
  const handleBuyToken = (tokenName: string) => {
    setSelectedSection("token") // only when clicked from main page
    setSelectedTokenName(tokenName)
    setIsBuyModalOpen(true)
  }

  const openBuyTokenModal = (tokenName: string) => {
    // opens BuyTokenModal from EventModal, does not change section
    setSelectedTokenName(tokenName)
    setIsBuyModalOpen(true)
  }

  const handleSellToken = () => {
    // TODO: implement token selling logic
  }

  const handleOpenEventModal = (title: string, date: string, venue: string) => {
    setEventModalData({ title, date, venue })
  }

  const handleCloseEventModal = () => setEventModalData(null)
  const handleClaimAccess = () => handleCloseEventModal()
  const handleViewProposal = (_proposalId: number) => {
    router.push("/vote") // static vote page
  }

  const renderSectionContent = () => {
    switch (selectedSection) {
      case "community":
        return <CommunitySection artist={artist} />
      case "voting":
        return (
          <ProposalsSection
            artist={artist}
            onViewProposal={handleViewProposal}
          />
        )
      case "token":
        return (
          <TokenSection
            artist={artist}
            onBuyToken={() => handleBuyToken(artist.token?.name || "$MART")}
            onSellToken={handleSellToken}
          />
        )
      case "music":
      default:
        return (
          <MusicSection artist={artist} onClaimAccess={handleOpenEventModal} />
        )
    }
  }

  return (
    <div className='bg-[#0A111F] min-h-screen w-full flex flex-col'>
      {/* Badges row */}
      {selectedSection === "music" && (
        <section className='top-[149px] -ml-[50vw] -mr-[50vw] border-t-2 border-b-2 border-[#121B2B] bg-[#0A111FE5] backdrop-blur-sm py-5 px-4 mt-20'>
          <div className='max-w-[1200px] mx-auto'>
            <BadgesRow />
          </div>
        </section>
      )}

      {/* Artist Card */}
      <section className='relative w-full flex justify-center mt-20'>
        <FullArtistCard
          artist={artist}
          onBuyToken={() => handleBuyToken(artist.token?.name || "$MART")}
        />
      </section>

      {/* Section Selector */}
      <section className='relative w-full flex justify-center mt-20'>
        <SectionSelector
          selected={selectedSection}
          onSelect={(id: string) => setSelectedSection(id as SectionId)}
        />
      </section>

      {/* Section Content */}
      <section className='relative w-full flex justify-center mt-20'>
        <div className='flex flex-col w-full max-w-[1200px] px-4 mx-auto'>
          {renderSectionContent()}
        </div>
      </section>

      {/* Event Modal */}
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
                userHoldsTokens
                  ? handleClaimAccess
                  : () =>
                      openBuyTokenModal(artist.token?.name || "Artist Token")
              }
              variant={userHoldsTokens ? "claimAccess" : "noTokens"}
              tokenName={artist.token?.name || "Artist Token"}
            />
          </div>
        </div>
      )}

      {/* Buy Token Modal */}
      {isBuyModalOpen && selectedTokenName && (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          <BuyTokenModal
            tokenSymbol={selectedTokenName}
            onClose={() => setIsBuyModalOpen(false)}
            onConfirm={() => {
              console.log("Confirmed purchase for", selectedTokenName)
              setIsBuyModalOpen(false)
            }}
          />
        </div>
      )}
    </div>
  )
}
