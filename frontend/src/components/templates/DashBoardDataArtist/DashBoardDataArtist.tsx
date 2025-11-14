"use client"

import { DataArtistCard } from "@/components/atoms/DataArtistCard"
import {
  CurrencyDollarIcon,
  UsersIcon,
  ChartLineUpIcon,
  CoinsIcon
} from "@phosphor-icons/react"

interface DashBoardDataArtistProps {
  totalPrice: string
  priceChange: string
  holders: string
  holdersChange: string
  marketCap: string
  marketCapChange: string
  totalSupply: string
  circulating: string
}

export function DashBoardDataArtist({
  totalPrice,
  priceChange,
  holders,
  holdersChange,
  marketCap,
  marketCapChange,
  totalSupply,
  circulating
}: DashBoardDataArtistProps) {
  return (
    <div className='grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-4 md:grid-rows-1 w-full'>
      <DataArtistCard
        topText='Total Price'
        bottomLeftText={totalPrice}
        bottomRightText={priceChange}
        topIcon={<CurrencyDollarIcon size={16} />}
      />
      <DataArtistCard
        topText='Holders'
        bottomLeftText={holders}
        bottomRightText={holdersChange}
        topIcon={<UsersIcon size={16} />}
      />
      <DataArtistCard
        topText='Market Cap'
        bottomLeftText={marketCap}
        bottomRightText={marketCapChange}
        topIcon={<ChartLineUpIcon size={16} />}
      />
      <DataArtistCard
        topText='Total Supply'
        bottomLeftText={totalSupply}
        bottomRightText={circulating}
        topIcon={<CoinsIcon size={16} />}
      />
    </div>
  )
}
