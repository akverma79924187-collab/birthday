'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Gift, ArrowRight, Star } from 'lucide-react';
import BirthdayCake from '@/components/cake/BirthdayCake';
import { BIRTHDAY_DATA } from '@/data/content';

export default function BirthdayPage() {
  const [wishMade, setWishMade] = useState(false);

  return (
    <div className="relative min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center overflow-hidden">
      {/* Floating Background Accent Memory Photos */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30 hidden md:block">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-12 left-4 md:left-16 w-36 sm:w-48 h-48 sm:h-60 rounded-2xl overflow-hidden border border-[#e6ca85]/30 shadow-2xl"
        >
          <Image
            src={BIRTHDAY_DATA.memories[0].image}
            alt="Memory"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, 25, 0], rotate: [0, -4, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-16 right-4 md:right-16 w-36 sm:w-48 h-48 sm:h-60 rounded-2xl overflow-hidden border border-[#df95a6]/30 shadow-2xl"
        >
          <Image
            src={BIRTHDAY_DATA.memories[2].image}
            alt="Memory"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Hero Heading Section */}
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#120e1e] border border-[#e6ca85]/30 text-[10px] sm:text-xs font-mono text-[#e6ca85] uppercase tracking-widest"
        >
          <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#e6ca85] text-[#e6ca85]" />
          <span>The Grand Day Has Arrived</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="font-serif-display text-4xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-gold-gradient leading-tight sm:leading-none"
        >
          HAPPY BIRTHDAY, <br className="hidden sm:inline" />
          <span className="text-rose-gradient">{BIRTHDAY_DATA.herName.toUpperCase()}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-serif-display text-base sm:text-2xl text-stone-300 italic max-w-2xl mx-auto px-2"
        >
          {BIRTHDAY_DATA.heroSubheading}
        </motion.p>
      </div>

      {/* Interactive Birthday Cake */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="relative z-10 my-10 w-full"
      >
        <BirthdayCake onBlownOut={() => setWishMade(true)} />
      </motion.div>

      {/* Final Birthday Wish Reveal Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: wishMade ? 1 : 0.8, y: 0 }}
        className="relative z-10 max-w-2xl w-full glass-panel rounded-3xl p-8 sm:p-10 border border-[#e6ca85]/30 shadow-2xl text-center space-y-6"
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#e6ca85]/30 to-[#df95a6]/30 border border-[#e6ca85]/40 flex items-center justify-center mx-auto text-[#e6ca85]">
          <Heart className="w-6 h-6 fill-current text-[#df95a6]" />
        </div>

        <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-gold-gradient">
          My Eternal Promise To You
        </h3>

        <p className="font-sans-body text-stone-300 text-sm sm:text-base leading-relaxed">
          &ldquo;Today we celebrate the day the world was blessed with your radiant light. You bring infinite warmth into my life, turning ordinary seconds into timeless poetry. May your year ahead be overflowing with laughter, deep peace, and dreams coming true.&rdquo;
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/story"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#e6ca85] to-[#df95a6] text-[#07060a] font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-lg"
          >
            <span>Explore Our Relationship Story</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
