import { formatNumberWithCommas } from "../../utils/numberFormatter"

export const mockDataBanner = {
  totalValue: formatNumberWithCommas(12500), // e.g., $12,500
  totalArtists: formatNumberWithCommas(87), // e.g., 87 artists
  totalVotes: formatNumberWithCommas(4520), // e.g., 4,520 votes
  totalPerks: formatNumberWithCommas(134) // e.g., 134 perks unlocked
}
