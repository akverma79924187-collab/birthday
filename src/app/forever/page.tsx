'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Infinity as InfinityIcon, RotateCcw, Sparkles } from 'lucide-react';
import { BIRTHDAY_DATA } from '@/data/content';

export default function ForeverPage() {
  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 text-center overflow-hidden">
      {/* Deep Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-radial from-[#df95a6]/20 via-[#e6ca85]/10 to-transparent blur-3xl rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 max-w-2xl mx-auto space-y-10"
      >
        {/* Pulsating Glowing Heart */}
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#df95a6]/30 via-[#e6ca85]/20 to-[#df95a6]/30 border-2 border-[#e6ca85] flex items-center justify-center mx-auto text-[#df95a6] shadow-[0_0_50px_#df95a6]"
        >
          <Heart className="w-12 h-12 fill-current" />
        </motion.div>

        {/* Her Name & Infinity Symbol */}
        <div className="space-y-4">
          <h1 className="font-serif-display text-6xl sm:text-8xl font-extrabold text-gold-gradient tracking-tight">
            {BIRTHDAY_DATA.herName}
          </h1>

          <div className="flex items-center justify-center gap-3 text-[#e6ca85]">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#e6ca85]" />
            <InfinityIcon className="w-8 h-8 animate-pulse" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#e6ca85]" />
          </div>
        </div>

        {/* Final Emotional Message */}
        <p className="font-serif-display text-2xl sm:text-3xl text-stone-200 italic leading-relaxed">
          &ldquo;You are my today, my tomorrow, and my forever. Happy Birthday, my whole heart.&rdquo;
        </p>

        <p className="font-sans-body text-xs text-stone-400 font-mono tracking-widest uppercase">
          With Endless Devotion &bull; {BIRTHDAY_DATA.hisName}
        </p>

        {/* Replay Experience Button */}
        <div className="pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-stone-300 hover:text-[#e6ca85] hover:border-[#e6ca85] transition-all text-xs font-mono uppercase tracking-widest shadow-lg"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Replay Experience</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
