"use client"

import { LockIcon, ThumbsDownIcon, ThumbsUpIcon } from "@phosphor-icons/react"
import { Badge } from "@/components/utils/Badge"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { ThumbsDown } from "lucide-react"

const perksCardCVA = cva(
  "flex flex-col justify-between w-[374px] h-[134px] p-[18px] gap-[14px] rounded-[10px] border flex-shrink-0 bg-[#121B2B] transition-shadow duration-200 hover:border-[#6654d3] hover:shadow-[0_0_16.9px_5px_#6654D380]",
)

export interface VotingHistoryProps extends VariantProps<typeof perksCardCVA> {
  title: string
  artist: string
  date: string | number
  vote: boolean 
  status : string
  className?: string
}

export function VotingHistory({
  title,
  artist,
  date,
  vote,
  status,
  className
}: VotingHistoryProps) {
	const pillVariant= vote ? "Yes" : "No";
	const pillIcon= vote ? <ThumbsUpIcon /> : <ThumbsDownIcon/> 
	return (
	<div className={cn("flex flex-col justify-between w-[374px] h-[134px] p-[18px] gap-[14px] rounded-[10px] border flex-shrink-0 bg-[#121B2B]", className)}>
		<div className='flex justify-between items-center text-white'>
			<span className='flex items-center justify-start font-inter font-semibold text-[18px] leading-[28px]'>
				{title}
			</span>
			<Badge icon={ pillIcon } variant={ pillVariant } > { pillVariant } </Badge>
		</div>

		<div className="flex w-full items-center justify-between">
			<span className='font-inter font-medium text-[12px] leading-[20px] text-[#B3B3B3]'>
				{artist}
			</span>
			<Badge variant='neutral'>
				{status}
			</Badge>
		</div>
		<span className='font-inter font-medium text-[12px] leading-[20px] text-[#B3B3B3]'>
			{date}
		</span>
	</div>
  )
}