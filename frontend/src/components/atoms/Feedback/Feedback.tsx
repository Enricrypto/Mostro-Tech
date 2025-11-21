"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ArrowRight, ArrowLeft } from "lucide-react"

export const FeedbackButton = ({ isExpanded }: { isExpanded: boolean }) => {
  return (
    <div
      className={cn(
        "flex items-center rounded-full shadow-lg cursor-pointer hover:shadow-xl overflow-hidden transition-all duration-500 ease-in-out",
        {
          "w-[12rem] h-10 p-1 bg-white border border-[var(--color-green)] sm:w-[15rem] sm:h-12":
            isExpanded,
          "w-12 h-12 p-0 bg-transparent": !isExpanded
        }
      )}
    >
      <motion.div
        className={cn(
          "flex items-center justify-center bg-[var(--color-green)] rounded-full flex-shrink-0",
          {
            "w-8 h-8 sm:w-10 sm:h-10": isExpanded,
            "w-10 h-10": !isExpanded
          }
        )}
        animate={{ rotate: isExpanded ? 0 : 360 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {isExpanded ? (
          <ArrowRight className='w-5 h-5 text-black sm:w-6 sm:h-6' />
        ) : (
          <ArrowLeft className='w-5 h-5 text-black sm:w-6 sm:h-6' />
        )}
      </motion.div>

      <motion.span
        className='font-medium text-gray-800 whitespace-nowrap text-sm ml-1.5 sm:text-base sm:ml-2'
        initial={{ opacity: 0, width: 0 }}
        animate={{
          opacity: isExpanded ? 1 : 0,
          width: isExpanded ? "auto" : 0
        }}
        transition={{ duration: 0.3, delay: isExpanded ? 0.2 : 0 }}
      >
        Leave Feedback
      </motion.span>
    </div>
  )
}
