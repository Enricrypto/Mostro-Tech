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
    <div className='w-full flex flex-col gap-16 pt-10 bg-[#121B2B] border-t-2 border-[#DCFD63] backdrop-blur-xs'>
      {/* Top Section */}
      <footer className='flex justify-between w-full h-[184px] px-6 md:px-16'>
        {/* Logo */}
        <div className='shrink-0 w-[183px] h-[183px] flex items-center justify-center'>
          <Image
            src='/logo.png'
            alt='Mostro Logo'
            width={167}
            height={167}
            unoptimized
          />
        </div>

        {/* Mission + Social Buttons */}
        <div className='flex flex-col justify-between flex-1 h-[184px] px-4 md:px-8'>
          <p className='text-white text-[24px] leading-7 font-poppins text-center w-full'>
            A mission-driven Web3 platform for a more profitable indie music
            industry
          </p>

          <div className='flex justify-between w-full h-8 gap-2 flex-wrap'>
            {socialButtons.map((btn) => (
              <PillButton
                key={btn.label}
                themeVariant='primary'
                className='flex items-center justify-center gap-2 whitespace-nowrap overflow-hidden text-ellipsis w-[125px] h-8 rounded-[34px] px-3 py-2 border border-[#2D3953] bg-[#DCFD63] text-black font-body font-normal text-[14px] leading-4'
              >
                {btn.icon} {btn.label}
              </PillButton>
            ))}
          </div>
        </div>

        {/* Newsletter Form */}
        <div className='w-[384px] flex flex-col gap-4 px-4'>
          <p className='text-[#DCFD63] text-[16px] leading-6 font-inter font-medium'>
            Join Our Newsletter
          </p>
          <NewsletterForm spacing='var(--spacing-4)' />
        </div>
      </footer>

      {/* Bottom Section */}
      <div className='w-full bg-[#71BEFB]'>
        <div className='w-full flex justify-between items-center px-6 md:px-16 py-2'>
          <p className='text-black font-inter text-[16px] leading-6 font-normal'>
            ©Mostro 2025. All Rights Reserved
          </p>

          <div className='flex gap-2 justify-end flex-wrap'>
            <Button variant='link'>Privacy Policy</Button>
            <Button variant='link'>Terms of Service</Button>
            <Button variant='link'>Cookie Policy</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
