import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/atoms/Button/Button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface DropdownItem {
  label: string | undefined
  icon: React.ReactNode
  onClick?: () => void
}

interface MostroDropdownMenuProps extends VariantProps<typeof buttonVariants> {
  label: string | undefined
  items: DropdownItem[]
}

export function DropDownMenu({ label, items, ...buttonProps }: MostroDropdownMenuProps) {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button {...buttonProps}>{label}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="items-center block w-full gap-2 bg-[var(--color-primary)] text-[var(--color-black)]" >
        {items.map((item, index) => (
          <DropdownMenuGroup key={index}>
            <DropdownMenuItem onClick={item.onClick} >
              {item.icon}
              {item.label}
            </DropdownMenuItem>
            {index < items.length - 1 && (  <DropdownMenuSeparator className="my-1 border-t var(--color-black)" />)}
          </DropdownMenuGroup>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}