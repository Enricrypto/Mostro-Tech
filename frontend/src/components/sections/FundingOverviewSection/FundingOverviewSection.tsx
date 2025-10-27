"use client"

import React from "react"
import { FundAllocationCard } from "@/components/molecules/FundAllocationCard.tsx"
import { CurrencyDollarSimpleIcon, CalendarIcon } from "@phosphor-icons/react"

export interface FundingOverviewSectionProps {
  title: string
  subtitle: string
  description: string
  infoCards: Array<
    | { variant: "amount"; value: number | string; tokens: number }
    | { variant: "date"; date: string }
  >
  fundAllocations: Array<{
    title: string
    badgeText: string
    bottomLeftValue: number | string
  }>
}

export const FundingOverviewSection: React.FC<FundingOverviewSectionProps> = ({
  title,
  subtitle,
  description,
  infoCards,
  fundAllocations
}) => {
  return (
    <div className='w-[1200px] flex gap-6'>
      {/* LEFT CONTAINER */}
      <div className='flex-1 min-h-[776px] flex flex-col gap-6 p-6 rounded-[10px] border-2 border-white/10'>
        {/* TOP SECTION */}
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-1'>
            <span className='font-inter font-semibold text-[30px] text-white leading-9'>
              {title}
            </span>
            <span className='font-poppins font-normal text-[18px] text-(--color-highlight) leading-7'>
              {subtitle}
            </span>
          </div>
          <p className='font-poppins font-normal text-[18px] text-white leading-7'>
            {description}
          </p>
        </div>

        {/* MIDDLE SECTION - Info Cards */}
        <div className='flex gap-6 flex-wrap'>
          {infoCards.map((card, idx) => (
            <div
              key={idx}
              className='flex-1 rounded-[10px] border border-[#2D3953] bg-[#121B2B] p-4 flex flex-col gap-3'
            >
              {/* Top part */}
              <div className='flex justify-between items-center'>
                <span className='font-inter font-medium text-[12px] text-white/80'>
                  {card.variant === "amount" ? "Requested Amount" : "Deadline"}
                </span>
                {card.variant === "amount" ? (
                  <CurrencyDollarSimpleIcon
                    size={16}
                    weight='bold'
                    className='text-(--color-skyblue)'
                  />
                ) : (
                  <CalendarIcon
                    size={16}
                    weight='bold'
                    className='text-(--color-highlight)'
                  />
                )}
              </div>

              {/* Bottom part */}
              <div className='flex items-center gap-3'>
                {card.variant === "amount" ? (
                  <>
                    <span className='font-inter font-semibold text-[30px] text-white'>
                      ${card.value}
                    </span>
                    <span className='font-poppins font-normal text-[15px] text-(--color-grey)'>
                      {Number(card.tokens).toLocaleString()} Tokens
                    </span>
                  </>
                ) : (
                  <span className='font-inter font-semibold text-[30px] text-white'>
                    {card.date}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION - Fund Allocation */}
        <div className='flex flex-col gap-4'>
          <span className='font-inter font-semibold text-[30px] text-white leading-9'>
            Fund Allocation
          </span>
          <div className='flex flex-col gap-4'>
            {fundAllocations.map((allocation, idx) => (
              <FundAllocationCard
                key={idx}
                title={allocation.title}
                badgeText={allocation.badgeText}
                bottomLeftValue={allocation.bottomLeftValue}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
