"use client";

import { Phone, Mail, MapPin, Upload, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main className="bg-background pt-24">
      {/* SECTION 1: CONTACT HERO */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516387933664-50d12fcd3c44?q=80&w=2000" 
            className="w-full h-full object-cover grayscale brightness-50"
            alt="Contact Hero"
          />
          <div className="absolute inset-0 bg-black/70 z-10" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-20 text-center space-y-4 px-6"
        >
          <h1 className="text-5xl md:text-8xl font-black font-orbitron uppercase leading-tight">
            Start Your <br /><span className="text-accent-cyan neon-glow-cyan">Project</span>
          </h1>
        </motion.div>
      </section>

      {/* SECTION 2 & 3: CONTACT INFO & QUOTE FORM */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* SECTION 2: CONTACT INFO */}
          <div className="space-y-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-orbitron font-bold uppercase tracking-widest">Get in Touch</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Ready to turn your design into a physical masterpiece? Contact our technical team for immediate assistance.
              </p>
            </div>

            <div className="space-y-10">
              {[
                { icon: <Phone />, t: "Phone", v: "+1 (234) 567-890" },
                { icon: <Mail />, t: "Email", v: "contact@azonecnc.com" },
                { icon: <MapPin />, t: "Location", v: "Industrial Zone, Suite 402, City, Country" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-8 group">
                   <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-accent-cyan group-hover:scale-110 transition-transform">
                      {item.icon}
                   </div>
                   <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500 mb-1">{item.t}</p>
                      <p className="text-xl font-bold text-white">{item.v}</p>
                   </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="h-64 w-full glass rounded-[2.5rem] overflow-hidden grayscale relative group">
               <div className="absolute inset-0 bg-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="w-full h-full flex items-center justify-center text-slate-500 font-bold uppercase tracking-widest text-xs">
                  Interactive Workshop Map
               </div>
            </div>
          </div>

          {/* SECTION 3: QUOTE FORM */}
          <div className="glass p-12 rounded-[3rem] space-y-10 border-white/5 relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-cyan/10 blur-[80px] rounded-full" />
            
            <div className="space-y-2">
               <h2 className="text-3xl font-orbitron font-bold uppercase">Request Quote</h2>
               <p className="text-slate-500 text-sm">Fill in the details for a precision-calculated estimate.</p>
            </div>

            <form className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2">Name</label>
                     <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent-cyan transition-all text-sm" placeholder="Full Name" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2">Email</label>
                     <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent-cyan transition-all text-sm" placeholder="email@example.com" />
                  </div>
               </div>

               <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2">Project Description</label>
                  <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent-cyan transition-all text-sm h-32 resize-none" placeholder="Describe your project, materials and dimensions..." />
               </div>

               <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2">Upload Design File</label>
                  <div className="border-2 border-dashed border-white/10 rounded-[2rem] p-10 text-center hover:border-accent-cyan transition-all cursor-pointer group">
                     <Upload className="mx-auto text-slate-500 group-hover:text-accent-cyan mb-4" size={32} />
                     <p className="text-xs font-bold uppercase tracking-widest text-slate-500">DXF, AI, or PDF preferred</p>
                  </div>
               </div>

               <button className="w-full py-6 bg-white text-black rounded-full font-black uppercase tracking-[0.2em] hover:bg-accent-cyan transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3">
                  Submit Project Request <Send size={18} />
               </button>
            </form>
          </div>

        </div>
      </section>

      {/* SECTION 4: CHATBOT (Mentioned in blueprint) */}
      {/* Handled by global Chatbot component */}
    </main>
  );
}
