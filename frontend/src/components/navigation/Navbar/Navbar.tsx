"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { SearchBar } from "@/components/inputs/SearchBar"
import { Button } from "@/components/atoms/Button/Button"
import { ProfileButton } from "@/components/navigation/ProfileButton"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu"
import { ListIcon } from "@phosphor-icons/react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/all-artists", label: "Artists" },
  { href: "/launches", label: "Launches" },
  { href: "/profile-setup", label: "Setup" },// remove line after testing

]

export function Navbar() {
  const router = useRouter()

  return (
    <nav
      className={cn(
        "flex items-center justify-between",
        "w-[360px] md:w-[630px] lg:w-[982px]",
        "px-4 py-4 rounded-2xl border-2",
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

        {/* Desktop Navigation links */}
        <div className='hidden md:flex md:items-center md:gap-2 lg:gap-5'>
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant='link'
              className='
        md:px-3 md:text-sm       
        lg:px-4 lg:text-base'
              onClick={() => router.push(link.href)}
            >
              {link.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Right section */}
      <div className='flex items-center gap-3'>
        {/* Desktop Search */}
        <div className='md:block'>
          <SearchBar
            className='rounded-md border-2 border-[#2D3953] shadow-[0px_4px_6px_0px_#00000017]'
            placeholder='Search...'
          />
        </div>

        {/* Desktop Profile */}
        <div className='md:block'>
          <ProfileButton />
        </div>

        {/* Mobile: Hamburger Dropdown */}
        <div className='md:hidden'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='continue' className='rounded-md'>
                <ListIcon size={22} weight='bold' />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className='w-40 bg-[#121B2B] border-[#2D3953]'>
              {navLinks.map((link) => (
                <DropdownMenuItem
                  key={link.href}
                  onClick={() => router.push(link.href)}
                  className='cursor-pointer text-white'
                >
                  {link.label}
                </DropdownMenuItem>
              ))}

              <DropdownMenuItem
                onClick={() => router.push("/profile")}
                className='cursor-pointer text-white'
              >
                Profile
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}