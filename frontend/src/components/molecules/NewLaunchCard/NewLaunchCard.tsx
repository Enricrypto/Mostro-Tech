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
      className='group relative flex flex-col rounded-[10px] w-[384px] border-2 gap-3.5
             p-6 border-[#2D3953] bg-[#121B2B] shadow-[0_4px_6px_0_#00000017]
             transition-colors duration-200 hover:border-[#71D6FB]'
    >
      {/* Top Launch Label */}
      <div className='absolute top-6 right-6 flex items-center gap-2'>
        <CalendarBlankIcon
          size={16}
          weight='bold'
          className='text-highlight group-hover:text-white transition-colors duration-200'
        />
        <span className='text-[12px] text-highlight group-hover:text-white transition-colors duration-200'>
          Launch in {launchInDays} days
        </span>
      </div>

      {/* Section 1: Avatar + Name + Badge */}
      <div className='flex items-center gap-3 pt-6'>
        <Avatar
          src={avatarUrl}
          variant='rounded-sm'
          className='w-10 h-10 rounded-[26px]'
        />
        <div className='flex flex-col gap-2 h-[58px]'>
          <span className='font-inter font-semibold text-[20px] leading-7 text-white'>
            {name}
          </span>
          <Badge
            variant='genre'
            className='inline-flex px-2 py-0.5 gap-2 rounded-[10px] border border-[#71D6FB] bg-[#71D6FB4D] text-[#71D6FB] text-[12px] font-medium'
          >
            {badgeText}
          </Badge>
        </div>
      </div>

      {/* Section 2: Divider */}
      <div className='w-[336px] border-t border-[#D2D3D5] my-4' />

      {/* Section 3: Price & Total Supply */}
      <div className='flex justify-between items-center w-[336px] h-11'>
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
      >
        View Artist
      </Button>
    </div>
  )
}
