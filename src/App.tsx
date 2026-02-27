/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Twitter, Facebook, Instagram } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    title: "Enterprise Cloud Platform - AWS & Kubernetes Integration",
    image: "https://picsum.photos/seed/cloud/1200/800",
    description: "Project: Enterprise Cloud Platform - AWS & Kubernetes Integration"
  },
  {
    id: 2,
    title: "FinTech Real-Time Trading System",
    image: "https://picsum.photos/seed/trading/1200/800",
    description: "Project: FinTech Real-Time Trading System"
  },
  {
    id: 3,
    title: "SaaS API Gateway & Microservices",
    image: "https://picsum.photos/seed/api/1200/800",
    description: "Project: SaaS API Gateway & Microservices"
  },
  {
    id: 4,
    title: "Data Visualization Dashboard",
    image: "https://picsum.photos/seed/dashboard/1200/800",
    description: "Project: Data Visualization Dashboard"
  }
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  }, []);

  const getSlideIndex = (offset: number) => {
    return (currentIndex + offset + PROJECTS.length) % PROJECTS.length;
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white bg-bg text-ink">
      {/* Header */}
      <header className="px-8 py-6 flex justify-between items-center border-b border-ink/5 bg-bg/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="text-xl font-bold tracking-tighter">J.D. CONSULTING</div>
        <nav className="hidden md:flex gap-8 text-xs font-semibold tracking-widest uppercase">
          <a href="#work" className="hover:opacity-60 transition-opacity">Work</a>
          <a href="#services" className="hover:opacity-60 transition-opacity">Services</a>
          <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
          <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden flex items-center py-12 md:py-0">
        
        {/* Desktop Edge Fades */}
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-bg to-transparent z-40 pointer-events-none" />
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-bg to-transparent z-40 pointer-events-none" />

        {/* Navigation Arrows - 10px from viewport edges, centered to images */}
        <button 
          onClick={prevSlide}
          className="absolute left-[10px] top-[42%] md:top-1/2 -translate-y-1/2 z-50 bg-white/90 backdrop-blur-sm p-3 md:p-4 rounded-md shadow-xl hover:scale-110 transition-transform border border-ink/5 flex items-center justify-center"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-[10px] top-[42%] md:top-1/2 -translate-y-1/2 z-50 bg-white/90 backdrop-blur-sm p-3 md:p-4 rounded-md shadow-xl hover:scale-110 transition-transform border border-ink/5 flex items-center justify-center"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* The Carousel Track */}
        <div className="w-full flex items-center justify-center px-4 md:px-0">
          <div className="relative w-full max-w-[1600px] flex items-center justify-center">
            
            {/* Left Peek Slide */}
            <div className="hidden lg:block relative shrink-0 cursor-pointer z-30 bg-bg mr-6 md:mr-12" onClick={prevSlide}>
              <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                <motion.div
                  key={getSlideIndex(-1)}
                  custom={direction}
                  variants={{
                    enter: (direction: number) => ({
                      opacity: 0,
                      x: direction > 0 ? 100 : -200
                    }),
                    center: {
                      opacity: 1,
                      x: 0
                    },
                    exit: (direction: number) => ({
                      opacity: 0,
                      x: direction > 0 ? -200 : 100
                    })
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="w-[320px] h-[330px] rounded-lg overflow-hidden"
                >
                  <img src={PROJECTS[getSlideIndex(-1)].image} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Gap for Fixed Content - Hidden on mobile, Split on tablet */}
            <div className="hidden md:block w-full md:w-[340px] lg:w-[500px] shrink-0 z-50 md:ml-0 lg:-ml-12 relative bg-bg p-8 lg:p-20">
              <div className="max-w-md">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-display text-5xl md:text-7xl leading-[0.9] uppercase mb-8"
                >
                  Building Scalable Digital Architectures.
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-ink/70 text-base mb-10"
                >
                  Senior Web Development Consultant specializing in complex, high-performance systems for forward-thinking enterprises. Over 15 years of technical leadership and execution.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <button className="bg-primary text-white px-8 py-4 rounded-sm font-bold text-xs tracking-widest uppercase hover:bg-primary/90 transition-colors">
                    View Projects
                  </button>
                  <button className="border border-ink px-8 py-4 rounded-sm font-bold text-xs tracking-widest uppercase hover:bg-ink hover:text-bg transition-all">
                    Get In Touch
                  </button>
                </motion.div>
              </div>
            </div>

            {/* Main Active Slide - Responsive width, Split on tablet */}
            <div className="relative shrink-0 z-10 ml-0 md:ml-6 lg:ml-12 w-full md:w-[380px] lg:w-[485px] px-4 md:px-0">
              <div className="w-full overflow-hidden">
                <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={{
                      enter: (direction: number) => ({
                        x: direction > 0 ? "120%" : "-120%",
                        opacity: 0
                      }),
                      center: {
                        x: 0,
                        opacity: 1
                      },
                      exit: (direction: number) => ({
                        x: direction > 0 ? "-120%" : "120%",
                        opacity: 0
                      })
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ 
                      x: { type: "spring", stiffness: 300, damping: 35, restDelta: 0.5 },
                      opacity: { duration: 0.2 }
                    }}
                    className="w-full md:w-[380px] lg:w-[485px]"
                  >
                    <div className="aspect-[4/3] md:w-[380px] lg:w-[485px] md:h-auto lg:h-[375px] rounded-lg overflow-hidden">
                      <img 
                        src={PROJECTS[currentIndex].image} 
                        alt={PROJECTS[currentIndex].title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="mt-6">
                      <p className="text-sm font-medium text-ink/60">{PROJECTS[currentIndex].description}</p>
                      
                      {/* Progress Bar under main slide */}
                      <div className="mt-6 w-full h-1 bg-ink/10 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-ink/40"
                          initial={false}
                          animate={{ width: `${((currentIndex + 1) / PROJECTS.length) * 100}%` }}
                          transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Peek Slide */}
            <div className="hidden lg:block relative shrink-0 cursor-pointer z-30 bg-bg ml-6 md:ml-12" onClick={nextSlide}>
              <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                <motion.div
                  key={getSlideIndex(1)}
                  custom={direction}
                  variants={{
                    enter: (direction: number) => ({
                      opacity: 0,
                      x: direction > 0 ? 200 : -100
                    }),
                    center: {
                      opacity: 1,
                      x: 0
                    },
                    exit: (direction: number) => ({
                      opacity: 0,
                      x: direction > 0 ? -100 : 200
                    })
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="w-[320px] h-[330px] rounded-lg overflow-hidden"
                >
                  <img src={PROJECTS[getSlideIndex(1)].image} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-ink/5 bg-bg">
        <div className="text-xs text-ink/40 font-medium">
          © 2024 J.D. Consulting
        </div>
        <div className="flex gap-6 text-ink/60">
          <a href="#" className="hover:text-ink transition-colors"><Twitter size={18} /></a>
          <a href="#" className="hover:text-ink transition-colors"><Facebook size={18} /></a>
          <a href="#" className="hover:text-ink transition-colors"><Instagram size={18} /></a>
        </div>
      </footer>
    </div>
  );
}
