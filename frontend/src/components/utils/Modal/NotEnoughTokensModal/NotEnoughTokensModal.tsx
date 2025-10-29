"use client"

import { Button } from "@/components/atoms/Button"

interface Props {
  tokenName: string
  onClose: () => void
  onBuy: () => void
}

export const NotEnoughTokensModal = ({ tokenName, onClose, onBuy }: Props) => {
  return (
    <div className='fixed inset-0 z-50 bg-black/50 flex items-center justify-center'>
      <div onClick={(e) => e.stopPropagation()} className='relative'>
        <div className='bg-[#0A111F] rounded-2xl p-6 max-w-sm text-center'>
          <h2 className='text-white text-xl font-semibold mb-4'>
            Not enough tokens
          </h2>
          <p className='text-gray-400 mb-6'>
            You need {tokenName} to vote. Buy tokens to participate.
          </p>
          <div className='flex justify-center gap-4'>
            <Button variant='button-cancel' onClick={onClose}>
              Cancel
            </Button>
            <Button variant='buy-token' onClick={onBuy}>
              Buy Tokens
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
