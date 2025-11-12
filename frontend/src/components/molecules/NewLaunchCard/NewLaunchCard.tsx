"use client"

import { useRouter } from "next/navigation"
import { Avatar } from "@/components/atoms/Avatar"
import { Badge } from "@/components/utils/Badge"
import { Button } from "@/components/atoms/Button"
import { CalendarBlankIcon, ArrowUpRightIcon } from "@phosphor-icons/react"

interface NewLaunchCardProps {
  slug: string
  avatarUrl: string
  name: string
  badgeText: string
  launchInDays: number
  price: number
  dynamicRightTopText: string
}

export const NewLaunchCard: React.FC<NewLaunchCardProps> = ({
  slug,
  avatarUrl,
  name,
  badgeText,
  launchInDays,
  price,
  dynamicRightTopText
}) => {
  const router = useRouter()

  const handleButtonClick = (slug: string) => {
    router.push(`/artists/${slug}`)
  }

  return (
    <div
      className='group relative flex flex-col w-full max-w-[384px] rounded-[10px] border-2 p-6 gap-4
                 border-[#2D3953] bg-[#121B2B] shadow-[0_4px_6px_0_#00000017]
                 transition-colors duration-200 hover:border-[#71D6FB]'
    >
      {/* Section 1: Avatar + Name + Genre Badge */}
      <div className='flex flex-row items-start gap-4'>
        <Avatar src={avatarUrl} variant='square-md' />

        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-2'>
            <CalendarBlankIcon
              size={16}
              weight='bold'
              className='text-highlight group-hover:text-white transition-colors duration-200'
            />
            <span className='text-[12px] text-highlight group-hover:text-white transition-colors duration-200'>
              Launch in {launchInDays} days
            </span>
          </div>
          <span className='font-inter font-semibold text-[20px] text-white truncate max-w-60'>
            {name}
          </span>

          {/* Genre Badge (same as ArtistCard) */}
          <Badge variant='genre' className='w-max'>
            {badgeText}
          </Badge>
        </div>
      </div>

      {/* Section 2: Divider */}
      <div className='border-t border-[#D2D3D5] my-4' />

      {/* Section 3: Price & Total Supply */}
      <div className='flex flex-row justify-between items-start sm:items-center gap-4 sm:gap-0'>
        <div className='flex flex-col'>
          <span className='text-white text-[18px] font-poppins font-normal leading-5'>
            ${price}
          </span>
          <span className='text-[#B3B3B3] text-[12px] font-medium leading-4 whitespace-nowrap'>
            Initial Price
          </span>
        </div>

        <div className='flex flex-col'>
          <span className='text-white text-[18px] font-poppins font-normal leading-5'>
            {dynamicRightTopText}
          </span>
          <span className='text-[#B3B3B3] text-[12px] font-medium leading-4 whitespace-nowrap'>
            Total Supply
          </span>
        </div>
      </div>

      {/* Section 4: Bottom Button */}
      <Button
        variant='song-unlock'
        icon={<ArrowUpRightIcon />}
        iconPosition='right'
        onClick={() => handleButtonClick(slug)}
        className='mt-4 w-full sm:w-auto'
      >
        View Artist
      </Button>
    </div>
  )
}
