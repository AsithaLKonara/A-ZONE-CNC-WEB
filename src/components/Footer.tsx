import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-16 md:py-24 px-6 md:px-10 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
        <div className="space-y-6 col-span-1 md:col-span-1">
          <Image 
            src="/A ZONE LOGO4.png" 
            alt="A ZONE Logo" 
            width={150} 
            height={50} 
            className="h-8 w-auto mb-6"
          />
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-loose max-w-xs">
            Your trusted partner for CNC cutting, laser engraving, and custom sign boards. We turn your ideas into reality with high-quality craftsmanship.
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
          <h3 className="text-[10px] uppercase tracking-[0.4em] text-accent-cyan font-bold">Connect</h3>
          <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-400">
            <li><a href="https://www.facebook.com/share/1FwV1gnmPX/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
            <li><a href="https://www.instagram.com/a_zone_cnc?igsh=Zm5veWlnNHBidnlw&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
            <li><a href="https://www.tiktok.com/@a.zone.cnc?_r=1&_t=ZS-95hoYFCNAPo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TikTok</a></li>
            <li><a href="https://wa.me/message/QID5X7HY6CERJ1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-accent-cyan">WhatsApp</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-[10px] uppercase tracking-[0.4em] text-accent-cyan font-bold">Location</h3>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 leading-relaxed">
            📧 contact@azonecnc.com<br />
            📞 076 852 1562<br />
            📍 Dehiattakandiya,<br />
            Sri Lanka
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-12 md:pt-16 mt-12 md:mt-16 border-t border-white/5 text-center text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em] md:tracking-[0.5em] px-4">
        © 2026 A ZONE CNC & LASER SOLUTIONS. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
