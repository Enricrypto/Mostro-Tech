import { useState, useEffect } from "react"
import { WalletIcon, ArrowDownIcon } from "@phosphor-icons/react"
import { Button } from "@/components/atoms/Button/Button"
import { Badge } from "@/components/utils/Badge/Badge"
import {
  mockPriceDataMLUN,
  mockPriceDataMATL,
  mockPriceDataMLIZ
} from "@/mocks/mockPriceData"

interface BuyTokenModalProps {
  tokenSymbol: string
  onClose: () => void
  onConfirm: () => void
  userBalance?: number
}

export const BuyTokenModal = ({
  tokenSymbol = "$MART",
  onClose,
  onConfirm,
  userBalance = 0
}: BuyTokenModalProps) => {
  const [amount, setAmount] = useState(0)
  const [estimatedReceive, setEstimatedReceive] = useState(0)
  const [platformFee, setPlatformFee] = useState(0)
  const [networkFee, setNetworkFee] = useState(0)

  // Pick mock price based on token symbol
  const getTokenPrice = (symbol: string) => {
    switch (symbol) {
      case "MLUN":
        return mockPriceDataMLUN["1h"].slice(-1)[0]
      case "MATL":
        return mockPriceDataMATL["1h"].slice(-1)[0]
      case "MLIZ":
        return mockPriceDataMLIZ["1h"].slice(-1)[0]
      default:
        return 1 // fallback
    }
  }

  useEffect(() => {
    const price = getTokenPrice(tokenSymbol)
    const pFee = amount * 0.01 // 1% platform fee
    const nFee = amount * 0.002 // 0.2% network fee
    const receive = amount - pFee - nFee
    const estimatedTokens = receive / price

    setPlatformFee(pFee)
    setNetworkFee(nFee)
    setEstimatedReceive(estimatedTokens)
  }, [amount, tokenSymbol])

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/80'>
      <div className='bg-black border border-[#2D3953] rounded-lg p-6 flex flex-col gap-6'>
        {/* BUY SECTION */}
        <div className='bg-[#121B2B] border-2 border-[#2D3953] rounded-[10px] shadow-[0_4px_6px_0_#00000017] p-6 flex flex-col gap-3.5'>
          <div className='text-[20px] font-semibold text-white'>
            Buy <span className='text-[#DCFD63]'>$MLUN</span>
          </div>

          <div className='flex justify-between items-center'>
            <input
              type='number'
              value={amount || ""}
              onChange={(e) => setAmount(Number(e.target.value))}
              placeholder='0.00'
              className='bg-transparent text-white text-[20px] font-semibold outline-none no-spinner'
            />
            <Badge variant='neutral'>$USDC</Badge>
          </div>

          {/* Balance line */}
          <div className='text-[#B3B3B3] text-[12px] font-medium'>
            Balance {userBalance.toFixed(2)} USDC
          </div>
        </div>

        {/* ArrowDown button row */}
        <div className='flex justify-center'>
          <Button
            variant='rounded-icon'
            icon={<ArrowDownIcon size={10} weight='bold' />}
          />
        </div>

        {/* RECEIVE SECTION */}
        <div className=' bg-[#121B2B] border-2 border-[#2D3953] rounded-[10px] shadow-[0_4px_6px_0_#00000017] p-6 flex flex-col gap-3.5'>
          <div className='text-[#B3B3B3] text-[12px] font-medium'>
            You will receive
          </div>
          <div className='flex justify-between items-center'>
            <div className='text-white text-[20px] font-semibold'>
              {estimatedReceive.toFixed(2)}
            </div>
            <Badge variant='increase'>$MLUN</Badge>
          </div>
          <div className='text-[#B3B3B3] text-[12px] font-medium'>
            ~ {(amount || 0).toFixed(2)} $USDC
          </div>
        </div>

        {/* FEES SECTION */}
        <div className='w-[377px] h-20 bg-[#121B2B] border-2 border-[#2D3953] rounded-[10px] shadow-[0_4px_6px_0_#00000017] p-6 flex flex-col justify-center gap-2'>
          <div className='flex justify-between text-[12px] font-medium'>
            <span className='text-[#B3B3B3]'>Platform Fee (1.0%)</span>
            <span className='text-white'>${platformFee.toFixed(2)}</span>
          </div>
          <div className='flex justify-between text-[12px] font-medium'>
            <span className='text-[#B3B3B3]'>Network Fee</span>
            <span className='text-white'>${networkFee.toFixed(2)}</span>
          </div>
        </div>

        {/* INFO BAR */}
        <div className='bg-[#42EE5C4D] border border-[#42EE5C] rounded-[10px] h-8 px-3 flex items-center justify-center gap-2'>
          <WalletIcon size={16} color='#42EE5C' weight='bold' />
          <span className='text-[#42EE5C] text-[12px] font-medium leading-none'>
            Tokens will be received in your wallet instantly
          </span>
        </div>

        {/* ACTION BUTTONS */}
        <div className='w-[247px] h-10 flex justify-between gap-4 mx-auto'>
          <Button variant='button-cancel' onClick={onClose}>
            Cancel
          </Button>
          <Button variant='continue' onClick={onConfirm}>
            Confirm Purchase
          </Button>
        </div>
      </div>
    </div>
  )
}
