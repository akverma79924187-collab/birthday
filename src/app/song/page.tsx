'use client';

import { useAudio } from '@/components/ui/AudioProvider';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play, Pause, Disc, Volume2, VolumeX, Sparkles, Heart, ArrowRight } from 'lucide-react';
import { BIRTHDAY_DATA } from '@/data/content';

export default function SongPage() {
  const { isPlaying, isMuted, togglePlay, toggleMute, currentTime, duration, seekTo } = useAudio();

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#120e1e] border border-[#e6ca85]/30 text-xs font-mono text-[#e6ca85] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Dedicated Track</span>
          </div>
          <h1 className="font-serif-display text-5xl sm:text-7xl font-bold text-gold-gradient">
            Our Soundtrack
          </h1>
          <p className="font-serif-display text-xl text-stone-300 italic">
            The song that will forever remind me of you.
          </p>
        </div>

        {/* Music Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Spinning Vinyl Player & Controls */}
          <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-[#e6ca85]/30 flex flex-col items-center gap-8 shadow-2xl text-center">
            {/* Vinyl Record */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full bg-radial from-[#e6ca85]/20 via-[#df95a6]/10 to-transparent blur-xl" />

              {/* Vinyl Disc */}
              <motion.div
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
                className="w-full h-full rounded-full bg-[#0c0a12] border-4 border-stone-800 shadow-2xl flex items-center justify-center relative overflow-hidden"
              >
                {/* Grooves */}
                <div className="absolute inset-4 rounded-full border border-stone-800/80" />
                <div className="absolute inset-8 rounded-full border border-stone-800/80" />
                <div className="absolute inset-12 rounded-full border border-stone-800/80" />

                {/* Center Label */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#e6ca85] to-[#df95a6] flex items-center justify-center text-[#07060a] p-2 text-center border-2 border-white/20">
                  <div className="space-y-1">
                    <Disc className="w-6 h-6 mx-auto text-[#07060a]" />
                    <span className="font-serif-display font-bold text-[10px] block leading-tight uppercase">
                      {BIRTHDAY_DATA.herName}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Track Info */}
            <div className="space-y-2">
              <h2 className="font-serif-display text-2xl font-bold text-gold-gradient">
                {BIRTHDAY_DATA.soundtrackTitle}
              </h2>
              <p className="font-sans-body text-xs text-stone-400 font-mono tracking-wider">
                {BIRTHDAY_DATA.soundtrackArtist}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full space-y-2">
              <input
                type="range"
                min={0}
                max={duration || 100}
                value={currentTime}
                onChange={(e) => seekTo(Number(e.target.value))}
                className="w-full accent-[#e6ca85] h-1.5 rounded-lg cursor-pointer bg-stone-800"
              />
              <div className="flex justify-between text-xs font-mono text-stone-400">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-6">
              <button
                onClick={toggleMute}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-stone-300 hover:text-[#e6ca85]"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>

              <button
                onClick={togglePlay}
                className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#e6ca85] to-[#df95a6] text-[#07060a] flex items-center justify-center shadow-[0_0_30px_rgba(230,202,133,0.4)] hover:scale-105 transition-transform"
              >
                {isPlaying ? <Pause className="w-7 h-7 fill-current" /> : <Play className="w-7 h-7 fill-current translate-x-0.5" />}
              </button>

              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                <Heart className="w-5 h-5 text-[#df95a6] fill-current animate-pulse" />
              </div>
            </div>
          </div>

          {/* Right: Synchronized Lyrics Stream */}
          <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 h-full flex flex-col justify-center space-y-8 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="font-serif-display text-2xl font-bold text-gold-gradient">
                Synced Lyrics
              </h3>
              <Sparkles className="w-5 h-5 text-[#e6ca85]" />
            </div>

            <div className="space-y-6 max-h-[350px] overflow-y-auto pr-2">
              {BIRTHDAY_DATA.lyrics.map((line, idx) => {
                const isActive = currentTime >= line.timeSec && (idx === BIRTHDAY_DATA.lyrics.length - 1 || currentTime < BIRTHDAY_DATA.lyrics[idx + 1].timeSec);
                return (
                  <motion.p
                    key={idx}
                    animate={{
                      scale: isActive ? 1.05 : 1,
                      opacity: isActive ? 1 : 0.4,
                      color: isActive ? '#e6ca85' : '#c8c3b7',
                    }}
                    transition={{ duration: 0.3 }}
                    className={`font-serif-display text-lg sm:text-xl leading-relaxed cursor-pointer ${
                      isActive ? 'font-bold underline decoration-[#df95a6] decoration-2' : ''
                    }`}
                    onClick={() => seekTo(line.timeSec)}
                  >
                    {line.text}
                  </motion.p>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Next CTA */}
      <div className="mt-16 text-center">
        <Link
          href="/letter"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#e6ca85] to-[#df95a6] text-[#07060a] font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
        >
          <span>Open My Hand-Written Love Letter</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
