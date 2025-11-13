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
    <div className='w-full flex justify-center text-center lg:text-left'>
      <div className="flex flex-col lg:flex-row w-full max-w-300 gap-6">
        {/* LEFT CONTAINER */}
        <div className='flex-1 min-h-194 flex flex-col gap-6 p-6 rounded-[10px] border-2 border-white/10 sm:p-7 md:p-8 lg:p-10'>
          {/* TOP SECTION */}
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-1 '>
              <span className="font-inter font-semibold text-[1.875rem] text-white leading-9 sm:text-[2rem]">
                {title}
              </span>
              <span className='font-poppins font-normal text-[1.125rem] text-(--color-highlight) leading-7'>
                {subtitle}
              </span>
            </div>
            <p className='font-poppins font-normal text-[1.125rem] text-white leading-7'>
              {description}
            </p>
          </div>

          {/* MIDDLE SECTION - Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {infoCards.map((card, idx) => (
              <div
                key={idx}
                className='flex-1 rounded-[10px] border border-[#2D3953] bg-[#121B2B] p-4 flex flex-col gap-3'
              >
                {/* Top part */}
                <div className='flex justify-between items-center'>
                  <span className='font-inter font-medium text-[0.75rem] text-white/80'>
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
                <div className='flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-3'>
                  {card.variant === "amount" ? (
                    <>
                      <span className='font-inter font-semibold text-[1.875rem] text-white'>
                        ${card.value}
                      </span>
                      <span className='font-poppins font-normal text-[0.9375rem] text-[var(--color-grey)])'>
                        {Number(card.tokens).toLocaleString()} Tokens
                      </span>
                    </>
                  ) : (
                    <span className='font-inter font-semibold text-[1.875rem] text-white'>
                      {card.date}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM SECTION - Fund Allocation */}
          <div className='flex flex-col gap-4'>
            <span className='font-inter font-semibold text-[1.875rem] text-white leading-9'>
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
    </div>
  )
}
