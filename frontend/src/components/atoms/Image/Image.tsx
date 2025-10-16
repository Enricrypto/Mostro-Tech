"use client"

import { cn } from "@/lib/utils"

export type ImageProps = {
  className?: string
}

interface FrameProps {
  width: number
  height: number
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

const Frame: React.FC<FrameProps> = ({ width, height, className, style, children }) => (
  <div 
    style={{
      width: `${width}px`,
      height: `${height}px`,
      transform: 'rotate(0deg)',
      opacity: 1,
      ...style
    }}
    className={cn("", className)}
  >
    {children}
  </div>
)

const Text: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div 
    style={{
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: '30px',
      lineHeight: '36px',
      letterSpacing: '-0.75%',
      background: '#FFFFFF',
      color: '#0F172A'
    }}
    className="flex items-center justify-center w-full h-full"
  >
    {children}
  </div>
)

const Separator: React.FC = () => (
  <div 
    style={{
      width: '336px',
      height: '0px',
      borderWidth: '1px',
      transform: 'rotate(0deg)',
      opacity: 1,
      border: '1px solid #E2E8F0'
    }}
  />
)

/**
 * Image component with custom layout
 */
export function Image({ className }: ImageProps) {
  return (
    <Frame 
      width={400} 
      height={290}
      style={{
        paddingTop: '32px',
        paddingRight: '32px',
        paddingBottom: '20px',
        paddingLeft: '32px',
        gap: '20px',
        background: '#FFFFFF'
      }}
      className={cn("flex flex-col", className)}
    >
      {/* Header Frame */}
      <Frame 
        width={336} 
        height={68}
        className="flex flex-col"
      >
        <Frame 
          width={336} 
          height={36}
          style={{ gap: '45px' }}
          className="flex"
        >
          <Frame 
            width={89} 
            height={36}
            style={{ gap: '16px' }}
            className="flex"
          >
            <Text>Image</Text>
          </Frame>
        </Frame>
        <Separator />
      </Frame>

      {/* Image Frame */}
      <Frame 
        width={336} 
        height={150}
        style={{ borderRadius: '6px' }}
        className="overflow-hidden"
      >
        <img
          src="/image.jpg"
          alt="Custom image"
          width={336}
          height={150}
          className="object-cover w-full h-full"
          style={{ borderRadius: '6px' }}
        />
      </Frame>
    </Frame>
  )
}