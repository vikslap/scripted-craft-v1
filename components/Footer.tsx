"use client";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand Info */}
        <div className="text-center md:text-left">
          <h3 className="text-brand-neutral text-2xl font-bold tracking-tight mb-2">
            Scripted<span className="text-brand-gold">Craft</span>
          </h3>
          <p className="text-brand-neutral/50 text-sm font-light max-w-xs">
            Custom Learning Solutions for Global Teams.
          </p>
        </div>

        {/* Quick Links */}

        {/*
        <div className="flex gap-8 text-sm font-medium text-brand-neutral/70">
         
          <a href="#portfolio" className="hover:text-brand-gold transition-colors">Projects</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Newsletter</a>
          <a href="https://palgorithm.io" target="_blank" className="hover:text-brand-gold transition-colors">Palgorithm.io</a>
        </div>
          */}

        {/* Copyright & Social */}
        <div className="text-center md:text-right">
          <div className="flex justify-center md:justify-end gap-4 mb-4">
             {/* Replace # with your actual LinkedIn/Social links */}
            <a href="#" className="text-brand-neutral/40 hover:text-brand-blue transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
          <p className="text-brand-neutral/30 text-xs">
            &copy; {currentYear} ScriptedCraft. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}