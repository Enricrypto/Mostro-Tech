"use client"

import React, { useState } from "react"
import { Badge } from "@/components/utils/Badge"
import { Button } from "@/components/atoms/Button"
import { Avatar } from "@/components/atoms/Avatar"
import { Socials } from "@/components/atoms/Socials"
import { ShareArtistModal } from "@/components/utils/Modal/ShareArtistModal/ShareArtistModal"
import {
  StarIcon,
  UserPlusIcon,
  UserCheckIcon,
  LinkSimpleIcon,
  CurrencyDollarIcon
} from "@phosphor-icons/react"
import type { Artist } from "@/data/artists"
import type { SocialType } from "@/components/atoms/Socials/Socials"

interface FullArtistCardProps {
  artist: Artist
  onBuyToken?: () => void
}

export const FullArtistCard: React.FC<FullArtistCardProps> = ({
  artist,
  onBuyToken
}) => {
  const [isFollowing, setIsFollowing] = useState(false)
  const [isShareOpen, setIsShareOpen] = useState(false)

  const handleClick = () => setIsFollowing((prev) => !prev)
  const handleShareClick = () => setIsShareOpen(true)
  const handleCloseModal = () => setIsShareOpen(false)

  const socials: SocialType[] = artist.socials || [
    "instagram",
    "twitter",
    "discord"
  ]

  return (
    <div
      className='
        flex flex-col gap-8 rounded-[10px] border-2
        w-full max-w-[1348px]
        p-6 md:p-8
        mx-auto
        border-[#2D3953]
        bg-[linear-gradient(106.97deg,#121B2B_74.58%,#DCFD63_83.9%,#4995E0_91.25%)]
        shadow-md
      '
    >
      {/* Top Section */}
      <div
        className='
    flex flex-col items-center gap-4
    md:flex-row md:items-center md:justify-between md:gap-4
  '
      >
        {/* Badge */}
        <Badge
          variant='profileLabel'
          className='flex items-center gap-2 justify-center'
        >
          <StarIcon size={20} className='text-[#EEFF00]' />
          <span className='text-xs md:text-sm font-medium text-black'>
            {artist.badgeText}
          </span>
        </Badge>

        {/* Socials + Buttons */}
        <div
          className='
      flex flex-col items-center gap-3
      sm:flex-row sm:flex-wrap sm:justify-center
      md:justify-end md:items-center
    '
        >
          {/* Social icons */}
          <Socials socials={socials} size='default' themeVariant='black' />

          {/* Buttons */}
          <div
            className='
        flex items-center gap-2
        sm:flex-row sm:gap-3
      '
          >
            <Button
              variant='follow-share'
              icon={isFollowing ? <UserCheckIcon /> : <UserPlusIcon />}
              iconPosition='left'
              onClick={handleClick}
            >
              {isFollowing ? "Following" : "Follow"}
            </Button>

            <Button
              variant='follow-share'
              icon={<LinkSimpleIcon />}
              iconPosition='left'
              onClick={handleShareClick}
            >
              Share
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className='
    flex flex-col md:flex-row gap-8 md:gap-12
    items-center md:items-start text-center md:text-left
  '
      >
        {/* Avatar */}
        <Avatar
          variant='square-lg'
          src={artist.image}
          alt={`${artist.name} profile picture`}
          className='w-[180px] h-[180px] md:w-60 md:h-60 shrink-0'
        />

        {/* Artist Info + Token Data */}
        <div className='flex flex-col flex-1 gap-6 md:gap-9 items-center md:items-start'>
          {/* Artist Info */}
          <div className='flex flex-col gap-4 md:gap-6 max-w-[680px] items-center md:items-start'>
            <h1
              className='
          font-poppins font-normal
          text-[clamp(1.75rem,3vw,3rem)]
          leading-tight text-white
        '
            >
              {artist.name}
            </h1>

            <div className='flex justify-center md:justify-start'>
              <Badge variant='genre'>{artist.genreBadge}</Badge>
            </div>

            <p className='text-[clamp(0.875rem,1.3vw,1.125rem)] text-white leading-7 text-justify'>
              {artist.description}
            </p>
          </div>

          {/* Token Data */}
          <div className='flex flex-wrap justify-center md:justify-start items-center gap-8 md:gap-10'>
            {[
              { label: "Token", value: `$${artist.token?.name}` },
              { label: "Price", value: `$${artist.token?.price}` },
              { label: "Holders", value: artist.token?.holders }
            ].map((item) => (
              <div
                key={item.label}
                className='flex flex-col items-center md:items-start gap-1'
              >
                <span
                  className='text-datacard-value bg-clip-text text-transparent'
                  style={{
                    backgroundImage:
                      "linear-gradient(270deg, #4995E0 3.6%, #DCFD63 96%)"
                  }}
                >
                  {item.value}
                </span>
                <span className='text-sm text-white'>{item.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className='flex w-full justify-center md:justify-start'>
            <Button
              variant='buy-token'
              icon={<CurrencyDollarIcon />}
              iconPosition='left'
              onClick={onBuyToken}
              className='w-full md:w-auto'
            >
              Buy Token
            </Button>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {isShareOpen && (
        <div
          className='fixed inset-0 z-50 bg-black/50 flex items-center justify-center'
          onClick={handleCloseModal}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <ShareArtistModal artistSlug={artist.slug} />
          </div>
        </div>
      )}
    </div>
  )
}
