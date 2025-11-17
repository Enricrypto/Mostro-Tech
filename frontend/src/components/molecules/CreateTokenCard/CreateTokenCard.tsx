"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/atoms/Button"
import { Input } from "@/components/ui/input"
import { CheckCircle, ArrowLeft } from "lucide-react"

const createTokenSchema = z.object({
  proposalTitle: z.string().min(1, "Proposal title is required"),
  fundingGoal: z.string().min(1, "Funding goal is required"),
  description: z.string().min(1, "Description is required"),
  votingDuration: z.string().min(1, "Voting duration is required")
})

type CreateTokenFormValues = z.infer<typeof createTokenSchema>

export const CreateTokenCard = ({ onBack }: { onBack: () => void }) => {
  const form = useForm<CreateTokenFormValues>({
    resolver: zodResolver(createTokenSchema),
    defaultValues: {
      proposalTitle: "",
      fundingGoal: "",
      description: "",
      votingDuration: ""
    }
  })

  const onSubmit = (data: CreateTokenFormValues) => {
    console.log(data)
  }

  return (
    <div
      className={cn(
        "w-full max-w-lg mx-auto bg-[#0A111F] text-white rounded-2xl p-6 sm:p-8",
        "border border-gray-800"
      )}
    >
      <div className='text-center mb-8'>
        <h2 className='text-2xl sm:text-3xl font-semibold mb-2'>
          Create your token
        </h2>
        <p className='text-gray-400'>Set up your artist token</p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <div>
          <label
            htmlFor='proposalTitle'
            className='block text-sm font-medium text-gray-300 mb-2'
          >
            Proposal Title
          </label>
          <Input
            id='proposalTitle'
            placeholder='e.g., European Tour 2026'
            {...form.register("proposalTitle")}
            className='bg-transparent border-gray-700 focus:border-[var(--color-highlight)]'
          />
          {form.formState.errors.proposalTitle && (
            <p className='text-red-500 text-xs mt-1'>
              {form.formState.errors.proposalTitle.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor='fundingGoal'
            className='block text-sm font-medium text-gray-300 mb-2'
          >
            Funding Goal
          </label>
          <Input
            id='fundingGoal'
            placeholder='e.g., 15,000 USDC'
            {...form.register("fundingGoal")}
            className='bg-transparent border-gray-700 focus:border-[var(--color-highlight)]'
          />
          {form.formState.errors.fundingGoal && (
            <p className='text-red-500 text-xs mt-1'>
              {form.formState.errors.fundingGoal.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor='description'
            className='block text-sm font-medium text-gray-300 mb-2'
          >
            Description
          </label>
          <textarea
            id='description'
            placeholder='Explain your project in detail'
            {...form.register("description")}
            className={cn(
              "w-full min-h-[120px] bg-transparent border border-gray-700 rounded-md p-3",
              "focus:border-[var(--color-highlight)] focus:ring-0 outline-none"
            )}
          />
          {form.formState.errors.description && (
            <p className='text-red-500 text-xs mt-1'>
              {form.formState.errors.description.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor='votingDuration'
            className='block text-sm font-medium text-gray-300 mb-2'
          >
            Voting Duration
          </label>
          <Input
            id='votingDuration'
            placeholder='7 days'
            {...form.register("votingDuration")}
            className='bg-transparent border-gray-700 focus:border-[var(--color-highlight)]'
          />
          <p className='text-gray-500 text-xs mt-1'>
            How long the community has to vote (1-30 days)
          </p>
          {form.formState.errors.votingDuration && (
            <p className='text-red-500 text-xs mt-1'>
              {form.formState.errors.votingDuration.message}
            </p>
          )}
        </div>

        <div className='flex flex-col sm:flex-row gap-4 pt-4'>
          <Button
            type='button'
            variant='secondary-action'
            className='w-full sm:w-auto'
            icon={<ArrowLeft size={16} />}
            iconPosition='left'
            onClick={onBack}
          >
            Back
          </Button>
          <Button
            type='submit'
            variant='primary-action'
            className='w-full sm:flex-1'
            icon={<CheckCircle size={16} />}
            iconPosition='right'
          >
            Complete Setup
          </Button>
        </div>
      </form>
    </div>
  )
}
