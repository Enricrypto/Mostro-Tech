"use client"

import { useState, useRef, useEffect, CSSProperties } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselProps {
  items: React.ReactNode[]
  gap?: number
}

export const Carousel = ({ items, gap = 16 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [itemWidth, setItemWidth] = useState(0)

  // Calculate item width based on container
  useEffect(() => {
    if (containerRef.current && items.length > 0) {
      const containerWidth = containerRef.current.offsetWidth
      setItemWidth(containerWidth * 0.8) // each item takes 80% of container
    }
  }, [containerRef.current, items.length])

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
    "absolute w-[32px] h-[32px] rounded-[50%] flex items-center justify-center cursor-pointer z-10 bg-white shadow-md"

  return (
    <div className='relative w-full overflow-hidden py-4'>
      {/* Carousel container */}
      <div ref={containerRef} className='w-full'>
        <div style={transformStyle}>
          {items.map((item, i) => (
            <div
              key={i}
              style={{ flexShrink: 0, width: itemWidth }}
              className='h-64'
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Jump-to-start (leftmost) */}
      <button
        onClick={goToStart}
        disabled={currentIndex === 0}
        className='absolute w-[32px] h-[32px] rounded-[19px] flex items-center justify-center cursor-pointer bg-[#64748B] z-10'
        style={{
          bottom: "16px", // distance from bottom
          left: "142px" // horizontal position as per your layout
        }}
      >
        <ChevronLeft size={12} color='#FFFFFF' />
      </button>

      {/* Right arrow */}
      <button
        onClick={goRight}
        disabled={currentIndex === items.length - 1}
        className='absolute w-[32px] h-[32px] rounded-[19px] flex items-center justify-center cursor-pointer bg-[#F1F5F9] z-10'
        style={{
          bottom: "16px",
          left: "79px"
        }}
      >
        <ChevronRight size={12} color='#000000' />
      </button>

      {/* Left arrow */}
      <button
        onClick={goLeft}
        disabled={currentIndex === 0}
        className='absolute w-[32px] h-[32px] rounded-[19px] flex items-center justify-center cursor-pointer bg-[#F1F5F9] z-10'
        style={{
          bottom: "16px",
          left: "16px"
        }}
      >
        <ChevronLeft size={12} color='#000000' />
      </button>
    </div>
  )
}
