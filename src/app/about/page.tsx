"use client";

import { motion } from "framer-motion";
import { Target, Eye, Cpu, Zap, Cog, Box, Layers } from "lucide-react";

export default function About() {
  return (
    <main className="bg-background pt-24">
      {/* SECTION 1: COMPANY STORY */}
      <section className="section-full max-w-7xl mx-auto gap-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-8xl font-black font-orbitron uppercase leading-tight">
              Engineering <br /><span className="text-accent-cyan neon-glow-cyan">Precision.</span>
            </h1>
            <h2 className="text-2xl font-bold uppercase tracking-widest text-white/80">Creating Impact.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              A ZONE CNC & Laser Solutions delivers advanced fabrication services combining modern CNC technology with creative design. We bridge the gap between digital vision and physical reality, delivering industrial-grade quality with absolute accuracy.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000" className="rounded-[3rem] border border-white/5 grayscale" alt="Engineering" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: VISION */}
      <section className="py-40 bg-background-secondary border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover grayscale"
          >
            <source src="/videos/cnc-routing.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12 relative z-10">
          <div className="w-20 h-20 mx-auto glass rounded-full flex items-center justify-center text-accent-cyan">
             <Eye size={40} />
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-orbitron uppercase leading-tight">Our Vision</h2>
          <p className="text-2xl md:text-3xl font-light text-slate-300 leading-relaxed italic">
            &quot;To become a leading CNC fabrication company delivering innovative and reliable manufacturing solutions across all industries.&quot;
          </p>
          <div className="w-24 h-1 bg-accent-cyan mx-auto rounded-full" />
        </div>
      </section>

      {/* SECTION 3: CAPABILITIES */}
      <section className="py-40 max-w-7xl mx-auto px-6 space-y-24">
        <h2 className="text-4xl font-orbitron font-bold uppercase text-center tracking-widest">Industrial Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { t: "CNC Cutting", icon: <Cog /> },
            { t: "Laser Cutting", icon: <Zap /> },
            { t: "Laser Engraving", icon: <Cpu /> },
            { t: "Custom Signage", icon: <Box /> },
            { t: "Industrial Fabrication", icon: <Layers /> }
          ].map((c) => (
             <motion.div 
                key={c.t}
                whileHover={{ y: -10, borderColor: '#00e5ff' }}
                className="glass p-10 rounded-[2.5rem] border-white/5 text-center space-y-6 transition-all group"
             >
                <div className="w-12 h-12 mx-auto flex items-center justify-center text-accent-cyan group-hover:scale-110 transition-transform">
                   {c.icon}
                </div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">{c.t}</h3>
             </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4: EQUIPMENT */}
      <section className="py-40 bg-background-secondary border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
             <h2 className="text-5xl font-orbitron font-black uppercase">Advanced <br /> Equipment</h2>
             <p className="text-slate-500 uppercase tracking-widest text-xs font-bold pb-2">The core of our precision</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="glass p-8 rounded-[3rem] space-y-6 group">
                <div className="h-80 overflow-hidden rounded-[2rem] border border-white/5">
                   <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Machine 1" />
                </div>
                <div className="space-y-2">
                   <h3 className="text-xl font-bold font-orbitron uppercase">Multi-Axis CNC Milling</h3>
                   <p className="text-sm text-slate-500">High-torque industrial routing for large scale sheets.</p>
                </div>
             </div>
             <div className="glass p-8 rounded-[3rem] space-y-6 group">
                <div className="h-80 overflow-hidden rounded-[2rem] border border-white/5">
                   <img src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=600" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Machine 2" />
                </div>
                <div className="space-y-2">
                   <h3 className="text-xl font-bold font-orbitron uppercase">Precision Fiber Laser</h3>
                   <p className="text-sm text-slate-500">Sub-micron accuracy for engraving and metal marking.</p>
                </div>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
