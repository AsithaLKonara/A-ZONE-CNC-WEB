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
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover grayscale brightness-50"
          >
            <source src="/videos/hero-cnc.mp4" type="video/mp4" />
          </video>
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
            <img src="/projects/embossed-signs/IMG_2432.jpg" className="rounded-[3rem] border border-white/5 grayscale" alt="CNC Cutting" />
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
            <img src="/projects/embossed-signs/IMG_2404.jpg" className="rounded-[3rem] border border-white/5 grayscale" alt="CNC Engraving" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: LASER & PHOTO ENGRAVING */}
      <section className="section-full max-w-7xl mx-auto gap-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="relative rounded-[3rem] overflow-hidden border border-white/5"
          >
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            >
              <source src="/videos/laser-process.mp4" type="video/mp4" />
            </video>
          </motion.div>
          <div className="space-y-6">
            <h2 className="text-4xl font-orbitron font-bold uppercase">Laser Photo Engraving</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Ultra-precise laser cutting and photo engraving for intricate detail on wood, acrylic, glass and more. We transform your photos into permanent industrial masterpieces with absolute clarity.
            </p>
            <div className="grid grid-cols-2 gap-4">
               {["Portrait Engraving", "Industrial Marking", "Acrylic Cutting", "Wooden Art"].map((m) => (
                  <div key={m} className="glass p-6 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-accent-cyan/10 transition-all">
                    <span className="font-bold uppercase text-xs tracking-widest">{m}</span>
                    <Zap className="text-accent-cyan" size={16} />
                  </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: NEON BRANDING */}
      <section className="py-40 bg-background-secondary border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-5xl font-orbitron font-black uppercase">Neon <br /> Branding</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Vibrant neon signage that captures attention. From custom indoor decor to commercial brand glows, our neon solutions are built for maximum impact and longevity.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Custom Text", "Logo Glow", "RGB Options", "Durable Build"].map((m) => (
                <span key={m} className="px-6 py-3 glass rounded-2xl text-[10px] font-bold uppercase tracking-widest text-accent-cyan border-accent-cyan/20 border">{m}</span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
             <img src="/projects/neon-boards/IMG_0268.jpg" className="rounded-[2.5rem] border border-white/5 grayscale hover:grayscale-0 transition-all" alt="Neon Board" />
             <img src="/projects/neon-boards/IMG_0269.jpg" className="rounded-[2.5rem] border border-white/5 grayscale hover:grayscale-0 transition-all mt-12" alt="Neon Logo" />
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
              { t: "Embossed Signs", img: "/projects/embossed-signs/IMG_2430.jpg" },
              { t: "Outdoor Lightbox", img: "/projects/lightbox-boards/IMG_2446.jpg" },
              { t: "Infinity Mirrors", img: "/projects/infinity-mirrors/IMG_2436.jpg" },
              { t: "Sticker Cutting", img: "/projects/sticker-cut/IMG_2443.jpg" },
              { t: "Glass Stickers", img: "/projects/glass-stickers/IMG_1191.jpg" },
              { t: "Neon Branding", img: "/projects/neon-boards/IMG_0268.jpg" },
              { t: "Business Signage", img: "/projects/embossed-signs/IMG_2400.jpg" },
              { t: "Display Solutions", img: "/projects/lightbox-boards/IMG_2447.jpg" },
              { t: "Laser Photos", img: "/projects/laser-photos/IMG_0664.jpg" }
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
