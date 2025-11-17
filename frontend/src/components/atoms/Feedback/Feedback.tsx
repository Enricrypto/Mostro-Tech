"use client"

import { motion } from "framer-motion"
import { ArrowRight, ArrowLeft } from "lucide-react"

export const FeedbackButton = ({ isExpanded }: { isExpanded: boolean }) => {
  return (
    <motion.a
      href='https://forms.gle/A3cfCsm4VUVxC52y7'
      target='_blank'
      rel='noopener noreferrer'
      className='
        flex items-center
        rounded-full shadow-lg
        cursor-pointer
        hover:shadow-xl transition-shadow
        overflow-hidden
      '
      initial={false}
      animate={{
        width: isExpanded ? "15rem" : "3rem",
        height: "3rem",
        padding: isExpanded ? "0.25rem" : "0",
        backgroundColor: isExpanded ? "white" : "transparent",
        borderColor: isExpanded ? "var(--color-green)" : "transparent",
        borderWidth: isExpanded ? "1px" : "0px",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        className='flex items-center justify-center w-10 h-10 bg-[var(--color-green)] rounded-full flex-shrink-0'
        animate={{ rotate: isExpanded ? 0 : 360 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {isExpanded ? (
          <ArrowRight className='text-black w-6 h-6' />
        ) : (
          <ArrowLeft className='text-black w-6 h-6' />
        )}
      </motion.div>

      <motion.span
        className='ml-2 text-base font-medium text-gray-800 whitespace-nowrap'
        initial={{ opacity: 0 }}
        animate={{
          opacity: isExpanded ? 1 : 0
        }}
        transition={{ duration: 0.3, delay: isExpanded ? 0.2 : 0 }}
      >
        Leave a Feedback
      </motion.span>
    </motion.a>
  )
}
