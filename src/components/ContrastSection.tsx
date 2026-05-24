const rows = [
  {
    player: '"I felt slow in the third."',
    knowledgeBase: '"Here are five strategies to improve game-day energy."',
    linemate: '"Walk me through the day. What\'d you eat, when\'d you eat it, how\'d you sleep?"',
  },
  {
    player: '"What should I eat before a game?"',
    knowledgeBase: '"Carbs 3 hours out, protein 1 hour out, hydrate throughout."',
    linemate: '"What did you eat before your last game? How did you feel? Let\'s start there."',
  },
  {
    player: '"My billet cooks dinner but I\'m on my own otherwise."',
    knowledgeBase: '"Make sure to include protein, complex carbs, and vegetables at every meal."',
    linemate: '"Got it. What\'s working right now, and what\'s the meal you\'re least sure about?"',
  },
]

export default function ContrastSection() {
  return (
    <section className="border-t border-ink-rule py-15 md:py-15">
      <div className="max-w-[1280px] mx-auto px-3 md:px-10">
        <h2 className="font-display font-medium text-2xl">
          A knowledge base gives you answers. A coach gives you the right question.
        </h2>
        <div className="mt-6 space-y-0">
          {rows.map((row, i) => (
            <div key={i} className="border-t border-ink-hair py-4 md:py-6 grid md:grid-cols-3 gap-3 md:gap-3">
              <div>
                <span className="text-xs font-body uppercase text-ink-quiet block mb-1">Player says</span>
                <p className="text-base text-ink">{row.player}</p>
              </div>
              <div>
                <span className="text-xs font-body uppercase text-ink-quiet block mb-1">A knowledge base says</span>
                <p className="text-base text-ink-muted">{row.knowledgeBase}</p>
              </div>
              <div>
                <span className="text-xs font-body uppercase text-ink-quiet block mb-1">Linemate says</span>
                <p className="text-base text-ink font-medium">{row.linemate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
