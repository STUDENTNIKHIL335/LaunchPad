import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import OrbitalTelemetry from './components/OrbitalTelemetry';
import PayloadCalculator from './components/PayloadCalculator';
import Pricing from './components/Pricing';
import SocialProof from './components/SocialProof';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import LaunchConsoleModal from './components/LaunchConsoleModal';
import DemoModal from './components/DemoModal';

export default function App() {
  const [consoleOpen, setConsoleOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [demoMission, setDemoMission] = useState('Orbital Mission Demo');

  const handleOpenDemo = (mission = 'Orbital Mission Demo') => {
    setDemoMission(mission);
    setDemoOpen(true);
  };

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col relative selection:bg-primary-container selection:text-on-primary-container">
      {/* Ambient Atmospheric Glow Orbs */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-primary-container/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="fixed top-[1200px] right-[-100px] w-[700px] h-[700px] bg-secondary/10 rounded-full blur-[160px] pointer-events-none -z-10"></div>
      <div className="fixed top-[2600px] left-[-150px] w-[800px] h-[800px] bg-tertiary-container/15 rounded-full blur-[180px] pointer-events-none -z-10"></div>

      {/* Navigation */}
      <Navbar
        onOpenConsole={() => setConsoleOpen(true)}
        onOpenDemo={handleOpenDemo}
      />

      {/* Main Page Layout */}
      <main className="w-full pt-20 flex-1">
        <Hero
          onOpenConsole={() => setConsoleOpen(true)}
          onOpenDemo={handleOpenDemo}
        />
        <Features />
        <OrbitalTelemetry />
        <PayloadCalculator
          onOpenConsole={() => setConsoleOpen(true)}
        />
        <Pricing
          onOpenConsole={() => setConsoleOpen(true)}
          onOpenDemo={handleOpenDemo}
        />
        <SocialProof />
        <CtaBanner
          onOpenConsole={() => setConsoleOpen(true)}
          onOpenDemo={handleOpenDemo}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <LaunchConsoleModal
        isOpen={consoleOpen}
        onClose={() => setConsoleOpen(false)}
      />
      <DemoModal
        isOpen={demoOpen}
        onClose={() => setDemoOpen(false)}
        initialMission={demoMission}
      />
    </div>
  );
}
