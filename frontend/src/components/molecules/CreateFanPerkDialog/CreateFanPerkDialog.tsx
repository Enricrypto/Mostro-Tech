"use client"

import React from "react"
import { Button } from "@/components/atoms/Button"
import { InputField } from "@/components/inputs/Input"
import { Dialog } from "@/components/Dialog"

export const CreateFanPerkDialog = ({
  isOpen,
  onClose
}: {
  isOpen: boolean
  onClose: () => void
}) => {
  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title='Create New Fan Perk'
      actions={
        <>
          <Button variant='button-cancel' onClick={onClose}>
            Cancel
          </Button>
          <Button variant='continue' onClick={onClose}>
            Create Perk
          </Button>
        </>
      }
    >
      <div className='flex flex-col gap-4 sm:gap-6'>
        <p className='text-gray-400'>
          Define a new reward for your supporters. Perks unlock when fans hold a
          certain number of your tokens.
        </p>
        <InputField
          label='Perk Title'
          placeholder='e.g., Exclusive Event Access'
          themeVariant='form-dark'
        />
        <div>
          <label
            htmlFor='perk-description'
            className='text-sm font-medium text-white mb-1'
          >
            Description
          </label>
          <textarea
            id='perk-description'
            placeholder='Describe what fans get with this perk'
            className='w-full rounded-[var(--radius-sm,6px)] px-[var(--space-sm,12px)] py-[var(--space-xs,8px)] font-body text-white placeholder:text-[var(--color-muted,#B3B3B3)] bg-[var(--color-dark-bg-hover)] border border-[var(--border-color,#CBD5E1)] focus:outline-none focus:ring-0'
            rows={4}
          ></textarea>
        </div>
        <InputField
          label='Quantity'
          placeholder='e.g., 100'
          themeVariant='form-dark'
          message='Quantity required'
        />
        <InputField
          label='Price in $USDC'
          placeholder='e.g., 50'
          themeVariant='form-dark'
          message='Minimum number of tokens required'
        />
      </div>
    </Dialog>
  )
}
