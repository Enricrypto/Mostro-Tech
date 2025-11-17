"use client"

import React from "react"

interface DataCardProps {
  title: string // Top text
  value: string // Bottom text
  className?: string // optional for layout flexibility
}

export const DataCard: React.FC<DataCardProps> = ({
  title,
  value,
  className
}) => {
  return (
    <div
      className={`
        flex flex-col justify-center
        p-4 sm:p-5 md:p-6
        rounded-[10px] border border-solid
        gap-2 sm:gap-3
        ${className || ""}
      `}
      style={{
        backgroundColor: "var(--color-datacard-bg)",
        borderColor: "var(--color-datacard-border)",
        width: "clamp(10rem, 45%, 14rem)",
        minHeight: "clamp(5rem, 8vw, 6rem)"
      }}
    >
      {/* Top text */}
      <div>
        <span
          className='font-inter font-medium text-[clamp(0.75rem, 1.5vw, 0.875rem)] leading-5'
          style={{ color: "var(--color-proposal-artist)" }}
        >
          {title}
        </span>
      </div>

      {/* Bottom text */}
      <div>
        <span className='text-[clamp(1.1rem, 2vw, 1.25rem)] font-semibold text-datacard-value'>
          {value}
        </span>
      </div>
    </div>
  )
}
