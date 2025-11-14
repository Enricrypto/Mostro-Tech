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
    <div className='w-full flex justify-center text-center lg:text-left border-2 border-[#2D3953] rounded-[0.625rem]'>
      <div className='flex flex-col lg:flex-row w-full max-w-300 gap-4 sm:gap-5 md:gap-6 lg:gap-6'>
        {/* LEFT CONTAINER */}
        <div className='flex-1 min-h-194 sm:min-h-184 md:min-h-188 lg:min-h-194 flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 p-5 sm:p-6 md:p-8 lg:p-10 rounded-[10px] '>
          {/* TOP SECTION */}
          <div className='flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6'>
            <div className='flex flex-col gap-1 sm:gap-1.5 md:gap-2 lg:gap-3'>
              <span className='font-inter font-semibold text-[1.375rem] sm:text-[1.5rem] md:text-[1.625rem] lg:text-[1.875rem] text-white leading-8 sm:leading-8.5 md:leading-9 lg:leading-9.5'>
                {title}
              </span>
              <span className='font-poppins font-normal text-[0.938rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] text-(--color-highlight) leading-6.5 sm:leading-[1.7rem] md:leading-[1.8rem] lg:leading-[1.9rem]'>
                {subtitle}
              </span>
            </div>
            <p className='font-poppins font-normal text-[0.938rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] text-white leading-6.5 sm:leading-[1.7rem] md:leading-[1.8rem] lg:leading-[1.9rem]'>
              {description}
            </p>
          </div>

          {/* MIDDLE SECTION - Info Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-5'>
            {infoCards.map((card, idx) => (
              <div
                key={idx}
                className='flex-1 rounded-[10px] border border-[#2D3953] bg-[#121B2B] p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col gap-2 sm:gap-3 md:gap-3.5 lg:gap-3'
              >
                {/* Top part */}
                <div className='flex justify-between items-center'>
                  <span className='font-inter font-medium text-[0.6875rem] sm:text-[0.71875rem] md:text-[0.734rem] lg:text-[0.75rem] text-white/80'>
                    {card.variant === "amount"
                      ? "Requested Amount"
                      : "Deadline"}
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
                <div className='flex gap-1.5 sm:gap-2.5 md:gap-3 lg:gap-3'>
                  {card.variant === "amount" ? (
                    <div className='flex items-center gap-2 md:gap-3 lg:gap-3'>
                      <span className='font-semibold text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] text-white'>
                        ${card.value}
                      </span>
                      <span className='font-normal text-[0.875rem] sm:text-[0.90625rem] md:text-[0.921rem] lg:text-[0.9375rem] text-(--color-grey)'>
                        {Number(card.tokens).toLocaleString()} Tokens
                      </span>
                    </div>
                  ) : (
                    <span className='font-semibold text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] text-white'>
                      {card.date}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM SECTION - Fund Allocation */}
          <div className='flex flex-col gap-3 md:gap-5 lg:gap-6 mt-10'>
            <h2 className='font-semibold text-[1.125rem] sm:text-[1.25rem] md:text-[1.375rem] lg:text-[1.5rem] text-white leading-[1.9rem] sm:leading-8 md:leading-8.5 lg:leading-9'>
              Fund Allocation
            </h2>
            <div className='flex flex-col items-center md:items-center lg:items-start gap-4 mt-5'>
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
