'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Heart, ChevronRight, RotateCcw } from 'lucide-react';
import { BIRTHDAY_DATA } from '@/data/content';

const PATH_FLOW = [
  '/',
  '/birthday',
  '/story',
  '/memories',
  '/moments',
  '/reasons',
  '/song',
  '/letter',
  '/universe',
  '/future',
  '/surprise',
  '/forever',
];

export default function Footer() {
  const pathname = usePathname();
  const currentIndex = PATH_FLOW.indexOf(pathname);
  const nextPath = currentIndex >= 0 && currentIndex < PATH_FLOW.length - 1 ? PATH_FLOW[currentIndex + 1] : null;

  return (
    <footer className="relative mt-auto border-t border-[#e6ca85]/10 bg-[#060509] py-12 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left note */}
        <div className="flex items-center gap-3">
          <Heart className="w-5 h-5 text-[#df95a6] fill-[#df95a6]/40 animate-pulse" />
          <span className="font-serif-display text-sm tracking-wide text-stone-300">
            Crafted forever for {BIRTHDAY_DATA.herName} &bull; {BIRTHDAY_DATA.birthdayDate}
          </span>
        </div>

        {/* Next page navigation helper if applicable */}
        {nextPath && (
          <Link
            href={nextPath}
            className="group inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#e6ca85]/10 to-[#df95a6]/10 border border-[#e6ca85]/30 hover:border-[#e6ca85] transition-all text-xs font-semibold uppercase tracking-widest text-[#e6ca85]"
          >
            <span>Continue Story</span>
            <ChevronRight className="w-4 h-4 text-[#e6ca85] group-hover:translate-x-1 transition-transform" />
          </Link>
        )}

        {/* Replay / Reset link */}
        <div className="flex items-center gap-4 text-xs text-stone-400">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 hover:text-[#e6ca85] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Replay Experience</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
