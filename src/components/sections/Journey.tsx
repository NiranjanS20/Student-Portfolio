import React from 'react';
import { motion } from 'motion/react';
import { JOURNEY } from '../../data';

export function Journey() {
  return (
    <section id="journey" className="py-32 px-6 relative z-10 w-full bg-deep-slate/50 border-t border-soft-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-display text-3xl md:text-5xl text-soft-white font-bold mb-6">Mission Log</h2>
          <p className="text-cool-gray max-w-2xl mx-auto">
            A continuous progression through academic learning, technical leadership, and collaborative building.
          </p>
        </div>

        <div className="relative border-l border-soft-white/10 ml-4 md:ml-0 md:pl-0">
          {JOURNEY.map((item, index) => (
            <JourneyNode key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function JourneyNode({ item, index }: { item: any; index: number; key?: string | number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`relative pl-8 md:pl-0 mb-16 last:mb-0 md:flex ${
        index % 2 === 0 ? 'md:flex-row-reverse' : ''
      } group`}
    >
      {/* Central Node Line for Desktop */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-soft-white/10 -ml-[0.5px]"></div>
      
      {/* Node Dot */}
      <div className="absolute left-[-5px] md:left-[calc(50%-5px)] top-1.5 w-2.5 h-2.5 rounded-full bg-deep-slate border-2 border-cool-gray group-hover:border-dusty-cyan group-hover:bg-dusty-cyan group-hover:shadow-[0_0_10px_rgba(124,155,170,0.5)] transition-all z-10"></div>

      {/* Content */}
      <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
        <div className="glass-panel p-6 rounded-2xl border border-transparent hover:border-soft-white/10 transition-colors inline-block w-full">
          <span className="inline-block px-3 py-1 bg-soft-white/5 text-cool-gray text-xs font-mono rounded-full mb-4">
            {item.period}
          </span>
          <h3 className="text-xl font-medium text-soft-white mb-1 font-display">{item.role}</h3>
          <h4 className="text-dusty-cyan text-sm mb-4">{item.organization}</h4>
          <p className="text-cool-gray text-sm leading-relaxed">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
