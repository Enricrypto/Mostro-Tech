"use client"

import React from "react"
import { Button } from "@/components/atoms/Button"
import { X } from "@phosphor-icons/react"

interface DialogProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  actions: React.ReactNode
}

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  children,
  actions
}) => {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-blue-950/30 backdrop-blur-lg'>
      <div className='bg-[var(--color-datacard-bg)] rounded-lg shadow-lg p-8 w-full max-w-3xl relative'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-2xl font-bold text-white'>{title}</h2>
          <Button
            variant='text-white-transparent'
            size='icon-sm'
            onClick={onClose}
            className='absolute top-4 right-4'
          >
            <X size={24} />
          </Button>
        </div>
        <div>{children}</div>
        <div className='flex justify-end gap-4 mt-8'>{actions}</div>
      </div>
    </div>
  )
}
