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
    <div className='w-[384px] h-[112px] p-[24px] rounded-[10px] border border-[#2D3953] bg-[#121B2B] flex flex-col justify-between'>
      {/* Top Part */}
      <div className='w-full h-[20px] flex justify-between items-center'>
        <span className='flex-1 h-[20px] text-[#B3B3B3] font-medium text-[12px] leading-[20px] truncate'>
          {topText}
        </span>
        {/* Icon */}
        <div className='w-[20px] h-[20px] flex items-center justify-center shrink-0'>
          {icon}
        </div>
      </div>

      {/* Bottom Part */}
      <div className='w-full h-[36px] flex items-center gap-[8px]'>
        {/* Left text */}
        <span className='flex-1 h-[36px] font-semibold text-[30px] leading-[36px] text-white truncate'>
          {bottomLeftText}
        </span>

        {/* Right text next to it */}
        <span className='flex-none h-[20px] font-medium text-[12px] leading-[20px] text-[#DCFD63] flex items-center truncate'>
          {bottomRightText}
        </span>
      </div>
    </div>
  )
}
