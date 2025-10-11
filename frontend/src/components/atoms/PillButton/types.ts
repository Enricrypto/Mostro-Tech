import type { ComponentProps } from "react"

export type PillButtonProps = ComponentProps<"button"> & {
  variant?: "default" | "secondary" // optional: for future variations
}
