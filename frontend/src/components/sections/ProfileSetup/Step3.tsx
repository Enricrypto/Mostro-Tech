"use client"

import { useProfileSetupStore } from "@/stores/profileSetupStore"
import { InputField } from "@/components/inputs/Input"
import { Button } from "@/components/atoms/Button"
import { ArrowRight, ArrowLeft } from "@phosphor-icons/react"

export const Step3 = () => {
  const { nextStep, prevStep, profileData, updateProfileData } =
    useProfileSetupStore()

  const handleSocialChange = (social: string, value: string) => {
    updateProfileData({
      socials: { ...profileData.socials, [social]: value }
    })
  }

  return (
    <div className='flex flex-col gap-6 w-full'>
      <div>
        <h2 className='text-2xl font-bold text-white text-center'>
          Connect your socials
        </h2>
        <p className='text-gray-400 text-center'>
          Link your existing profiles.
        </p>
      </div>

      <div className='flex flex-col gap-4'>
        <InputField
          label='Spotify'
          placeholder='https://open.spotify.com/artist/...'
          themeVariant='profile-setup'
          value={profileData.socials.spotify}
          onChange={(e) => handleSocialChange("spotify", e.target.value)}
        />
        <InputField
          label='Instagram'
          placeholder='@username'
          themeVariant='profile-setup'
          value={profileData.socials.instagram}
          onChange={(e) => handleSocialChange("instagram", e.target.value)}
        />
        <InputField
          label='Youtube'
          placeholder='@username'
          themeVariant='profile-setup'
          value={profileData.socials.youtube}
          onChange={(e) => handleSocialChange("youtube", e.target.value)}
        />
        <InputField
          label='TikTok'
          placeholder='@username'
          themeVariant='profile-setup'
          value={profileData.socials.tiktok}
          onChange={(e) => handleSocialChange("tiktok", e.target.value)}
        />
      </div>

      <div className='grid grid-cols-2 gap-4 mt-4'>
        <Button
          variant='secondary-action'
          size='lg'
          onClick={prevStep}
          icon={<ArrowLeft />}
          iconPosition='left'
        >
          Back
        </Button>
        <Button
          variant='primary-action'
          size='lg'
          onClick={nextStep}
          icon={<ArrowRight />}
        >
          Continue
        </Button>
      </div>
    </div>
  )
}
