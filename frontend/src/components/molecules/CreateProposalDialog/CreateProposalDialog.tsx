"use client"

import React from "react"
import { Button } from "@/components/atoms/Button"
import { InputField } from "@/components/inputs/Input"
import { Dialog } from "@/components/Dialog"

export const CreateProposalDialog = ({
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
      title='Create New Proposal'
      actions={
        <>
          <Button variant='button-cancel' onClick={onClose}>
            Cancel
          </Button>
          <Button variant='continue' onClick={onClose}>
            Create Proposal
          </Button>
        </>
      }
    >
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='flex flex-col gap-6'>
          <InputField
            label='Proposal Title'
            placeholder='e.g., European Tour 2026'
            themeVariant='form-dark'
          />
          <InputField
            label='Funding Goal in $USDC'
            placeholder='e.g., $ 15,000'
            themeVariant='form-dark'
          />
          <InputField
            label='Voting Duration'
            placeholder='7 days'
            themeVariant='form-dark'
            message='How long the community has to vote (1-30 days)'
          />
        </div>
        <div className='flex flex-col'>
          <label
            htmlFor='description'
            className='text-sm font-medium text-white mb-1'
          >
            Description
          </label>
          <textarea
            id='description'
            placeholder='Explain your project in detail.'
            className='w-full h-full rounded-[var(--radius-sm,6px)] px-[var(--space-sm,12px)] py-[var(--space-xs,8px)] font-body text-white placeholder:text-[var(--color-muted,#B3B3B3)] bg-[var(--color-dark-bg-hover)] border border-[var(--border-color,#CBD5E1)] focus:outline-none focus:ring-0'
            rows={8}
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
