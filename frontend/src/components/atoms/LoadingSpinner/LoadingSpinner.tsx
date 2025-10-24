"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  text?: string
  className?: string
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  text = "Loading...",
  className
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center w-full h-[400px] gap-4",
        className
      )}
    >
      {/* Spinner Circle */}
      <div
        className='w-14 h-14 border-4 border-t-transparent border-[#6654D3] rounded-full animate-spin'
        style={{
          boxShadow: "0 0 10px #6654D3AA"
        }}
      />

      {/* Loading Text */}
      <span
        className='font-inter text-white font-medium tracking-[-0.5%]'
        style={{
          fontSize: "18px",
          opacity: 0.8
        }}
      >
        {text}
      </span>
    </div>
  )
}
