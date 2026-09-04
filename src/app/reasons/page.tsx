'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Sparkles, Heart, Infinity as InfinityIcon, ArrowRight } from 'lucide-react';
import { BIRTHDAY_DATA } from '@/data/content';

export default function ReasonsPage() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 3,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplayCount(Math.floor(latest)),
    });
    return controls.stop;
  }, [count]);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col justify-between">
      <div>
        {/* Animated Counter Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#120e1e] border border-[#e6ca85]/30 text-xs font-mono text-[#e6ca85] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>An Infinite List</span>
          </div>

          <div className="flex items-center justify-center gap-4">
            <span className="font-serif-display text-7xl sm:text-9xl font-extrabold text-gold-gradient tracking-tight">
              {displayCount}+
            </span>
          </div>

          <h1 className="font-serif-display text-4xl sm:text-5xl font-bold text-stone-100">
            Reasons Why I Love You
          </h1>
          <p className="font-serif-display text-xl text-stone-300 italic">
            Though a hundred cards cannot contain a fraction of how much you mean to me.
          </p>
        </div>

        {/* Reasons Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BIRTHDAY_DATA.reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 6) * 0.08 }}
              whileHover={{ scale: 1.03 }}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-[#e6ca85]/40 flex items-start gap-4 shadow-xl"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#e6ca85]/10 border border-[#e6ca85]/30 flex items-center justify-center font-mono text-xs text-[#e6ca85] font-bold">
                {idx + 1}
              </span>
              <p className="font-sans-body text-sm text-stone-300 leading-relaxed pt-1">
                {reason}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Transition into Infinity Concept Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 glass-panel rounded-3xl p-10 sm:p-14 border border-[#e6ca85]/40 text-center max-w-3xl mx-auto space-y-6 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-radial from-[#df95a6]/20 to-transparent blur-2xl" />

          <InfinityIcon className="w-16 h-16 text-[#e6ca85] mx-auto animate-pulse" />

          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-gold-gradient">
            ...And Infinite Reasons More
          </h2>

          <p className="font-serif-display text-lg text-stone-300 italic max-w-xl mx-auto">
            &ldquo;If I gave you a star for every reason I love you, the night sky would never be dark again.&rdquo;
          </p>
        </motion.div>
      </div>

      {/* Next CTA */}
      <div className="mt-16 text-center">
        <Link
          href="/song"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#e6ca85] to-[#df95a6] text-[#07060a] font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
        >
          <span>Listen to Our Song Experience</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
