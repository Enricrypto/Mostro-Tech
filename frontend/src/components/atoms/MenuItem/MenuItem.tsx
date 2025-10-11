import { cn } from "@/lib/utils"

interface MenuItemProps {
  label: string
  selected?: boolean
}

export const MenuItem = ({ label, selected = false }: MenuItemProps) => (
  <div
    className={cn(
      "flex items-center font-body text-p",
      "w-[var(--menu-item-width)] h-[var(--menu-item-height)]",
      "px-[var(--menu-item-padding-x)] py-[var(--menu-item-padding-y)]",
      "gap-[var(--menu-item-gap)] rounded-[var(--menu-item-radius)]",
      "text-[var(--color-text-default)]",
      selected
        ? "bg-[var(--color-surface-selected)]"
        : "bg-[var(--color-surface-default)] hover:bg-[var(--color-surface-hover)]"
    )}
    style={{ border: selected ? "1px solid var(--border-color)" : "none" }}
  >
    {label}
  </div>
)
