"use client"

import { useProfileSetupStore } from "@/stores/profileSetupStore"
import { InputField } from "@/components/inputs/Input"
import { Button } from "@/components/atoms/Button"
import { ArrowLeft, Check } from "@phosphor-icons/react"

export const Step4 = () => {
  const { nextStep, prevStep, profileData, updateProfileData } =
    useProfileSetupStore()

  const handleTokenChange = (field: string, value: string) => {
    updateProfileData({
      token: { ...profileData.token, [field]: value }
    })
  }

  return (
    <div className='flex flex-col gap-6 w-full'>
      <div>
        <h2 className='text-2xl font-bold text-white text-center'>
          Create your token
        </h2>
        <p className='text-gray-400 text-center'>Set up your artist token.</p>
      </div>

      <div className='flex flex-col gap-4'>
        <InputField
          label='Token Name*'
          placeholder='e.g., Luna Token'
          themeVariant='profile-setup'
          value={profileData.token.name}
          onChange={(e) => handleTokenChange("name", e.target.value)}
        />
        <InputField
          label='Token Symbol*'
          placeholder='e.g., LUNA'
          themeVariant='profile-setup'
          value={profileData.token.symbol}
          onChange={(e) => handleTokenChange("symbol", e.target.value)}
        />
        <InputField
          label='Initial Price (USDC)*'
          placeholder='0.10'
          themeVariant='profile-setup'
          type='number'
          value={profileData.token.price}
          onChange={(e) => handleTokenChange("price", e.target.value)}
        />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4'>
        <Button
          variant='secondary-action'
          size='default'
          onClick={prevStep}
          icon={<ArrowLeft />}
          iconPosition='left'
        >
          Back
        </Button>
        <Button
          variant='primary-action'
          size='default'
          onClick={nextStep}
          disabled={
            !profileData.token.name ||
            !profileData.token.symbol ||
            !profileData.token.price
          }
          icon={<Check />}
        >
          Complete Setup
        </Button>
      </div>
    </div>
  )
}
