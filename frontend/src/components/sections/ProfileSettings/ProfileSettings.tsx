// ProfileSettings.tsx

import React, { useState } from "react"
import { Avatar } from "@/components/atoms/Avatar"
import { Button } from "@/components/atoms/Button"
import { InputField } from "@/components/inputs/Input"
import { PillButton } from "@/components/atoms/PillButton"

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
  "Metal"
]

export function ProfileSettings() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>(["Pop"])

  const handleGenreSelect = (genre: string) => {
    setSelectedGenres((prevSelectedGenres) =>
      prevSelectedGenres.includes(genre)
        ? prevSelectedGenres.filter((g) => g !== genre)
        : [...prevSelectedGenres, genre]
    )
  }

  return (
    <div className="bg-[#121B2B] px-4 py-4 rounded-2xl border-2 border-[var(--color-navbar-border)] shadow-lg w-full">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-6">
        Profile Settings
      </h2>

      {/* Profile Picture Section */}
      <div className="flex flex-col items-center mb-8">
        <Avatar
          src="/pawel.png" // Replace with actual user avatar source
          alt="User Avatar"
          variant="square-md"
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full mb-4"
        />
        <Button variant="secondary-action" size="sm" className="px-4 py-2 text-sm sm:text-base">
          Edit Photo
        </Button>
      </div>

      {/* Artist Name */}
      <div className="mb-6">
        <InputField
          label="Artist Name*"
          themeVariant="profile-setup"
          placeholder="Luna Eclipse"
          defaultValue="Luna Eclipse"
        />
      </div>

      {/* Primary Genre */}
      <div className="mb-6">
        <label className="text-sm font-medium text-white mb-2 block">
          Primary Genre*
        </label>
        {/* PillButton */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2 ">
          {genres.map((genre) => (
            <PillButton
              key={genre}
              themeVariant="profile-setup"
              selected={selectedGenres.includes(genre)}
              onClick={() => handleGenreSelect(genre)}
              size="md"
            >
              {genre}
            </PillButton>
          ))}
        </div>
      </div>

      {/* Bio */}
      <div className="mb-6">
        <InputField
          label="Bio"
          themeVariant="profile-setup"
          placeholder="Tell your story...What makes your music unique?"
        />
      </div>

      {/* Social Links */}
      <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          label="Spotify"
          themeVariant="profile-setup"
          placeholder="https://open.spotify.com/..."
        />
        <InputField
          label="YouTube"
          themeVariant="profile-setup"
          placeholder="@username"
        />
        <InputField
          label="Instagram"
          themeVariant="profile-setup"
          placeholder="@username"
        />
        <InputField
          label="TikTok"
          themeVariant="profile-setup"
          placeholder="@username"
        />
        <InputField
          label="X"
          themeVariant="profile-setup"
          placeholder="@username"
        />
        <InputField
          label="Facebook"
          themeVariant="profile-setup"
          placeholder="@username"
        />
        <InputField
          label="Other"
          themeVariant="profile-setup"
          placeholder="@username"
          className="sm:col-span-2"
        />
      </div>

      {/* Save Changes Button */}
      <div>
        <Button variant="continue" size="lg" className="w-full px-10 py-3 text-base sm:text-lg leading-[1.35]">
          Save Changes
        </Button>
      </div>
    </div>
  )
}