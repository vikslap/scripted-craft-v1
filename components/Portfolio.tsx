"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const portfolioData = {
  "Explainer Videos": [
    { title: "FMCG Market Analysis", desc: "A motion graphic dive into Indian distribution.", link: "#" },
    { title: "Product Launch", desc: "SaaS explainer for a tech startup.", link: "#" },
    { title: "Brand Story", desc: "Kinetic typography for a local NGO.", link: "#" },
    { title: "Process Flow", desc: "Visualizing complex supply chains.", link: "#" },
  ],
  "Rise 360 Courses": [
    { title: "Counterfeit Detection", desc: "Interactive ID guide for retail staff.", link: "#" },
    { title: "Onboarding Path", desc: "A modular journey for new hires.", link: "#" },
    { title: "Compliance 101", desc: "Mandatory corporate training module.", link: "#" },
  ],
  "Storyline 360 Courses": [
    { title: "Advanced Triggers", desc: "Gamified learning for compliance.", link: "#" },
    { title: "Variable Logic", desc: "Complex scenario-based assessment.", link: "#" },
    { title: "Branching Scenarios", desc: "Soft-skills training simulation.", link: "#" },
  ]
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<string>("Explainer Videos");
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 1. Sync with Hero Button: If Hero sends an event, switch to that tab
  useEffect(() => {
    const handleHeroTrigger = (e: any) => {
      if (e.detail?.tab) setActiveTab(e.detail.tab);
      else setActiveTab("Explainer Videos");
    };
    window.addEventListener("openPortfolio", handleHeroTrigger);
    return () => window.removeEventListener("openPortfolio", handleHeroTrigger);
  }, []);

  // 2. Simple Scroll Logic
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 20);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Check scroll on tab change or mount
  useEffect(() => {
    checkScroll();
    // Reset scroll position to start when tab changes
    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
  }, [activeTab]);

  return (
    <section id="portfolio" className="py-24 px-6 bg-brand-neutral scroll-margin-top-[100px]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-brand-navy mb-12 border-l-4 border-brand-gold pl-6 uppercase tracking-wider">
          PORTFOLIO 
        </h2>

        {/* Category Tabs - No Layout Shift */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {Object.keys(portfolioData).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`py-5 rounded-2xl font-bold transition-all text-center border ${
                activeTab === cat 
                ? "bg-brand-blue text-white shadow-xl border-brand-blue -translate-y-1" 
                : "bg-white text-brand-charcoal hover:border-brand-blue/30 border-brand-navy/5 shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Static Height Container - This stops the glitching */}
        <div className="bg-white rounded-3xl p-8 border border-brand-navy/5 shadow-inner relative overflow-hidden">
          
          {/* Steady Arrows */}
          <button 
            onClick={() => scroll("left")}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-brand-blue text-white p-2 rounded-full shadow-lg transition-all duration-300 ${
              showLeftArrow ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"
            }`}
          >
            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
          </button>

          <button 
            onClick={() => scroll("right")}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-brand-blue text-white p-2 rounded-full shadow-lg transition-all duration-300 ${
              showRightArrow ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
          </button>

          <div 
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory px-2"
          >
            <AnimatePresence mode="wait">
              {portfolioData[activeTab as keyof typeof portfolioData].map((item, i) => (
                <motion.div
                  key={`${activeTab}-${i}`}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="min-w-[280px] md:min-w-[340px] snap-start bg-brand-neutral p-6 rounded-2xl border border-brand-navy/5"
                >
                  <div className="aspect-video bg-brand-charcoal/5 rounded-xl mb-4 border border-brand-navy/5" />
                  <h4 className="font-bold text-brand-navy text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-brand-charcoal/70 mb-5 leading-relaxed">{item.desc}</p>
                  <a href={item.link} className="inline-flex items-center text-brand-blue font-bold text-sm hover:gap-2 transition-all">
                    View Project <span className="ml-1">→</span>
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}