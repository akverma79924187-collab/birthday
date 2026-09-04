'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, MapPin, Compass, ArrowRight } from 'lucide-react';
import { BIRTHDAY_DATA } from '@/data/content';

export default function FuturePage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#120e1e] border border-[#e6ca85]/30 text-xs font-mono text-[#e6ca85] uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>Unwritten Chapters</span>
          </div>
          <h1 className="font-serif-display text-5xl sm:text-7xl font-bold text-gold-gradient">
            Our Future Dreams
          </h1>
          <p className="font-serif-display text-xl text-stone-300 italic">
            The adventures waiting for us just beyond the horizon.
          </p>
        </div>

        {/* Dream Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BIRTHDAY_DATA.futureDreams.map((dream, idx) => (
            <motion.div
              key={dream.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-[#e6ca85]/50 flex flex-col shadow-2xl"
            >
              {/* Image with Blur-to-Clear interaction */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={dream.image}
                  alt={dream.title}
                  fill
                  className="object-cover group-hover:scale-110 group-hover:filter-none filter blur-[2px] transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07060a] via-transparent to-transparent opacity-80" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#e6ca85]/40 font-mono text-xs text-[#e6ca85]">
                    {dream.status}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-stone-300">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#e6ca85]" />
                    {dream.timeframe}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#df95a6]" />
                    {dream.location}
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <h3 className="font-serif-display text-2xl font-bold text-gold-gradient group-hover:text-[#df95a6] transition-colors">
                  {dream.title}
                </h3>

                <p className="font-sans-body text-xs text-stone-300 leading-relaxed">
                  {dream.description}
                </p>

                <div className="pt-2 text-[11px] font-mono text-[#e6ca85] flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Hover to reveal future vision</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Next CTA */}
      <div className="mt-16 text-center">
        <Link
          href="/surprise"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#e6ca85] to-[#df95a6] text-[#07060a] font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
        >
          <span>Unlock Your Final Birthday Surprise</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
