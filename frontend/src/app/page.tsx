"use client"

import { Hero } from "@/components/hero/Hero"
import { Alert } from "@/components/atoms/AlertDialog"
import { BookOpenTextIcon } from "@phosphor-icons/react"
import { artistsData, getRandomArtist } from "@/data/artists"
import { Leaderboard } from "@/components/molecules/Leaderboard/LeaderBoard"
import { Avatar } from "@/components/atoms/Avatar"
 
export default function LandingPage() {
  return (
    <div className='bg-[#0A111F] min-h-screen w-full flex flex-col items-center'>
      <Hero />
      
        <Leaderboard rank={1} avatar={<Avatar src="/avatar.png" />} name="Daft Puuuuuuuuuuuuuuuuuuuuuuuunk" volume={100000000000} token="SOL" variant="shadow" ></Leaderboard>
      </div>
      )
}
