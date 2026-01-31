"use client";
import { motion } from "framer-motion";

export default function PreLoader() {
  return (
    <motion.div 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-charcoal"
    >
      <div className="text-center">
        {/* Animated Brand Mark */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="w-16 h-16 border-4 border-brand-gold border-t-brand-blue rounded-full mx-auto mb-4"
        />
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-brand-neutral font-bold tracking-widest uppercase text-xs"
        >
          Crafting the Script...
        </motion.h2>
      </div>
    </motion.div>
  );
}