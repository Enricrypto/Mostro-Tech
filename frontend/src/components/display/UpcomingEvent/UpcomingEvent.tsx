"use client"

import { cn } from "@/lib/utils"

export type Event = {
  id: string
  title: string
  date: string
  time: string
  location: string
  status: 'on-sale' | 'sold-out' | 'coming-soon'
  statusColor: string
}

export type UpcomingEventProps = {
  className?: string
  event?: Event
}

/**
 * UpcomingEvent component - displays event information with action buttons
 */
export function UpcomingEvent({
  className,
  event = {
    id: "1",
    title: "Live in Berlin",
    date: "Nov 15, 2025",
    time: "8:00 PM",
    location: "Berghain",
    status: "on-sale",
    statusColor: "#DCFD63"
  }
}: UpcomingEventProps) {
  
  const getStatusText = (status: Event['status']) => {
    switch (status) {
      case 'on-sale': return 'On Sale'
      case 'sold-out': return 'Sold Out'
      case 'coming-soon': return 'Coming Soon'
      default: return 'On Sale'
    }
  }

  const getStatusColors = (status: Event['status']) => {
    switch (status) {
      case 'on-sale': 
        return { 
          background: '#DCFD634D', 
          border: '#DCFD63', 
          text: '#DCFD63' 
        }
      case 'sold-out': 
        return { 
          background: '#FF6B6B4D', 
          border: '#FF6B6B', 
          text: '#FF6B6B' 
        }
      case 'coming-soon': 
        return { 
          background: '#FFD93D4D', 
          border: '#FFD93D', 
          text: '#FFD93D' 
        }
      default: 
        return { 
          background: '#DCFD634D', 
          border: '#DCFD63', 
          text: '#DCFD63' 
        }
    }
  }
  
  // Style constants
  const styles = {
    eventCard: {
      width: '580.5px',
      height: '158px',
      borderRadius: '10px',
      padding: '24px',
      background: '#121B2B',
      border: '2px solid #2D3953',
      boxShadow: '0px 4px 6px 0px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'space-between',
      margin: '0 auto'
    },
    firstFrame: {
      width: '532.5px',
      height: '56px',
      gap: '8px',
      transform: 'rotate(0deg)',
      opacity: 1,
      display: 'flex',
      flexDirection: 'column' as const
    },
    firstSubFrame: {
      width: '532.5px',
      height: '28px',
      justifyContent: 'space-between',
      transform: 'rotate(0deg)',
      opacity: 1,
      display: 'flex',
      alignItems: 'center'
    },
    secondSubFrame: {
      width: '259px',
      height: '20px',
      gap: '19px',
      transform: 'rotate(0deg)',
      opacity: 1,
      display: 'flex',
      alignItems: 'center'
    },
    secondFrame: {
      width: '532.5px',
      height: '40px',
      gap: '14px',
      transform: 'rotate(0deg)',
      opacity: 1,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }

  const statusColors = getStatusColors(event.status)

  // Component parts
  const StatusBadge = () => (
    <div style={{
      width: '61px',
      height: '22px',
      borderRadius: '10px',
      border: `1px solid ${statusColors.border}`,
      transform: 'rotate(0deg)',
      opacity: 1,
      paddingTop: '2px',
      paddingRight: '8px',
      paddingBottom: '2px',
      paddingLeft: '8px',
      background: statusColors.background,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        width: '45px',
        height: '20px',
        transform: 'rotate(0deg)',
        opacity: 1,
        color: statusColors.text,
        fontFamily: 'Inter',
        fontWeight: 500,
        fontSize: '12px',
        lineHeight: '20px',
        letterSpacing: '0%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        whiteSpace: 'nowrap' as const,
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}>
        {getStatusText(event.status)}
      </div>
    </div>
  )

  const CalendarIcon = () => (
    <div style={{
      width: '16px',
      height: '16px',
      transform: 'rotate(0deg)',
      opacity: 1,
      position: 'relative'
    }}>
      <div style={{
        width: '12px',
        height: '0px',
        position: 'absolute',
        top: '6.67px',
        left: '2px',
        border: '1.5px solid #FFFFFF',
        transform: 'rotate(0deg)',
        opacity: 1
      }} />
      <div style={{
        width: '0px',
        height: '2.67px',
        position: 'absolute',
        top: '1.33px',
        left: '5.33px',
        border: '1.5px solid #FFFFFF',
        transform: 'rotate(0deg)',
        opacity: 1
      }} />
      <div style={{
        width: '0px',
        height: '2.67px',
        position: 'absolute',
        top: '1.33px',
        left: '10.67px',
        border: '1.5px solid #FFFFFF',
        transform: 'rotate(0deg)',
        opacity: 1
      }} />
      <div style={{
        width: '12px',
        height: '12px',
        position: 'absolute',
        top: '2.67px',
        left: '2px',
        border: '1.5px solid #FFFFFF',
        borderRadius: '1px',
        transform: 'rotate(0deg)',
        opacity: 1
      }} />
    </div>
  )

  const MapPinIcon = () => (
    <div style={{
      width: '16px',
      height: '16px',
      transform: 'rotate(0deg)',
      opacity: 1,
      position: 'relative'
    }}>
      <div style={{
        width: '4px',
        height: '4px',
        position: 'absolute',
        top: '4.67px',
        left: '6px',
        border: '1.5px solid #FFFFFF',
        borderRadius: '50%',
        transform: 'rotate(0deg)',
        opacity: 1
      }} />
      <div style={{
        width: '10.67px',
        height: '13.33px',
        position: 'absolute',
        top: '1.33px',
        left: '2.67px',
        border: '1.5px solid #FFFFFF',
        borderRadius: '50% 50% 50% 0',
        transform: 'rotate(-45deg)',
        transformOrigin: 'center',
        opacity: 1
      }} />
    </div>
  )

  const TicketIcon = () => (
    <div style={{
      width: '20px',
      height: '20px',
      transform: 'rotate(0deg)',
      opacity: 1,
      position: 'relative',
      marginRight: '10px',
      filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15))'
    }}>
      <div style={{
        width: '15px',
        height: '11.67px',
        position: 'absolute',
        top: '4.17px',
        left: '2.5px',
        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))',
        border: '2px solid #000000',
        borderRadius: '4px',
        transform: 'rotate(0deg)',
        opacity: 1
      }} />
      <div style={{
        position: 'absolute',
        top: '4.17px',
        left: '10.83px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2.5px',
        alignItems: 'center'
      }}>
        {[...Array(3)].map((_, i) => (
          <div key={i} style={{
            width: '2px',
            height: '2px',
            backgroundColor: '#000000',
            borderRadius: '50%',
            opacity: 0.9
          }} />
        ))}
      </div>
      <div style={{
        position: 'absolute',
        top: '7px',
        left: '6px',
        width: '6px',
        height: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          width: '0',
          height: '0',
          borderLeft: '2px solid transparent',
          borderRight: '2px solid transparent',
          borderBottom: '3px solid #000000',
          opacity: 0.7,
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '1px',
            left: '-2px',
            width: '0',
            height: '0',
            borderLeft: '2px solid transparent',
            borderRight: '2px solid transparent',
            borderTop: '2px solid #000000'
          }} />
        </div>
      </div>
      <div style={{
        position: 'absolute',
        top: '4.67px',
        left: '3px',
        width: '4px',
        height: '2px',
        background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.4), transparent)',
        borderRadius: '2px',
        opacity: 0.8
      }} />
    </div>
  )
  
  return (
    <div 
      className={cn("w-full", className)}
      style={styles.eventCard}
    >
      {/* First frame */}
      <div style={styles.firstFrame}>
        {/* First sub-frame */}
        <div style={styles.firstSubFrame}>
          {/* Title text */}
          <div style={{ 
            width: '111px',
            height: '28px',
            transform: 'rotate(0deg)',
            opacity: 1,
            color: '#FFFFFF',
            fontFamily: 'Inter',
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '28px',
            letterSpacing: '0%',
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap' as const,
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {event.title}
          </div>
          
          <StatusBadge />
        </div>

        {/* Second sub-frame */}
        <div style={styles.secondSubFrame}>
          {/* Date and time */}
          <div style={{
            width: '165px',
            height: '20px',
            gap: '8px',
            transform: 'rotate(0deg)',
            opacity: 1,
            display: 'flex',
            alignItems: 'center'
          }}>
            <CalendarIcon />
            <div style={{
              width: '141px',
              height: '20px',
              transform: 'rotate(0deg)',
              opacity: 1,
              color: '#FFFFFF',
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '12px',
              lineHeight: '20px',
              letterSpacing: '0%',
              display: 'flex',
              alignItems: 'center',
              whiteSpace: 'nowrap' as const,
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              {event.date} at {event.time}
            </div>
          </div>
          
          {/* Location */}
          <div style={{
            width: '75px',
            height: '20px',
            gap: '8px',
            transform: 'rotate(0deg)',
            opacity: 1,
            display: 'flex',
            alignItems: 'center'
          }}>
            <MapPinIcon />
            <div style={{
              width: '51px',
              height: '20px',
              transform: 'rotate(0deg)',
              opacity: 1,
              color: '#FFFFFF',
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '12px',
              lineHeight: '20px',
              letterSpacing: '0%',
              display: 'flex',
              alignItems: 'center',
              whiteSpace: 'nowrap' as const,
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              {event.location}
            </div>
          </div>
        </div>
      </div>

      {/* Second frame - Buttons */}
      <div style={styles.secondFrame}>
        {/* Enhanced Claim Access button */}
        <button 
          style={{
            width: '153px',
            height: '40px',
            borderRadius: '6px',
            gap: '10px',
            transform: 'rotate(0deg)',
            opacity: 1,
            paddingTop: '8px',
            paddingRight: '16px',
            paddingBottom: '8px',
            paddingLeft: '16px',
            background: 'linear-gradient(135deg, #71D6FB 0%, #5BC5EA 100%)',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(113, 214, 251, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
            transition: 'all 0.2s ease-in-out',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-1px) scale(1.02)'
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(113, 214, 251, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(113, 214, 251, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'translateY(1px) scale(0.98)'
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = 'translateY(-1px) scale(1.02)'
          }}
        >
          <TicketIcon />
          <div style={{
            width: '91px',
            height: '24px',
            transform: 'rotate(0deg)',
            opacity: 1,
            color: '#000000',
            fontFamily: 'Inter',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '24px',
            letterSpacing: '0.5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            whiteSpace: 'nowrap' as const,
            textShadow: '0 1px 2px rgba(255, 255, 255, 0.1)'
          }}>
            Claim Access
          </div>
        </button>
        
        {/* Add to Calendar button */}
        <button 
          style={{
            width: '141px',
            height: '40px',
            borderRadius: '6px',
            border: '1px solid #71D6FB',
            gap: '10px',
            transform: 'rotate(0deg)',
            opacity: 1,
            paddingTop: '8px',
            paddingRight: '16px',
            paddingBottom: '8px',
            paddingLeft: '16px',
            background: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease-in-out',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(113, 214, 251, 0.1)'
            e.currentTarget.style.transform = 'translateY(-1px)'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(113, 214, 251, 0.2)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'translateY(1px)'
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = 'translateY(-1px)'
          }}
        >
          <div style={{
            width: '109px',
            height: '24px',
            transform: 'rotate(0deg)',
            opacity: 1,
            color: '#FFFFFF',
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '24px',
            letterSpacing: '0%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            whiteSpace: 'nowrap' as const
          }}>
            Add to Calendar
          </div>
        </button>
      </div>
    </div>
  )
}