"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ThemedForm } from "@/components/molecules/ThemedForm"
import { InputField } from "@/components/inputs/Input"
import { z } from "zod"
import { newsletterSchema } from "@/schemas/formSchemas"

interface NewsletterFormProps {
  spacing?: string
}

type NewsletterData = z.infer<typeof newsletterSchema>

export function NewsletterForm({
  spacing = "var(--spacing-4)"
}: NewsletterFormProps) {
  const form = useForm<NewsletterData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: ""
    }
  })

  const onSubmit = (data: NewsletterData) => {
    console.log("📨 Newsletter submitted:", data)
  }

  return (
    <ThemedForm
      form={form}
      onSubmit={(data) => console.log(data)}
      spacing={spacing}
      className='w-full'
    >
      {/* 🟢 Name Field */}
      <ThemedForm.Item>
        <ThemedForm.Control>
          <InputField
            {...form.register("name")}
            placeholder='Name'
            className={`
              w-full
              h-[36px]
              rounded-[var(--radius-sm)]
              border border-[var(--input-border,#CBD5E1)]
              px-3 py-2
              font-inter
              text-[14px]
              leading-[20px]
              text-[#B3B3B3]
            `}
          />
        </ThemedForm.Control>
        {form.formState.errors.name && (
          <p className='text-red-500 text-[12px] mt-1'>
            {form.formState.errors.name.message}
          </p>
        )}
      </ThemedForm.Item>

      {/* 🟣 Surname Field */}
      <ThemedForm.Item>
        <ThemedForm.Control>
          <InputField
            {...form.register("surname")}
            placeholder='Surname'
            className={`
              w-full
              h-[36px]
              rounded-[var(--radius-sm)]
              border border-[var(--input-border,#CBD5E1)]
              px-3 py-2
              font-inter
              text-[14px]
              leading-[20px]
              text-[#B3B3B3]
            `}
          />
        </ThemedForm.Control>
        {form.formState.errors.surname && (
          <p className='text-red-500 text-[12px] mt-1'>
            {form.formState.errors.surname.message}
          </p>
        )}
      </ThemedForm.Item>

      {/* 🟠 Email + Button */}
      <ThemedForm.Item>
        <div className='flex w-full gap-[8px]'>
          <ThemedForm.Control className='flex-1'>
            <InputField
              {...form.register("email")}
              placeholder='Email'
              className={`
                w-full
                h-[40px]
                rounded-[var(--radius-sm)]
                border border-[var(--input-border,#CBD5E1)]
                px-[12px]
                py-[8px]
                font-inter
                text-[14px]
                leading-[24px]
                text-[#B3B3B3]
              `}
            />
          </ThemedForm.Control>

          <button
            type='submit'
            disabled={form.formState.isSubmitting}
            className={`
              w-[100px]
              h-[40px]
              rounded-[6px]
              bg-[#DCFD63]
              text-[14px]
              font-medium
              leading-[24px]
              font-inter
              cursor-pointer
              hover:text-white
              transition-colors
            `}
          >
            {form.formState.isSubmitting ? "..." : "Subscribe"}
          </button>
        </div>

        {form.formState.errors.email && (
          <p className='text-red-500 text-[12px] mt-1'>
            {form.formState.errors.email.message}
          </p>
        )}
      </ThemedForm.Item>
    </ThemedForm>
  )
}
