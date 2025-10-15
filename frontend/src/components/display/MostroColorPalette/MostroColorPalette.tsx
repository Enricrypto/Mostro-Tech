import React from 'react'
import { cn } from '@/lib/utils'

interface MostroColorPaletteProps {
  className?: string
}

interface ColorPaletteItemProps {
  colorVar: string
  colorCode: string
  label?: string
}

const ColorPaletteItem: React.FC<ColorPaletteItemProps> = ({ colorVar, colorCode, label }) => (
  <div className="flex flex-col gap-2 items-center">
    <div 
      className="w-[55px] h-[40px] rounded-[3px] border border-gray-100"
      style={{ backgroundColor: `var(${colorVar})` }}
    />
    <span className="text-[12px] font-medium text-slate-500 font-inter">
      {label || colorCode}
    </span>
  </div>
)

const MostroColorPalette: React.FC<MostroColorPaletteProps> = ({ 
  className 
}) => {
  const colorPalette = [
    { colorVar: '--color-black', colorCode: '#000000', label: 'Slate' },
    { colorVar: '--color-primary', colorCode: '#6953DA' },
    { colorVar: '--color-primary-light', colorCode: '#9C8BE7' },
    { colorVar: '--color-accent', colorCode: '#3FD9FF' },
    { colorVar: '--color-accent-dark', colorCode: '#1E97E6' },
    { colorVar: '--color-highlight', colorCode: '#D3FE3D' },
    { colorVar: '--color-muted', colorCode: '#D2D2D5' },
    { colorVar: '--color-white', colorCode: '#FFFFFF' }
  ]

  return (
    <div 
      className={cn("bg-white p-8 flex flex-col gap-8", className)}
      style={{
        width: '792px',
        height: '296px'
      }}
    >
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h2 className="text-[30px] font-semibold text-slate-900 font-inter leading-[36px]">
            Mostro Color Palette
          </h2>
          <button 
            className="px-4 py-2 bg-[--color-button-bg-selected] text-white rounded-md text-sm font-medium underline hover:opacity-90 transition-opacity"
            style={{ backgroundColor: 'var(--color-button-bg-selected)' }}
          >
            View docs
          </button>
        </div>
        <hr className="border-gray-200" />
      </div>
      
      {/* Color Palette */}
      <div className="flex items-center gap-4">
        <span className="text-[14px] font-medium text-black font-inter min-w-[63px]">
          Slate
        </span>
        <div className="flex gap-2">
          {colorPalette.map((color, index) => (
            <ColorPaletteItem 
              key={index}
              colorVar={color.colorVar}
              colorCode={color.colorCode}
              label={color.label}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MostroColorPalette
