interface LaneSectionProps {
  paragraphs: string[]
}

export default function LaneSection({ paragraphs }: LaneSectionProps) {
  return (
    <section className="border-t border-ink-rule py-15 md:py-15">
      <div className="max-w-[1280px] mx-auto px-3 md:px-10">
        <h2 className="font-display font-medium text-2xl">What Linemate stays out of.</h2>
        <div className="mt-6 max-w-[640px] space-y-3">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-base text-ink-muted">{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
