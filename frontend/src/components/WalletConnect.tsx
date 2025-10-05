"use client"

import { useEffect, useState } from "react"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"

export function WalletConnect() {
  const { connection } = useConnection()
  const { publicKey, connected } = useWallet()
  const [balance, setBalance] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!mounted || !connected || !publicKey) return

    const getBalance = async () => {
      try {
        const lamports = await connection.getBalance(publicKey)
        setBalance(lamports / LAMPORTS_PER_SOL)
      } catch (err) {
        console.error("Failed to fetch balance", err)
        setBalance(null)
      }
    }

    getBalance()
    const interval = setInterval(getBalance, 15000)
    return () => clearInterval(interval)
  }, [mounted, connected, publicKey, connection])

  if (!mounted) return null

  return (
    <div className='flex items-center gap-4 justify-end p-4'>
      <WalletMultiButton />
      {connected && balance !== null && (
        <div className='text-sm font-mono text-gray-300'>
          SOL: {balance.toFixed(4)}
        </div>
      )}
    </div>
  )
}
