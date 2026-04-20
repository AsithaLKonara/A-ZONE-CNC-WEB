"use client";

import { Phone, Mail, MapPin, Clock, Upload } from "lucide-react";

export default function Contact() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* Contact Info */}
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-5xl font-orbitron font-bold text-gradient uppercase">Get in Touch</h1>
          <p className="text-slate-400 max-w-md">
            Ready to start your project? Contact us for a precise quote or visit our workshop.
          </p>
        </div>

        <div className="space-y-8">
          {[
            { icon: <Phone />, title: "Phone", info: "+1 (234) 567-890" },
            { icon: <Mail />, title: "Email", info: "contact@azonecnc.com" },
            { icon: <MapPin />, title: "Address", info: "Your Workshop Address, City, Country" },
            { icon: <Clock />, title: "Hours", info: "Mon - Sat: 9:00 AM - 6:00 PM" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-6 group">
              <div className="w-12 h-12 flex items-center justify-center glass rounded-xl text-accent-cyan group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-slate-500">{item.title}</h3>
                <p className="text-white font-medium">{item.info}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="h-64 w-full glass rounded-3xl overflow-hidden grayscale">
          <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500 italic">
            Interactive Map Integration
          </div>
        </div>
      </div>

      {/* Quote Form */}
      <div className="glass p-8 md:p-12 rounded-[2rem] space-y-8 neon-glow-purple">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-orbitron font-bold">Request a Quote</h2>
          <p className="text-slate-400 text-sm">Send us your project details for an estimate.</p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-slate-400">Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-cyan transition-colors" placeholder="Full Name" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-slate-400">Email</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-cyan transition-colors" placeholder="email@example.com" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-slate-400">Material</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-cyan transition-colors appearance-none">
                <option>Acrylic</option>
                <option>MDF</option>
                <option>Aluminium</option>
                <option>Wood</option>
                <option>Leather</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-slate-400">Dimensions</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-cyan transition-colors" placeholder="LxWxH (mm)" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-slate-400">Upload Design File</label>
            <div className="border-2 border-dashed border-white/10 rounded-2xl p-8 text-center hover:border-accent-purple transition-all cursor-pointer group">
              <Upload className="w-8 h-8 mx-auto text-slate-500 group-hover:text-accent-purple mb-2" />
              <p className="text-xs text-slate-500 uppercase tracking-widest">DXF, PDF, or JPG preferred</p>
            </div>
          </div>

          <button className="w-full py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:bg-accent-cyan transition-all hover:scale-[1.02] active:scale-95">
            Submit Quote Request
          </button>
        </form>
      </div>
    </main>
  );
}
