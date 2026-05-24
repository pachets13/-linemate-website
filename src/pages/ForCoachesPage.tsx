import CampaignHero from '../components/CampaignHero'
import ScenariosSection from '../components/ScenariosSection'
import LaneSection from '../components/LaneSection'
import FinalCtaBand from '../components/FinalCtaBand'
import CrossLink from '../components/CrossLink'
import Footer from '../components/Footer'

const LANE_PARAGRAPHS = [
  "Linemate doesn't coach weight cuts. Doesn't recommend supplements. Doesn't pretend to be a dietitian. Doesn't coach sleep, stress, or the mental side of the game.",
  "When a player asks about something outside the lane, Linemate names what it sees and points the player at the right person — a registered dietitian, a team doctor, a trusted adult.",
  "If your trainer is already in the picture on nutrition, Linemate sits next to him, not in front. Same with a team dietitian if you've got one.",
]

export default function ForCoachesPage() {
  return (
    <main>
      <CampaignHero
        eyebrow="FOR COACHES"
        hook="Your players know how to play hockey. They don't always know how to eat."
        spineParagraphs={[
          "Linemate is for the ones who want to be better at this — the self-starters, the guys looking at the next level.",
          "You don't run it. They do. Nothing to set up, nothing to administer, nothing new on your week. It lives with your players.",
        ]}
        ctaLabel="Request a pilot for your team"
      />
      <ScenariosSection />
      <LaneSection paragraphs={LANE_PARAGRAPHS} />
      <FinalCtaBand
        headline="Request a pilot for your team."
        subhead="We're working with a small set of teams this season. If you'd like yours to be one of them, leave your email and we'll be in touch."
        buttonLabel="Get in touch"
        successMessage="Thanks — we'll be in touch."
        source="for-coaches"
      />
      <CrossLink
        label="Looking for the front office version?"
        to="/for-front-offices"
      />
      <Footer />
    </main>
  )
}
