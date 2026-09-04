'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { BIRTHDAY_DATA } from '@/data/content';

export default function LetterPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#120e1e] border border-[#e6ca85]/30 text-xs font-mono text-[#e6ca85] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Confidential & Devoted</span>
          </div>
          <h1 className="font-serif-display text-4xl sm:text-7xl font-bold text-gold-gradient">
            An Interactive Love Letter
          </h1>
          <p className="font-serif-display text-base sm:text-xl text-stone-300 italic">
            Tap the wax-sealed envelope to unseal my heart&apos;s innermost words.
          </p>
        </div>

        {/* Envelope & Letter Container */}
        <div className="relative max-w-3xl mx-auto flex flex-col items-center justify-center min-h-[420px] sm:min-h-[500px]">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              /* Sealed Envelope */
              <motion.div
                key="envelope"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0, y: -50 }}
                onClick={() => setIsOpen(true)}
                className="cursor-pointer group relative w-full max-w-[450px] h-64 sm:h-80 rounded-3xl bg-gradient-to-tr from-[#241c38] via-[#372b54] to-[#241c38] border-2 border-[#e6ca85]/40 p-5 sm:p-8 flex flex-col items-center justify-between shadow-[0_20px_60px_rgba(0,0,0,0.8)] hover:border-[#e6ca85] transition-all hover:scale-105"
              >
                {/* Envelope Flap Vector Shape */}
                <div className="absolute top-0 inset-x-0 h-32 sm:h-36 bg-gradient-to-b from-[#2e2348] to-[#241c38] clip-polygon border-b border-[#e6ca85]/30 rounded-t-3xl flex items-center justify-center">
                  {/* Wax Seal Badge */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#df95a6] via-[#c44e66] to-[#df95a6] border-2 border-[#e6ca85] shadow-[0_0_25px_#df95a6] flex items-center justify-center text-white font-serif-display font-bold text-xl sm:text-2xl group-hover:rotate-12 transition-transform">
                    <Heart className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
                  </div>
                </div>

                <div className="mt-auto pt-20 sm:pt-24 text-center space-y-2">
                  <span className="font-serif-display text-xl sm:text-2xl font-bold text-gold-gradient block">
                    {BIRTHDAY_DATA.letter.salutation}
                  </span>
                  <p className="font-mono text-xs text-stone-400 tracking-widest uppercase">
                    [ Click / Tap to Unseal ]
                  </p>
                </div>
              </motion.div>
            ) : (
              /* Unfolded Paper Letter */
              <motion.div
                key="letter"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative w-full glass-panel rounded-3xl p-5 sm:p-14 border border-[#e6ca85]/40 shadow-2xl bg-gradient-to-b from-[#141022] via-[#1a152b] to-[#141022] space-y-6 sm:space-y-8"
              >
                {/* Ambient stamp icon */}
                <div className="absolute top-8 right-8 w-14 h-16 rounded-lg border-2 border-dashed border-[#e6ca85]/40 flex flex-col items-center justify-center p-2 text-[10px] font-mono text-[#e6ca85]">
                  <Sparkles className="w-4 h-4 text-[#df95a6]" />
                  <span>PARIS</span>
                </div>

                {/* Salutation */}
                <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-gold-gradient">
                  {BIRTHDAY_DATA.letter.salutation}
                </h2>

                {/* Paragraphs */}
                <div className="space-y-6 text-stone-200 font-serif-display text-lg sm:text-xl leading-relaxed">
                  {BIRTHDAY_DATA.letter.paragraphs.map((p, idx) => (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + idx * 0.2, duration: 0.6 }}
                    >
                      {p}
                    </motion.p>
                  ))}
                </div>

                {/* Signature */}
                <div className="pt-8 border-t border-white/10 flex flex-col items-end text-right space-y-2">
                  <span className="font-serif-display text-xl text-[#df95a6] italic font-semibold">
                    {BIRTHDAY_DATA.letter.closing}
                  </span>
                  <span className="font-serif-display text-3xl font-bold text-gold-gradient">
                    {BIRTHDAY_DATA.letter.signature}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Next CTA */}
      <div className="mt-16 text-center">
        <Link
          href="/universe"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#e6ca85] to-[#df95a6] text-[#07060a] font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
        >
          <span>Enter 3D Interactive Universe</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
