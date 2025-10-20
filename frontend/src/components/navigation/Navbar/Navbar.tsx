"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { SearchBar } from "@/components/inputs/SearchBar"
import { Button } from "@/components/atoms/Button/Button"
import { DropDownMenu } from "@/components/navigation/DropDownMenu"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/artists", label: "Artists" },
  { href: "/launches", label: "Launches" }
]

export function Navbar() {
  const router = useRouter()

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
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant='link'
              onClick={() => router.push(link.href)}
            >
              {link.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Right section: SearchBar + Profile / Dropdown */}
      <div className='flex items-center gap-[12px]'>
        <SearchBar
          placeholder='Search...'
          className='rounded-[6px] border-2 border-[#2D3953] shadow-[0px_4px_6px_0px_#00000017]'
        />

        <div className='relative'>
          <DropDownMenu />
        </div>
      </div>
    </nav>
  )
}
