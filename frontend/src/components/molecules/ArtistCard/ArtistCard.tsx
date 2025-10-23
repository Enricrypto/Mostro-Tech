"use client"

import { Avatar } from "@/components/atoms/Avatar/Avatar"
import { Badge } from "@/components/utils/Badge/Badge"
import { Button } from "@/components/atoms/Button/Button"
import { ClockIcon } from "@phosphor-icons/react"
import { ArrowUpRightIcon } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"
import React from "react"

interface ArtistFullCardProps {
  artistName: string
  tokenName: string
  avatarSrc: string
  badgeText: string
  description: string
  holders: string | number
  marketCap: string | number
  totalSupply: string | number
  genre: string
}

export function ArtistCard({
  artistName,
  tokenName,
  avatarSrc,
  badgeText,
  description,
  holders,
  marketCap,
  totalSupply,
  genre
}: ArtistFullCardProps) {
  // Convert badgeText to number to determine variant
  const numberValue = parseFloat(badgeText.replace(/[^0-9.-]+/g, "")) // removes any symbols like %
  const badgeVariant = numberValue >= 0 ? "increase" : "decrease"

  return (
    <div
      className={cn(
        "w-[384px] h-[395px] rounded-[10px] border-2 border-[#2D3953] bg-[#121B2B] shadow-[0px_4px_6px_0px_#00000017] p-6 flex flex-col gap-[14px] transition-all duration-300 ease-out hover:scale-[1.02] hover:border-[#dcfd63]"
      )}
    >
      {/* Top Section of Artist Card */}
      <div className='flex w-[336px] h-[151px] gap-[24px]'>
        {/* Avatar on the left */}
        <div className='w-[151px] h-[151px]'>
          <Avatar variant='square-sm-lg' src={avatarSrc} alt={artistName} />
        </div>

        {/* Artist info + token + badge on the right */}
        <div className='flex flex-col justify-start w-[146px] gap-[12px]'>
          {" "}
          {/* Removed fixed height h-[62px] to allow gap to work */}
          {/* Artist Name */}
          <p className='text-white font-inter font-medium text-[24px] leading-[28px] tracking-[-0.5%]'>
            {artistName}{" "}
            {/* Removed fixed width/height to allow text to size naturally */}
          </p>
          {/* Token Name + Badge */}
          <div className='flex items-center gap-[15px]'>
            {" "}
            {/* Removed w/h to prevent constraining children */}
            {/* Token Name */}
            <p className='text-white font-inter text-[16px] leading-[20px]'>
              {tokenName} {/* Removed w/h */}
            </p>
            {/* Badge Icon */}
            <Badge
              variant={badgeVariant}
              icon={<ClockIcon weight='fill' size={14} />}
            >
              {badgeText}
            </Badge>
          </div>
        </div>
      </div>

      {/* Description + Genre Badge Section */}
      <div className='flex flex-col justify-start w-[336px] gap-[8px] h-[70px]'>
        {" "}
        {/* Section container */}
        <div className='flex justify-start'>
          <Badge variant='genre'>{genre}</Badge>
        </div>
        {/* Description text */}
        <p className='text-[#B3B3B3] font-medium text-[12px] leading-[20px] w-full h-[40px]'>
          {description || "No description provided."}
        </p>
      </div>

      {/* Stats Section: holders, market cap, volume */}
      <div className='flex w-[336px] h-[44px] gap-[36px]'>
        {/* 1) Holders */}
        <div className='flex flex-col items-start gap-[8px]'>
          <p className='text-white font-poppins font-normal text-[18px] leading-[20px]'>
            {holders}
          </p>
          <p className='text-[#B3B3B3] font-inter font-medium text-[12px] leading-[16px]'>
            Holders
          </p>
        </div>

        {/* 2) Market Cap */}
        <div className='flex flex-col items-start gap-[8px]'>
          <p className='text-white font-poppins font-normal text-[18px] leading-[20px]'>
            {marketCap}
          </p>
          <p className='text-[#B3B3B3] font-inter font-medium text-[12px] leading-[16px] whitespace-nowrap'>
            Market Cap
          </p>
        </div>

        {/* 3) Total Supply */}
        <div className='flex flex-col items-start gap-[8px]'>
          <p className='text-white font-poppins font-normal text-[18px] leading-[20px]'>
            {totalSupply}
          </p>
          <p className='text-[#B3B3B3] font-inter font-medium text-[12px] leading-[16px] whitespace-nowrap'>
            Total Supply
          </p>
        </div>
      </div>

      {/* Button Section */}
      <div className='w-[336px] h-[40px]'>
        <Button
          variant='follow-share'
          icon={<ArrowUpRightIcon weight='fill' size={16} />}
          className='w-full h-full px-[16px] py-[8px] gap-[10px]'
        >
          View Artist
        </Button>
      </div>
    </div>
  )
}
