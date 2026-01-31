"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Notes", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl"
      >
        <div className="bg-brand-charcoal/80 backdrop-blur-lg border border-white/10 shadow-2xl rounded-full px-6 py-3 md:px-8 md:py-4 flex justify-between items-center">
          {/* Logo */}
          <span className="text-xl font-bold text-brand-neutral tracking-tighter">
            Scripted<span className="text-brand-gold">Craft</span>
          </span>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-brand-neutral/80">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-brand-gold transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-brand-gold font-bold text-sm uppercase tracking-widest"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-charcoal flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-3xl font-bold text-brand-neutral hover:text-brand-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}