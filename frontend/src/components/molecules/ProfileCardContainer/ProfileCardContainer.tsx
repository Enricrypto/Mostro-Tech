"use client"

import { usePrivy } from "@privy-io/react-auth"
import { useRouter } from "next/navigation"
import { ProfileCard } from "../ProfileCard/ProfileCard"
import * as jdenticon from "jdenticon"

export const ProfileCardContainer = () => {
  const { user, logout } = usePrivy()
  const router = useRouter()

  if (!user) return null

  // Generate identicon fallback
  const getIdenticon = (value: string, size = 80) => {
    const svg = jdenticon.toSvg(value, size)
    return `data:image/svg+xml;base64,${btoa(svg)}`
  }

  const avatarValue =
    user?.wallet?.address || user?.farcaster?.username || "Anonymous"

  const avatarUrl = user?.farcaster?.pfp || getIdenticon(avatarValue)

  const handle = user?.farcaster?.username
    ? `@${user.farcaster.username}`
    : user?.email?.address
    ? `@${user.email.address.split("@")[0]}`
    : user?.google?.email
    ? `@${user.google.email.split("@")[0]}`
    : user?.wallet?.address
    ? `@${user.wallet.address.slice(0, 6)}...${user.wallet.address.slice(-4)}`
    : "@user"

  const onDisconnect = async () => {
    try {
      // trigger logout without awaiting it (lets Privy clean itself)
      logout()
      // immediately navigate away to unmount this component
      router.replace("/")
    } catch (err) {
      console.error("Logout failed:", err)
    }
  }

  return (
    <ProfileCard
      name={user?.farcaster?.displayName || "Your Profile"}
      walletAddress={user?.wallet?.address || ""}
      avatarUrl={avatarUrl}
      handle={handle}
      onDisconnect={onDisconnect}
    />
  )
}
