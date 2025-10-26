"use client"

import { DataArtistCard } from "@/components/molecules/DataArtistCard"
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
    <div className='w-[1200px] h-28 flex gap-6'>
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
