"use client"

import * as SliderPrimitive from "@radix-ui/react-slider"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const seekBarCVA = cva(
  "relative w-full max-w-[33.3rem] touch-none select-none flex items-center",
  {
    variants: {
      variant: {
        blue: "bg-[var(--color-skyblue-opacity)]",
        red: "bg-[var(--color-red-opacity)]",
        green: "bg-[var(--color-green-opacity)]",
        purple: "bg-[var(--color-purple-opacity)]"
      }
    },
    defaultVariants: {
      variant: "blue"
    }
  }
)

const seekBarThumbCVA = cva(
  `
  block w-[1rem] h-[1rem] sm:w-[1.1rem] sm:h-[1.1rem]
  rounded-full bg-[var(--color-white)] shadow-md cursor-pointer
  hover:scale-110 active:scale-95 transition-transform duration-150
  `
)

const seekBarRangeCVA = cva("absolute h-full rounded-full", {
  variants: {
    variant: {
      blue: "bg-[var(--color-skyblue)]",
      red: "bg-[var(--color-red)]",
      green: "bg-[var(--color-green)]",
      purple: "bg-[var(--color-purple)]"
    }
  },
  defaultVariants: {
    variant: "blue"
  }
})

interface SeekBarProps extends VariantProps<typeof seekBarCVA> {
  value: number // between 0 and 1
  onChange: (value: number) => void
  className?: string
}

export function SeekBar({
  value,
  onChange,
  variant = "blue",
  className
}: SeekBarProps) {
  return (
    <SliderPrimitive.Root
      className={cn(seekBarCVA({ variant }), className)}
      value={[value * 100]}
      max={100}
      step={0.1}
      onValueChange={(val) => onChange(val[0] / 100)}
    >
      <SliderPrimitive.Track className='relative flex-1 h-3 sm:h-[0.9rem] md:h-4 rounded-full bg-[rgba(255,255,255,0.2)]'>
        <SliderPrimitive.Range className={seekBarRangeCVA({ variant })} />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className={seekBarThumbCVA()} />
    </SliderPrimitive.Root>
  )
}
