import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../../data';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 lg:px-12 xl:px-24 mx-auto max-w-7xl relative z-10">
      <div className="mb-20 flex flex-col items-start gap-4">
        <h2 className="text-xs font-mono tracking-[0.4em] text-muted-lavender uppercase flex items-center gap-4 font-bold">
          Case Studies
        </h2>
        <h3 className="font-display text-4xl md:text-6xl text-soft-white font-bold tracking-tight uppercase">Featured Projects</h3>
        <p className="text-cool-gray max-w-sm text-sm leading-relaxed">
          A selection of production-grade systems, AI integrations, and full-stack applications.
        </p>
      </div>

      <div className="flex flex-col gap-24">
        {PROJECTS.filter(p => p.featured).map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any, index: number, key?: string | number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center group`}
    >
      {/* Visual Component */}
      <div className="w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden glass-panel relative p-2 border border-soft-white/10 group-hover:border-dusty-cyan/30 transition-colors">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-blue/80 to-deep-slate/90 z-10 group-hover:opacity-80 transition-opacity"></div>
        
        {project.images && project.images.length > 0 ? (
          <div className="w-full h-full rounded-xl relative z-0 overflow-hidden border border-soft-white/5 bg-charcoal-blue flex items-center justify-center">
            {project.images.length > 1 ? (
              <div className="w-full h-full flex flex-col gap-2 p-2">
                {project.images.map((img: string, i: number) => (
                  <img key={i} src={img} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-1/2 object-cover rounded-lg" />
                ))}
              </div>
            ) : (
              <img src={project.images[0]} alt={`${project.title} screenshot`} className="w-full h-full object-cover" />
            )}
          </div>
        ) : (
          <div className="w-full h-full rounded-xl bg-deep-slate relative z-0 overflow-hidden border border-soft-white/5 flex flex-col pt-4 px-4 gap-4">
             {/* Mock Header */}
             <div className="w-full flex gap-2 items-center opacity-30">
               <div className="w-2 h-2 rounded-full bg-red-400"></div>
               <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
               <div className="w-2 h-2 rounded-full bg-green-400"></div>
             </div>
             {/* Mock Content */}
             <div className="w-1/3 h-4 bg-soft-white/10 rounded-sm"></div>
             <div className="w-full flex gap-4 h-full pb-4">
                <div className="w-1/4 h-full bg-soft-white/5 rounded-lg"></div>
                <div className="flex-1 h-full flex flex-col gap-4">
                   <div className="w-full h-1/3 bg-dusty-cyan/10 rounded-lg border border-dusty-cyan/20 grid place-items-center opacity-50">
                      <span className="font-mono text-dusty-cyan/50 text-xs">MODULE://{project.id.toUpperCase()}</span>
                   </div>
                   <div className="w-full flex-1 bg-soft-white/5 rounded-lg flex p-4 gap-4">
                      <div className="w-1/2 h-full bg-soft-white/5 rounded"></div>
                      <div className="w-1/2 h-full bg-soft-white/5 rounded"></div>
                   </div>
                </div>
             </div>
          </div>
        )}

        {/* Floating overlay link text */}
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
           <span className="px-6 py-3 rounded-full glass-panel text-soft-white text-sm font-medium flex items-center gap-2">
             View System <ArrowUpRight size={16} className="text-dusty-cyan" />
           </span>
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h4 className="text-dusty-cyan font-mono text-[10px] tracking-widest uppercase mb-3 border-l-2 border-dusty-cyan pl-3">Project 0{index + 1}</h4>
        <h3 className="text-3xl md:text-5xl font-display font-bold text-soft-white mb-2 uppercase">{project.title}</h3>
        <p className="text-xs text-muted-lavender uppercase tracking-widest mb-6">{project.tagline}</p>
        
        <div className="space-y-4 mb-8">
          {project.description.map((desc: string, i: number) => (
            <p key={i} className="text-cool-gray text-sm md:text-base leading-relaxed">
              {desc}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.techStack.map((tech: string) => (
            <span key={tech} className="px-2 py-1 bg-deep-slate rounded text-[9px] uppercase tracking-tighter border border-white/5 text-soft-white">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-soft-white hover:text-dusty-cyan transition-colors text-sm font-medium group/link">
              <Github size={18} />
              <span>Repository</span>
              <div className="w-0 h-px bg-dusty-cyan group-hover/link:w-4 transition-all duration-300"></div>
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-soft-white hover:text-muted-lavender transition-colors text-sm font-medium group/link">
              <ExternalLink size={18} />
              <span>Live Deployment</span>
              <div className="w-0 h-px bg-muted-lavender group-hover/link:w-4 transition-all duration-300"></div>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
