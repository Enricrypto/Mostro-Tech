"use client"

import { useEffect, useState } from "react"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"

export function WalletConnect() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null // prevent server/client mismatch

  return (
    <div className='flex items-center gap-4 justify-end p-4'>
      <WalletMultiButton />
    </div>
  )
}
