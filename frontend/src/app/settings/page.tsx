"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MenuItem } from "@/components/atoms/MenuItem"
import { ProfileSettings } from "@/components/sections/ProfileSettings"
import { PerkSettings } from "@/components/sections/PerkSettings"
import { ProposalSettings } from "@/components/sections/ProposalSettings"
import { TokenSettings } from "@/components/sections/TokenSettings"
import { UserCircleIcon, HandshakeIcon, LightbulbFilamentIcon, Coins } from "@phosphor-icons/react"

type Tab = "profile" | "perk" | "proposal" | "token"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("profile")

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileSettings />
      case "perk":
        return <PerkSettings />
      case "proposal":
        return <ProposalSettings />
      case "token":
        return <TokenSettings />
      default:
        return <ProfileSettings />
    }
  }

  return (
    <div className="min-h-screen bg-[#0A111F] flex flex-col items-start py-12">
      <div className="w-full flex flex-col md:flex-row gap-8 p-4 md:p-8 lg:p-12">
        {/* Left Side: Navigation Tabs */}
        <div className="flex-shrink-0 w-full md:w-64 lg:w-72">
          <div className="flex flex-col gap-2">
            <motion.div whileTap={{ scale: 0.95 }}>
              <MenuItem
                variant="settings-tab"
                label="Profile Settings"
                selected={activeTab === "profile"}
                onClick={() => setActiveTab("profile")}
                icon={<UserCircleIcon size={20} />} // Example icon
              />
            </motion.div>
            <motion.div whileTap={{ scale: 0.95 }}>
              <MenuItem
                variant="settings-tab"
                label="Create a Perk"
                selected={activeTab === "perk"}
                onClick={() => setActiveTab("perk")}
                icon={<HandshakeIcon size={20} />} // Example icon
              />
            </motion.div>
            <motion.div whileTap={{ scale: 0.95 }}>
              <MenuItem
                variant="settings-tab"
                label="Create a Proposal"
                selected={activeTab === "proposal"}
                onClick={() => setActiveTab("proposal")}
                icon={<LightbulbFilamentIcon size={20} />} // Example icon
              />
            </motion.div>
            <motion.div whileTap={{ scale: 0.95 }}>
              <MenuItem
                variant="settings-tab"
                label="Token"
                selected={activeTab === "token"}
                onClick={() => setActiveTab("token")}
                icon={<Coins size={20} />}
              />
            </motion.div>
          </div>
        </div>

        {/* Right Side: Content based on active tab */}
        <div className="flex-grow mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}