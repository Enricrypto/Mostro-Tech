"use client"

import React from "react"
import { Tooltip as TooltipPrimitive, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

interface TooltipProps {
  content: string | React.ReactNode
  children: React.ReactNode
  side?: "top" | "right" | "bottom" | "left"
  align?: "start" | "center" | "end"
  delayDuration?: number
  className?: string
  contentClassName?: string
  sideOffset?: number
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  side = "top",
  align = "center",
  delayDuration = 200,
  className,
  contentClassName,
  sideOffset = 8,
  ...props
}) => {
  return (
    <TooltipPrimitive delayDuration={delayDuration} {...props}>
      <TooltipTrigger asChild className={cn(className)}>
        {children}
      </TooltipTrigger>
      <TooltipContent
        side={side}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "max-w-xs text-sm font-medium",
          contentClassName
        )}
        style={{
          width: "177px",
          height: "328px",
          opacity: 1,
          paddingTop: "32px",
          paddingRight: "32px",
          paddingBottom: "64px",
          paddingLeft: "32px",
          gap: "64px",
          display: "flex",
          flexDirection: "column",
          background: "#FFFFFF"
        }}
      >
        {/* Internal frame */}
        <div
          style={{
            width: "113px",
            height: "36px",
            opacity: 1,
            gap: "32px",
            display: "flex",
            alignItems: "center"
          }}
        >
          {/* Nested container */}
          <div
            style={{
              width: "99px",
              height: "36px",
              opacity: 1,
              gap: "16px",
              display: "flex",
              alignItems: "center"
            }}
          >
            {/* Tooltip text */}
            <span
              style={{
                width: "99px",
                height: "36px",
                opacity: 1,
                fontFamily: "Inter",
                fontWeight: 600,
                fontStyle: "normal",
                fontSize: "30px",
                lineHeight: "36px",
                letterSpacing: "-0.75%",
                color: "#000000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              Tooltip
            </span>
          </div>
        </div>

        {/* New tooltip with blue border */}
        <div
          style={{
            width: "113px",
            height: "34px",
            opacity: 1,
            paddingTop: "7px",
            paddingRight: "13px",
            paddingBottom: "7px",
            paddingLeft: "13px",
            gap: "10px",
            borderRadius: "6px",
            borderWidth: "1px",
            background: "#FFFFFF",
            border: "1px solid #71D6FB",
            boxShadow: "0px 2px 4px 0px rgba(30, 41, 59, 0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {/* Lorem Ipsum text */}
          <span
            style={{
              width: "87px",
              height: "20px",
              opacity: 1,
              fontFamily: "Inter",
              fontWeight: 500,
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0%",
              color: "#000000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            Lorem Ipsum
          </span>
        </div>

        {/* Second tooltip with blue background */}
        <div
          style={{
            width: "113px",
            height: "34px",
            opacity: 1,
            paddingTop: "7px",
            paddingRight: "13px",
            paddingBottom: "7px",
            paddingLeft: "13px",
            gap: "10px",
            borderRadius: "6px",
            background: "#71D6FB",
            boxShadow: "0px 2px 4px 0px rgba(30, 41, 59, 0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {/* Lorem Ipsum text */}
          <span
            style={{
              width: "87px",
              height: "20px",
              opacity: 1,
              fontFamily: "Inter",
              fontWeight: 500,
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0%",
              color: "#000000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            Lorem Ipsum
          </span>
        </div>
      </TooltipContent>
    </TooltipPrimitive>
  )
}

export default Tooltip
