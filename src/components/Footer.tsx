import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 border-t border-glass-border glass mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h2 className="text-xl font-orbitron font-bold">A ZONE</h2>
          <p className="text-slate-400 text-sm">
            Precision Cutting • Laser Engraving • Custom Fabrication
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm uppercase tracking-widest text-accent-cyan">Quick Links</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/works" className="hover:text-white transition-colors">Works</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm uppercase tracking-widest text-accent-cyan">Social</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
            <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm uppercase tracking-widest text-accent-cyan">Contact</h3>
          <p className="text-sm text-slate-300">
            📧 contact@azonecnc.com<br />
            📞 +1 (234) 567-890<br />
            📍 Your Workshop Address
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-glass-border text-center text-xs text-slate-500 uppercase tracking-widest">
        © 2026 A ZONE CNC & LASER SOLUTIONS. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
