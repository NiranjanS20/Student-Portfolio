import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../../data';

export function Hero() {
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 20 }
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-start pt-24 pb-12 overflow-hidden px-6 lg:px-12 xl:px-24">
      <div className="w-full relative z-10 flex flex-col items-start text-left max-w-6xl">
        
        <motion.div variants={containerVars} initial="hidden" animate="show" className="flex flex-col items-start gap-8">
          
          <div className="space-y-4">
            <motion.p variants={itemVars} className="text-dusty-cyan text-xs uppercase tracking-[0.4em] font-bold">
              AI • Full Stack • Intelligent Systems
            </motion.p>
            
            <motion.h1 variants={itemVars} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] tracking-tight text-soft-white uppercase">
              DESIGNING<br/>SYSTEMS FOR<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-dusty-cyan to-muted-lavender">THE FUTURE</span>
            </motion.h1>
            
            <motion.p variants={itemVars} className="text-cool-gray text-lg md:text-xl max-w-xl leading-relaxed mt-4 font-light">
              {PERSONAL_INFO.about.split('.')[0]}. Building scalable products through the lens of AI and product design maturity.
            </motion.p>
          </div>

          <motion.div variants={itemVars} className="flex flex-wrap gap-4 mt-4">
            <a href="#projects" className="px-8 py-3 bg-soft-white text-deep-slate rounded-full text-xs font-bold uppercase tracking-widest hover:bg-dusty-cyan transition-colors">
              View Projects
            </a>
            
            <a href={PERSONAL_INFO.resumeLink} target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-soft-white/10 rounded-full text-xs font-bold uppercase tracking-widest bg-soft-white/5 hover:bg-soft-white/10 transition-all text-soft-white">
              Resume
            </a>
          </motion.div>

        </motion.div>
      </div>

      {/* Ambient floating elements for depth */}
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full border border-dusty-cyan/10 bg-dusty-cyan/5 blur-xl pointer-events-none"
      />
    </section>
  );
}
