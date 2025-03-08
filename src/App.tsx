import React from 'react';
import { Shield, Book, Globe, Bell, ArrowRight, CheckCircle, Users, Building } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;