"use client"

import React from "react"
import { Badge } from "@/components/utils/Badge"
import { Button } from "@/components/atoms/Button"
import { Avatar } from "@/components/atoms/Avatar"
import { Socials } from "@/components/atoms/Socials"
import { mockFullArtistData } from "@/mocks/mockFullArtistData"
import {
  StarIcon,
  MusicNoteIcon,
  UserPlusIcon,
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
  artistName: string
  artistHandle: string
  artistDescription: string
  tokenName: string
  tokenPrice: string
  tokenHolders: string
  artistImage?: string
  socials?: SocialType[]
}

export const FullArtistCard: React.FC<FullArtistCardProps> = ({
  badgeText,
  artistName,
  artistHandle,
  artistDescription,
  tokenName,
  tokenPrice,
  tokenHolders,
  artistImage,
  socials = ["instagram", "youtube", "spotify"]
}) => {
  return (
    <div className='flex flex-col gap-6 p-6 rounded-[var(--radius-card)] border-2 border-[var(--color-datacard-border)] shadow-[var(--shadow-md)] bg-[linear-gradient(106.97deg,#121B2B_74.58%,#DCFD63_83.9%,#4995E0_91.25%)]'>
      {/* Top Section */}
      <div className='flex justify-between items-center'>
        {/* Badge */}
        <Badge variant='profileLabel' className='flex items-center gap-2'>
          <StarIcon size={20} className='text-[#EEFF00]' />
          <span className='text-xs font-medium text-black'>{badgeText}</span>
        </Badge>

        {/* Socials + Follow/Share Buttons */}
        <div className='flex items-center gap-2'>
          <Socials socials={socials} variant='default' themeVariant='black' />

          <Button
            variant='follow-share'
            icon={<UserPlusIcon />}
            iconPosition='left'
          >
            Follow
          </Button>
          <Button
            variant='follow-share'
            icon={<LinkSimpleIcon />}
            iconPosition='left'
          >
            Share
          </Button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='flex gap-4'>
        {/* Left: Avatar */}
        <Avatar
          variant='square-lg'
          src={artistImage}
          alt={`${artistName} profile picture`}
        />

        {/* Right: Info */}
        <div className='flex flex-col gap-6 flex-1'>
          {/* Name + Handle + Badge */}
          <div className='flex flex-col gap-4'>
            <div>
              <h1 className='text-4xl font-normal text-white'>{artistName}</h1>
              <p className='text-xl text-[var(--color-muted)]'>
                {artistHandle}
              </p>
            </div>

            <div className='flex justify-start'>
              <Badge variant='genre'>{badgeText}</Badge>
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
                {tokenPrice}
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
            >
              Buy Token
            </Button>
            <Button
              variant='join-fun-club'
              icon={<MusicNoteIcon />}
              iconPosition='left'
            >
              Join Fun Club
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
