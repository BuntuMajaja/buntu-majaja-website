import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ChannelsSection from './components/ChannelsSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import NewsletterSection from './components/NewsletterSection';
import ConsultingCTA from './components/ConsultingCTA';
import SpeakingSection from './components/SpeakingSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Set dark theme as default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <ChannelsSection />
        <AboutSection />
        <PortfolioSection />
        <ConsultingCTA />
        <NewsletterSection />
        <SpeakingSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
