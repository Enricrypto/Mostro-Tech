"use client"

import { Hero } from "@/components/hero/Hero"
import { PillButton } from "@/components/atoms/PillButton"

export default function LandingPage() {
  return (
    <>
      <Hero />
      <PillButton themeVariant='yellow' />
      <PillButton themeVariant='black' />
      <PillButton themeVariant='blue' />

      <PillButton themeVariant='yellow' social='instagram' />
      <PillButton themeVariant='black' social='instagram' />
      <PillButton themeVariant='blue' social='instagram' />

      <PillButton themeVariant='yellow' social='tiktok' />
      <PillButton themeVariant='black' social='tiktok' />
      <PillButton themeVariant='blue' social='tiktok' />

      <PillButton themeVariant='yellow' social='twitter' />
      <PillButton themeVariant='black' social='twitter' />
      <PillButton themeVariant='blue' social='twitter' />

      <PillButton themeVariant='yellow' social='spotify' />
      <PillButton themeVariant='black' social='spotify' />
      <PillButton themeVariant='blue' social='spotify' />

      <PillButton themeVariant='yellow' social='facebook' />
      <PillButton themeVariant='black' social='facebook' />
      <PillButton themeVariant='blue' social='facebook' />

      <PillButton themeVariant='yellow' social='instagram'>
        Instagram
      </PillButton>
      <PillButton themeVariant='black' social='instagram'>
        Instagram
      </PillButton>
      <PillButton themeVariant='blue' social='instagram'>
        Instagram
      </PillButton>

      <PillButton themeVariant='yellow' social='tiktok'>
        Tiktok
      </PillButton>
      <PillButton themeVariant='black' social='tiktok'>
        Tiktok
      </PillButton>
      <PillButton themeVariant='blue' social='tiktok'>
        Tiktok
      </PillButton>

      <PillButton themeVariant='yellow' social='twitter'>
        Twitter
      </PillButton>
      <PillButton themeVariant='black' social='twitter'>
        Twitter
      </PillButton>
      <PillButton themeVariant='blue' social='twitter'>
        Twitter
      </PillButton>

      <PillButton themeVariant='yellow' social='spotify'>
        Spotify
      </PillButton>
      <PillButton themeVariant='black' social='spotify'>
        Spotify
      </PillButton>
      <PillButton themeVariant='blue' social='spotify'>
        Spotify
      </PillButton>

      <PillButton themeVariant='yellow' social='facebook'>
        Facebook
      </PillButton>
      <PillButton themeVariant='black' social='facebook'>
        Facebook
      </PillButton>
      <PillButton themeVariant='blue' social='facebook'>
        Facebook
      </PillButton>
    </>
  )
}
