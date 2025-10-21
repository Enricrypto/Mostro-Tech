"use client"

import { Button } from "@/components/atoms/Button"
import { cn } from "@/lib/utils"
import React from "react"

interface ProfilSetupModalProps {
  name: string
  username?: string
  onSave: (data: { name: string; username: string }) => void
  onClose: () => void
}

export const ProfilSetupModal: React.FC<ProfilSetupModalProps> = ({ name, username = "", onSave, onClose }) => {
  const [nameValue, setNameValue] = React.useState(name)
  const [usernameValue, setUsernameValue] = React.useState(username)

  const handleSave = () => {
    onSave({ name: nameValue, username: usernameValue })
  }

  return (
    <div
      className={cn(
        "w-[425px] min-h-[208px] p-6 gap-4 rounded-[8px] border border-[#2D3953] flex flex-col bg-gradient-to-r from-[#352B6D] via-[#4995E0] to-[#4995E0]"
      )}
    >
      {/* Top Part */}
      <div className="flex flex-col gap-2 mb-4">
        <span className="text-white font-inter font-semibold text-[18px] leading-[28px]">
          Profile setup
        </span>
        <span className="text-[#B3B3B3] font-inter font-medium text-[12px] leading-[20px]">
          Make changes to your profile here. Click save when you're done.
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-white text-sm">Name</label>
        <input
          className="mb-2 p-2 rounded bg-[#23263A] text-white border border-[#444] focus:outline-none"
          value={nameValue}
          onChange={e => setNameValue(e.target.value)}
          placeholder="Add value"
        />
        <label className="text-white text-sm">Username</label>
        <input
          className="mb-2 p-2 rounded bg-[#23263A] text-white border border-[#444] focus:outline-none"
          value={usernameValue}
          onChange={e => setUsernameValue(e.target.value)}
          placeholder="Add value"
        />
      </div>
      <div className="flex gap-2 justify-end mt-4">
        <Button variant="button-cancel" onClick={onClose}>Cancel</Button>
        <Button variant="default" onClick={handleSave}>Save</Button>
      </div>
    </div>
  )
}
