'use client'

import { Avatar } from "@/components/atoms/Avatar"
import  React  from "react"
import { cn } from "@/lib/utils"

type  variant = "default" | "shadow"

export interface LeaderBoardProps extends React.HTMLAttributes<HTMLDivElement> {
	rank: number,
	avatar: React.ReactNode,
	name: string;
	volume: number,
	token: string,
	variant?: variant,
	children?: React.ReactNode

}

export function Leaderboard ({
	rank,
	avatar,
	name,
	volume,
	token,
	className,
	variant="default",
	children,
	...props
} : LeaderBoardProps): React.JSX.Element {

	const VARIANT_MAP = {
		default: "leaderboard",
		shadow: "leaderboard leaderboard-shadow",
	}

	const ref = React.useRef<HTMLDivElement>(null);
	const [isTruncated, setIsTruncated] = React.useState(false);

	const formatted = volume.toLocaleString('en-US')

	return (
		<div className={cn(VARIANT_MAP[variant], "inline-flex items-center")}>
			<div className="font-sans font-semibold text-[18px] leading-[28px] tracking-normal w-[21px] h-[28px] text-[var(--color-proposal-artist)] opacity-100"> #{ rank } </div>
			{ avatar } 
			<div className="flex-1 min-w-20 truncate opacity-100 font-inter font-semibold text-[18px] leading-[28px] tracking-normal"> { name }</div>
			<div className="ml-auto inline-flex">
			  <div className="flex-1 max-w-70 truncate mr-2 opacity-100 font-inter font-semibold text-[18px] leading-[28px] tracking-normal text-[var(--color-skyblue)]">{formatted}</div>
			  <div className="font-inter font-medium text-[12px] leading-[20px] tracking-normal w-[33px] h-[20px] opacity-100 text-[var(--color-proposal-artist)]">${token}</div>
			</div>
		</div>
	)
}