"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Users, Briefcase, Layers } from "lucide-react";

const categories = ["All", "CNC Projects", "Laser Projects", "Signage Projects", "Prints"];

const projects = [
  // Signage - Embossed
  { t: "Embossed Gold Signage", c: "Signage Projects", img: "/projects/embossed-signs/IMG_2430.jpg" },
  { t: "Black Lettering Board", c: "Signage Projects", img: "/projects/embossed-signs/IMG_2400.jpg" },
  { t: "Corporate Logo Wall", c: "Signage Projects", img: "/projects/embossed-signs/IMG_2411.jpg" },
  
  // Lightbox
  { t: "Outdoor LED Lightbox", c: "Signage Projects", img: "/projects/lightbox-boards/IMG_2445.jpg" },
  { t: "Commercial Light Box", c: "Signage Projects", img: "/projects/lightbox-boards/IMG_2447.jpg" },
  
  // Infinity Mirrors
  { t: "Infinity Mirror Sign", c: "Signage Projects", img: "/projects/infinity-mirrors/IMG_2435.jpg" },
  { t: "Custom Neon Layout", c: "Signage Projects", img: "/projects/infinity-mirrors/IMG_2437.jpg" },
  
  // Sticker Cut
  { t: "Vehicle Sticker Cut", c: "Signage Projects", img: "/projects/sticker-cut/IMG_2442.jpg" },
  
  // Banner Prints
  { t: "Industrial Banner Print", c: "Prints", img: "/projects/banner-prints/IMG_2439.jpg" },
  { t: "Exhibition Backdrop", c: "Prints", img: "/projects/banner-prints/IMG_2440.jpg" },
];

export default function Works() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter(p => p.c === filter);

  return (
    <main className="bg-background pt-24">
      {/* SECTION 1: PORTFOLIO HERO */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/projects/lightbox-boards/IMG_2449.jpg" 
            className="w-full h-full object-cover grayscale brightness-50"
            alt="Portfolio Background"
          />
          <div className="absolute inset-0 bg-black/70 z-10" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-20 text-center space-y-4 px-6"
        >
          <h1 className="text-5xl md:text-8xl font-black font-orbitron uppercase leading-tight">
            Our Work Speaks <br /><span className="text-accent-cyan neon-glow-cyan text-6xl">Through Precision</span>
          </h1>
        </motion.div>
      </section>

      {/* SECTION 2: FILTER GALLERY */}
      <section className="py-32 max-w-7xl mx-auto px-6 space-y-16">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                filter === cat 
                  ? "bg-accent-cyan text-black shadow-[0_0_20px_rgba(0,229,255,0.4)]" 
                  : "glass text-slate-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.t}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative h-[450px] rounded-[2.5rem] overflow-hidden glass border-white/5"
              >
                <img src={p.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt={p.t} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-10 flex flex-col justify-end">
                   <p className="text-accent-cyan text-[10px] font-bold uppercase tracking-[0.3em] mb-2">{p.c}</p>
                   <h3 className="text-2xl font-bold font-orbitron uppercase text-white">{p.t}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* SECTION 3: LARGE CASE STUDY */}
      <section className="section-full bg-background-secondary border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="px-4 py-1 glass rounded-full inline-block text-xs font-bold uppercase tracking-widest text-accent-cyan">Featured Case Study</div>
            <h2 className="text-5xl font-orbitron font-black uppercase">Gold Lettering <br /> Commercial Sign</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Precision-cut embossed gold sign board for a premium retail outlet. This project showcases our multi-layer fabrication technique, combining CNC routing with hand-finished assembly.
            </p>
            <div className="space-y-4">
               {[
                 { t: "Phase 1: Custom Vector Design", icon: <Star /> },
                 { t: "Phase 2: CNC Precise Routing", icon: <Star /> },
                 { t: "Phase 3: Embossed Finishing", icon: <Star /> }
               ].map((step) => (
                  <div key={step.t} className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-slate-300">
                     <div className="w-2 h-2 bg-accent-cyan rounded-full shadow-[0_0_10px_rgba(0,229,255,0.8)]" />
                     {step.t}
                  </div>
               ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <img src="/projects/embossed-signs/IMG_2432.jpg" className="rounded-3xl border border-white/5" alt="Embossed Detail" />
             <img src="/projects/embossed-signs/IMG_2406.jpg" className="rounded-3xl border border-white/5 mt-8" alt="Assembly" />
          </div>
        </div>
      </section>

      {/* SECTION 4: PROJECT STATISTICS */}
      <section className="py-40 max-w-7xl mx-auto px-6">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { val: "500+", t: "Completed Projects", icon: <Briefcase /> },
              { val: "200+", t: "Happy Clients", icon: <Users /> },
              { val: "15+", t: "Industries Served", icon: <Layers /> }
            ].map((s) => (
               <div key={s.t} className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto glass rounded-[2rem] flex items-center justify-center text-accent-cyan">{s.icon}</div>
                  <h3 className="text-6xl font-black font-orbitron text-white">{s.val}</h3>
                  <p className="text-xs font-bold uppercase tracking-[0.4em] text-slate-500">{s.t}</p>
               </div>
            ))}
         </div>
      </section>
    </main>
  );
}
