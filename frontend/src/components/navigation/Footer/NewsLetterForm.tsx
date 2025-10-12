"use client"

import { useForm } from "react-hook-form"
import { ThemedForm } from "@/components/molecules/ThemedForm"
import { InputField } from "@/components/inputs/Input"

interface NewsletterFormProps {
  spacing?: string // spacing between inputs
}

export function NewsletterForm({ spacing }: NewsletterFormProps) {
  const form = useForm()

  return (
    <ThemedForm
      form={form}
      onSubmit={(data) => console.log(data)}
      spacing='var(--spacing-4)'
      className='w-full'
    >
      {/* Name */}
      <ThemedForm.Item>
        <ThemedForm.Control>
          <InputField
            name='name'
            placeholder='Name'
            className={`
              w-full
              h-[36px]
              rounded-[var(--radius-sm)]
             border-[var(--input-border,#CBD5E1)] 
              px-3 py-2
              font-inter
              text-[14px]
              leading-[20px]
              text-[#B3B3B3] 
            `}
          />
        </ThemedForm.Control>
      </ThemedForm.Item>

      {/* Name */}
      <ThemedForm.Item>
        <ThemedForm.Control>
          <InputField
            name='Surname'
            placeholder='Surname'
            className={`
              w-full
              h-[36px]
              rounded-[var(--radius-sm)]
             border-[var(--input-border,#CBD5E1)] 
              px-3 py-2
              font-inter
              text-[14px]
              leading-[20px]
              text-[#B3B3B3] 
            `}
          />
        </ThemedForm.Control>
      </ThemedForm.Item>

      {/* Email + Button */}
      <ThemedForm.Item>
        {/* Flex container for input + button */}
        <div className='flex w-full gap-[8px]'>
          <ThemedForm.Control className='flex-1'>
            <InputField
              name='email'
              placeholder='Email'
              className={`
                w-full
                h-[40px]       /* update height to 40 */
                rounded-[var(--radius-sm)]
                border border-[var(--input-border,#CBD5E1)]
                px-[12px]
                py-[8px]
                font-inter
                text-[14px]
                leading-[24px] /* match Figma layout */
                text-[#B3B3B3]
              `}
            />
          </ThemedForm.Control>

          <button
            type='submit'
            className={`
              w-[100px]
              h-[40px]
              rounded-[6px]
              bg-[#DCFD63]   /* button background */
              text-[14px]
              font-medium
              leading-[24px]
              font-inter
              cursor-pointer hover:text-white transition-colors
            `}
          >
            Subscribe
          </button>
        </div>
      </ThemedForm.Item>
    </ThemedForm>
  )
}
