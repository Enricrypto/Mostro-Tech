"use client"

import React from 'react'
import { cn } from "@/lib/utils"
import { Clock3, ThumbsUp } from "lucide-react"

interface VotingHistoryItemProps {
  vote: "Yes" | "No" | "InProgress"
  status: "Active" | "Inactive"
  projectName: string
  artistName: string
  daysOpen: number
  votePercentage?: number // Pour les votes en cours
  className?: string
  style?: React.CSSProperties
}

export const VotingHistoryItem: React.FC<VotingHistoryItemProps> = ({
  vote,
  status,
  projectName,
  artistName,
  daysOpen,
  votePercentage = 0,
  className,
  style
}) => {
  return (
    <div
      className={cn("flex justify-between items-start", className)}
      style={{
        width: "462px",
        height: "132px",
        opacity: 1,
        borderRadius: "10px",
        borderWidth: "1px",
        padding: "24px",
        background: "#121B2B",
        border: "1px solid #2D3953",
        boxShadow: "0px 4px 6px 0px rgba(0, 0, 0, 0.09)",
        position: "relative",
        ...style
      }}
    >
      {/* Contenu à gauche */}
      <div 
        style={{
          width: "250px",
          height: "84px",
          gap: "8px",
          opacity: 1,
          display: "flex",
          flexDirection: "column"
        }}
      >
        {/* Projet du financement */}
        <div
          style={{
            width: "250px",
            height: "28px",
            gap: "8px",
            opacity: 1,
            display: "flex",
            alignItems: "center"
          }}
        >
          <span
            style={{
              width: "250px",
              height: "28px",
              opacity: 1,
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "28px",
              letterSpacing: "0%",
              color: "#FFFFFF",
              whiteSpace: "nowrap"
            }}
          >
            {projectName}
          </span>
        </div>

        {/* Container pour artiste et jours en colonne */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {/* Nom de l'artiste */}
          <span
            style={{
              width: "120px",
              height: "20px",
              opacity: 1,
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: "20px",
              letterSpacing: "0%",
              color: "#B3B3B3",
              whiteSpace: "nowrap"
            }}
          >
            {artistName}
          </span>

          {/* Nombre de jours */}
          <span
            style={{
              width: "63px",
              height: "20px",
              opacity: 1,
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: "20px",
              letterSpacing: "0%",
              color: "#B3B3B3"
            }}
          >
            {daysOpen} days
          </span>
        </div>
      </div>

      {/* Badges à droite - Logique conditionnelle */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-end", justifyContent: "flex-start" }}>
        
        {/* Premier badge - Conditionnel selon le vote */}
        {vote === "InProgress" ? (
          // Badge Pourcentage pour vote en cours avec ThumbsUp
          <div
            style={{
              width: "80px",
              height: "22px",
              gap: "4px",
              opacity: 1,
              borderRadius: "10px",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "#DCFD63",
              paddingTop: "2px",
              paddingRight: "8px",
              paddingBottom: "2px",
              paddingLeft: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#DCFD634D"
            }}
          >
            <ThumbsUp 
              style={{
                width: "12px",
                height: "12px",
                opacity: 1,
                color: "#DCFD63",
                fill: "none",
                stroke: "#DCFD63",
                strokeWidth: "1.5px",
                strokeDasharray: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }}
            />
            <span
              style={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "20px",
                letterSpacing: "0%",
                color: "#DCFD63"
              }}
            >
              +{votePercentage}%
            </span>
          </div>
        ) : vote === "Yes" ? (
          // Badge Yes avec ThumbsUp
          <div
            style={{
              width: "57px",
              height: "22px",
              gap: "8px",
              opacity: 1,
              borderRadius: "10px",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "#DCFD63",
              paddingTop: "2px",
              paddingRight: "8px",
              paddingBottom: "2px",
              paddingLeft: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#DCFD634D"
            }}
          >
            <ThumbsUp 
              style={{
                width: "12px",
                height: "12px",
                opacity: 1,
                color: "#DCFD63",
                fill: "none",
                stroke: "#DCFD63",
                strokeWidth: "1.5px",
                strokeDasharray: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }}
            />
            <span
              style={{
                width: "21px",
                height: "20px",
                opacity: 1,
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "20px",
                letterSpacing: "0%",
                color: "#DCFD63"
              }}
            >
              Yes
            </span>
          </div>
        ) : (
          // Badge No avec Clock
          <div
            style={{
              width: "53px",
              height: "22px",
              gap: "8px",
              opacity: 1,
              borderRadius: "10px",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "#FD6363",
              paddingTop: "2px",
              paddingRight: "8px",
              paddingBottom: "2px",
              paddingLeft: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FD63634D"
            }}
          >
            <Clock3 
              style={{
                width: "12px",
                height: "12px",
                opacity: 1,
                color: "#FD6363"
              }}
            />
            <span
              style={{
                fontSize: "12px",
                fontWeight: 500,
                color: "#FD6363",
                fontFamily: "Inter"
              }}
            >
              No
            </span>
          </div>
        )}

        {/* Deuxième badge - Selon le vote et status */}
        {vote === "InProgress" ? (
          // Badge Active pour vote en cours
          <div
            style={{
              width: "55px",
              height: "22px",
              gap: "8px",
              opacity: 1,
              borderRadius: "10px",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "#F5F5F5",
              paddingTop: "2px",
              paddingRight: "8px",
              paddingBottom: "2px",
              paddingLeft: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F5F5F54D"
            }}
          >
            <span
              style={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "20px",
                letterSpacing: "0%",
                color: "#FFFFFF"
              }}
            >
              Active
            </span>
          </div>
        ) : vote === "Yes" ? (
          // Badge Executed
          <div
            style={{
              width: "70px",
              height: "22px",
              gap: "8px",
              opacity: 1,
              borderRadius: "10px",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "#F5F5F5",
              paddingTop: "2px",
              paddingRight: "8px",
              paddingBottom: "2px",
              paddingLeft: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F5F5F54D"
            }}
          >
            <span
              style={{
                width: "54px",
                height: "20px",
                opacity: 1,
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "20px",
                letterSpacing: "0%",
                color: "#FFFFFF"
              }}
            >
              Executed
            </span>
          </div>
        ) : (
          // Badge Rejected
          <div
            style={{
              width: "67px",
              height: "22px",
              gap: "8px",
              opacity: 1,
              borderRadius: "10px",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "#F5F5F5",
              paddingTop: "2px",
              paddingRight: "8px",
              paddingBottom: "2px",
              paddingLeft: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F5F5F54D"
            }}
          >
            <span
              style={{
                width: "51px",
                height: "20px",
                opacity: 1,
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "20px",
                letterSpacing: "0%",
                color: "#FFFFFF"
              }}
            >
              Rejected
            </span>
          </div>
        )}
      </div>
    </div>
  )
}