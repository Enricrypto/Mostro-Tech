"use client"

interface DashBoardStatsCardProps {
  topText: string
  bottomLeftText: string
  bottomRightText: string
  icon: React.ReactNode
}

export const DashBoardStatsCard: React.FC<DashBoardStatsCardProps> = ({
  topText,
  bottomLeftText,
  bottomRightText,
  icon
}) => {
  return (
    <div
      className='
        flex h-[104px] w-full flex-col
        justify-between rounded-[10px] border
        border-[#2D3953] bg-[#121B2B] p-3
        md:h-[110px] md:p-4 lg:h-28 lg:p-6
      '
    >
      {/* Top Part */}
      <div className='flex h-5 w-full items-center justify-between'>
        <span className='h-5 flex-1 text-[10px] font-medium leading-5 text-[#B3B3B3] md:text-xs'>
          {topText}
        </span>
        {/* Icon */}
        <div className='flex h-5 w-5 shrink-0 items-center justify-center'>
          {icon}
        </div>
      </div>

      {/* Bottom Part */}
      <div className='flex h-9 w-full items-center gap-2'>
        {/* Left text */}
        <span className='h-9 flex-1 text-xl font-semibold leading-9 text-white md:text-3xl'>
          {bottomLeftText}
        </span>

        {/* Right text next to it */}
        <span className='flex h-5 flex-none items-center text-[10px] font-medium leading-5 text-[#DCFD63] md:text-xs'>
          {bottomRightText}
        </span>
      </div>
    </div>
  )
}
