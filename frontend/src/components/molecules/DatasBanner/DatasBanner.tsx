"use client "
import React, { FC } from "react";
import { MiniDataArtistCard } from "@/components/molecules/MiniDataArtistCard"


// mollecule to group MiniDataArtistCar for profil page

export const DataBanner: FC = () => {
	// fetch total value 
	const totalValue=1000;

	// fetch number of artist supported
	const totalArtist=2;

	// fetch total votes cast
	const totalVotes=2;

	// fetch perks unlocked
	const totalPerks = 5;

	return (
		<div className="flex w-full gap-4 mt-8"> 
			<MiniDataArtistCard className="flex-1" topText="Total Artists" bottomText={`$${totalValue.toString().toLocaleString()}`} />
			<MiniDataArtistCard className="flex-1" topText="Artists Supported" bottomText={totalArtist.toString()} />
			<MiniDataArtistCard className="flex-1" topText="Total Votes Cast" bottomText={totalVotes.toString()} />
			<MiniDataArtistCard className="flex-1" topText="Perks Unlocked" bottomText={totalPerks.toString()} />
		</div>
	);
}