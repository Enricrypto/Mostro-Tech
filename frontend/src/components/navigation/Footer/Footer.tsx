"use client"

import Image from "next/image"
import { Button } from "@/components/atoms/Button"
import { PillButton } from "@/components/atoms/PillButton"
import { cn } from "@/lib/utils"
import { NewsletterForm } from "./NewsLetterForm"
import {
  InstagramLogoIcon,
  XLogoIcon,
  DiscordLogoIcon
} from "@phosphor-icons/react"

export function Footer() {
  const socialButtons = [
    { icon: <InstagramLogoIcon size={18} weight='fill' />, label: "Instagram" },
    { icon: <XLogoIcon size={18} weight='fill' />, label: "X" },
    { icon: <DiscordLogoIcon size={18} weight='fill' />, label: "Discord" }
  ]

  return (
    // 🟢 Main Footer Wrapper
    <div
      className={cn(
        "w-full flex flex-col gap-[64px] pt-[40px]",
        "bg-[#121B2B] border-t-[2px] border-[#DCFD63] backdrop-blur-[4px]"
      )}
    >
      {/* 🟣 Top Section */}
      <footer
        className={cn(
          "flex justify-between w-full max-w-[1512px] h-[184px] px-[64px] mx-auto"
        )}
      >
        {/* Logo */}
        <div className='flex-shrink-0 w-[183px] h-[183px] flex items-center justify-center'>
          <Image
            src='/logo.png'
            alt='Mostro Logo'
            width={167}
            height={167}
            unoptimized
          />
        </div>

        {/* Mission + Social Buttons */}
        <div className='flex flex-col justify-between w-[407px] h-[184px]'>
          <p className='text-white text-[24px] leading-[28px] font-poppins text-center w-full'>
            A mission-driven Web3 platform for a more profitable indie music
            industry
          </p>

          <div className='flex justify-between w-full h-[32px] gap-2'>
            {socialButtons.map((btn) => (
              <PillButton
                key={btn.label}
                themeVariant='primary'
                className={cn(
                  "flex items-center justify-center gap-[8px] whitespace-nowrap overflow-hidden text-ellipsis",
                  "w-[125px] h-[32px]",
                  "rounded-[34px]",
                  "px-[12px] py-[8px]",
                  "border border-[#2D3953]",
                  "bg-[#DCFD63]",
                  "text-black font-body font-normal text-[14px] leading-[16px]"
                )}
              >
                {btn.icon} {btn.label}
              </PillButton>
            ))}
          </div>
        </div>

        {/* Newsletter Form */}
        <div className='w-[384px] flex flex-col gap-[var(--spacing-4)]'>
          <p className='text-[#DCFD63] text-[16px] leading-[24px] font-inter font-medium'>
            Join Our Newsletter
          </p>

          <NewsletterForm spacing='var(--spacing-4)' />
        </div>
      </footer>

      {/* Bottom Section */}
      <div className='w-full flex justify-center bg-[#71BEFB]'>
        <div className='flex justify-between items-center w-full px-6 py-2'>
          {/* Left text */}
          <p className='text-black font-inter text-[16px] leading-[24px] font-normal'>
            ©Mostro 2025. All Rights Reserved
          </p>

          {/* Right buttons */}
          <div className='flex gap-[8px] w-[448px] h-[40px] justify-end'>
            <Button variant='link'>Privacy Policy</Button>

            <Button variant='link'>Terms of Service</Button>

            <Button variant='link'>Cookie Policy</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
