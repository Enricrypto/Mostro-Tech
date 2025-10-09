import Image from "next/image"
import monsterImg from "@/public/monster.png"

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
        <button className='font-heading py-3 px-6 rounded-full transition bg-[var(--color-highlight)] text-[var(--color-black)] hover:bg-[var(--color-accent-dark)]'>
          Find out More
        </button>

        <button className='font-heading py-3 px-6 rounded-full transition bg-[var(--color-highlight)] text-[var(--color-black)] hover:bg-[var(--color-accent-dark)]'>
          Join the Waitlist
        </button>
      </div>
    </div>

    {/* Right image */}
    {/* <div className='relative mt-16 lg:mt-0'>
      <Image
        src={monsterImg}
        alt='Mostro character'
        width={400}
        height={400}
        className='drop-shadow-[0_0_30px_var(--color-highlight)]'
      />
    </div> */}
  </section>
)
