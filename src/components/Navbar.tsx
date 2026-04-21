"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/works" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] px-6 lg:px-10 py-6 flex justify-between items-center glass border-b-white/5">
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <Image 
            src="/A ZONE LOGO4.png" 
            alt="A ZONE Logo" 
            width={180} 
            height={60} 
            className="h-8 md:h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Links */}
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

        <div className="flex items-center gap-6">
          <Link href="/contact" className="hidden md:block glass px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Request Quote
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 glass rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`text-2xl font-black font-orbitron uppercase tracking-widest ${
                      pathname === link.href ? "text-accent-cyan" : "text-white/60"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="mt-8"
              >
                <Link 
                  href="/contact" 
                  className="bg-white text-black px-10 py-4 rounded-full text-sm font-black uppercase tracking-widest"
                >
                  Request Quote
                </Link>
              </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent-cyan/10 blur-[100px] -z-10 rounded-full" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
