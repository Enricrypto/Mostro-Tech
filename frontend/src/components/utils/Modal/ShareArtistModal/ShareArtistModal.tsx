"use client"

import { CopySimpleIcon } from "@phosphor-icons/react"
import { useState } from "react"

export const ShareArtistModal = () => {
  const [copied, setCopied] = useState(false)
  const artistUrl = "https://musicverse.io/artist/lunaeclipse"

  const handleCopy = () => {
    navigator.clipboard.writeText(artistUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      style={{
        width: 425,
        height: 208,
        top: 132,
        left: 543,
        padding: 24,
        gap: 16,
        borderRadius: 8,
        border: "1px solid #2D3953",
        background:
          "linear-gradient(103.78deg, #352B6D 26.89%, #4995E0 98.11%)",
        display: "flex",
        flexDirection: "column",
        position: "absolute"
      }}
    >
      {/* Header */}
      <h2
        style={{
          fontFamily: "Inter",
          fontWeight: 600,
          fontSize: 18,
          color: "#FFFFFF"
        }}
      >
        Share Artist
      </h2>

      {/* Description */}
      <p
        style={{
          width: 377,
          fontFamily: "Inter",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "20px",
          color: "#FFFFFF"
        }}
      >
        Spread the word about Luna Eclipse! Invite your friends to explore her
        sound and join the $MARTIST community.
      </p>

      {/* URL + copy */}
      <div
        style={{
          width: 377,
          height: 40,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 6,
          border: "1px solid #CBD5E1",
          padding: "8px 12px",
          cursor: "pointer",
          position: "relative" // <-- needed for absolute tooltip
        }}
        onClick={handleCopy}
      >
        <span
          style={{
            width: 295,
            height: 24,
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "24px",
            color: "#FFFFFF",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }}
        >
          {artistUrl}
        </span>
        <CopySimpleIcon size={16} color='#FFFFFF' weight='bold' />

        {/* Copied tooltip */}
        {copied && (
          <span
            style={{
              position: "absolute",
              top: "-28px",
              right: 0,
              background: "#1E293B",
              color: "#FFFFFF",
              fontSize: 14,
              fontWeight: 500,
              fontFamily: "Inter",
              padding: "4px 8px",
              borderRadius: 4,
              opacity: 0.9,
              whiteSpace: "nowrap",
              pointerEvents: "none",
              transition: "opacity 0.2s ease-in-out"
            }}
          >
            Copied!
          </span>
        )}
      </div>
    </div>
  )
}
