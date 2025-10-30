/**
 * App.jsx - Main Application Component
 * 
 * This is the root component of the website. Think of it as the "container"
 * that holds all other sections of the website.
 * 
 * Key Concepts:
 * - React Components: Reusable pieces of UI (like building blocks)
 * - Import/Export: Bringing in code from other files
 * - JSX: HTML-like syntax that React uses
 */

// React Hook: useEffect lets us run code when the component loads
import { useEffect } from 'react';

// Import all section components (each represents a part of the website)
import Navbar from './components/Navbar';              // Top navigation bar
import HeroSection from './components/HeroSection';    // First section with name and photo
import ChannelsSection from './components/ChannelsSection';  // "Explore My Universe" cards
import AboutSection from './components/AboutSection';  // Mission, philosophy, achievements
import PortfolioSection from './components/PortfolioSection';  // Project showcase
import AsFeaturedInSection from './components/AsFeaturedInSection';  // Media coverage
import NewsletterSection from './components/NewsletterSection';  // Newsletter signup
import ConsultingCTA from './components/ConsultingCTA';  // "Ready to Collaborate" section
import SpeakingSection from './components/SpeakingSection';  // Speaking engagements
import Footer from './components/Footer';              // Bottom footer

// Import global styles (CSS = styling/design rules)
import './App.css';

/**
 * App Component
 * 
 * This function defines what the entire website looks like.
 * In React, components are just JavaScript functions that return HTML-like code (JSX).
 */
function App() {
  /**
   * useEffect Hook
   * 
   * This runs once when the website loads (because of the empty [] at the end).
   * We use it here to enable dark mode by default.
   * 
   * The [] is called a "dependency array" - empty means "run once on load"
   */
  useEffect(() => {
    // Add 'dark' class to the root HTML element to enable dark theme
    // This works with Tailwind CSS's dark mode feature
    document.documentElement.classList.add('dark');
  }, []); // Empty array = run only once when component mounts

  /**
   * Return Statement
   * 
   * This is what gets displayed on the screen.
   * JSX looks like HTML but it's actually JavaScript.
   * 
   * Structure:
   * - <div> is the main container
   * - <Navbar /> is the navigation at the top
   * - <main> contains all the main content sections
   * - <Footer /> is at the bottom
   */
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 
        className in React = class in HTML
        Tailwind CSS classes:
        - min-h-screen: minimum height = full screen
        - bg-background: background color from theme
        - text-foreground: text color from theme
      */}
      
      {/* Navigation bar - sticky at top */}
      <Navbar />
      
      {/* Main content area */}
      <main>
        {/* 
          Each component below is a section of the website.
          They appear in this order from top to bottom.
          
          Think of components like LEGO blocks - each one is self-contained
          but they all work together to build the complete website.
        */}
        
        <HeroSection />        {/* Hero: Name, title, photo, CTA buttons */}
        <ChannelsSection />    {/* Explore My Universe: 4 channel cards */}
        <AboutSection />       {/* About: Mission, philosophy, stats */}
        <PortfolioSection />   {/* Portfolio: All projects with filters */}
        <AsFeaturedInSection /> {/* As Featured In: Media coverage */}
        <ConsultingCTA />      {/* Ready to Collaborate: Services & CTA */}
        <NewsletterSection />  {/* Newsletter: Subscription form */}
        <SpeakingSection />    {/* Speaking: Topics, testimonials, past events */}
      </main>
      
      {/* Footer - contact info, social links, copyright */}
      <Footer />
    </div>
  );
}

/**
 * Export Statement
 * 
 * This makes the App component available to other files.
 * 'default' means this is the main thing exported from this file.
 * 
 * In main.jsx, we import this component and render it to the page.
 */
export default App;

