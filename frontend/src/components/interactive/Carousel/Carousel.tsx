"use client"

import { useState, CSSProperties } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselProps {
  items: React.ReactNode[]
  itemWidth: number
  gap?: number
}

export const Carousel = ({ items, itemWidth, gap = 64 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goLeft = () => setCurrentIndex((prev) => Math.max(prev - 1, 0))
  const goRight = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, items.length - 1))
  const goToStart = () => setCurrentIndex(0)

  const transformStyle: CSSProperties = {
    transform: `translateX(-${currentIndex * (itemWidth + gap)}px)`,
    transition: "transform 0.3s",
    display: "flex",
    gap: `${gap}px`
  }

  const arrowBaseClasses =
    "absolute w-[32px] h-[32px] top-[16px] rounded-[19px] flex items-center justify-center cursor-pointer"

  return (
    <div className='relative w-[190px] h-[64px]'>
      {/* Dashed border */}
      <div
        className='absolute inset-0 rounded-[5px]'
        style={{ border: "1px dashed var(--color-carousel-border)" }}
      />

      {/* Left Arrow */}
      <button
        onClick={goLeft}
        disabled={currentIndex === 0}
        className={arrowBaseClasses}
        style={{ left: "16px", background: "var(--color-carousel-arrow-bg)" }}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={goRight}
        disabled={currentIndex === items.length - 1}
        className={arrowBaseClasses}
        style={{ left: "64px", background: "var(--color-carousel-arrow-bg)" }}
      >
        <ChevronRight size={24} />
      </button>

      {/* Jump-to-Start Arrow */}
      <button
        onClick={goToStart}
        disabled={currentIndex === 0}
        className={arrowBaseClasses}
        style={{ left: "142px", background: "var(--color-carousel-jump-bg)" }}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Carousel items */}
      <div className='w-full h-full overflow-hidden relative'>
        <div style={transformStyle}>
          {items.map((item, i) => (
            <div
              key={i}
              style={{ flexShrink: 0, width: itemWidth, height: "64px" }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
