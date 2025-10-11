import { Inter, Poppins } from "next/font/google"
import "@solana/wallet-adapter-react-ui/styles.css"
import "./globals.css"
import Providers from "./config/PrivyContextProvider"
import type { Metadata } from "next"

// Poppins (headings/body)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-primary"
})

// Inter (inputs/other UI elements)
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: "Mostro",
  description: "A Web3 platform for artists and fans",
  icons: {
    icon: "/logo.png"
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${poppins.variable} ${inter.variable}`}>
      <body className='antialiased bg-black text-white'>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
