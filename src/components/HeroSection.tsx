import PrimaryCta from './PrimaryCta'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image — full bleed */}
      <img
        src="/hero-rink.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Solid overlay — --ink at 60% */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(20, 22, 26, 0.60)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative pt-20 pb-15 md:pt-20 md:pb-20">
        <div className="max-w-[1280px] mx-auto px-3 md:px-10">
          <h1 className="font-display font-medium text-4xl md:text-5xl text-cream">
            Linemate.
          </h1>
          <p className="mt-3 font-display font-normal text-xl text-cream tracking-[0.005em]">
            The junior hockey nutrition coach.
          </p>
          <p className="mt-3 text-base text-cream-muted max-w-[480px]">
            Nutrition is the edge most junior players leave on the table. Linemate helps you take it on the bus, at the billet's, and the night before games. All without turning nutrition into a second job.
          </p>
          <div className="mt-4">
            <PrimaryCta label="Join the waiting list" />
          </div>
        </div>
      </div>
    </section>
  )
}
