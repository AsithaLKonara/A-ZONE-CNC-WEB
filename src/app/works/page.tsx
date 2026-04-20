"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Users, Briefcase, Layers } from "lucide-react";

const categories = ["All", "CNC Projects", "Laser Projects", "Signage Projects", "Custom Designs"];

const projects = [
  { t: "Laser Cut Metal Logo", c: "Laser Projects", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800" },
  { t: "Acrylic LED Board", c: "Signage Projects", img: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=800" },
  { t: "CNC Carved Wood Panel", c: "CNC Projects", img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=800" },
  { t: "Glass Name Board", c: "Custom Designs", img: "https://images.unsplash.com/photo-1517423568366-8b83523034fd?q=80&w=800" },
  { t: "Embossed Sign Letters", c: "Signage Projects", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800" },
  { t: "Architecture Pattern", c: "Custom Designs", img: "https://images.unsplash.com/photo-1565034946487-077f78e480c5?q=80&w=800" }
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
            src="https://images.unsplash.com/photo-1504198453319-5ce911bafcde?q=80&w=2000" 
            className="w-full h-full object-cover grayscale brightness-50"
            alt="Laser Sparks Background"
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
            <h2 className="text-5xl font-orbitron font-black uppercase">LED Acrylic <br /> Business Sign</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Complete design-to-installation showcase for a high-end retail brand. We combined 12mm laser-cut acrylic with custom CNC-routed backing and high-intensity LED integration.
            </p>
            <div className="space-y-4">
               {[
                 { t: "Phase 1: Custom Vector Design", icon: <Star /> },
                 { t: "Phase 2: Precision Laser Cutting", icon: <Star /> },
                 { t: "Phase 3: Expert Installation", icon: <Star /> }
               ].map((step) => (
                  <div key={step.t} className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-slate-300">
                     <div className="w-2 h-2 bg-accent-cyan rounded-full shadow-[0_0_10px_rgba(0,229,255,0.8)]" />
                     {step.t}
                  </div>
               ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <img src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=600" className="rounded-3xl border border-white/5" alt="Design" />
             <img src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=600" className="rounded-3xl border border-white/5 mt-8" alt="Cutting" />
          </div>
        </div>
      </section>

      {/* SECTION 4: PROJECT STATISTICS */}
      <section className="py-40 max-w-7xl mx-auto px-6">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { val: "100+", t: "Completed Projects", icon: <Briefcase /> },
              { val: "50+", t: "Happy Clients", icon: <Users /> },
              { val: "10+", t: "Industries Served", icon: <Layers /> }
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
