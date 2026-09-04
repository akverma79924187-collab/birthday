'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Globe, ArrowRight } from 'lucide-react';
import { BIRTHDAY_DATA } from '@/data/content';

// Dynamic import of R3F component to prevent SSR window issues
const StarField3D = dynamic(() => import('@/components/universe/StarField3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[550px] flex items-center justify-center glass-panel rounded-3xl border border-[#e6ca85]/30">
      <div className="text-center space-y-4">
        <Sparkles className="w-8 h-8 text-[#e6ca85] animate-spin mx-auto" />
        <p className="font-serif-display text-xl text-gold-gradient">
          Rendering 3D Star Constellations...
        </p>
      </div>
    </div>
  ),
});

export default function UniversePage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#120e1e] border border-[#e6ca85]/30 text-xs font-mono text-[#e6ca85] uppercase tracking-widest">
            <Globe className="w-3.5 h-3.5" />
            <span>Multiverse Constellations</span>
          </div>
          <h1 className="font-serif-display text-5xl sm:text-7xl font-bold text-gold-gradient">
            Our Interactive 3D Universe
          </h1>
          <p className="font-serif-display text-xl text-stone-300 italic">
            Out of billions of stars and infinite galaxy timelines...
          </p>
        </div>

        {/* 3D R3F Starfield canvas */}
        <div className="w-full my-8">
          <StarField3D />
        </div>

        {/* Climax Message Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-8 sm:p-10 border border-[#e6ca85]/40 text-center max-w-2xl mx-auto space-y-4 shadow-2xl mt-8"
        >
          <Heart className="w-8 h-8 text-[#df95a6] fill-current mx-auto animate-bounce" />
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-gold-gradient">
            &ldquo;In every universe, I&apos;d choose you.&rdquo;
          </h2>
          <p className="font-sans-body text-xs sm:text-sm text-stone-300">
            Across every dimension, past every galaxy boundary, my soul would find yours again without a second of doubt.
          </p>
        </motion.div>
      </div>

      {/* Next CTA */}
      <div className="mt-16 text-center">
        <Link
          href="/future"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#e6ca85] to-[#df95a6] text-[#07060a] font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
        >
          <span>Explore Our Future Dreams</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
