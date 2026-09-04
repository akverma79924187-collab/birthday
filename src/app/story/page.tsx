'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Calendar, MapPin, Heart, ArrowRight } from 'lucide-react';
import { BIRTHDAY_DATA } from '@/data/content';

gsap.registerPlugin(ScrollTrigger);

export default function StoryPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.timeline-card');
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 50%',
            scrub: false,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#120e1e] border border-[#e6ca85]/30 text-xs font-mono text-[#e6ca85] uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Journey Through Time</span>
        </div>
        <h1 className="font-serif-display text-4xl sm:text-7xl font-bold text-gold-gradient">
          Our Love Story Timeline
        </h1>
        <p className="font-serif-display text-base sm:text-xl text-stone-300 italic">
          Every moment with you is a milestone etched into my soul.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative">
        {/* Animated Drawing Central Vertical Line (Desktop only) */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-stone-800 hidden md:block">
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="w-full h-full bg-gradient-to-b from-[#e6ca85] via-[#df95a6] to-[#e6ca85] shadow-[0_0_15px_#e6ca85]"
          />
        </div>

        {/* Milestone Cards */}
        <div className="space-y-12 sm:space-y-24 relative z-10">
          {BIRTHDAY_DATA.story.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={event.id}
                className={`timeline-card flex flex-col md:flex-row items-center gap-6 sm:gap-8 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Side */}
                <div className={`w-full md:w-1/2 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="glass-panel p-5 sm:p-8 rounded-3xl border border-[#e6ca85]/20 hover:border-[#e6ca85]/40 transition-all space-y-4 shadow-2xl">
                    <div
                      className={`flex items-center gap-3 text-xs font-mono text-[#e6ca85] ${
                        isEven ? 'md:justify-end' : 'md:justify-start'
                      }`}
                    >
                      <span className="px-3 py-1 rounded-full bg-[#e6ca85]/10 border border-[#e6ca85]/30">
                        {event.year}
                      </span>
                      <span className="flex items-center gap-1 text-stone-400">
                        <Calendar className="w-3.5 h-3.5" />
                        {event.date}
                      </span>
                    </div>

                    <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-gold-gradient">
                      {event.title}
                    </h2>
                    <p className="font-serif-display text-sm text-[#df95a6] italic font-semibold">
                      {event.subtitle}
                    </p>

                    <p className="font-sans-body text-stone-300 text-xs sm:text-sm leading-relaxed">
                      {event.description}
                    </p>

                    <div
                      className={`flex items-center gap-2 text-xs text-stone-400 font-mono ${
                        isEven ? 'md:justify-end' : 'md:justify-start'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#e6ca85]" />
                      <span>{event.location}</span>
                    </div>

                    <div className="pt-2 border-t border-white/5 text-xs text-[#e6ca85] italic">
                      &ldquo;{event.highlight}&rdquo;
                    </div>
                  </div>
                </div>

                {/* Central Node Badge (Desktop only) */}
                <div className="relative z-20 flex-shrink-0 w-12 h-12 rounded-full bg-[#120e1e] border-2 border-[#e6ca85] flex items-center justify-center shadow-[0_0_20px_#e6ca85] hidden md:flex">
                  <Heart className="w-5 h-5 text-[#df95a6] fill-current" />
                </div>

                {/* Photo Side */}
                <div className="w-full md:w-1/2">
                  <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07060a]/80 via-transparent to-transparent opacity-60" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Next CTA */}
      <div className="mt-24 text-center">
        <Link
          href="/memories"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#e6ca85] to-[#df95a6] text-[#07060a] font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
        >
          <span>View Photo Memories Gallery</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
