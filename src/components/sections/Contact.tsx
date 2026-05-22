import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../../data';
import { Mail, Send } from 'lucide-react';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulated mock submission for the visual experience
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 px-6 relative z-10 border-t border-soft-white/5 bg-deep-slate">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl text-soft-white font-bold mb-6">Initialize Communication</h2>
          <p className="text-cool-gray font-sans max-w-2xl mx-auto font-light leading-relaxed">
            Whether for technical collaboration, potential opportunities, or architectural discussions—my inbox is open. 
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="glass-panel p-8 rounded-2xl border border-soft-white/10">
               <h3 className="text-xl font-medium text-soft-white mb-2">Direct Channel</h3>
               <p className="text-cool-gray text-sm mb-6">Reach out directly via email infrastructure.</p>
               <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 text-dusty-cyan hover:text-soft-white transition-colors group">
                 <Mail size={20} />
                 <span className="font-mono text-sm tracking-wide border-b border-dusty-cyan/30 group-hover:border-soft-white transition-colors">{PERSONAL_INFO.email}</span>
               </a>
            </div>
            
            <p className="text-xs text-cool-gray/50 font-mono text-center md:text-left">
              // NOTE: This form interface is a simulation built in the client environment. Please use the direct mailto link above for guaranteed delivery until API tokens are injected.
            </p>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-panel p-8 rounded-2xl border border-soft-white/10 flex flex-col gap-6"
          >
            <div className="relative">
              <input type="text" id="name" required className="w-full bg-transparent border-b border-soft-white/20 px-0 py-3 text-soft-white placeholder-transparent focus:outline-none focus:border-dusty-cyan peer transition-colors" placeholder="Name" />
              <label htmlFor="name" className="absolute left-0 top-3 text-cool-gray text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-dusty-cyan peer-valid:-top-4 peer-valid:text-xs pointer-events-none">Name Entity</label>
            </div>
            <div className="relative">
              <input type="email" id="email" required className="w-full bg-transparent border-b border-soft-white/20 px-0 py-3 text-soft-white placeholder-transparent focus:outline-none focus:border-dusty-cyan peer transition-colors" placeholder="Email" />
              <label htmlFor="email" className="absolute left-0 top-3 text-cool-gray text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-dusty-cyan peer-valid:-top-4 peer-valid:text-xs pointer-events-none">Return Identifier (Email)</label>
            </div>
            <div className="relative">
              <textarea id="message" required rows={4} className="w-full bg-transparent border-b border-soft-white/20 px-0 py-3 text-soft-white placeholder-transparent focus:outline-none focus:border-dusty-cyan peer transition-colors resize-none" placeholder="Message"></textarea>
              <label htmlFor="message" className="absolute left-0 top-3 text-cool-gray text-sm transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-dusty-cyan peer-valid:-top-6 peer-valid:text-xs pointer-events-none">Payload</label>
            </div>

            <button 
              type="submit" 
              disabled={status !== 'idle'}
              className="mt-4 w-full py-4 rounded-full bg-soft-white text-deep-slate font-medium flex items-center justify-center gap-2 hover:bg-dusty-cyan hover:shadow-[0_0_20px_rgba(124,155,170,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
            >
               {status === 'idle' && (
                 <>Transmit Data <Send size={16} className="group-hover:translate-x-1 transition-transform" /></>
               )}
               {status === 'sending' && 'Establishing Connection...'}
               {status === 'success' && 'Transmission Successful'}
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
