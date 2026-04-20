"use client";

import { Cog, Zap, Layers, Printer, PenTool, Box } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Services() {
  return (
    <main className="bg-background pt-24">
      {/* SECTION 1: SERVICES HERO */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000" 
            className="w-full h-full object-cover grayscale brightness-50"
            alt="CNC Cutting Background"
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-20 text-center space-y-4 px-6"
        >
          <h1 className="text-5xl md:text-8xl font-black font-orbitron uppercase leading-tight">
            Professional CNC & <br /><span className="text-accent-cyan neon-glow-cyan">Laser Services</span>
          </h1>
          <p className="text-slate-400 tracking-[0.3em] uppercase text-sm font-bold">Industrial Precision • Expert Fabrication</p>
        </motion.div>
      </section>

      {/* SECTION 2: CNC SERVICES */}
      <section className="section-full max-w-7xl mx-auto gap-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="relative"
          >
            <img src="https://images.unsplash.com/photo-1565034946487-077f78e480c5?q=80&w=1000" className="rounded-[3rem] border border-white/5 grayscale" alt="CNC Cutting" />
          </motion.div>
          <div className="space-y-6">
            <h2 className="text-4xl font-orbitron font-bold uppercase">CNC Cutting</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              High precision CNC machining for wood, acrylic, aluminium and composite materials. Applications include decorative panels, industrial parts and furniture elements.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              {["Wood", "Acrylic", "Aluminium", "Composite"].map((m) => (
                <span key={m} className="px-4 py-2 glass rounded-xl text-xs font-bold uppercase text-accent-cyan">{m}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CNC ENGRAVING */}
      <section className="section-full bg-background-secondary border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="text-4xl font-orbitron font-bold uppercase">CNC Engraving</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Detailed engraving for branding, artistic designs and signage fabrication. Bringing complex patterns and textures to various materials with absolute accuracy.
            </p>
            <ul className="space-y-3">
              {["Logo engraving", "Decorative panels", "Brand plates", "Furniture designs"].map((a, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full" /> {a}
                </li>
              ))}
            </ul>
          </div>
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="relative order-1 lg:order-2"
          >
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000" className="rounded-[3rem] border border-white/5 grayscale" alt="CNC Engraving" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: LASER SERVICES */}
      <section className="section-full max-w-7xl mx-auto gap-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="relative"
          >
            <img src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=1000" className="rounded-[3rem] border border-white/5" alt="Laser Cutting" />
          </motion.div>
          <div className="space-y-6">
            <h2 className="text-4xl font-orbitron font-bold uppercase">Laser Services</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Ultra-precise laser cutting and engraving for intricate detail on a wide range of materials.
            </p>
            <div className="grid grid-cols-2 gap-4">
               {["Metal", "Acrylic", "Wood", "Plastic"].map((m) => (
                  <div key={m} className="glass p-6 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-accent-cyan/10 transition-all">
                    <span className="font-bold uppercase text-xs tracking-widest">{m}</span>
                    <Zap className="text-accent-cyan" size={16} />
                  </div>
               ))}
            </div>
            <p className="text-sm text-slate-500 italic mt-4">Ultra clean edges and precise detail guaranteed.</p>
          </div>
        </div>
      </section>

      {/* SECTION 5: SIGNAGE SOLUTIONS */}
      <section className="py-40 bg-background-secondary border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center space-y-4">
             <h2 className="text-5xl font-orbitron font-black uppercase tracking-widest">Signage Solutions</h2>
             <p className="text-slate-500">Premium branding boards for every industrial and commercial need.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "Advertising Boards", img: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=600" },
              { t: "Name Boards", img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600" },
              { t: "Light Box Boards", img: "https://images.unsplash.com/photo-1517423568366-8b83523034fd?q=80&w=600" },
              { t: "Embossed Letters", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600" },
              { t: "Glass Boards", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600" },
              { t: "Sign Boards", img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=600" }
            ].map((s) => (
              <div key={s.t} className="group relative h-80 rounded-[2.5rem] overflow-hidden glass">
                 <img src={s.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt={s.t} />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-accent-cyan">
                       <Box />
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: PRINTING SERVICES */}
      <section className="section-full max-w-7xl mx-auto gap-20">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {[
              { t: "Banner Printing", icon: <Printer /> },
              { t: "Sticker Printing", icon: <Layers /> },
              { t: "Shop Graphics", icon: <PenTool /> },
              { t: "Event Banners", icon: <Cog /> }
            ].map((p) => (
               <div key={p.t} className="glass p-12 rounded-[2rem] text-center space-y-6 hover:bg-accent-cyan/10 transition-all cursor-default">
                  <div className="w-12 h-12 mx-auto flex items-center justify-center text-accent-cyan">{p.icon}</div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em]">{p.t}</h3>
               </div>
            ))}
         </div>
      </section>

      {/* SECTION 7: CUSTOM DESIGN */}
      <section className="py-60 bg-accent-cyan text-black text-center">
         <motion.div 
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="max-w-4xl mx-auto space-y-8"
         >
            <h2 className="text-6xl md:text-8xl font-black font-orbitron uppercase leading-none">Custom Design</h2>
            <p className="text-xl font-bold uppercase tracking-widest opacity-70">
               We also design custom CNC projects for architecture and branding installations.
            </p>
            <Link href="/contact" className="inline-block bg-black text-white px-12 py-6 rounded-full text-xl font-black uppercase tracking-widest hover:scale-105 transition-all">
               Start Your Project
            </Link>
         </motion.div>
      </section>
    </main>
  );
}
