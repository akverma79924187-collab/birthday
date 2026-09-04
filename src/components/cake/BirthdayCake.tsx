'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Flame, Mic, Gift, Heart } from 'lucide-react';
import { BIRTHDAY_DATA } from '@/data/content';

interface BirthdayCakeProps {
  onBlownOut?: () => void;
}

export default function BirthdayCake({ onBlownOut }: BirthdayCakeProps) {
  const [candlesLit, setCandlesLit] = useState(true);
  const [isBlown, setIsBlown] = useState(false);

  const handleExtinguish = () => {
    if (!candlesLit || isBlown) return;

    setCandlesLit(false);
    setIsBlown(true);

    // Launch Confetti Cannon Blast
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#e6ca85', '#df95a6', '#ffffff', '#f3c87a'],
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });

    if (onBlownOut) {
      onBlownOut();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-8">
      {/* Interactive Birthday Cake Container */}
      <div className="relative w-72 sm:w-80 h-72 sm:h-80 flex flex-col items-center justify-end">
        {/* Ambient Glow behind cake */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-radial from-[#e6ca85]/20 via-[#df95a6]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

        {/* Cake Candles (3 Flickering Flames) */}
        <div className="relative z-20 flex gap-6 sm:gap-8 mb-[-12px]">
          {[1, 2, 3].map((candleIndex) => (
            <div key={candleIndex} className="relative flex flex-col items-center">
              {/* Flame */}
              <AnimatePresence>
                {candlesLit && (
                  <motion.button
                    onClick={handleExtinguish}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: [1, 1.25, 1], y: [0, -3, 0] }}
                    exit={{ opacity: 0, scale: 0, filter: 'blur(8px)' }}
                    transition={{
                      scale: { repeat: Infinity, duration: 1.2, ease: 'easeInOut' },
                      y: { repeat: Infinity, duration: 0.8, ease: 'easeInOut' },
                    }}
                    className="cursor-pointer group focus:outline-none mb-1"
                    title="Click or tap to blow out candles!"
                  >
                    <div className="relative w-6 h-8 flex items-center justify-center">
                      <Flame className="w-6 h-8 text-[#f3c87a] fill-[#f3c87a] drop-shadow-[0_0_12px_#f3c87a] group-hover:scale-125 transition-transform" />
                      <span className="absolute top-0 w-2 h-2 rounded-full bg-white blur-[1px]" />
                    </div>
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Smoke puff after blowout */}
              {!candlesLit && (
                <motion.div
                  initial={{ opacity: 1, y: 0, scale: 0.5 }}
                  animate={{ opacity: 0, y: -30, scale: 1.8 }}
                  transition={{ duration: 1.5 }}
                  className="w-3 h-3 rounded-full bg-stone-400/40 blur-xs mb-1"
                />
              )}

              {/* Candle Body */}
              <div className="w-3.5 h-16 sm:h-20 rounded-t-sm bg-gradient-to-b from-[#f6f3eb] via-[#e6ca85] to-[#df95a6] shadow-md border border-white/20" />
            </div>
          ))}
        </div>

        {/* Top Cake Tier */}
        <div className="relative z-10 w-48 sm:w-56 h-20 rounded-t-3xl bg-gradient-to-r from-[#201833] via-[#32244c] to-[#201833] border border-[#e6ca85]/40 flex items-center justify-center shadow-2xl">
          <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-r from-[#df95a6] via-[#e6ca85] to-[#df95a6] rounded-t-3xl opacity-80" />
          <span className="font-serif-display text-sm tracking-widest text-[#e6ca85]">
            {BIRTHDAY_DATA.herName.toUpperCase()} &bull; {BIRTHDAY_DATA.ageYears}
          </span>
        </div>

        {/* Bottom Cake Tier */}
        <div className="relative w-64 sm:w-72 h-24 rounded-t-3xl bg-gradient-to-r from-[#171226] via-[#281d3d] to-[#171226] border border-[#e6ca85]/30 flex items-center justify-center shadow-2xl">
          {/* Frosting drips */}
          <div className="absolute top-0 inset-x-0 h-5 bg-gradient-to-r from-[#e6ca85]/40 via-[#df95a6]/40 to-[#e6ca85]/40 rounded-t-3xl" />
          <div className="flex gap-2">
            <Sparkles className="w-4 h-4 text-[#e6ca85]" />
            <span className="font-serif-display text-xs tracking-wider text-stone-300">
              WITH ALL MY LOVE
            </span>
            <Sparkles className="w-4 h-4 text-[#e6ca85]" />
          </div>
        </div>

        {/* Cake Stand Base */}
        <div className="w-72 sm:w-80 h-5 rounded-full bg-gradient-to-r from-[#e6ca85]/30 via-white/20 to-[#e6ca85]/30 border border-[#e6ca85]/50 shadow-2xl" />
      </div>

      {/* Extinguish Trigger Button */}
      <div className="mt-8 text-center">
        {candlesLit ? (
          <motion.button
            onClick={handleExtinguish}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#e6ca85]/20 to-[#df95a6]/20 border border-[#e6ca85]/50 text-[#e6ca85] hover:bg-[#e6ca85] hover:text-[#07060a] transition-all text-xs font-semibold uppercase tracking-widest flex items-center gap-2 mx-auto shadow-lg"
          >
            <Flame className="w-4 h-4 text-[#f3c87a]" />
            <span>Click to Blow Out Candles & Make a Wish</span>
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-[#e6ca85] font-serif-display text-lg font-semibold"
          >
            <Gift className="w-5 h-5 text-[#df95a6]" />
            <span>Wish Granted! May all your dreams blossom.</span>
          </motion.div>
        )}
      </div>
    </div>
  );
}
