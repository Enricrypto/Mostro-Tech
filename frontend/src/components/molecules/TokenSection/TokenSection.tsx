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
  const priceChange = "+3.2%"
  const holders = "1,245"
  const holdersChange = "+12"
  const marketCap = "$124,500"
  const marketCapChange = "+8.5%"
  const totalSupply = "10,000,000"
  const circulating = "7,500,000"

  return (
    <div className='flex flex-col w-[1200px] gap-6'>
      {/* Header */}
      <div className='flex justify-between items-center w-full h-[40px]'>
        <h2 className='text-white font-inter font-semibold text-[30px] leading-[36px] tracking-[-0.75%]'>
          Token Activity
        </h2>

        <div className='flex gap-2'>
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
            variant='button-cancel-red-border'
            className='flex items-center gap-2'
            icon={<CurrencyDollarIcon size={16} weight='bold' />}
            onClick={onSellToken}
            iconPosition='left'
          >
            Sell Token
          </Button>
        </div>
      </div>

      {/* Dashboard Data */}
      <div className='flex flex-col w-full h-[112px]'>
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
      <Chart />
    </div>
  )
}
