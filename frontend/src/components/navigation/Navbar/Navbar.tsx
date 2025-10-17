"use client"

import Image from "next/image"
import Link from "next/link"
import { SearchBar } from "@/components/inputs/SearchBar"
import { Button } from "@/components/atoms/Button"
import { cn } from "@/lib/utils"

export function Navbar() {
  return (
    <nav
      className={cn(
        "flex items-center justify-between",
        "w-[982px] h-[73px]",
        "px-6 py-4 rounded-[16px] border-2",
        "border-[var(--color-navbar-border)] bg-[#121B2B] backdrop-blur-sm"
      )}
    >
      {/* Left section: Logo + Links */}
      <div className='flex items-center gap-6'>
        {/* Logo */}
        <div className='p-2'>
          <Image
            src='/logo.png'
            alt='Mostro Logo'
            width={52}
            height={52}
            unoptimized
          />
        </div>

        {/* Navigation links */}
        <div className='flex items-center gap-4 w-[280px] h-[40px]'>
          <Link
            href='/'
            className={cn(
              "text-white font-body font-medium px-4 py-2",
              "hover:text-[#998CE1] transition-colors duration-200"
            )}
          >
            Home
          </Link>

          <Link
            href='/artists'
            className={cn(
              "text-white font-body font-medium px-4 py-2",
              "hover:text-[#998CE1] transition-colors duration-200"
            )}
          >
            Artists
          </Link>

          <Link
            href='/launches'
            className={cn(
              "text-white font-body font-medium px-4 py-2",
              "hover:text-[#998CE1] transition-colors duration-200"
            )}
          >
            Launches
          </Link>
        </div>
      </div>

      {/* Right section: SearchBar + Connect Wallet */}
      <div className='flex items-center gap-[10px] w-[418px] h-[40px]'>
        <SearchBar
          placeholder='Search...'
          className='rounded-[6px] border-2 border-[#2D3953] shadow-[0px_4px_6px_0px_#00000017]'
        />

        <Button themeVariant='connect'>Connect Wallet</Button>
      </div>
    </nav>
  )
}
