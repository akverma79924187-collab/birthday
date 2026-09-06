'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Heart, ArrowRight, Mail, Gift } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import { useAudio } from '@/components/ui/AudioProvider';
import { BIRTHDAY_DATA } from '@/data/content';

const HOME_GALLERY = [
  { src: 'BLZJ8437.JPG', title: 'Golden Hour' },
  { src: 'IGPP7937.JPG', title: 'Soft Smiles' },
  { src: 'IMG_0924.JPG', title: 'A New Memory' },
  { src: 'IMG_2705.JPG', title: 'Little Joys' },
  { src: 'JXSJ6524.JPG', title: 'Just Us' },
];

export default function EntrancePage() {
  const router = useRouter();
  const { togglePlay, isPlaying } = useAudio();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isEntering, setIsEntering] = useState(false);

  // Canvas starfield animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate stars
    const numStars = Math.min(160, Math.floor((width * height) / 8000));
    const stars = Array.from({ length: numStars }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.3,
      alpha: Math.random(),
      speed: Math.random() * 0.015 + 0.005,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      stars.forEach((star) => {
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0.2) {
          star.speed = -star.speed;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(230, 202, 133, ${star.alpha * 0.75})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#e6ca85';
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleEnter = () => {
    setIsEntering(true);
    if (!isPlaying) {
      togglePlay();
    }
    setTimeout(() => {
      router.push('/birthday');
    }, 1200);
  };

  const nameLetters = BIRTHDAY_DATA.herName.split('');

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Starfield canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Cinematic Spotlight backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-radial from-[#e6ca85]/10 via-[#df95a6]/5 to-transparent blur-3xl rounded-full pointer-events-none" />

      {/* Main Entrance Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: isEntering ? 0 : 1, scale: isEntering ? 1.05 : 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center gap-8"
      >
        {/* Subtle Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#120e1e]/80 border border-[#e6ca85]/30 text-xs font-mono tracking-widest text-[#e6ca85] uppercase shadow-lg backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#e6ca85] animate-pulse" />
          <span>A Dedicated Love Story</span>
        </motion.div>

        {/* Letter-by-Letter Name Reveal */}
        <div className="flex flex-col items-center gap-2 w-full">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-stone-400"
          >
            Happy Birthday, My Beloved
          </motion.h2>

          <h1 className="font-serif-display text-4xl sm:text-7xl md:text-9xl font-bold tracking-tight flex flex-wrap items-center justify-center py-2">
            {nameLetters.map((letter, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  delay: 0.8 + idx * 0.12,
                  duration: 0.8,
                  ease: [0.2, 0.65, 0.3, 0.9],
                }}
                className="inline-block text-gold-gradient hover:scale-105 transition-transform"
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Romantic Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="font-serif-display text-lg sm:text-xl md:text-2xl text-stone-300 italic max-w-xl leading-relaxed"
        >
          &ldquo;In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.&rdquo;
        </motion.p>

        <Link
          href="/letter"
          aria-label="Open the letter"
          className="block w-full max-w-xl"
        >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.85, duration: 0.8 }}
          className="w-full rounded-2xl border border-[#e6ca85]/30 bg-[#120e1e]/65 px-5 py-4 shadow-xl backdrop-blur-md transition-all hover:-translate-y-1 hover:border-[#e6ca85] hover:shadow-[0_12px_40px_rgba(230,202,133,0.2)]"
        >
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#e6ca85]/30 bg-[#e6ca85]/10 px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-[#e6ca85]">
            <Mail className="h-3.5 w-3.5 text-[#df95a6]" />
            <span>A Letter For You</span>
          </div>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-stone-100">
            {BIRTHDAY_DATA.surpriseMessage.headline}
          </h2>
          <p className="mt-2 font-serif-display text-base sm:text-lg italic text-[#df95a6]">
            {BIRTHDAY_DATA.surpriseMessage.subtext}
          </p>
        </motion.div>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-1"
        >
          <Link
            href="/surprise"
            className="group inline-flex items-center gap-3 rounded-full border border-[#df95a6]/60 bg-[#df95a6]/10 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#f2b3bd] shadow-[0_0_30px_rgba(223,149,166,0.12)] transition-all hover:-translate-y-1 hover:border-[#e6ca85] hover:bg-[#e6ca85]/15 hover:text-[#e6ca85] hover:shadow-[0_0_40px_rgba(230,202,133,0.2)]"
          >
            <Gift className="h-4 w-4 transition-transform group-hover:rotate-12" />
            <span>Open Your Surprise</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/birthday"
            className="group inline-flex items-center gap-3 rounded-full border border-[#e6ca85]/60 bg-[#e6ca85]/10 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#e6ca85] shadow-[0_0_30px_rgba(230,202,133,0.12)] transition-all hover:-translate-y-1 hover:bg-[#e6ca85]/20 hover:shadow-[0_0_40px_rgba(230,202,133,0.2)]"
          >
            <Sparkles className="h-4 w-4 transition-transform group-hover:rotate-12" />
            <span>Go to Celebration</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Glowing Heartbeat ENTER Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.8 }}
          className="pt-4"
        >
          <MagneticButton
            onClick={handleEnter}
            disabled={isEntering}
            className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-[#e6ca85] via-[#f3c87a] to-[#df95a6] text-[#07060a] font-bold text-sm uppercase tracking-widest shadow-[0_0_40px_rgba(230,202,133,0.3)] hover:shadow-[0_0_60px_rgba(230,202,133,0.6)] transition-all duration-300 overflow-hidden"
          >
            {/* Heartbeat pulse glow ring */}
            <span className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-25 pointer-events-none" />

            <span className="relative z-10 flex items-center gap-3">
              <Heart className="w-4 h-4 fill-current text-[#07060a] animate-bounce" />
              <span>{isEntering ? 'Opening Story...' : 'Enter Experience'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </MagneticButton>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.25, duration: 0.8 }}
          className="relative z-10 mt-20 w-full max-w-6xl px-1 pb-16 sm:mt-28"
        >
          <div className="mb-8 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.3em] text-[#e6ca85]">A Few Favorite Frames</p>
              <h2 className="font-serif-display text-4xl font-bold text-gold-gradient sm:text-5xl">Our Gallery</h2>
              <p className="mt-2 font-serif-display text-base italic text-stone-400 sm:text-lg">
                Every picture keeps a little piece of us alive.
              </p>
            </div>
            <Link
              href="/memories"
              className="group inline-flex items-center gap-2 rounded-full border border-[#e6ca85]/50 bg-[#e6ca85]/10 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#e6ca85] transition-all hover:-translate-y-1 hover:bg-[#e6ca85]/20"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
            {HOME_GALLERY.map((item, index) => (
              <Link
                key={item.src}
                href="/memories"
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#11101a] shadow-xl ${index === 0 ? 'row-span-2 aspect-[3/4] sm:aspect-auto' : 'aspect-square'}`}
              >
                <Image
                  src={`/image/${item.src}`}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-medium text-white sm:bottom-4 sm:left-4 sm:text-sm">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </motion.section>
      </motion.div>

      {/* Cinematic Fade Overlay on Transition */}
      {isEntering && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 bg-[#07060a] flex items-center justify-center"
        >
          <div className="text-center">
            <Sparkles className="w-10 h-10 text-[#e6ca85] animate-spin mx-auto mb-4" />
            <p className="font-serif-display text-2xl text-gold-gradient tracking-widest">
              Unfolding the Magic...
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
