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
      className={`flex flex-col justify-center items-start gap-3 ${
        className ?? ""
      }`}
      style={{
        width: "clamp(12rem, 20vw, 14rem)", // scales between mobile and desktop
        height: "clamp(5rem, 12vw, 6rem)",
        padding: "clamp(1rem, 2vw, 1.5rem)",
        background: "var(--color-primary)", // using theme color
        borderRadius: "var(--radius-card)"
      }}
    >
      {/* Top Text */}
      <div className='flex items-center gap-2 w-full'>
        <span
          className='font-inter font-medium'
          style={{
            fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
            color: "var(--color-black)"
          }}
        >
          {topText}
        </span>
      </div>

      {/* Bottom Text */}
      <div className='flex items-center gap-1 w-full'>
        <span
          className='font-inter font-semibold'
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
            lineHeight: "1.2",
            letterSpacing: "-0.015em",
            color: "var(--color-black)"
          }}
        >
          {bottomText}
        </span>
      </div>
    </div>
  )
}
