"use client"

import Image from "next/image"
import { Button } from "@/components/atoms/Button"
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
    <div className='w-full flex flex-col bg-[var(--color-footer-bg)] backdrop-blur-[4px] border-t-[2px] border-[var(--color-footer-border)]'>
      {/* 🟣 Top Section (existing content) */}
      <footer
        className={cn(
          "flex justify-between gap-[64px] pt-[40px]", // <-- unchanged
          "w-full max-w-[1512px] h-[344px] mx-auto" // <-- unchanged
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

          <div className='flex justify-between w-full h-[32px]'>
            {socialButtons.map((btn) => (
              <Button
                key={btn.label}
                themeVariant='pill'
                className={cn(
                  "flex items-center justify-center gap-[var(--spacing-2)]",
                  "w-[var(--pill-button-width)] h-[var(--pill-button-height)]",
                  "bg-[var(--color-highlight)] border border-[var(--color-navbar-border)]",
                  "rounded-[var(--radius-pill)]",
                  "text-[var(--text-button-size)] leading-[var(--text-button-line-height)] font-body font-normal",
                  "text-[var(--color-button-text-default)]",
                  "cursor-pointer"
                )}
              >
                {btn.icon} {btn.label}
              </Button>
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

      {/* 🟢 Bottom Section (newly added) */}
      <div className='w-full flex justify-center bg-[#71BEFB]'>
        <div className='flex justify-between items-center w-full p-[8px]'>
          {/* Left text */}
          <p className='text-black font-inter text-[16px] leading-[24px] font-normal'>
            ©Mostro 2025. All Rights Reserved
          </p>

          {/* Right buttons */}
          <div className='flex gap-[8px] w-[448px] h-[40px] justify-end'>
            <button
              className={cn(
                "w-[137px] h-[40px] rounded-[6px] px-[16px] py-[8px] bg-transparent whitespace-nowrap cursor-pointer hover:text-[#FFFFFF] transition-colors",
                "text-black font-inter text-[16px] leading-[24px] font-normal"
              )}
            >
              Privacy Policy
            </button>

            <button
              className={cn(
                "w-[160px] h-[40px] rounded-[6px] px-[16px] py-[8px] bg-transparent whitespace-nowrap cursor-pointer hover:text-[#FFFFFF] transition-colors",
                "text-black font-inter text-[16px] leading-[24px] font-normal"
              )}
            >
              Terms of Service
            </button>

            <button
              className={cn(
                "w-[135px] h-[40px] rounded-[6px] px-[16px] py-[8px] bg-transparent whitespace-nowrap cursor-pointer hover:text-[#FFFFFF] transition-colors",
                "text-black font-inter text-[16px] leading-[24px] font-normal"
              )}
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
      {/* 🟢 End of Bottom Section */}
    </div>
  )
}
