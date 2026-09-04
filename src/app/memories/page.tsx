'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MapPin, Calendar, X, Maximize2, Heart, ArrowRight, Video, Play } from 'lucide-react';
import { BIRTHDAY_DATA, Memory } from '@/data/content';

const CATEGORIES = ['All', 'Travel', 'Dates', 'Cozy', 'Celebrations'] as const;

export default function MemoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeMemory, setActiveMemory] = useState<Memory | null>(null);

  const filteredMemories =
    selectedCategory === 'All'
      ? BIRTHDAY_DATA.memories
      : BIRTHDAY_DATA.memories.filter((m) => m.category === selectedCategory);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#120e1e] border border-[#e6ca85]/30 text-xs font-mono text-[#e6ca85] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Photo & Video Gallery</span>
          </div>
          <h1 className="font-serif-display text-5xl sm:text-7xl font-bold text-gold-gradient">
            Treasured Memories
          </h1>
          <p className="font-serif-display text-xl text-stone-300 italic">
            Snapshots and live motion moments captured forever in time.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#e6ca85] text-[#07060a] shadow-[0_0_20px_rgba(230,202,133,0.4)]'
                    : 'bg-[#141022] text-stone-300 border border-white/10 hover:border-[#e6ca85]/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Editorial Photo & Video Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredMemories.map((mem) => (
              <motion.div
                key={mem.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8 }}
                onClick={() => setActiveMemory(mem)}
                className="group cursor-pointer glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-[#e6ca85]/50 flex flex-col shadow-2xl"
              >
                {/* Media Container */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-black">
                  {mem.isVideo && mem.videoUrl ? (
                    <div className="relative w-full h-full">
                      <video
                        src={mem.videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#df95a6]/80 text-white font-mono text-[10px] uppercase tracking-wider backdrop-blur-md">
                        <Video className="w-3 h-3" />
                        <span>Live Video</span>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={mem.image}
                      alt={mem.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 filter saturate-110"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#07060a] via-transparent to-transparent opacity-75 group-hover:opacity-40 transition-opacity" />

                  {/* Expand badge */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-[#e6ca85]" />
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#e6ca85]">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#e6ca85]/30">
                      {mem.category}
                    </span>
                    <span className="flex items-center gap-1 text-stone-300">
                      <Calendar className="w-3.5 h-3.5 text-[#e6ca85]" />
                      {mem.date}
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <h3 className="font-serif-display text-xl font-bold text-gold-gradient group-hover:text-[#df95a6] transition-colors">
                    {mem.title}
                  </h3>
                  <p className="font-sans-body text-xs text-stone-300 line-clamp-2">
                    {mem.caption}
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-stone-400">
                    <MapPin className="w-3 h-3 text-[#e6ca85]" />
                    <span>{mem.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Fullscreen Lightbox Modal */}
        <AnimatePresence>
          {activeMemory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveMemory(null)}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl p-4 sm:p-8 flex items-center justify-center overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full glass-panel rounded-3xl overflow-hidden border border-[#e6ca85]/40 grid grid-cols-1 md:grid-cols-2 shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveMemory(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-white hover:text-[#e6ca85] transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Left High Res Image or Video Player */}
                <div className="relative h-72 sm:h-96 md:h-full min-h-[300px] bg-black">
                  {activeMemory.isVideo && activeMemory.videoUrl ? (
                    <video
                      src={activeMemory.videoUrl}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <Image
                      src={activeMemory.image}
                      alt={activeMemory.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                {/* Right Details */}
                <div className="p-8 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6ca85]/10 border border-[#e6ca85]/30 text-xs font-mono text-[#e6ca85]">
                      <span>{activeMemory.category}</span>
                      <span>&bull;</span>
                      <span>{activeMemory.date}</span>
                    </div>

                    <h2 className="font-serif-display text-3xl font-bold text-gold-gradient">
                      {activeMemory.title}
                    </h2>

                    <p className="font-sans-body text-stone-200 text-sm leading-relaxed">
                      {activeMemory.caption}
                    </p>

                    {activeMemory.quote && (
                      <div className="p-4 rounded-2xl bg-[#161224] border border-[#df95a6]/30 flex items-start gap-3">
                        <Heart className="w-5 h-5 text-[#df95a6] flex-shrink-0 mt-0.5" />
                        <p className="font-serif-display text-sm text-[#df95a6] italic">
                          &ldquo;{activeMemory.quote}&rdquo;
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-stone-400 border-t border-white/10 pt-4">
                    <MapPin className="w-4 h-4 text-[#e6ca85]" />
                    <span>{activeMemory.location}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Next CTA */}
      <div className="mt-16 text-center">
        <Link
          href="/moments"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#e6ca85] to-[#df95a6] text-[#07060a] font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
        >
          <span>Discover Little Things I Love</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
