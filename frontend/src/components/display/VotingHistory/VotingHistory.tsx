"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { VotingHistoryItem } from "./VotingHistoryItem"

interface VotingHistoryProps {
  className?: string
  children?: React.ReactNode
}

export const VotingHistory: React.FC<VotingHistoryProps> = ({
  className,
  children
}) => {
  return (
    <div 
      className={cn("relative p-4", className)}
      style={{
        width: "494px",
        height: "508px",
        opacity: 1,
        borderRadius: "5px",
        borderWidth: "1px",
        borderStyle: "dashed",
        borderColor: "#8A38F5",
        borderImage: "none",
        strokeDasharray: "10,5",
      }}
    >
      {/* Premier sous-composant - Vote accepté */}
      <VotingHistoryItem 
        vote="Yes" 
        status="Active"
        projectName="Music Festival 2024"
        artistName="Beyoncé"
        daysOpen={5}
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)"
        }}
      />

      {/* Deuxième sous-composant - Vote en cours */}
      <VotingHistoryItem 
        vote="InProgress" 
        status="Active"
        projectName="Concert Tour Funding"
        artistName="Ed Sheeran"
        daysOpen={3}
        votePercentage={68}
        style={{
          position: "absolute",
          top: "190px",
          left: "50%",
          transform: "translateX(-50%)"
        }}
      />

      {/* Troisième sous-composant - Vote rejeté */}
      <VotingHistoryItem 
        vote="No" 
        status="Active"
        projectName="Album Recording"
        artistName="Taylor Swift"
        daysOpen={7}
        style={{
          position: "absolute",
          top: "360px",
          left: "50%",
          transform: "translateX(-50%)"
        }}
      />

      {children}
    </div>
  )
}

export default VotingHistory