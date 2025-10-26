import { FundingOverviewSectionProps } from "@/components/molecules/FundingOverviewSection"

export const mockInfoCards: FundingOverviewSectionProps["infoCards"] = [
  { variant: "amount", value: "10,000 USDC", tokens: 803 }, // Requested amount card
  { variant: "date", date: "November 15, 2025" } // Date card
]

export const mockFundAllocations: FundingOverviewSectionProps["fundAllocations"] =
  [
    {
      title: "Touring & Logistics",
      badgeText: "High Priority",
      bottomLeftValue: "5,000 USDC = 402 Tokens"
    },
    {
      title: "Live Recording",
      badgeText: "Medium",
      bottomLeftValue: "2,500 USDC = 201 Tokens"
    },
    {
      title: "Limited Edition Merch & Vip After Party",
      badgeText: "Low Priority",
      bottomLeftValue: "2,500 USDC = 201 Tokens"
    }
  ]

export const mockFundingOverview: FundingOverviewSectionProps = {
  title: "European Tour 2026",
  subtitle: "By Luna Eclipse",
  description:
    "Fund Luna Eclipse's 10-city European tour across major venues. This tour will include stops in Berlin, Amsterdam, Paris, London and more. Ticket holders with 50+ tokens get priority access to meets and greets.",
  infoCards: mockInfoCards,
  fundAllocations: mockFundAllocations
}
