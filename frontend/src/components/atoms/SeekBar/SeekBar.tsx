"use client"

import * as SliderPrimitive from "@radix-ui/react-slider"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const seekBarCVA = cva(
  "relative w-full max-w-[533px] h-4 touch-none select-none flex items-center",
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
  "block w-4 h-4 rounded-full bg-white shadow-md cursor-pointer"
)

const seekBarRangeCVA = cva("absolute h-full rounded-[40px]", {
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
      <SliderPrimitive.Track className='relative flex-1 h-4 rounded-[40px] bg-[rgba(255,255,255,0.2)]'>
        <SliderPrimitive.Range className={seekBarRangeCVA({ variant })} />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className={seekBarThumbCVA()} />
    </SliderPrimitive.Root>
  )
}
