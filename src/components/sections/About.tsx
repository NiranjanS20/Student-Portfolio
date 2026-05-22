import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../../data';
import { Code2, BrainCircuit, Layout } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: <BrainCircuit className="text-dusty-cyan" size={24} />,
      title: "AI Systems",
      desc: "Integrating intelligent models into practical, scalable workflows."
    },
    {
      icon: <Code2 className="text-muted-lavender" size={24} />,
      title: "Full-Stack",
      desc: "Crafting robust architectures from database models to frontend APIs."
    },
    {
      icon: <Layout className="text-soft-white" size={24} />,
      title: "Product Design",
      desc: "Ensuring immersive, responsive, and human-centered user experiences."
    }
  ];

  return (
    <section id="about" className="py-32 px-6 lg:px-12 xl:px-24 mx-auto max-w-7xl relative z-10">
      <div className="grid md:grid-cols-[1.5fr_1fr] gap-16 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4 mb-8">
            <p className="text-dusty-cyan text-xs uppercase tracking-[0.4em] font-bold">Systems Overview</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-soft-white uppercase">
              Logic Meets<br />Intuition.
            </h2>
          </div>
          
          <div className="space-y-6 text-cool-gray font-sans text-lg leading-relaxed">
            <p>
              {PERSONAL_INFO.about}
            </p>
            <p>
              Currently pursuing my B.Tech at Fr. CRCE (CGPA: 8.71), I blend academic rigor with real-world hackathon experience. Whether I'm leading an NGO platform team or architecting multi-agent CRMs, my focus remains on building reliable, elegant solutions.
            </p>
          </div>
          
          <motion.div 
            className="mt-10"
            whileHover={{ x: 10 }}
          >
            <a href={PERSONAL_INFO.resumeLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-dusty-cyan font-medium border-b border-dusty-cyan/30 pb-1 hover:border-dusty-cyan transition-colors uppercase text-sm tracking-widest">
              View Full Background <ArrowRightIcon />
            </a>
          </motion.div>
        </motion.div>

        {/* Features / Visual Side */}
        <div className="grid gap-4 w-full">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 w-full"
            >
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-deep-slate/50 rounded-xl border border-soft-white/5">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-soft-white font-medium text-lg mb-1">{feature.title}</h3>
                  <p className="text-cool-gray text-xs leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  );
}
