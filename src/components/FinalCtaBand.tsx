import WaitlistForm from './WaitlistForm'

interface FinalCtaBandProps {
  headline: string
  subhead: string
  buttonLabel: string
  successMessage: string
  source: string
}

export default function FinalCtaBand({ headline, subhead, buttonLabel, successMessage, source }: FinalCtaBandProps) {
  return (
    <section className="bg-ink py-20 md:py-20">
      <div className="max-w-[1280px] mx-auto px-3 md:px-10 text-center">
        <h2 className="font-display font-medium text-4xl md:text-4xl text-cream">
          {headline}
        </h2>
        <p className="mt-3 text-base text-cream-muted max-w-[540px] mx-auto">
          {subhead}
        </p>
        <div className="mt-4 flex justify-center">
          <WaitlistForm
            buttonLabel={buttonLabel}
            successMessage={successMessage}
            source={source}
            variant="dark"
          />
        </div>
      </div>
    </section>
  )
}
