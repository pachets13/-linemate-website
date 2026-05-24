import HeroSection from '../components/HeroSection'
import ContrastSection from '../components/ContrastSection'
import HowItWorks from '../components/HowItWorks'
import FeaturesGrid from '../components/FeaturesGrid'
import AntiFeatures from '../components/AntiFeatures'
import DemoCard from '../components/DemoCard'
import ParentsStaff from '../components/ParentsStaff'
import FinalCtaBand from '../components/FinalCtaBand'
import Footer from '../components/Footer'

export default function PlayerPage() {
  return (
    <main>
      <HeroSection />
      <ContrastSection />
      <HowItWorks />
      <FeaturesGrid />
      <AntiFeatures />
      <DemoCard />
      <ParentsStaff />
      <FinalCtaBand
        headline="Join the waiting list."
        subhead="Linemate is opening up access in waves. Get in early, talk to the coach, help shape it."
        buttonLabel="Get on the list"
        successMessage="You're in. We'll be in touch — and don't worry, we won't fill your inbox."
        source="player"
      />
      <Footer />
    </main>
  )
}
