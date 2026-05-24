import CampaignHero from '../components/CampaignHero'
import ScenariosSection from '../components/ScenariosSection'
import LaneSection from '../components/LaneSection'
import FinalCtaBand from '../components/FinalCtaBand'
import CrossLink from '../components/CrossLink'
import Footer from '../components/Footer'

const LANE_PARAGRAPHS = [
  "Linemate doesn't coach weight cuts. Doesn't recommend supplements. Doesn't pretend to be a dietitian. Doesn't coach sleep, stress, or the mental side of the game.",
  "When a player asks about something outside the lane, Linemate names what it sees and points the player at the right person — a registered dietitian, a team doctor, a trusted adult.",
]

export default function ForFrontOfficesPage() {
  return (
    <main>
      <CampaignHero
        eyebrow="FOR FRONT OFFICES"
        hook="The piece of player development most programs don't have a real answer for."
        spineParagraphs={[
          "You watch these guys grow up in your program. The nutrition piece is one of the few things you haven't been able to do much about — not because you don't care, but because nutrition and food prep happen away from the rink.",
          "Linemate is the answer. Players use it directly. You don't have to be a nutrition expert to put it in front of them, and you don't have to administer it once it's there.",
        ]}
        ctaLabel="Request a pilot for your program"
      />
      <ScenariosSection />
      <LaneSection paragraphs={LANE_PARAGRAPHS} />
      <FinalCtaBand
        headline="Request a pilot for your program."
        subhead="We're working with a small set of programs this season. If you'd like yours to be one of them, leave your email and we'll be in touch."
        buttonLabel="Get in touch"
        successMessage="Thanks — we'll be in touch."
        source="for-front-offices"
      />
      <CrossLink
        label="Looking for the coach version?"
        to="/for-coaches"
      />
      <Footer />
    </main>
  )
}
