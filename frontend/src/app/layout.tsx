"use client"

import { Inter, Poppins } from "next/font/google"
import { usePathname } from "next/navigation"
import "@solana/wallet-adapter-react-ui/styles.css"
import "./globals.css"
import { Navbar } from "@/components/navigation/Navbar"
import Providers from "./config/PrivyContextProvider"
import type { Metadata } from "next"

// === Fonts ===
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-primary"
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter"
})

// // === Metadata ===
// // Note: Metadata export is not officially supported in client components yet.
// // This might not work as expected until Next.js fully supports it.
// export const metadata: Metadata = {
//   title: "Mostro",
//   description: "A Web3 platform for artists and fans",
//   icons: {
//     icon: "/logo.png"
//   }
// }

// === Root Layout ===
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const showNavbar = pathname !== "/profile-setup"

  return (
    <html lang='en' className={`${poppins.variable} ${inter.variable}`}>
      <body className='antialiased bg-[#0A111F] min-h-screen flex flex-col items-center mt-6'>
        {/* <Providers> */}
        {/* ===== GLOBAL NAVBAR ===== */}
        {showNavbar && <Navbar />}

        {/* ===== PAGE CONTENT ===== */}
        <main className='w-full flex flex-col items-center'>{children}</main>
        {/* </Providers> */}
      </body>
    </html>
  )
}
