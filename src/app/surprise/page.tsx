'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, Gift, Key, Ticket, ArrowRight, Video } from 'lucide-react';
import { BIRTHDAY_DATA } from '@/data/content';

export default function SurprisePage() {
  const [countdown, setCountdown] = useState<number | null>(3);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (countdown === null) return;

    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prev) => (prev !== null ? prev - 1 : null));
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setRevealed(true);

      // Trigger Grand Fireworks Shower
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;

      const interval: any = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
          return clearInterval(interval);
        }
        const particleCount = 50 * (timeLeft / duration);
        confetti({
          particleCount,
          startVelocity: 30,
          spread: 360,
          origin: { x: Math.random(), y: Math.random() - 0.2 },
          colors: ['#e6ca85', '#df95a6', '#ffffff', '#f3c87a', '#c44e66'],
        });
      }, 250);
    }
  }, [countdown]);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col justify-between items-center text-center">
      <AnimatePresence mode="wait">
        {/* Countdown Phase */}
        {!revealed ? (
          <motion.div
            key="countdown"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5, filter: 'blur(10px)' }}
            className="my-auto space-y-8 flex flex-col items-center justify-center min-h-[400px]"
          >
            <Sparkles className="w-12 h-12 text-[#e6ca85] animate-spin" />
            <h2 className="font-serif-display text-3xl font-bold text-stone-300">
              Prepare For Your Birthday Surprise...
            </h2>
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#e6ca85]/20 to-[#df95a6]/20 border-2 border-[#e6ca85] flex items-center justify-center font-serif-display text-7xl font-bold text-gold-gradient shadow-[0_0_50px_#e6ca85]">
              {countdown}
            </div>
          </motion.div>
        ) : (
          /* Surprise Content Reveal */
          <motion.div
            key="surprise"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full space-y-12 my-auto"
          >
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e6ca85]/20 border border-[#e6ca85] text-xs font-mono text-[#e6ca85] uppercase tracking-widest">
                <Gift className="w-4 h-4 text-[#df95a6]" />
                <span>The Grand Surprise Unlocked</span>
              </div>
              <h1 className="font-serif-display text-5xl sm:text-7xl font-extrabold text-gold-gradient">
                {BIRTHDAY_DATA.surpriseMessage.headline}
              </h1>
              <p className="font-serif-display text-xl sm:text-2xl text-[#df95a6] italic max-w-2xl mx-auto">
                {BIRTHDAY_DATA.surpriseMessage.subtext}
              </p>
            </div>

            {/* Featured Video Memory Section */}
            <div className="max-w-3xl mx-auto glass-panel rounded-3xl p-4 sm:p-6 border border-[#e6ca85]/40 shadow-2xl space-y-3">
              <div className="flex items-center justify-between px-2 text-xs font-mono text-[#e6ca85]">
                <span className="flex items-center gap-1.5">
                  <Video className="w-4 h-4 text-[#df95a6]" />
                  <span>Featured Motion Moment</span>
                </span>
                <span className="text-stone-400">Saloni & Amit</span>
              </div>
              <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden bg-black border border-white/10 shadow-lg">
                <video
                  src={BIRTHDAY_DATA.featuredVideo}
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Surprise Ticket / VIP Voucher Card */}
            <div className="glass-panel rounded-3xl p-8 sm:p-12 border-2 border-[#e6ca85] max-w-3xl mx-auto space-y-8 shadow-[0_0_80px_rgba(230,202,133,0.3)] bg-gradient-to-br from-[#1c152e] via-[#2a1d42] to-[#1c152e] relative overflow-hidden">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-white/10 pb-6">
                <div className="flex items-center gap-3 text-left">
                  <Ticket className="w-8 h-8 text-[#e6ca85]" />
                  <div>
                    <span className="font-mono text-xs text-stone-400 block uppercase">
                      VIP Birthday Pass
                    </span>
                    <span className="font-serif-display text-2xl font-bold text-stone-100">
                      Weekend Escape to Paris
                    </span>
                  </div>
                </div>
                <div className="px-4 py-2 rounded-xl bg-black/60 border border-[#e6ca85]/40 font-mono text-xs text-[#e6ca85]">
                  CODE: {BIRTHDAY_DATA.surpriseMessage.giftCardCode}
                </div>
              </div>

              {/* Secret Note */}
              <div className="p-6 rounded-2xl bg-black/40 border border-[#df95a6]/30 flex items-start gap-4 text-left">
                <Key className="w-6 h-6 text-[#df95a6] flex-shrink-0 mt-1" />
                <p className="font-serif-display text-stone-200 text-sm sm:text-base leading-relaxed">
                  &ldquo;{BIRTHDAY_DATA.surpriseMessage.secretNote}&rdquo;
                </p>
              </div>

              {/* Floating photos stream */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                {BIRTHDAY_DATA.memories.slice(0, 3).map((mem) => (
                  <div key={mem.id} className="relative h-32 rounded-xl overflow-hidden border border-white/20 shadow-md">
                    <Image src={mem.image} alt={mem.title} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Next CTA to final page */}
            <div>
              <Link
                href="/forever"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-[#e6ca85] via-[#f3c87a] to-[#df95a6] text-[#07060a] font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_40px_rgba(230,202,133,0.4)]"
              >
                <span>Final Chapter: Forever & Always</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
