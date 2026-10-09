import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import AboutSection from '@/sections/AboutSection'
import ChannelsSection from '@/sections/ChannelsSection'
import ConsultingSection from '@/sections/ConsultingSection'
import FeaturedInSection from '@/sections/FeaturedInSection'
import HeroSection from '@/sections/HeroSection'
import NewsletterSection from '@/sections/NewsletterSection'
import PortfolioSection from '@/sections/portfolio/PortfolioSection'
import SpeakingSection from '@/sections/speaking/SpeakingSection'

/** Single-page site. Section order here is the order on the page. */
export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <ChannelsSection />
        <AboutSection />
        <PortfolioSection />
        <FeaturedInSection />
        <ConsultingSection />
        <NewsletterSection />
        <SpeakingSection />
      </main>
      <Footer />
    </div>
  )
}
