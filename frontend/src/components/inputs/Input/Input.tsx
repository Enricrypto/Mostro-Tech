import * as React from "react"
import { cn } from "@/lib/utils"

// Types for input variants
type InputVariant = 'default' | 'filled' | 'focused' | 'disabled'
type InputState = 'default' | 'focus' | 'success' | 'error' | 'disabled' | 'subscribe'

// Shared styles constants
const STYLES = {
  container: {
    fontFamily: 'Inter',
    display: 'flex',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Inter',
    letterSpacing: '0%'
  },
  input: {
    paddingTop: '8px',
    paddingRight: '56px',
    paddingBottom: '8px',
    paddingLeft: '12px',
    borderWidth: '1px',
    backgroundColor: '#FFFFFF'
  },
  button: {
    paddingTop: '8px',
    paddingRight: '16px',
    paddingBottom: '8px',
    paddingLeft: '16px',
    gap: '10px'
  }
}

// Colors configuration
const COLORS = {
  text: {
    primary: '#0F172A',
    secondary: '#64748B',
    placeholder: '#94A3B8'
  },
  border: {
    default: '#CBD5E1',
    focus: '#998CE1',
    success: '#10B981',
    error: '#EF4444'
  },
  button: {
    default: '#0F172A',
    subscribe: '#DCFD63'
  }
}

// Simple Input Component (for first sub-component)
interface SimpleInputProps {
  variant: InputVariant
  value?: string
  position: { top: number; left: number }
}

const SimpleInput: React.FC<SimpleInputProps> = ({ variant, value, position }) => {
  const getBorderColor = () => {
    switch (variant) {
      case 'focused': return COLORS.border.focus
      default: return COLORS.border.default
    }
  }

  const getTextColor = () => {
    switch (variant) {
      case 'disabled': return COLORS.text.placeholder
      default: return variant === 'default' ? COLORS.text.placeholder : COLORS.text.primary
    }
  }

  const getBorderWidth = () => variant === 'focused' ? '2px' : '1px'
  const getOpacity = () => variant === 'disabled' ? 0.5 : 1

  return (
    <div
      className={`absolute w-[284px] h-[${variant === 'focused' ? '40' : '36'}px] rotate-0 gap-[6px]`}
      style={{ 
        top: `${position.top}px`, 
        left: `${position.left}px`,
        opacity: getOpacity(),
        display: 'flex', 
        gap: '6px' 
      }}
    >
      <div
        className={`w-[284px] h-[${variant === 'focused' ? '40' : '36'}px] rounded-[6px] border bg-white flex items-center`}
        style={{
          ...STYLES.input,
          borderWidth: getBorderWidth(),
          borderColor: getBorderColor(),
          ...STYLES.container
        }}
      >
        {variant === 'focused' ? (
          <div
            className="w-[1px] h-[20px] bg-black"
            style={{
              width: '1px',
              height: '20px',
              backgroundColor: '#000000'
            }}
          />
        ) : (
          <span
            className={`h-[${variant === 'focused' ? '24' : '20'}px] text-[${variant === 'focused' ? '16' : '14'}px] font-normal`}
            style={{
              ...STYLES.text,
              fontWeight: 400,
              fontSize: variant === 'focused' ? '16px' : '14px',
              lineHeight: variant === 'focused' ? '24px' : '20px',
              color: getTextColor()
            }}
          >
            {value || (variant === 'filled' ? '100%' : 'Add value')}
          </span>
        )}
      </div>
    </div>
  )
}

// Complex Input Component (for second sub-component)
interface ComplexInputProps {
  state: InputState
  position: { top: number; left: number }
  showLabel?: boolean
  showDescription?: boolean
  buttonColor?: string
}

const ComplexInput: React.FC<ComplexInputProps> = ({ 
  state, 
  position, 
  showLabel = true, 
  showDescription = true,
  buttonColor 
}) => {
  const getInputBorderColor = () => {
    switch (state) {
      case 'focus': return COLORS.border.focus
      case 'success': return COLORS.border.success
      case 'error': return COLORS.border.error
      default: return COLORS.border.default
    }
  }

  const getInputBorderWidth = () => state === 'focus' ? '2px' : '1px'
  
  const getButtonColor = () => {
    if (buttonColor) return buttonColor
    return state === 'subscribe' ? COLORS.button.subscribe : COLORS.button.default
  }

  const getButtonTextColor = () => {
    return state === 'subscribe' ? COLORS.text.primary : '#FFFFFF'
  }

  const getDescriptionText = () => {
    switch (state) {
      case 'success': return 'This is a success message.'
      case 'error': return 'This is an error message.'
      default: return 'Enter your email address'
    }
  }

  const getDescriptionTextColor = () => {
    switch (state) {
      case 'success': return '#10B981' // Vert pour le succès
      case 'error': return '#EF4444' // Rouge pour l'erreur
      default: return COLORS.text.secondary
    }
  }

  const getPlaceholderText = () => {
    return state === 'focus' ? '' : (state === 'subscribe' ? 'Email' : 'email')
  }

  const getOpacity = () => state === 'disabled' ? 0.5 : 1
  const getHeight = () => state === 'subscribe' ? 40 : (showDescription ? 112 : 92)

  return (
    <div 
      className={`absolute w-[384px] h-[${getHeight()}px] rotate-0 gap-[6px]`}
      style={{ 
        top: `${position.top}px`, 
        left: `${position.left}px`,
        opacity: getOpacity(),
        display: 'flex', 
        flexDirection: 'column', 
        gap: '6px' 
      }}
    >
      {showLabel && (
        <div
          className="w-[384px] h-[20px] text-[14px] font-medium leading-[20px]"
          style={{
            ...STYLES.text,
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '20px',
            color: COLORS.text.primary
          }}
        >
          Email
        </div>
      )}
      
      <div 
        className="w-[384px] h-[40px] gap-[8px]"
        style={{ display: 'flex', gap: '8px' }}
      >
        <div 
          className="w-[276px] h-[40px] gap-[6px]"
          style={{ display: 'flex', gap: '6px' }}
        >
          <div
            className="w-[276px] h-[40px] rounded-[6px] border bg-white flex items-center"
            style={{
              ...STYLES.input,
              borderWidth: getInputBorderWidth(),
              borderColor: getInputBorderColor(),
              ...STYLES.container
            }}
          >
            {state === 'focus' ? (
              <div
                className="w-[1px] h-[20px] bg-black"
                style={{
                  width: '1px',
                  height: '20px',
                  backgroundColor: '#000000'
                }}
              />
            ) : (
              <span
                className="h-[24px] text-[16px] font-normal leading-[24px]"
                style={{
                  ...STYLES.text,
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: COLORS.text.placeholder
                }}
              >
                {getPlaceholderText()}
              </span>
            )}
          </div>
        </div>
        
        <div
          className="w-[100px] h-[40px] rounded-[6px] flex items-center justify-center"
          style={{
            ...STYLES.button,
            backgroundColor: getButtonColor()
          }}
        >
          <span
            className="w-[68px] h-[24px] text-[14px] font-medium leading-[24px]"
            style={{
              ...STYLES.text,
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '24px',
              color: getButtonTextColor()
            }}
          >
            Subscribe
          </span>
        </div>
      </div>
      
      {showDescription && (
        <div
          className="w-[384px] h-[20px] text-[14px] font-normal leading-[20px]"
          style={{
            ...STYLES.text,
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '20px',
            color: getDescriptionTextColor()
          }}
        >
          {getDescriptionText()}
        </div>
      )}
    </div>
  )
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="w-[875px] h-[949px] relative bg-white">
        {/* First sub-component: Simple Input States */}
        <div
          className={cn(
            "w-[316px] h-[228px] opacity-100 rotate-0",
            "rounded-[5px]",
            "border border-dashed border-[#8A38F5]",
            "absolute top-[66px] left-[511px]"
          )}
          style={{
            borderWidth: '1px',
            strokeDasharray: '15, 8'
          }}
        >
          <SimpleInput variant="default" position={{ top: 16, left: 16 }} />
          <SimpleInput variant="filled" value="100%" position={{ top: 68, left: 16 }} />
          <SimpleInput variant="focused" position={{ top: 120, left: 16 }} />
          <SimpleInput variant="disabled" position={{ top: 176, left: 16 }} />
        </div>
        
        {/* Second sub-component: Complex Input */}
        <div
          className={cn(
            "w-[400px] h-[670px] opacity-100 rotate-0",
            "rounded-[5px]",
            "border border-dashed border-[#8A38F5]",
            "absolute top-[66px] left-[50px]"
          )}
          style={{
            borderWidth: '1px',
            strokeDasharray: '15, 8'
          }}
        >
          <ComplexInput state="default" position={{ top: 20, left: 8 }} />
          <ComplexInput state="focus" position={{ top: 130, left: 8 }} />
          <ComplexInput state="success" position={{ top: 240, left: 8 }} />
          <ComplexInput state="error" position={{ top: 370, left: 8 }} />
          <ComplexInput state="disabled" position={{ top: 500, left: 8 }} />
          <ComplexInput 
            state="subscribe" 
            position={{ top: 610, left: 8 }} 
            showLabel={false} 
            showDescription={false}
          />
        </div>
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input }
