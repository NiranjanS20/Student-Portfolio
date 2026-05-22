import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function BackgroundLayers() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 2000], [0, -400]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -200]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Base Matte Layer via body class in index.css */}

      {/* Layer 2: Ambient Gradients matching Target HTML */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[-10%] right-[-10%] w-[50vh] max-w-[500px] aspect-square rounded-full bg-dusty-cyan opacity-10 blur-[120px]"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-[-10%] left-[-10%] w-[60vh] max-w-[600px] aspect-square rounded-full bg-muted-lavender opacity-10 blur-[120px]"
      />

      {/* Layer 3: Aurora Motion (Simulated with slow keyframes) */}
      <div className="absolute inset-0 opacity-20 hidden md:block">
        <div className="absolute top-1/4 left-1/3 w-[40rem] h-[40rem] bg-gradient-to-r from-dusty-cyan/20 to-transparent rounded-full blur-[120px] animate-pulse-slow" style={{ animationDuration: '15s'}} />
        <div className="absolute bottom-1/4 right-1/3 w-[30rem] h-[30rem] bg-gradient-to-l from-muted-lavender/20 to-transparent rounded-full blur-[100px] animate-pulse-slow" style={{ animationDuration: '20s', animationDelay: '5s'}} />
      </div>
    </div>
  );
}
