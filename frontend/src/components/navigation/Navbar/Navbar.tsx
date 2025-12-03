// Updated Navbar with fullscreen mobile menu and close button
"use client"

import Image from "next/image"
import { useRouter, usePathname } from "next/navigation" // Make sure usePathname is imported
import { useState, useEffect } from "react" // Import useEffect
import { SearchBar } from "@/components/inputs/SearchBar"
import { Button } from "@/components/atoms/Button/Button"
import { ProfileButton } from "@/components/navigation/ProfileButton"
import { cn } from "@/lib/utils"
import { ListIcon, X } from "@phosphor-icons/react"
import { LoadingSpinner } from "@/components/atoms/LoadingSpinner/LoadingSpinner" // Add this

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/all-artists", label: "Artists" },
  { href: "/launches", label: "Launches" }
]

export function Navbar() {
  const router = useRouter()
  const pathname = usePathname() // Get the current pathname
  const [open, setOpen] = useState(false)
  const [isNavigating, setIsNavigating] = useState(false)

  const handleNavLinkClick = (href: string, closeMenu: boolean = false) => {
    // If the target href is the same as the current pathname,
    // we should immediately turn off the spinner and do not navigate.
    if (href === pathname) {
      if (isNavigating) {
        setIsNavigating(false); // Turn off spinner if it was already on
      }
      if (closeMenu) {
        setOpen(false); // Close mobile menu if applicable
      }
      return; // Do nothing further, as we're already on this page
    }

    setIsNavigating(true); // Set loading state immediately on click
    if (closeMenu) {
      setOpen(false);
    }
    router.push(href);
  };

  // Use useEffect to listen for pathname changes and reset isNavigating
  useEffect(() => {
    // This effect will run whenever the pathname changes.
    // If isNavigating is true, it means a navigation has just completed.
    if (isNavigating) {
      setIsNavigating(false);
    }
  }, [pathname]); // Depend on pathname to detect navigation completion

  return (
    <>
      {/* Loading Spinner Overlay */}
      {isNavigating && (
        <LoadingSpinner fullScreen={true} showText={false} color="blue" size="lg" />
      )}

      {/* Fullscreen Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-[#121B2B] flex flex-col items-center items-center gap-6 pt-10">
          {/* Mobile Menu Items with Close Button above first item */}
          <div className="flex flex-col items-center gap-6">
            <Button
              className="mb-4 text-black"
              variant="continue"
              onClick={() => setOpen(false)}
              disabled={isNavigating}
            >
              <X size={32} />
            </Button>

            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavLinkClick(link.href, true)}
                className="text-white text-2xl"
                disabled={isNavigating}
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => handleNavLinkClick("/profile", true)}
              className="text-white text-2xl"
              disabled={isNavigating}
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
          "border-[var(--color-navbar-border)] bg-[#121B2B] backdrop-blur-sm"
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
                onClick={() => handleNavLinkClick(link.href)}
                disabled={isNavigating}
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
            <Button variant="continue" className="rounded-md" onClick={() => setOpen(true)} disabled={isNavigating}>
              <ListIcon size={22} weight="bold" />
            </Button>
          </div>
        </div>
      </nav>
    </>
  )
}