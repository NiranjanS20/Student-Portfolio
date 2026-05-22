import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Github, GitCommit, Users, Star } from 'lucide-react';
import { PERSONAL_INFO } from '../../data';

interface GithubMetrics {
  followers: number;
  public_repos: number;
  login: string;
}

export function GitHubSection() {
  const [metrics, setMetrics] = useState<GithubMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const username = PERSONAL_INFO.github.split('/').pop() || 'NiranjanS20';

  useEffect(() => {
    fetch(`https://api.github.com/users/NiranjanS20`)
      .then(res => res.json())
      .then(data => {
        if (data && !data.message) {
          setMetrics(data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [username]);

  return (
    <section id="github" className="py-24 px-6 lg:px-12 xl:px-24 mx-auto max-w-7xl relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-panel p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row gap-12"
      >
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-dusty-cyan animate-pulse"></div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-cool-gray">Intelligent Activity Console</h3>
          </div>

          <div>
            <h2 className="font-display text-4xl md:text-5xl text-soft-white font-bold mb-4 uppercase leading-tight">Open Source<br />& Engineering</h2>
            <p className="text-cool-gray text-sm mb-8 max-w-sm leading-relaxed">
              A transparent view into my daily commits, active repositories, and continuous integration.
            </p>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-soft-white text-deep-slate rounded-full text-xs font-bold uppercase tracking-widest hover:bg-dusty-cyan transition-colors">
              <Github size={16} /> @NiranjanS20
            </a>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-6 w-full">
          {/* GitHub Readme Stats Image - Cinematic Dark Theme */}
          <div className="rounded-xl overflow-hidden glass-panel">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=NiranjanS20&show_icons=true&theme=dark&hide_border=true&bg_color=1E293B&title_color=7c9baa&text_color=94a3b8&icon_color=8b84a8`}
              alt="GitHub Stats"
              className="w-full object-cover filter brightness-90 saturate-50 hover:saturate-100 hover:brightness-100 transition-all duration-500"
              loading="lazy"
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="space-y-1">
              <p className="text-xs font-bold text-soft-white">Continual Integration</p>
              <p className="text-[10px] text-cool-gray">Consistent developer craftsmanship</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-xs font-bold text-dusty-cyan">{metrics ? metrics.followers : '--'}</p>
                <p className="text-[9px] text-cool-gray uppercase mt-1">Followers</p>
              </div>
              <div className="text-center">
                <p className="text-xs font-bold text-muted-lavender">{metrics ? metrics.public_repos : '--'}</p>
                <p className="text-[9px] text-cool-gray uppercase mt-1">Repos</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
