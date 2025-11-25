// Updated Navbar with fullscreen mobile menu and close button
"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { SearchBar } from "@/components/inputs/SearchBar"
import { Button } from "@/components/atoms/Button/Button"
import { ProfileButton } from "@/components/navigation/ProfileButton"
import { cn } from "@/lib/utils"
import { ListIcon, X } from "@phosphor-icons/react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/all-artists", label: "Artists" },
  { href: "/launches", label: "Launches" }
]

export function Navbar() {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Fullscreen Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-[#121B2B] flex flex-col items-center items-center gap-6 pt-10">
          {/* Mobile Menu Items with Close Button above first item */}
          <div className="flex flex-col items-center gap-6">
            <Button
              className="mb-4 text-black"
              variant="continue"
              onClick={() => setOpen(false)}
            >
              <X size={32} />
            </Button>

            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  router.push(link.href)
                  setOpen(false)
                }}
                className="text-white text-2xl"
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => {
                router.push("/profile")
                setOpen(false)
              }}
              className="text-white text-2xl"
            >
              Profile
            </button>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav
        className={cn(
          "flex items-center justify-between",
          "w-[360px] md:w-[630px] lg:w-[982px]",
          "px-4 py-4 rounded-2xl border-2",
          "border-(--color-navbar-border) bg-[#121B2B] backdrop-blur-sm"
        )}
      >
        {/* Left */}
        <div className="flex items-center gap-6">
          <div className="shrink-0">
            <Image
              src="/logo.png"
              alt="Mostro Logo"
              width={52}
              height={52}
              unoptimized
            />
          </div>

          <div className="hidden md:flex md:items-center md:gap-2 lg:gap-5">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="link"
                className="md:px-3 md:text-sm lg:px-4 lg:text-base"
                onClick={() => router.push(link.href)}
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <div className="md:block">
            <SearchBar
              className="rounded-md border-2 border-[#2D3953] shadow-[0px_4px_6px_0px_#00000017]"
              placeholder="Search..."
            />
          </div>

          <div className="md:block">
            <ProfileButton />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="continue" className="rounded-md" onClick={() => setOpen(true)}>
              <ListIcon size={22} weight="bold" />
            </Button>
          </div>
        </div>
      </nav>
    </>
  )
}