const steps = [
  {
    number: '01',
    title: 'Drop the folder into a Claude project.',
    description: 'Linemate is a folder, not an app. Five files. Drop them in and you\'re ready.',
  },
  {
    number: '02',
    title: 'Onboard once.',
    description: 'Linemate asks a handful of questions — your living situation, your schedule, what you\'re hoping to get out of this. Conversational, not a form.',
  },
  {
    number: '03',
    title: 'Coach forever.',
    description: 'Every conversation after that, Linemate remembers. Last week\'s experiments. The road trip that wrecked your stomach. The pregame meal that finally worked.',
  },
]

export default function HowItWorks() {
  return (
    <section className="border-t border-ink-rule py-15 md:py-15">
      <div className="max-w-[1280px] mx-auto px-3 md:px-10">
        <h2 className="font-display font-medium text-2xl">How it works.</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6 md:gap-3">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="text-xs font-body uppercase text-ink-quiet">{step.number}</span>
              <h3 className="mt-1 font-display font-medium text-lg">{step.title}</h3>
              <p className="mt-1.5 text-base text-ink-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
