import { Button } from "../atoms/Button"

export const Hero = () => (
  <section className='flex flex-col lg:flex-row items-center justify-center min-h-screen px-12'>
    {/* Left content */}
    <div className='max-w-xl text-center lg:text-left'>
      <p
        className='uppercase tracking-widest font-body mb-2'
        style={{ fontSize: "1.125rem", color: "var(--color-accent)" }} // matches text-lg
      >
        → WE ARE
      </p>

      <h1
        className='font-heading font-extrabold leading-[1] mb-4'
        style={{ fontSize: "7.5rem", color: "var(--color-white)" }} // matches text-[120px]
      >
        MOSTRO
      </h1>

      <p
        className='font-body mb-8'
        style={{ fontSize: "1.5rem", color: "var(--color-muted)" }} // matches text-2xl
      >
        A next-gen music platform
      </p>

      {/* Buttons */}
      <div className='flex gap-4 justify-center'>
        <Button themeVariant='highlight'>Find out More</Button>

        <Button themeVariant='highlight'>Join the Waitlist</Button>
      </div>
    </div>
  </section>
)
