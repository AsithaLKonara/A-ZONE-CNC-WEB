"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <main className="bg-background pt-24">
      {/* SECTION 1: CONTACT HERO */}
      <section className="section-full max-w-7xl mx-auto gap-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full items-center">
          <div className="space-y-12">
            <h1 className="text-5xl md:text-8xl font-black font-orbitron uppercase leading-tight">
              Start Your <br /><span className="text-accent-cyan neon-glow-cyan">Project.</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md italic">
              &quot;We turn your ideas into reality with high-quality craftsmanship.&quot;
            </p>
            
            <div className="space-y-8 pt-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-accent-cyan group-hover:bg-accent-cyan group-hover:text-black transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Call Us</p>
                  <p className="text-xl font-bold font-orbitron text-white">076 852 1562</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-accent-cyan group-hover:bg-accent-cyan group-hover:text-black transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Visit Us</p>
                  <p className="text-xl font-bold font-orbitron text-white">Dehiattakandiya, Sri Lanka</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                {[
                  { icon: <Facebook />, href: "https://www.facebook.com/share/1FwV1gnmPX/?mibextid=wwXIfr" },
                  { icon: <Instagram />, href: "https://www.instagram.com/a_zone_cnc?igsh=Zm5veWlnNHBidnlw&utm_source=qr" },
                  { icon: <MessageCircle />, href: "https://wa.me/message/QID5X7HY6CERJ1" }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-accent-cyan hover:border-accent-cyan transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass p-12 rounded-[3.5rem] border-white/5 space-y-8"
          >
            <h2 className="text-3xl font-bold font-orbitron uppercase tracking-widest">Get a Quote</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-accent-cyan outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-accent-cyan outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Service Type</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-accent-cyan outline-none transition-all appearance-none">
                  <option>CNC Cutting</option>
                  <option>Laser Engraving</option>
                  <option>Sign Board Fabrication</option>
                  <option>Custom Design</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-accent-cyan outline-none transition-all"></textarea>
              </div>
              <button className="w-full py-6 bg-white text-black font-black uppercase tracking-widest rounded-2xl hover:bg-accent-cyan transition-all flex items-center justify-center gap-4">
                Submit Request <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
