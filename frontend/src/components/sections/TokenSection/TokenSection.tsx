"use client"

import { FC } from "react"
import { Button } from "@/components/atoms/Button"
import { DashBoardDataArtist } from "@/components/templates/DashBoardDataArtist"
import { Chart } from "@/components/molecules/Chart"
import { CurrencyDollarIcon } from "@phosphor-icons/react"
import { mockTokenPriceData } from "@/mocks/mockTokenPriceData"
import type { Artist } from "@/data/artists"

interface TokenSectionProps {
  artist: Artist
  onBuyToken: () => void
  onSellToken: () => void
}

export const TokenSection: FC<TokenSectionProps> = ({
  artist,
  onBuyToken,
  onSellToken
}) => {
  const token = artist.token

  // Get full token data from mock
  const tokenData = mockTokenPriceData.find(
    (item) => item.id === Number(artist.id)
  )?.token

  const tokenToUse = tokenData ?? {
    name: "Unknown",
    price: "$0.00",
    holders: "0",
    totalPrice: "$0.00",
    priceChange: "+0%",
    holdersChange: "+0",
    marketCap: "$0",
    marketCapChange: "+0%",
    totalSupply: "0",
    circulating: "0"
  }

  const {
    totalPrice,
    priceChange,
    holders,
    holdersChange,
    marketCap,
    marketCapChange,
    totalSupply,
    circulating
  } = tokenToUse

  // Chart expects only the token symbol
  const tokenSymbol = token?.name as "MLUN" | "MATL" | "MLIZ"

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

      {/* Buy/Sell buttons */}
      <div className='flex gap-2 justify-end mt-10'>
        <Button
          variant='yes'
          className='flex items-center gap-2'
          icon={<CurrencyDollarIcon size={16} weight='bold' />}
          onClick={onBuyToken}
          iconPosition='left'
        >
          Buy {token?.name ?? "Token"}
        </Button>

        <Button
          variant='no'
          className='flex items-center gap-2'
          icon={<CurrencyDollarIcon size={16} weight='bold' />}
          onClick={onSellToken}
          iconPosition='left'
        >
          Sell {token?.name ?? "Token"}
        </Button>
      </div>

      {/* Chart */}
      <div className='mt-3 mb-20'>
        {tokenSymbol && <Chart token={tokenSymbol} />}
      </div>
    </div>
  )
}
