"use client";
import { motion } from "framer-motion";

export default function Hero() {
  const handleExplore = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        window.dispatchEvent(new Event("openExplainerVideos"));
      }, 400);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-brand-charcoal px-4 py-12 md:py-20 relative overflow-hidden text-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-brand-blue/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none will-change-transform" />

      <div className="max-w-4xl z-10 flex flex-col items-center">
        {/* Brand Name - Scaled for mobile */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-brand-neutral text-4xl md:text-7xl font-extrabold mb-3 md:mb-4 tracking-tight"
        >
          Scripted<span className="text-brand-gold">Craft</span>
        </motion.h1>
        
        {/* Subtitle - Scaled for mobile */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-brand-neutral/80 text-lg md:text-2xl mb-8 md:mb-12 font-light px-2"
        >
          Custom Learning Solutions for Global Teams.
        </motion.p>

        {/* --- CENTERED PROFILE & INTRO --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="max-w-xl mx-auto mb-8 md:mb-12 flex flex-col items-center"
        >
          {/* Profile Picture - Smaller on mobile (w-20), standard on desktop (md:w-28) */}
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-brand-gold overflow-hidden shadow-2xl mb-6 ring-4 ring-white/5">
            <img 
              src="/images/Vik_Profile.png" 
              alt="Vik - Instructional Designer" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://ui-avatars.com/api/?name=Vik&background=0D1B2A&color=E2E8F0";
              }}
            />
          </div>

          {/* Intro Text Block - Optimized padding and text size for mobile */}
          <div className="p-5 md:p-8 border-t border-b border-white/5 bg-white/[0.02] rounded-3xl">
            <p className="text-brand-neutral/90 leading-relaxed italic text-sm md:text-lg">
              "Hi, I'm Vik. I'm an India-based Instructional Designer & e-Learning Developer with over a decade of experience in the L&D space. <br className="hidden md:block"/><br className="hidden md:block"/>
              I started ScriptedCraft to blend <span className="text-brand-gold font-semibold">instructional theory</span> with <span className="text-brand-gold font-semibold">real world scenarios</span> and <span className="text-brand-gold font-semibold">storytelling</span> to design learning experiences that empower learners to <span className="text-brand-gold font-semibold">solve actual problems</span> on the job."
            </p>
          </div>
        </motion.div>
        
        {/* Main Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <motion.button 
            onClick={handleExplore}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-blue text-white px-10 py-3.5 md:px-12 md:py-4 rounded-full font-bold shadow-lg shadow-brand-blue/30 transition-all hover:shadow-brand-blue/50"
          >
            View Portfolio
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}