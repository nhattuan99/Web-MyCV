import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import SkillsMatrix from './components/SkillsMatrix';
import InteractiveNetworkLab from './components/InteractiveNetworkLab';
import Certifications from './components/Certifications';
import EnterpriseArchitecture from './components/EnterpriseArchitecture';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import EnvInspectorModal from './components/EnvInspectorModal';
import { trackVisit } from './services/api';

export default function App() {
  const [isEnvModalOpen, setIsEnvModalOpen] = useState(false);

  useEffect(() => {
    // Track anonymous visit to current environment database
    trackVisit();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenEnvModal={() => setIsEnvModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <SkillsMatrix />
        <InteractiveNetworkLab />
        <Certifications />
        <EnterpriseArchitecture onOpenEnvModal={() => setIsEnvModalOpen(true)} />
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer onOpenEnvModal={() => setIsEnvModalOpen(true)} />

      {/* Environment & Database Inspector Modal */}
      <EnvInspectorModal 
        isOpen={isEnvModalOpen} 
        onClose={() => setIsEnvModalOpen(false)} 
      />
    </div>
  );
}
