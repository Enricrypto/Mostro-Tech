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

export type SocialType =
  | "instagram"
  | "facebook"
  | "spotify"
  | "twitter"
  | "tiktok"
  | "youtube"

export interface FullArtistCardProps {
  badgeText: string
  genreBadge: string
  artistName: string
  artistDescription: string
  tokenName: string
  tokenPrice: string
  tokenHolders: string
  artistImage?: string
  socials?: SocialType[]
  onBuyToken?: () => void
}

export const FullArtistCard: React.FC<FullArtistCardProps> = ({
  badgeText,
  genreBadge,
  artistName,
  artistDescription,
  tokenName,
  tokenPrice,
  tokenHolders,
  artistImage,
  socials = ["instagram", "youtube", "spotify"],
  onBuyToken
}) => {
  const [isFollowing, setIsFollowing] = useState(false)
  const [isShareOpen, setIsShareOpen] = useState(false) // modal state

  const handleClick = () => {
    // Toggle the state
    setIsFollowing((prev) => !prev)
    // Here you can also trigger your API call to follow/unfollow the user
  }

  const handleShareClick = () => {
    setIsShareOpen(true) // open modal
  }

  const handleCloseModal = () => {
    setIsShareOpen(false) // close modal
  }

  return (
    <div
      className='flex flex-col gap-8 rounded-[10px] border-2'
      style={{
        width: "1348px",
        height: "506px",
        gap: "32px",
        padding: "24px",
        borderColor: "#2D3953",
        borderRadius: "10px",
        background:
          "linear-gradient(106.97deg, #121B2B 74.58%, #DCFD63 83.9%, #4995E0 91.25%)",
        boxShadow: "0px 4px 6px 0px #00000017",
        opacity: 1,
        transform: "rotate(0deg)"
      }}
    >
      {/* Top Section */}
      <div className='flex justify-between items-center'>
        {/* Badge */}
        <Badge variant='profileLabel' className='flex items-center gap-2 '>
          <StarIcon size={20} className='text-[#EEFF00]' />
          <span className='text-xs font-medium text-black'>{badgeText}</span>
        </Badge>

        {/* Socials + Follow/Share Buttons */}
        <div className='flex items-center gap-2'>
          <Socials socials={socials} size='default' themeVariant='black' />

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

      {/* Bottom Section */}
      <div className='flex gap-12'>
        {/* Left: Avatar */}
        <Avatar
          variant='square-lg'
          src={artistImage}
          alt={`${artistName} profile picture`}
        />

        {/* Right: Info */}
        <div
          className='flex flex-col gap-6 flex-1'
          style={{
            gap: "42px",
            opacity: 1,
            transform: "rotate(0deg)"
          }}
        >
          {/* Name + Handle + Badge */}
          <div className='flex flex-col gap-6'>
            <div className='flex justify-start'>
              <Badge variant='genre'>{genreBadge}</Badge>
            </div>

            <p className='text-lg text-white leading-7'>{artistDescription}</p>
          </div>

          {/* Stats */}
          <div className='flex items-center gap-10 flex-wrap'>
            <div className='flex flex-col gap-1'>
              <span
                className='text-datacard-value bg-clip-text text-transparent'
                style={{
                  backgroundImage:
                    "linear-gradient(270deg, #4995E0 3.6%, #DCFD63 96%)"
                }}
              >
                ${tokenName}
              </span>
              <span className='text-sm text-white'>Token</span>
            </div>
            <div className='flex flex-col gap-1'>
              <span
                className='text-datacard-value bg-clip-text text-transparent'
                style={{
                  backgroundImage:
                    "linear-gradient(270deg, #4995E0 3.6%, #DCFD63 96%)"
                }}
              >
                ${tokenPrice}
              </span>
              <span className='text-sm text-white'>Price</span>
            </div>
            <div className='flex flex-col gap-1'>
              <span
                className='text-datacard-value bg-clip-text text-transparent'
                style={{
                  backgroundImage:
                    "linear-gradient(270deg, #4995E0 3.6%, #DCFD63 96%)"
                }}
              >
                {tokenHolders}
              </span>
              <span className='text-sm text-white'>Holders</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className='flex gap-4 flex-wrap'>
            <Button
              variant='buy-token'
              icon={<CurrencyDollarIcon />}
              iconPosition='left'
              onClick={onBuyToken}
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
          onClick={handleCloseModal} // clicking the overlay closes modal
        >
          <div onClick={(e) => e.stopPropagation()}>
            <ShareArtistModal />
          </div>
        </div>
      )}
    </div>
  )
}
