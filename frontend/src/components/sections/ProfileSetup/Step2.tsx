"use client"

import { useProfileSetupStore } from "@/stores/profileSetupStore"
import { PillButton } from "@/components/atoms/PillButton"
import { Button } from "@/components/atoms/Button"
import { ArrowRight, ArrowLeft } from "@phosphor-icons/react"

const genres = [
  "Pop",
  "Reggae",
  "Rock",
  "Electronic",
  "Jazz",
  "Blues",
  "Classical",
  "Country",
  "Hip Hop",
  "Folk",
  "Metal",
]

export const Step2 = () => {
  const { nextStep, prevStep, profileData, setGenre, updateProfileData } =
    useProfileSetupStore()

  return (
    <div className='flex flex-col gap-6 w-full'>
      <div>
        <h2 className='text-2xl font-bold text-white text-center'>
          Your music style
        </h2>
        <p className='text-gray-400 text-center'>Help fans discover you</p>
      </div>

      <div>
        <label className='text-white mb-2 block'>Primary Genre*</label>
        <div className='grid grid-cols-2 gap-2'>
          {genres.map((genre) => (
            <PillButton
              key={genre}
              themeVariant='profile-setup'
              selected={profileData.primaryGenre === genre}
              onClick={() => setGenre(genre)}
            >
              {genre}
            </PillButton>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor='bio' className='text-white mb-2 block'>
          Bio
        </label>
        <textarea
          id='bio'
          placeholder='Tell your story... What makes your music unique?'
          className='w-full h-32 rounded-md p-3 font-body text-white placeholder:text-gray-500 bg-black/20 border border-white/30 focus:outline-none focus:ring-1 focus:ring-[var(--color-highlight)]'
          value={profileData.bio}
          onChange={(e) => updateProfileData({ bio: e.target.value })}
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
          disabled={!profileData.primaryGenre}
          icon={<ArrowRight />}
        >
          Continue
        </Button>
      </div>
    </div>
  )
}
