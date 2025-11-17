"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/atoms/Button"
import { ArrowUpRight, FireIcon } from "@phosphor-icons/react"
import { PartyPopper } from "lucide-react"

export const Step5 = () => {
  const router = useRouter()

  return (
    <div className='flex flex-col items-center text-center gap-4'>
      <h2 className='text-3xl font-bold text-[#DCFD63] flex items-center justify-center gap-2'>
        <PartyPopper className="w-8 h-8 text-[#DCFD63]" />
        You're all set!
      </h2>
      <p className='text-gray-400 max-w-xs'>
        You can always update your profile and token settings later from your dashboard.
      </p>
      <Button
        variant='primary-action'
        size='lg'
        className='w-full max-w-sm mt-6'
        onClick={() => router.push("/")}
        icon={<FireIcon className="w-20 h-20 text-[#000000]" />}
      >
        Explore App
      </Button>
    </div>
  )
}
