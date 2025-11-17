"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FeedbackButton } from "@/components/atoms/Feedback"

export const Feedback = () => {
  const [isExpanded, setIsExpanded] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className='fixed top-1/2 right-4 -translate-y-1/2 z-50'
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => setIsExpanded(false)}
    >
      <AnimatePresence>
        <FeedbackButton isExpanded={isExpanded} />
      </AnimatePresence>
    </motion.div>
  )
}
