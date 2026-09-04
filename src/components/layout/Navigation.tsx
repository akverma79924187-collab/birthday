'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudio } from '@/components/ui/AudioProvider';
import { Music, VolumeX, Menu, X, Sparkles, Heart, Compass } from 'lucide-react';
import { BIRTHDAY_DATA } from '@/data/content';

const NAV_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/birthday', label: 'Celebration' },
  { path: '/story', label: 'Story' },
  { path: '/memories', label: 'Memories' },
  { path: '/moments', label: 'Moments' },
  { path: '/reasons', label: 'Reasons' },
  { path: '/song', label: 'Song' },
  { path: '/letter', label: 'Letter' },
  { path: '/universe', label: '3D Universe' },
  { path: '/future', label: 'Future' },
  { path: '/surprise', label: 'Surprise' },
  { path: '/forever', label: 'Forever' },
];

export default function Navigation() {
  const pathname = usePathname();
  const { isPlaying, isMuted, togglePlay, toggleMute } = useAudio();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const activeIndex = NAV_ITEMS.findIndex((item) => item.path === pathname);

  return (
    <>
      {/* Floating Desktop Top Bar */}
      <header
        className={`fixed top-3 sm:top-4 left-0 right-0 z-40 px-2.5 sm:px-4 md:px-8 transition-all duration-500 ${
          scrolled ? 'translate-y-0' : 'translate-y-1'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between glass-panel rounded-full py-2 px-3 sm:px-6 border border-[#e6ca85]/20 shadow-2xl">
          {/* Logo / Name */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-[#e6ca85]/30 to-[#df95a6]/30 flex items-center justify-center border border-[#e6ca85]/40 text-[#e6ca85] group-hover:scale-105 transition-transform">
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#e6ca85] fill-[#e6ca85]/30" />
            </span>
            <span className="font-serif-display text-base sm:text-lg font-bold tracking-wider text-gold-gradient">
              {BIRTHDAY_DATA.herName}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0c0a12]/60 rounded-full px-3 py-1 border border-white/5">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative px-3.5 py-1.5 text-xs tracking-wider transition-colors duration-300 rounded-full ${
                    isActive ? 'text-[#e6ca85] font-semibold' : 'text-stone-300 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-[#e6ca85]/20 to-[#df95a6]/20 rounded-full border border-[#e6ca85]/40"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Controls Right */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Audio Toggle Button */}
            <button
              onClick={togglePlay}
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-[#161324] border border-[#e6ca85]/30 text-stone-200 hover:text-[#e6ca85] hover:border-[#e6ca85] transition-all text-xs"
              title={isPlaying ? 'Pause soundtrack' : 'Play soundtrack'}
            >
              <Music className={`w-3.5 h-3.5 ${isPlaying ? 'animate-spin text-[#e6ca85]' : ''}`} />
              <span className="hidden sm:inline font-mono text-[10px] tracking-widest uppercase">
                {isPlaying ? 'Sound ON' : 'Play Music'}
              </span>
            </button>

            {/* Mobile Drawer Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-full bg-[#161324] border border-white/10 text-stone-200 hover:text-[#e6ca85]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden bg-black/90 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6"
          >
            <div className="flex items-center justify-between pt-2 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 sm:gap-3">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#e6ca85]" />
                <span className="font-serif-display text-lg sm:text-xl font-bold text-gold-gradient">
                  {BIRTHDAY_DATA.herName}&apos;s Love Story
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 sm:p-2 rounded-full bg-white/10 text-white"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Grid of Navigation Links */}
            <div className="grid grid-cols-2 gap-2.5 py-4 my-auto max-h-[70vh] overflow-y-auto">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`flex items-center justify-between p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm transition-all ${
                      isActive
                        ? 'bg-[#e6ca85]/15 border-[#e6ca85] text-[#e6ca85] font-semibold'
                        : 'bg-white/5 border-white/10 text-stone-300 hover:border-[#e6ca85]/40'
                    }`}
                  >
                    <span className="truncate pr-1">{item.label}</span>
                    <span className="text-[9px] sm:text-[10px] font-mono text-stone-500">{idx < 9 ? `0${idx + 1}` : idx + 1}</span>
                  </Link>
                );
              })}
            </div>

            {/* Footer inside mobile menu */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-stone-400">
              <span>Dedicated with love</span>
              <button
                onClick={toggleMute}
                className="flex items-center gap-1.5 text-[#e6ca85]"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Music className="w-4 h-4" />}
                <span>{isMuted ? 'Muted' : 'Sound Ready'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
