'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Heart, ArrowRight } from 'lucide-react';
import { BIRTHDAY_DATA } from '@/data/content';

export default function MomentsPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#120e1e] border border-[#e6ca85]/30 text-xs font-mono text-[#e6ca85] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Micro-Details</span>
          </div>
          <h1 className="font-serif-display text-5xl sm:text-7xl font-bold text-gold-gradient">
            Little Things I Love About You
          </h1>
          <p className="font-serif-display text-xl text-stone-300 italic">
            It&apos;s the quiet, unscripted moments that make you completely unforgettable.
          </p>
        </div>

        {/* Sequential Moments Stream */}
        <div className="space-y-20">
          {BIRTHDAY_DATA.moments.map((moment, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={moment.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className={`glass-panel rounded-3xl p-8 sm:p-12 border border-[#e6ca85]/20 flex flex-col md:flex-row items-center gap-8 shadow-2xl ${
                  isEven ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Number & Text */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-3xl font-extrabold text-[#e6ca85] opacity-60">
                      {moment.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#e6ca85]/10 border border-[#e6ca85]/30 text-[11px] font-mono text-[#e6ca85]">
                      {moment.tag}
                    </span>
                  </div>

                  <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-gold-gradient">
                    {moment.title}
                  </h2>

                  <p className="font-sans-body text-stone-300 text-base leading-relaxed">
                    {moment.description}
                  </p>
                </div>

                {/* Floating Image Accent */}
                {moment.image && (
                  <div className="relative w-full md:w-64 h-64 rounded-2xl overflow-hidden border border-white/10 flex-shrink-0 shadow-2xl group">
                    <Image
                      src={moment.image}
                      alt={moment.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Next CTA */}
      <div className="mt-20 text-center">
        <Link
          href="/reasons"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#e6ca85] to-[#df95a6] text-[#07060a] font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
        >
          <span>Continue to 100+ Reasons Why I Love You</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
