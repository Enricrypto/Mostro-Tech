"use client"

interface ProposalDescriptionProps {
  text?: string
}

export const ProposalDescription = ({
  text = "You just voted “NO” to this proposal. Check out other proposals from this artist."
}: ProposalDescriptionProps) => {
  return (
    <p
      className='
    w-[377px] h-[40px]
    font-inter font-normal text-[14px] leading-[20px]
    text-[var(--color-proposal-text)]
  '
    >
      {text}
    </p>
  )
}
