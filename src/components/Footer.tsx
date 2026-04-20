import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-24 px-10 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="space-y-6">
          <h2 className="text-xl font-orbitron font-black tracking-widest">A ZONE</h2>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest leading-loose">
            Precision Cutting <br /> 
            Laser Engraving <br /> 
            Custom Fabrication
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-[10px] uppercase tracking-[0.4em] text-accent-cyan font-bold">Navigation</h3>
          <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-400">
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/works" className="hover:text-white transition-colors">Works</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-[10px] uppercase tracking-[0.4em] text-accent-cyan font-bold">Social</h3>
          <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-400">
            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-[10px] uppercase tracking-[0.4em] text-accent-cyan font-bold">Contact</h3>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 leading-relaxed">
            📧 contact@azonecnc.com<br />
            📞 +1 (234) 567-890<br />
            📍 Industrial Zone, Suite 402
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-white/5 text-center text-[10px] text-slate-600 font-bold uppercase tracking-[0.5em]">
        © 2026 A ZONE CNC & LASER SOLUTIONS. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
