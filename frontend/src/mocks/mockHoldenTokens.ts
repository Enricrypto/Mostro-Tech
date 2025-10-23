	export type Token = {
	id: number,
	avatar: string,
	userName: string,
	tokenCount: number,
	badgeText: string,
	value: number,
	perks: number,
}

	export const HoldenTokens : Token[] = [
	{
		id: 1,
		avatar: "/avatar1.png",
		userName: "Alice",
		tokenCount: 1,
		badgeText: "test",
		value: 1000,
		perks: 5,
	},
	{
		id: 2,
		avatar: "/avatar2.png",
		userName: "Bob",
		tokenCount: 3,
		badgeText: "test",
		value: 500,
		perks: 2,
	},
	{
		id: 3,
		avatar: "/avatar3.png",
		userName: "Charlie",
		tokenCount: 7,
		badgeText: "test",
		value: 2000,
		perks: 8,
	}]
