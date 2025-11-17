"use client"

interface MiniDataArtistCardProps {
  topText: string
  bottomText: string
  className?: string
}

export function MiniDataArtistCard({
  topText,
  bottomText,
  className
}: MiniDataArtistCardProps) {
  return (
    <div
      className={`
       flex flex-col justify-center items-start gap-3
    p-6 rounded-xl bg-(--color-primary-light)
    min-w-44   
    h-24    
    md:w-[281px]
        ${className ?? ""}
      `}
    >
      {/* Top Text */}
      <div className='flex items-center gap-2 w-full'>
        <span className='font-inter font-medium text-base max-md:text-sm text-black'>
          {topText}
        </span>
      </div>

      {/* Bottom Text */}
      <div className='flex items-center gap-1 w-full'>
        <span
          className='font-inter font-semibold text-2xl max-md:text-lg text-black'
          style={{ lineHeight: "1.2", letterSpacing: "-0.015em" }}
        >
          {bottomText}
        </span>
      </div>
    </div>
  )
}
