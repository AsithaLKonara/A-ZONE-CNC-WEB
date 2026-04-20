"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { Cpu, Zap, Box, CheckCircle } from "lucide-react";

const Hero3D = dynamic(() => import("@/components/Hero3D"), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center p-8 overflow-hidden">
        <Hero3D />
        
        {/* Overlay Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-cyan/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-purple/10 rounded-full blur-[120px]" />

        <div className="z-10 text-center max-w-5xl space-y-8">
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter font-orbitron">
            <span className="block text-white opacity-90">A ZONE</span>
            <span className="block text-gradient neon-glow-cyan">CNC & LASER</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light tracking-[0.2em] uppercase font-space-grotesk">
            Precision Cutting • Laser Engraving • Custom Fabrication
          </p>

          <div className="flex flex-wrap gap-6 justify-center pt-8">
            <Link href="/works" className="glass px-10 py-5 rounded-full text-lg font-medium hover:bg-accent-cyan/10 transition-all hover:scale-105 neon-glow-cyan uppercase tracking-widest">
              View Works
            </Link>
            <Link href="/contact" className="bg-white text-black px-10 py-5 rounded-full text-lg font-bold hover:bg-slate-200 transition-all hover:scale-105 uppercase tracking-widest">
              Get Quote
            </Link>
          </div>
        </div>

        {/* Hero Stats */}
        <div className="absolute bottom-20 left-0 w-full px-8 hidden md:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center glass p-8 rounded-3xl border-white/5">
            {[
              { label: "Precision", value: "0.01mm" },
              { label: "Materials", value: "20+" },
              { label: "Delivery", value: "48Hrs" },
              { label: "Satisfaction", value: "100%" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-accent-cyan text-2xl font-orbitron font-bold">{stat.value}</p>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 px-6 max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-orbitron font-bold uppercase">Our Expertise</h2>
            <p className="text-slate-400 max-w-xl">From rapid prototyping to mass production, we provide high-tech solutions for every material.</p>
          </div>
          <Link href="/services" className="text-accent-cyan text-sm uppercase tracking-widest font-bold border-b border-accent-cyan pb-1">
            Explore All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Cpu />, title: "CNC Cutting", desc: "Precision routing for MDF, Acrylic, and Aluminium." },
            { icon: <Zap />, title: "Laser Engraving", desc: "Detailed engraving on wood, leather, and metal." },
            { icon: <Box />, title: "Custom Fabrication", desc: "Bespoke signs, panels, and industrial components." }
          ].map((item, i) => (
            <div key={i} className="glass p-10 rounded-[2.5rem] space-y-6 hover:border-accent-cyan/50 transition-all group">
              <div className="w-16 h-16 glass flex items-center justify-center rounded-2xl text-accent-cyan group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold font-orbitron">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-32 bg-white/5">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-orbitron font-bold uppercase">Featured Projects</h2>
            <p className="text-slate-400">A glimpse into our recent high-precision works.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative h-[500px] rounded-[3rem] overflow-hidden glass">
              <img src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Work 1" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-12 flex flex-col justify-end">
                <h3 className="text-3xl font-bold font-orbitron">Acrylic LED Signage</h3>
                <p className="text-accent-cyan uppercase tracking-widest text-xs mt-2 font-bold">Laser Engraving</p>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-8">
              <div className="group relative rounded-[2rem] overflow-hidden glass">
                <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Work 2" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-xl font-bold font-orbitron">MDF Wall Panels</h3>
                  <p className="text-accent-cyan uppercase tracking-widest text-[10px] mt-1 font-bold">CNC Cutting</p>
                </div>
              </div>
              <div className="group relative rounded-[2rem] overflow-hidden glass">
                <img src="https://images.unsplash.com/photo-1517423568366-8b83523034fd?q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Work 3" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-xl font-bold font-orbitron">Leather Branding</h3>
                  <p className="text-accent-cyan uppercase tracking-widest text-[10px] mt-1 font-bold">Laser Engraving</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Process */}
      <section className="py-32 px-6 max-w-7xl mx-auto text-center space-y-16">
        <h2 className="text-3xl font-orbitron font-bold uppercase tracking-[0.3em]">Quality Assured</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {[
            "Industrial Precision",
            "Premium Materials",
            "Expert Craftsmanship",
            "Fast Turnaround"
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle className="text-accent-cyan w-5 h-5" />
              <span className="text-sm uppercase tracking-widest text-slate-300 font-bold">{text}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
