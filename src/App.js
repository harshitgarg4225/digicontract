// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  return (
    <div>
      <ThemeSwitcher />
      <Navbar />
      <Hero />
      <VideoSection />
      <Features />
      <Pricing />
      <Reviews />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;



