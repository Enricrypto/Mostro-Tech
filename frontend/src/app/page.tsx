"use client"

import React from "react"
import { Hero } from "@/components/hero/Hero"
import { Alert } from "@/components/atoms/AlertDialog"
import { ArtistFullCard } from "@/components/display/ArtistFullCard"
import { UpcomingEvent } from "@/components/display/UpcomingEvent"
import { BookOpenTextIcon  } from "@phosphor-icons/react"
import { artistsData, getRandomArtist } from "@/data/artists"


export default function LandingPage() {
  const title: string = "AlertDialog Usage:";
  const description: string = "Alert Dialog can be open by click on a trigger or can be open directly when componant is rendering. To activate direct display <useTrigger={false}> and <initialOpen={true}>.\
  If you want to use your own composant as trigger: <trigger={<your_component>}. To remove Cancel/Confirm button <confirm-cancel={false}>. You can also editing the displayed text in this button <confirmEdit=\"Edit you button text\">\
   / cancelEdit=[..]. 5 variants themes are available (default | alert | confirm | alertIcon | confirmIcon). And you can add you own icon using <iconEdit={<your_own_icon>}"
  
  // Récupérer un artiste aléatoire ou le premier artiste
  const featuredArtist = getRandomArtist()
  
  return (
    <div className='flex flex-col items-center gap-[var(--spacing-6)] p-[var(--spacing-6)] bg-night min-h-screen text-white'>
      <Hero />
      
      {/* ArtistFullCard Component with data from file */}
      <div className="mt-8">
        <ArtistFullCard 
          artist={featuredArtist}
        />
      </div>
      
      {/* Affichage de plusieurs artistes */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artistsData.slice(0, 3).map((artist) => (
          <ArtistFullCard 
            key={artist.id}
            artist={artist}
          />
        ))}
      </div>
      
      {/* UpcomingEvent Component */}
      <div className="mt-8 w-full flex justify-center">
        <UpcomingEvent />
      </div>
      
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black p-6 rounded shadow-lg">
        <Alert trigger={<BookOpenTextIcon size={50}/>} title={title} description={description} variant="default" confirm_cancel={true} />
      </div>
    </div>
  )
}
