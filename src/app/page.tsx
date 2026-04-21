"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { Cpu, Zap, Box, ArrowRight, Cog, Layers, Printer, PenTool, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero3D = dynamic(() => import("@/components/Hero3D"), { ssr: false });

export default function Home() {
  const scrollRef = useRef(null);
  
  return (
    <main className="bg-background overflow-x-hidden">
      
      {/* SECTION 1: HERO CINEMATIC INTRO */}
      <section className="relative h-screen flex items-center px-6 lg:px-10 overflow-hidden">
        {/* Background Video Simulation */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover grayscale opacity-60"
          >
            <source src="/videos/hero-cnc.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent z-20" />
        </div>

        <div className="relative z-30 max-w-5xl space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-4"
          >
            <span className="inline-block px-4 py-1 glass rounded-full text-xs font-bold uppercase tracking-[0.3em] text-accent-cyan">
              A ZONE CNC & Laser Solutions
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black font-orbitron leading-tight">
              Precision CNC & <br />
              <span className="text-accent-cyan neon-glow-cyan">Laser Manufacturing</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-xl font-light leading-relaxed">
              Your trusted partner for CNC cutting, laser engraving, and custom sign boards. We turn your ideas into reality with high-quality craftsmanship.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 md:gap-6"
          >
            <Link href="/works" className="flex-1 md:flex-none text-center px-8 py-4 glass hover:bg-accent-cyan/10 transition-all rounded-full font-bold uppercase tracking-widest text-[10px] md:text-sm border-white/20">
              View Our Work
            </Link>
            <Link href="/contact" className="flex-1 md:flex-none text-center px-8 py-4 bg-white text-black hover:bg-accent-cyan transition-all rounded-full font-bold uppercase tracking-widest text-[10px] md:text-sm shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Get Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: TECHNOLOGY SHOWCASE */}
      <section className="section-full bg-background-secondary border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-accent-cyan/20 blur-[120px] rounded-full" />
            <img 
              src="/projects/embossed-signs/IMG_2400.jpg" 
              className="relative rounded-3xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
              alt="Next Gen CNC"
            />
          </motion.div>

          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold font-orbitron uppercase">Next Generation <br /><span className="text-accent-cyan">CNC Precision</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Our advanced CNC technology delivers micron level accuracy for cutting, engraving and complex fabrication projects. Used by designers, industries and businesses to produce high quality custom parts.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "Ultra precise cutting", icon: <CheckCircle2 className="text-accent-cyan" /> },
                { title: "Clean edge finishing", icon: <CheckCircle2 className="text-accent-cyan" /> },
                { title: "High speed production", icon: <CheckCircle2 className="text-accent-cyan" /> },
                { title: "Multi-material support", icon: <CheckCircle2 className="text-accent-cyan" /> }
              ].map((f) => (
                <div key={f.title} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-300">
                  {f.icon} {f.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: LASER TECHNOLOGY */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover grayscale brightness-50"
          >
            <source src="/videos/laser-process.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative z-20 text-center space-y-6 px-6"
        >
          <h2 className="text-4xl md:text-8xl font-black font-orbitron uppercase">Laser Accuracy. <br /><span className="text-accent-cyan neon-glow-cyan">Perfect Detail.</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
            Our laser systems create ultra-fine engraving and precise cutting for acrylic, wood, metal and signage materials.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-8">
            {["Custom signage", "Logo engraving", "Architectural panels", "Decorative designs"].map((t) => (
              <span key={t} className="text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-accent-cyan border-b border-accent-cyan/30 pb-2">{t}</span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SECTION 4: SERVICES PREVIEW */}
      <section className="section-full">
        <div className="max-w-7xl mx-auto w-full space-y-16">
          <h2 className="text-4xl font-orbitron font-bold uppercase text-center tracking-widest">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "CNC Cutting", icon: <Cog /> },
              { name: "CNC Engraving", icon: <PenTool /> },
              { name: "Laser Cutting", icon: <Zap /> },
              { name: "Laser Engraving", icon: <Layers /> },
              { name: "Sign Boards", icon: <Box /> },
              { name: "Custom Fabrication", icon: <Cpu /> }
            ].map((s) => (
              <motion.div
                key={s.name}
                whileHover={{ scale: 1.02, borderColor: '#00e5ff' }}
                className="glass p-8 md:p-12 rounded-[2rem] border-white/5 transition-all group flex flex-col items-center text-center space-y-6"
              >
                <div className="w-16 h-16 glass flex items-center justify-center rounded-2xl text-accent-cyan group-hover:bg-accent-cyan/10 transition-all">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold font-orbitron uppercase">{s.name}</h3>
                <div className="w-10 h-1 bg-white/10 rounded-full group-hover:w-20 group-hover:bg-accent-cyan transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: LARGE PRODUCT SHOWCASE */}
      <section className="section-full bg-background-secondary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-7xl font-black font-orbitron uppercase leading-tight">Designed <br /> for Impact</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              From commercial signage to architectural decorative panels, we turn your unique ideas into reality with high-quality industrial craftsmanship.
            </p>
            <div className="pt-6">
               <Link href="/works" className="text-accent-cyan font-bold uppercase tracking-widest flex items-center gap-3 group">
                  See what we build <ArrowRight className="group-hover:translate-x-2 transition-transform" />
               </Link>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <img 
              src="/projects/lightbox-boards/IMG_2445.jpg" 
              className="rounded-[3rem] border border-white/5 shadow-2xl"
              alt="Laser Cut Product"
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: PROCESS */}
      <section className="section-full border-t border-white/5">
        <div className="max-w-7xl mx-auto w-full space-y-24">
          <h2 className="text-4xl font-orbitron font-bold uppercase text-center tracking-widest">The Fabrication Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { num: "01", title: "Design Consultation", icon: <Layers /> },
              { num: "02", title: "Material Selection", icon: <Box /> },
              { num: "03", title: "CNC / Laser Production", icon: <Cog /> },
              { num: "04", title: "Finishing & Inspection", icon: <CheckCircle2 /> },
              { num: "05", title: "Installation or Delivery", icon: <ArrowRight /> }
            ].map((step, i) => (
              <div key={step.title} className="relative space-y-6 text-center">
                <div className="w-16 h-16 glass mx-auto flex items-center justify-center rounded-2xl text-accent-cyan font-orbitron font-bold">
                  {step.num}
                </div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300">{step.title}</h3>
                {i < 4 && <div className="hidden md:block absolute top-8 left-[70%] w-full h-[1px] bg-gradient-to-r from-accent-cyan/50 to-transparent" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: FEATURED PROJECTS (Scrolling Gallery) */}
      <section className="py-40 space-y-16">
        <div className="px-10 flex justify-between items-end">
          <h2 className="text-4xl font-orbitron font-bold uppercase">Work Speaks <br /><span className="text-slate-500 italic">Through Precision</span></h2>
          <Link href="/works" className="text-xs font-bold uppercase tracking-widest border-b border-white pb-1">View Portfolio</Link>
        </div>
        <div className="flex gap-6 md:gap-8 overflow-x-auto px-6 md:px-10 pb-10 scrollbar-hide">
          {[
            { t: "Embossed Gold Logo", img: "/projects/embossed-signs/IMG_2430.jpg" },
            { t: "Custom Neon Branding", img: "/projects/neon-boards/IMG_0268.jpg" },
            { t: "Laser Photo Art", img: "/projects/laser-photos/IMG_0664.jpg" },
            { t: "Infinity Mirror Sign", img: "/projects/infinity-mirrors/IMG_2435.jpg" },
            { t: "Glass Backlight Board", img: "/projects/glass-stickers/IMG_1191.jpg" },
            { t: "Outdoor LED Lightbox", img: "/projects/lightbox-boards/IMG_2445.jpg" }
          ].map((p) => (
            <motion.div 
              key={p.t} 
              whileHover={{ y: -10 }}
              className="flex-shrink-0 w-[280px] md:w-[400px] group cursor-pointer"
            >
              <div className="relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden">
                <img src={p.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt={p.t} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 md:p-10 flex flex-col justify-end">
                   <h3 className="text-xl md:text-2xl font-bold font-orbitron uppercase text-white">{p.t}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 8: FINAL CALL TO ACTION */}
      <section className="section-full bg-background-secondary text-center">
        <div className="absolute inset-0 opacity-20">
           <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover grayscale"
          >
            <source src="/videos/cnc-details.mp4" type="video/mp4" />
          </video>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative z-10 max-w-4xl mx-auto space-y-12"
        >
          <h2 className="text-4xl md:text-8xl font-black font-orbitron uppercase leading-none">Ready to build <br /> something <span className="text-accent-cyan italic">unique?</span></h2>
          <Link href="/contact" className="inline-block bg-white text-black px-8 py-4 md:px-12 md:py-6 rounded-full text-lg md:text-xl font-black uppercase tracking-widest hover:bg-accent-cyan transition-all hover:scale-105">
            Request Custom Quote
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
