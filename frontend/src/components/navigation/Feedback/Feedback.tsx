"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FeedbackButton } from "@/components/atoms/Feedback"
import { useMediaQuery } from "@/hooks/useMediaQuery"

export const Feedback = () => {
  const [isExpanded, setIsExpanded] = useState(true)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Initial visual expand on load, then collapse.
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setIsExpanded(false)
    }, 2000)
    return () => clearTimeout(initialTimer)
  }, [])

  // Cleanup main timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [])

  const handleClick = () => {
    if (!isMobile) {
      // Desktop: a click always opens the link.
      window.open(
        "https://forms.gle/A3cfCsm4VUVxC52y7",
        "_blank",
        "noopener,noreferrer"
      )
      return
    }

    // Mobile: "first tap expands, second tap navigates"
    if (timerRef.current) {
      // If a timer is running, this is the second tap.
      clearTimeout(timerRef.current)
      timerRef.current = null
      window.open(
        "https://forms.gle/A3cfCsm4VUVxC52y7",
        "_blank",
        "noopener,noreferrer"
      )
      setIsExpanded(false)
    } else {
      // No timer running. This is the first tap.
      setIsExpanded(true)
      timerRef.current = setTimeout(() => {
        setIsExpanded(false)
        timerRef.current = null // Reset timer ref
      }, 2000)
    }
  }

  const handleHoverStart = () => {
    if (!isMobile) {
      setIsExpanded(true)
    }
  }

  const handleHoverEnd = () => {
    if (!isMobile) {
      setIsExpanded(false)
    }
  }

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className='fixed top-1/2 right-2 sm:right-4 -translate-y-1/2 z-50'
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onClick={handleClick}
    >
      <AnimatePresence>
        <FeedbackButton isExpanded={isExpanded} />
      </AnimatePresence>
    </motion.div>
  )
}
