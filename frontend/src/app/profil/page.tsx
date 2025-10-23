"use client"
import { ArtistProfileCard } from "@/components/molecules/ArtistProfileCard" 
import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation"
import { DataBanner } from "@/components/molecules/DatasBanner";
import { TokenHoldingsUserCard } from "@/components/molecules/TokenHoldingsUserCard";
// import { useState, useEffect } from "react"
import { PerksCard } from "@/components/molecules/PerksCard";
import { VotingHistory } from "@/components/molecules/VotingHisory";
import { mockPerks } from "@/mocks/mockPerks";
import { HoldenTokens } from "@/mocks/mockHoldenTokens"
import { votingHistory } from "@/mocks/mockVotingHistory";

export default function ProfilPage() {

	
	/* fetch name in db*/
	const { authenticated, user, logout } = usePrivy();
	/* fetch @ in db*/
	const email = user?.email ? typeof user?.email === "string" ? user.email : user?.email.address : "undefined";
	/* fetch wallet address in db*/
	const wallet = user?.wallet?.address ? user?.wallet?.address : "undefined";
	/* fetch avatar in db*/
	const avatar = "/avatar1.png";


	// redirect user to landing page on disconnect
	const router = useRouter()
	const handleDisconnect = () => {
		router.push("/");};

	/* fetch holden Artist Token */
	const holdenArtistsToken = HoldenTokens;
	/* fetch perks */
	const unlockedPerks = mockPerks;
	/* fetch voting history */
	const voting = votingHistory;

	// wait wallet is ready
	if (!user)
		return <p>User privy is not connected</p>

	return (
		<div className="flex-1 mt-12">
			<ArtistProfileCard name= { user.id } handle={ email } walletAddress= { wallet } avatarUrl= { avatar } onDisconnect={handleDisconnect}/>
			<DataBanner />
			<div className="mt-12 w-full"> 
				<h2 className="text-[var(--color-white)] font-semibold text-[30px] leading-[36px] tracking-[-0.75%]">
					Token Holdings
				</h2> 
				<div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 mt-8">
					{holdenArtistsToken.map((holdenArtistsToken) => (
						<TokenHoldingsUserCard
							key={holdenArtistsToken.id}
							avatarSrc={holdenArtistsToken.avatar}
							userName={holdenArtistsToken.userName}
							tokenCount={holdenArtistsToken.tokenCount}
							badgeText={holdenArtistsToken.badgeText}
							leftTopValue={holdenArtistsToken.value}
							rightTopPerks={holdenArtistsToken.perks}
						/>
					))}
				</div>
			</div>
			<div className="mt-12"> 
				<h2 className="text-[var(--color-white)] font-semibold text-[30px] leading-[36px] tracking-[-0.75%]">
					Unlocked Perks
				</h2> 
				<div className="grid grid-cols-[1fr_1fr] gap-8 mt-8">
					{unlockedPerks.map((unlockedPerks) => (
						<PerksCard
							key={unlockedPerks.id}
							title={unlockedPerks.title}
							description={unlockedPerks.description}
							tokenAmount={unlockedPerks.tokenAmount}
							variant="highlighted"
							className="w-full"
						/>
					))}
				</div>
			</div>
			<div className="mt-12"> 
				<h2 className="text-[var(--color-white)] font-semibold text-[30px] leading-[36px] tracking-[-0.75%]">
					Voting History
				</h2> 
				<div className="grid grid-cols-[1fr_1fr] gap-4 mt-8">
					{voting.map((voting) => (
						<VotingHistory
							key={voting.id}
							title={voting.title}
							artist={voting.artist}
							date={voting.date}
							vote={voting.vote}
							status={voting.status}
							className="w-full"
						/>
					))}
				</div>
			</div>
		</div>
	)
}
