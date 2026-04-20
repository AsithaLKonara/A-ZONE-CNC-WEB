"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/works" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-10 py-6 flex justify-between items-center glass border-b-white/5">
      <Link href="/" className="text-xl font-orbitron font-black tracking-[0.4em] text-white">
        A ZONE<span className="text-accent-cyan">.</span>
      </Link>

      <div className="hidden md:flex gap-12">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`relative text-[10px] font-bold uppercase tracking-[0.3em] transition-colors hover:text-accent-cyan ${
              pathname === link.href ? "text-accent-cyan" : "text-slate-400"
            }`}
          >
            {link.name}
            {pathname === link.href && (
              <motion.div
                layoutId="nav-underline"
                className="absolute -bottom-2 left-0 w-full h-[1px] bg-accent-cyan"
              />
            )}
          </Link>
        ))}
      </div>

      <Link href="/contact" className="hidden md:block glass px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
        Request Quote
      </Link>
    </nav>
  );
}
