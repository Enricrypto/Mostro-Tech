"use client"

import * as React from "react"

interface MiniDataArtistCardProps {
  topText: string
  bottomText: string
}

export function MiniDataArtistCard({
  topText,
  bottomText
}: MiniDataArtistCardProps) {
  return (
    <div
      className='flex flex-col gap-[var(--spacing-6)]'
      style={{
        width: "223px",
        height: "96px",
        padding: "16px 24px",
        background: "#998CE1", // could add a theme var if repeated
        borderRadius: "var(--radius-card)"
      }}
    >
      {/* Top Text */}
      <div
        className='flex items-center gap-[8px]'
        style={{ width: "124px", height: "64px" }}
      >
        <span
          className='font-inter font-medium'
          style={{ fontSize: "12px", lineHeight: "20px", color: "#000000BB" }}
        >
          {topText}
        </span>
      </div>

      {/* Bottom Text */}
      <div
        className='flex items-center gap-[8px]'
        style={{ width: "124px", height: "36px" }}
      >
        <span
          className='font-inter font-semibold'
          style={{
            fontSize: "30px",
            lineHeight: "36px",
            letterSpacing: "-0.75%",
            color: "#000000"
          }}
        >
          {bottomText}
        </span>
      </div>
    </div>
  )
}
