import { Inter, Poppins } from "next/font/google"
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

// === Metadata ===
export const metadata: Metadata = {
  title: "Mostro",
  description: "A Web3 platform for artists and fans",
  icons: {
    icon: "/logo.png"
  }
}

// === Root Layout ===
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${poppins.variable} ${inter.variable}`}>
      <body className='antialiased bg-[#0A111F] min-h-screen flex flex-col items-center max-w-[1512px] w-full mx-auto pt-6'>
        {/* <Providers> */}
        {/* ===== GLOBAL NAVBAR ===== */}
        <Navbar />

        {/* ===== PAGE CONTENT ===== */}
        <main className='w-full flex flex-col items-center'>{children}</main>
        {/* </Providers> */}
      </body>
    </html>
  )
}
