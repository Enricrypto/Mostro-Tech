"use client"

import React from "react"
import Image from "next/image"
import { useProfileSetupStore } from "@/stores/profileSetupStore"
import { ProgressBar } from "@/components/atoms/ProgressBar"
import { Step1 } from "@/components/sections/ProfileSetup/Step1"
import { Step2 } from "@/components/sections/ProfileSetup/Step2"
import { Step3 } from "@/components/sections/ProfileSetup/Step3"
import { Step4 } from "@/components/sections/ProfileSetup/Step4"
import { Step5 } from "@/components/sections/ProfileSetup/Step5"

const steps = [
  { component: <Step1 /> },
  { component: <Step2 /> },
  { component: <Step3 /> },
  { component: <Step4 /> },
  { component: <Step5 /> }
]

export default function ProfileSetupPage() {
  const { currentStep } = useProfileSetupStore()
  const progress = (currentStep / 4) * 100

  return (
    <div className='min-h-screen w-full bg-[#6654D3] flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 transition-all duration-500'>
      <div className='w-full max-w-lg mx-auto'>
        <div className='flex justify-center mb-8'>
          <Image src='/logo.png' alt='Logo' width={60} height={60} />
        </div>

        {currentStep <= 4 && (
          <>
            <h1 className='text-3xl font-bold text-white text-center'>
              Profile Setup
            </h1>
            <p className='text-center text-gray-300 mb-4'>
              Step {currentStep} of 4
            </p>
            <div className='w-full max-w-md mx-auto mb-8'>
              <ProgressBar
                value={progress}
                variant='setup-profile'
                className='bg-white/20'
              />
            </div>
          </>
        )}

        <div className='bg-black/20 rounded-xl p-8 shadow-lg backdrop-blur-sm border border-white/10'>
          <div
            className='transition-opacity duration-900 ease-in-out'
            key={currentStep}
          >
            {steps[currentStep - 1].component}
          </div>
        </div>
      </div>
    </div>
  )
}
