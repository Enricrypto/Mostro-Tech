"use client"

import { useRouter } from "next/navigation"
import { Avatar } from "@/components/atoms/Avatar"
import { Badge } from "@/components/utils/Badge"
import { Button } from "@/components/atoms/Button"
import { CalendarBlankIcon, ArrowUpRightIcon } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

interface NewLaunchCardProps {
  slug: string
  avatarUrl: string
  name: string
  badgeText: string
  launchInDays: number
  price: number
  dynamicRightTopText: string
  className?: string
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
      className={cn(
        `
           w-full max-w-[24rem] sm:max-w-md md:max-w-lg
           rounded-[0.625rem] border-2 border-(--color-dark-blue)
          bg-(--color-dark-bg) shadow-[0px_4px_6px_0px_#00000017]
           p-4 sm:p-5 md:p-6
           flex flex-col gap-4
           transition-all duration-300 ease-out
           hover:scale-[1.02] hover:border-(--color-highlight)
           `
      )}
    >
      {/* Section 1: Avatar + Name + Genre Badge */}
      <div className='flex flex-row items-start gap-4'>
        <Avatar src={avatarUrl} variant='square-md' />

        <div className='flex flex-col gap-3 min-w-0'>
          <div className='flex items-center gap-2'>
            <CalendarBlankIcon
              size={16}
              weight='bold'
              className='text-highlight group-hover:text-white transition-colors duration-200'
            />
            <span className='text-xs text-highlight group-hover:text-white transition-colors duration-200'>
              Launch in {launchInDays} days
            </span>
          </div>
          <p
            className='text-white font-medium leading-7 tracking-[-0.5%] whitespace-nowrap overflow-hidden'
            style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}
          >
            {name}
          </p>

          {/* Genre Badge (same as ArtistCard) */}
          <Badge variant='genre' className='w-max'>
            {badgeText}
          </Badge>
        </div>
      </div>

      {/* Section 2: Divider */}
      <div className='border-t border-[#D2D3D5] my-2 md:my-4' />

      {/* Section 3: Price & Total Supply */}
      <div className='flex flex-row justify-between items-start sm:items-center gap-4 sm:gap-0'>
        <div className='flex flex-col'>
          <span className='text-lg text-white font-poppins font-normal leading-5'>
            ${price}
          </span>
          <span className='text-xs text-[#B3B3B3] font-medium leading-4 whitespace-nowrap'>
            Initial Price
          </span>
        </div>

        <div className='flex flex-col'>
          <span className='text-lg text-white font-poppins font-normal leading-5'>
            {dynamicRightTopText}
          </span>
          <span className='text-xs text-[#B3B3B3] font-medium leading-4 whitespace-nowrap'>
            Total Supply
          </span>
        </div>
      </div>

      {/* Section 4: Bottom Button */}
      <Button
        variant='follow-share'
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
