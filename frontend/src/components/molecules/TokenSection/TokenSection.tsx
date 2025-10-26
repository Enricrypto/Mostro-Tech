"use client"

import { Button } from "@/components/atoms/Button"
import { DashBoardDataArtist } from "@/components/templates/DashBoardDataArtist"
import { Chart } from "@/components/molecules/Chart"
import { CurrencyDollarIcon } from "@phosphor-icons/react"
import { FC } from "react"

interface TokenSectionProps {
  onBuyToken: () => void
  onSellToken: () => void
}

export const TokenSection: FC<TokenSectionProps> = ({
  onBuyToken,
  onSellToken
}) => {
  // Mock data - replace with real data later
  const totalPrice = "$12.45"
  const priceChange = "+12% (24h)"
  const holders = "1,247"
  const holdersChange = "+12 this week"
  const marketCap = "$155,000"
  const marketCapChange = "+12% (7d)"
  const totalSupply = "1B"
  const circulating = "440K circulating"

  return (
    <div className='flex flex-col w-[1200px] gap-6'>
      {/* Header */}
      <div className='flex justify-between items-center w-full h-10'>
        <h2 className='text-white font-inter font-semibold text-[30px] leading-9 tracking-[-0.75%]'>
          Token Activity
        </h2>
      </div>

      {/* Dashboard Data */}
      <div className='flex flex-col w-full h-28 mt-10'>
        <DashBoardDataArtist
          totalPrice={totalPrice}
          priceChange={priceChange}
          holders={holders}
          holdersChange={holdersChange}
          marketCap={marketCap}
          marketCapChange={marketCapChange}
          totalSupply={totalSupply}
          circulating={circulating}
        />
      </div>
      <div className='flex gap-2 justify-end mt-10'>
        <Button
          variant='yes'
          className='flex items-center gap-2'
          icon={<CurrencyDollarIcon size={16} weight='bold' />}
          onClick={onBuyToken}
          iconPosition='left'
        >
          Buy Token
        </Button>

        <Button
          variant='button-cancel-red'
          className='flex items-center gap-2'
          icon={<CurrencyDollarIcon size={16} weight='bold' />}
          onClick={onSellToken}
          iconPosition='left'
        >
          Sell Token
        </Button>
      </div>
      <div className='mt-3 mb-20'>
        <Chart />
      </div>
    </div>
  )
}
