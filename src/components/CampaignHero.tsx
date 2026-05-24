import PrimaryCta from './PrimaryCta'

interface CampaignHeroProps {
  eyebrow: string
  hook: string
  spineParagraphs: string[]
  ctaLabel: string
  onCtaClick?: () => void
}

export default function CampaignHero({ eyebrow, hook, spineParagraphs, ctaLabel, onCtaClick }: CampaignHeroProps) {
  return (
    <section className="pt-20 pb-15 md:pt-20 md:pb-20">
      <div className="max-w-[1280px] mx-auto px-3 md:px-10">
        <h1 className="font-display font-medium text-4xl md:text-5xl text-ink">
          Linemate.
        </h1>
        <p className="mt-3 font-display font-normal text-xl text-ink tracking-[0.005em]">
          The junior hockey nutrition coach.
        </p>
        <span className="mt-2 block text-xs font-body uppercase text-ink-quiet">
          {eyebrow}
        </span>
        <h2 className="mt-4 font-display font-medium text-2xl text-ink max-w-[720px]">
          {hook}
        </h2>
        <div className="mt-3 space-y-3 max-w-[600px]">
          {spineParagraphs.map((p, i) => (
            <p key={i} className="text-base text-ink-muted">{p}</p>
          ))}
        </div>
        <div className="mt-4">
          <PrimaryCta label={ctaLabel} onClick={onCtaClick} />
        </div>
      </div>
    </section>
  )
}
