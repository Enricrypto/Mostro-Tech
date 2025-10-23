import { FundingOverviewSectionProps } from "@/components/molecules/FundingOverviewSection"

export const mockInfoCards: FundingOverviewSectionProps["infoCards"] = [
  { variant: "amount", value: 50000, tokens: 120 }, // Requested amount card
  { variant: "date", date: "November 15, 2025" } // Date card
]

export const mockFundAllocations: FundingOverviewSectionProps["fundAllocations"] =
  [
    { title: "Marketing", badgeText: "High Priority", bottomLeftValue: 15000 },
    { title: "Venue Costs", badgeText: "Medium", bottomLeftValue: 20000 },
    { title: "Merch & Ops", badgeText: "Low Priority", bottomLeftValue: 15000 }
  ]

export const mockFundingOverview: FundingOverviewSectionProps = {
  title: "European Tour Funding",
  subtitle: "Priority Access",
  description:
    "Fund a 10-city European tour across major venues. This tour will include stops in Berlin, Amsterdam, Paris, London and more. Ticket holders with 50+ tokens get priority access to meets and greets.",
  infoCards: mockInfoCards,
  fundAllocations: mockFundAllocations
}
