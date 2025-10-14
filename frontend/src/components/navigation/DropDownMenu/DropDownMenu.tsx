"use client"

import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu"
import { User, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"

export function DropDownMenu() {
  return (
    <DropdownMenu>
      {/* === TRIGGER === */}
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "flex items-center justify-start w-[224px] h-[42px] gap-[8px] px-[8px] py-[6px]",
            "rounded-[6px] bg-[#71D6FB] shadow-[0px_4px_6px_0px_#00000017]",
            "hover:bg-[#5fc9ee] transition-colors"
          )}
        >
          <User className='w-[16px] h-[16px] text-black' strokeWidth={2} />
          <span className='text-[14px] leading-[20px] font-medium text-black font-inter'>
            Profile
          </span>
        </button>
      </DropdownMenuTrigger>

      {/* === CONTENT === */}
      <DropdownMenuContent
        side='bottom' // ✅ force dropdown below the trigger
        align='start' // ✅ align left edge with trigger
        sideOffset={2} // small gap between trigger and content
        className={cn(
          "w-[224px] rounded-[6px] bg-[#71D6FB] shadow-[0px_4px_6px_0px_#00000017] p-[5px]"
        )}
      >
        <DropdownMenuItem
          className={cn(
            "flex items-center w-[214px] h-[32px] gap-[8px] px-[8px] py-[6px]",
            "rounded-[6px] bg-[#71D6FB] hover:bg-[#5fc9ee]",
            "cursor-pointer transition-colors"
          )}
          onSelect={(e) => {
            e.preventDefault()
            console.log("Logout clicked")
          }}
        >
          <LogOut className='w-[16px] h-[16px] text-black' strokeWidth={2} />
          <span className='text-[14px] leading-[20px] font-medium text-black font-inter'>
            Logout
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
