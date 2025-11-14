"use client"

import { useProfileSetupStore } from "@/stores/profileSetupStore"
import { InputField } from "@/components/inputs/Input"
import { Button } from "@/components/atoms/Button"
import { ArrowRight, User as UserIcon } from "@phosphor-icons/react"

export const Step1 = () => {
  const { nextStep, profileData, updateProfileData } = useProfileSetupStore()

  return (
    <div className='flex flex-col items-center text-center gap-4'>
      <div className='w-24 h-24 bg-white/10 rounded-lg flex items-center justify-center mb-4 border border-white/20'>
        <UserIcon size={48} className='text-white' />
      </div>
      <h2 className='text-2xl font-bold text-white'>Let's get started</h2>
      <p className='text-gray-300'>Tell us about yourself</p>
      <div className='w-full max-w-md mt-6 text-left'>
        <InputField
          label='Artist Name*'
          placeholder='Your stage name'
          themeVariant='profile-setup'
          value={profileData.artistName}
          onChange={(e) => updateProfileData({ artistName: e.target.value })}
        />
      </div>
      <Button
        variant='primary-action'
        size='lg'
        className='w-full max-w-md mt-4'
        onClick={nextStep}
        disabled={!profileData.artistName}
        icon={<ArrowRight />}
      >
        Continue
      </Button>
    </div>
  )
}
