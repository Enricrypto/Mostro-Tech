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
        w-[168px] h-[104px] p-[14px_10px]
        rounded-[10px] border border-[#2D3953] bg-[#121B2B]
        flex flex-col justify-between
        md:w-[230px] md:h-[110px] md:p-[20px_16px]
        lg:w-[384px] lg:h-28 lg:p-6
      '
    >
      {/* Top Part */}
      <div className='w-full h-5 flex justify-between items-center'>
        <span className='flex-1 h-5 text-[#B3B3B3] font-medium text-[10px] leading-5 md:text-[12px]'>
          {topText}
        </span>
        {/* Icon */}
        <div className='w-5 h-5 flex items-center justify-center shrink-0'>
          {icon}
        </div>
      </div>

      {/* Bottom Part */}
      <div className='w-full h-9 flex items-center gap-2'>
        {/* Left text */}
        <span className='flex-1 h-9 font-semibold text-[20px] leading-9 text-white md:text-[30px]'>
          {bottomLeftText}
        </span>

        {/* Right text next to it */}
        <span className='flex-none h-5 font-medium text-[10px] leading-5 text-[#DCFD63] flex items-center md:text-[12px]'>
          {bottomRightText}
        </span>
      </div>
    </div>
  )
}
