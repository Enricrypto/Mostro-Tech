"use client"

import { Avatar } from "@/components/atoms/Avatar"
import { Badge } from "@/components/utils/Badge"
import { Button } from "@/components/atoms/Button"
import { CalendarBlankIcon, ArrowUpRightIcon } from "@phosphor-icons/react"

interface NewLaunchCardProps {
  avatarUrl: string
  name: string
  badgeText: string
  launchInDays: number
  price: number
  dynamicRightTopText: string
  variant?: "default" | "highlighted"
  onButtonClick?: () => void
}

export const NewLaunchCard: React.FC<NewLaunchCardProps> = ({
  avatarUrl,
  name,
  badgeText,
  launchInDays,
  price,
  dynamicRightTopText,
  variant = "default",
  onButtonClick
}) => {
  const cardClass =
    variant === "highlighted"
      ? "new-launch-card-highlighted"
      : "new-launch-card-default"

  const labelColor =
    variant === "highlighted"
      ? "var(--color-white)"
      : "var(--color-booger-buster)"

  return (
    <div className={cardClass}>
      {/* Top Launch Label */}
      <div className='absolute top-6 right-6 flex items-center gap-2'>
        <CalendarBlankIcon
          size={16}
          weight='bold'
          style={{ color: labelColor }}
        />
        <span
          className='font-inter font-medium text-[12px] leading-[20px]'
          style={{ color: labelColor }}
        >
          Launch in {launchInDays} days
        </span>
      </div>

      {/* Section 1: Avatar + Name + Badge */}
      <div className='flex items-center gap-4 w-[336px] h-[58px]'>
        <Avatar
          src={avatarUrl}
          variant='rounded-sm'
          className='avatar--rounded-sm'
        />
        <div className='flex flex-col gap-2 h-[58px]'>
          <span className='proposal-text font-semibold text-h3'>{name}</span>
          <Badge
            variant='genre'
            className='badge-genre'
            style={{ display: "inline-flex", padding: "2px 8px" }}
          >
            {badgeText}
          </Badge>
        </div>
      </div>

      {/* Section 2: Divider */}
      <div className='w-[336px] border-t border-muted' />

      {/* Section 3: Price & Total Supply */}
      <div className='flex justify-between items-center w-[336px] h-[44px]'>
        <div className='flex flex-col'>
          <span className='text-card-value-small'>${price}</span>
          <span className='proposal-artist-text whitespace-nowrap'>
            Initial Price
          </span>
        </div>
        <div className='flex flex-col'>
          <span className='text-card-value-small'>{dynamicRightTopText}</span>
          <span className='proposal-artist-text whitespace-nowrap'>
            Total Supply
          </span>
        </div>
      </div>

      {/* Section 4: Bottom Button */}
      <Button
        themeVariant='button-proposal'
        onClick={onButtonClick}
        className='flex items-center gap-[2px] w-[336px] h-10'
      >
        <span className='font-inter font-medium text-[14px] leading-[24px]'>
          View Artist
        </span>
        <ArrowUpRightIcon size={20} weight='bold' className='icon' />
      </Button>
    </div>
  )
}
