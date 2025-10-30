"use client"

import React from "react"

interface DataCardProps {
  title: string // Top text
  value: string // Bottom text
}

export const DataCard: React.FC<DataCardProps> = ({ title, value }) => {
  return (
    <div
      className='w-[223px] h-[96px] p-[16px_24px] rounded-[10px] border border-solid flex flex-col gap-[14px]'
      style={{
        backgroundColor: "var(--color-datacard-bg)",
        borderColor: "var(--color-datacard-border)"
      }}
    >
      {/* Top text */}
      <div className='w-[124px] h-[20px]'>
        <span
          className='text-small font-inter font-medium'
          style={{
            color: "var(--color-proposal-artist)", // #B3B3B3 from theme
            lineHeight: "20px"
          }}
        >
          {title}
        </span>
      </div>

      {/* Bottom text */}
      <div className='w-[124px] h-[36px]'>
        <span className='text-datacard-value'>{value}</span>
      </div>
    </div>
  )
}
