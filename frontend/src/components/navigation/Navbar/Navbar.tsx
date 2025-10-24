"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { SearchBar } from "@/components/inputs/SearchBar"
import { Button } from "@/components/atoms/Button/Button"
import { ProfileButton } from "@/components/navigation/ProfileButton"
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
        "w-full max-w-[982px] h-[73px]",
        "px-6 py-4 rounded-2xl border-2",
        "border-(--color-navbar-border) bg-[#121B2B] backdrop-blur-sm"
      )}
    >
      {/* Left section: Logo + Links */}
      <div className='flex items-center gap-6'>
        {/* Logo */}
        <div className='shrink-0'>
          <Image
            src='/logo.png'
            alt='Mostro Logo'
            width={52}
            height={52}
            unoptimized
          />
        </div>

        {/* Navigation links */}
        <div className='flex items-center gap-4'>
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
      <div className='flex items-center gap-3'>
        <SearchBar
          className='rounded-md border-2 border-[#2D3953] shadow-[0px_4px_6px_0px_#00000017]'
          placeholder='Search...'
        />

        <div className='relative'>
          <ProfileButton />
        </div>
      </div>
    </nav>
  )
}
