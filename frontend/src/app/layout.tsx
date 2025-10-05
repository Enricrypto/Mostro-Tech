import "@solana/wallet-adapter-react-ui/styles.css"
import "./globals.css"
import { WalletContextProvider } from "./config/WalletContextProvider"
import { WalletConnect } from "@/components/WalletConnect"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mostro",
  description: "A Web3 platform for artists and fans"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='antialiased bg-black text-white'>
        <WalletContextProvider>
          <WalletConnect />
          {children}
        </WalletContextProvider>
      </body>
    </html>
  )
}
