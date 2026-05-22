import React from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../../data';

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-12 xl:px-24 mx-auto max-w-7xl relative z-10 border-y border-soft-white/5 bg-charcoal-blue/20">
      <div className="mb-12">
        <h2 className="text-xs font-mono tracking-[0.4em] text-dusty-cyan uppercase mb-4 flex items-center gap-4 font-bold">
          Technical Arsenal
        </h2>
        <h3 className="font-display text-3xl md:text-5xl text-soft-white font-bold tracking-tight uppercase">System Capabilities</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {SKILLS.map((category, idx) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-panel p-6 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4">
               <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-dusty-cyan/50 text-[10px] font-mono">0{idx + 1}</div>
            </div>
            
            <h4 className="text-soft-white font-bold mb-4 font-display uppercase tracking-wider text-sm">
              {category.name}
            </h4>
            
            <div className="flex flex-col gap-2">
              {category.skills.map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded bg-dusty-cyan/40"></div>
                  <span className="text-cool-gray text-sm leading-relaxed">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
