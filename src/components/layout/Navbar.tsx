import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Menu, X, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../../data';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'GitHub', href: '#github' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 h-16 px-6 md:px-8 flex items-center justify-between border-b border-soft-white/5 bg-deep-slate/80 backdrop-blur-md"
    >
      {/* Brand / Logo (OS style dots) */}
      <div className="flex items-center gap-6">
        <div className="hidden md:flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40"></div>
        </div>
        <a href="#" className="font-display italic text-lg text-dusty-cyan tracking-wider hover:text-soft-white transition-colors">
          Niranjan Shanbhag
        </a>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex gap-8 lg:gap-10 text-[11px] uppercase tracking-[0.2em] font-medium text-cool-gray">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-soft-white transition-colors relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-dusty-cyan group-hover:w-full transition-all duration-300"></span>
          </a>
        ))}
      </div>

      {/* Desktop Actions */}
      <div className="hidden md:flex items-center gap-4">
        <a
          href={PERSONAL_INFO.resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] uppercase tracking-widest text-cool-gray hover:text-soft-white flex items-center gap-1 transition-colors"
        >
          <FileText size={14} /> Resume
        </a>
        <a
          href="#contact"
          className="px-4 py-1.5 border border-dusty-cyan/30 rounded-full text-[10px] uppercase tracking-widest bg-charcoal-blue/50 text-soft-white hover:bg-dusty-cyan hover:text-deep-slate transition-colors"
        >
          Contact Me
        </a>
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden relative z-10 text-soft-white p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
          className="fixed inset-0 top-16 z-40 bg-deep-slate/95 flex flex-col items-center justify-center gap-8 md:hidden border-t border-soft-white/5"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-display uppercase tracking-[0.2em] font-medium text-soft-white hover:text-dusty-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="h-px w-12 bg-soft-white/10 my-2"></div>
          <a
            href={PERSONAL_INFO.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-widest text-cool-gray flex items-center gap-2"
          >
            <FileText size={16} /> Resume <ExternalLink size={14} />
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="px-6 py-2 border border-dusty-cyan/50 rounded-full text-xs uppercase tracking-widest bg-charcoal-blue/50 mt-2 text-soft-white"
          >
            Contact Me
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
