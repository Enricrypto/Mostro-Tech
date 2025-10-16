"use client"

import React from "react"
import { Hero } from "@/components/hero/Hero"
import { Alert } from "@/components/atoms/AlertDialog"
import { BookOpenTextIcon  } from "@phosphor-icons/react"


export default function LandingPage() {
  const title: string = "AlertDialog Usage:";
  const description: string = "Alert Dialog can be open by click on a trigger or can be open directly when componant is rendering. To activate direct display <useTrigger={false}> and <initialOpen={true}>.\
  If you want to use your own composant as trigger: <trigger={<your_component>}. To remove Cancel/Confirm button <confirm-cancel={false}>. You can also editing the displayed text in this button <confirmEdit=\"Edit you button text\">\
   / cancelEdit=[..]. 5 variants themes are available (default | alert | confirm | alertIcon | confirmIcon). And you can add you own icon using <iconEdit={<your_own_icon>}"
  
  return (
    <div className='flex flex-col items-center gap-[var(--spacing-6)] p-[var(--spacing-6)] bg-night min-h-screen text-white'>
      <Hero />
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black p-6 rounded shadow-lg">
      <Alert trigger={<BookOpenTextIcon size={50}/>} title={title} description={description} variant="default" confirm_cancel={true} />
      </div>
        
    </>

  )
}
