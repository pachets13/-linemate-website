import { FireSimple, Basketball, Barbell, House, Bus, Heartbeat } from '@phosphor-icons/react'

const features = [
  {
    icon: FireSimple,
    numeral: 'i',
    title: 'Game-day fueling',
    description: 'At home or on the bus. What works, what doesn\'t, why.',
  },
  {
    icon: Heartbeat,
    numeral: 'ii',
    title: 'Postgame recovery',
    description: 'The window matters. The food matters less than people think.',
  },
  {
    icon: Barbell,
    numeral: 'iii',
    title: 'Practice-day eating',
    description: 'Two-a-days, off-ice, the day before a back-to-back.',
  },
  {
    icon: House,
    numeral: 'iv',
    title: 'Billet life',
    description: 'Whatever your billet cooks, and whatever they don\'t.',
  },
  {
    icon: Bus,
    numeral: 'v',
    title: 'Road trips',
    description: 'Hotels, team meals, the gas-station stop on a five-hour bus.',
  },
  {
    icon: Basketball,
    numeral: 'vi',
    title: '"I felt heavy"',
    description: 'When the food is the problem, and when it isn\'t.',
  },
]

export default function FeaturesGrid() {
  return (
    <section className="bg-ink py-15 md:py-15">
      <div className="max-w-[1280px] mx-auto px-3 md:px-10">
        <h2 className="font-display font-medium text-2xl text-cream">What it coaches.</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.numeral}
                className="border border-cream-rule p-4 -mt-[0.5px] -ml-[0.5px]"
              >
                <Icon size={24} weight="light" className="text-cream" />
                <span className="block mt-2 text-xs font-body uppercase text-cream-quiet">
                  {feature.numeral}
                </span>
                <h3 className="mt-1 font-display font-medium text-lg text-cream">
                  {feature.title}
                </h3>
                <p className="mt-1 text-base text-cream-muted">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
