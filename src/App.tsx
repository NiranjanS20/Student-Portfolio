import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from './data';
import { Navbar } from './components/layout/Navbar';
import { CustomCursor } from './components/layout/CustomCursor';
import { BackgroundLayers } from './components/layout/BackgroundLayers';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Journey } from './components/sections/Journey';
import { GitHubSection } from './components/sections/GitHubSection';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen font-sans flex flex-col">
      <CustomCursor />
      <BackgroundLayers />
      <Navbar />
      
      <main className="smooth-scroll flex-1 pt-12">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <GitHubSection />
        <Contact />
      </main>

      <footer className="h-auto md:h-12 py-4 md:py-0 px-6 md:px-8 flex flex-col md:flex-row items-center justify-between border-t border-soft-white/5 bg-deep-slate/80 backdrop-blur-xl z-50 text-[10px] font-mono text-cool-gray">
        <div className="flex gap-8 mb-4 md:mb-0">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
            <span>LOC: MUMBAI, IN</span>
          </div>
          <div className="hidden sm:block">LAT: 19.0760 / LON: 72.8777</div>
        </div>
        <div className="flex flex-wrapjustify-center gap-4 md:gap-8 uppercase tracking-widest text-[#94A3B8]">
          <span className="text-dusty-cyan">Python 3.11</span>
          <span>React.js</span>
          <span>Next.js</span>
          <span>PostgreSQL</span>
          <span className="text-soft-white hidden lg:block">{new Date().getFullYear()} ©</span>
        </div>
      </footer>
    </div>
  );
}
