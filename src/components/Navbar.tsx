"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Works", href: "/works" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center glass">
      <Link href="/" className="text-2xl font-orbitron font-bold tracking-widest text-white">
        A ZONE<span className="text-accent-cyan">.</span>
      </Link>

      <div className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`relative text-sm uppercase tracking-widest transition-colors hover:text-accent-cyan ${
              pathname === link.href ? "text-accent-cyan" : "text-slate-300"
            }`}
          >
            {link.name}
            {pathname === link.href && (
              <motion.div
                layoutId="nav-underline"
                className="absolute -bottom-1 left-0 w-full h-[1px] bg-accent-cyan"
              />
            )}
          </Link>
        ))}
      </div>

      <button className="hidden md:block glass px-4 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-accent-cyan/10 transition-all">
        Get Quote
      </button>

      {/* Mobile Toggle (Simplified for now) */}
      <div className="md:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>
    </nav>
  );
}
