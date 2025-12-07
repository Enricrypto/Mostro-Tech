"use client"

import { useState } from "react"
import { Button } from "@/components/atoms/Button/Button"
import { InputField } from "@/components/inputs/Input"

export function PerkSettings() {
  const [perkTitle, setPerkTitle] = useState("")
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [minTokens, setMinTokens] = useState("")

  const textAreaStyles = `
    w-full
    rounded-md
    px-3
    py-2
    font-body
    text-white
    placeholder:text-gray-400
    bg-black/20
    border border-white/30
    focus:outline-none
    focus:ring-1
    focus:ring-[var(--color-primary)]
    transition-colors
  `

  return (
    <div className="bg-[#121B2B] p-4 sm:p-6 md:p-8 rounded-2xl border border-[var(--color-navbar-border)] shadow-lg text-white w-full max-w-4xl mx-auto">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-white">
          Create New Fan Perk
        </h1>
        <p className="text-sm text-gray-400 text-center mb-8">
          Define a new reward for your supporters. Perks unlock when fans hold a
          certain number of your tokens. You can later add perks to your
          proposal.
        </p>

        <div className="flex flex-col gap-6">
          <InputField
            label="Perk Title"
            placeholder="e.g., Exclusive Event Access"
            value={perkTitle}
            onChange={(e) => setPerkTitle(e.target.value)}
            themeVariant="profile-setup"
          />

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="description" className="text-sm font-medium text-white">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Describe what fans get with this perk"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className={textAreaStyles}
            />
          </div>

          <InputField
            label="Quantity"
            placeholder="e.g., 50"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            themeVariant="profile-setup"
          />

          <InputField
            label="Price in $USDC"
            placeholder="e.g., 50"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            themeVariant="profile-setup"
          />

          <InputField
            label="Minimum number of tokens required"
            placeholder="e.g., 100"
            type="number"
            value={minTokens}
            onChange={(e) => setMinTokens(e.target.value)}
            themeVariant="profile-setup"
          />

          <div className="mt-4">
            <Button
              variant="continue"
              className="w-full"
              size="lg"
            >
              Create Perk
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}