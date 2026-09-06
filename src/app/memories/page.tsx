'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Film, Heart, Image as ImageIcon, Maximize2, Play, X } from 'lucide-react';

type GalleryKind = 'image' | 'video';

interface GalleryItem {
  src: string;
  title: string;
  kind: GalleryKind;
}

const GALLERY_ITEMS: GalleryItem[] = [
  { src: 'AZHM6319.MOV', title: 'A Moving Memory', kind: 'video' },
  { src: 'BLZJ8437.JPG', title: 'Golden Hour', kind: 'image' },
  { src: 'DZYA6663.MP4', title: 'A Little Moment', kind: 'video' },
  { src: 'IGPP7937.JPG', title: 'Soft Smiles', kind: 'image' },
  { src: 'screen.jpeg', title: 'A Message To Remember', kind: 'image' },
  { src: 'screenshot.PNG', title: 'A Memory In Words', kind: 'image' },
  { src: 'IMG_0924.JPG', title: 'A New Memory', kind: 'image' },
  { src: 'IMG_0925.JPG', title: 'A New Smile', kind: 'image' },
  { src: 'IMG_0927.JPG', title: 'A Beautiful Day', kind: 'image' },
  { src: 'IMG_0931.MOV', title: 'A New Moment In Motion', kind: 'video' },
  { src: 'IMG_2705.JPG', title: 'Little Joys', kind: 'image' },
  { src: 'IMG_5681.JPG', title: 'A Familiar Smile', kind: 'image' },
  { src: 'IMG_5910.JPG', title: 'Our Kind Of Happy', kind: 'image' },
  { src: 'IMG_5911.JPG', title: 'Golden Memories', kind: 'image' },
  { src: 'IMG_6047.JPG', title: 'A New Portrait', kind: 'image' },
  { src: 'IMG_6048.MOV', title: 'A New Moving Memory', kind: 'video' },
  { src: 'IMG_6049.JPG', title: 'Another Beautiful Frame', kind: 'image' },
  { src: 'IMG_7350.JPG', title: 'Cozy Together', kind: 'image' },
  { src: 'IMG_E0927.JPG', title: 'A Precious Frame', kind: 'image' },
  { src: 'JBIR1312.JPG', title: 'Candlelit Evenings', kind: 'image' },
  { src: 'JXSJ6524.JPG', title: 'Just Us', kind: 'image' },
  { src: 'KJUD8091.MP4', title: 'Our Living Memory', kind: 'video' },
  { src: 'MGND6741.JPG', title: 'A Favorite View', kind: 'image' },
  { src: 'RFXM5866.JPG', title: 'Home With You', kind: 'image' },
  { src: 'SJDM3997.JPG', title: 'Pure Laughter', kind: 'image' },
  { src: 'SKNW2415.MOV', title: 'A Moment In Motion', kind: 'video' },
  { src: 'SQHQ9408.JPG', title: 'Sunlit Memories', kind: 'image' },
  { src: 'TDDG3495.JPG', title: 'A Sweet Memory', kind: 'image' },
  { src: 'UXLE1443.JPG', title: 'Roads We Remember', kind: 'image' },
  { src: 'VQBY5511.JPG', title: 'A Lovely Day', kind: 'image' },
  { src: 'WIXR7472.JPG', title: 'Always Us', kind: 'image' },
  { src: 'WURB1366.JPG', title: 'Our Soft Place', kind: 'image' },
  { src: 'XUAG0165.JPG', title: 'Forever Framed', kind: 'image' },
];

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Photos', value: 'image' },
  { label: 'Videos', value: 'video' },
] as const;

export default function MemoriesPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]['value']>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const visibleItems = filter === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.kind === filter);

  return (
    <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e6ca85]/30 bg-[#120e1e] px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-[#e6ca85]">
            <Heart className="h-3.5 w-3.5 text-[#df95a6]" />
            <span>Our Photo & Video Gallery</span>
          </div>
          <h1 className="font-serif-display text-5xl font-bold text-gold-gradient sm:text-7xl">Our Gallery</h1>
          <p className="mt-4 font-serif-display text-base italic leading-relaxed text-stone-300 sm:text-xl">
            Every frame holds a little piece of us.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {FILTERS.map((item) => {
              const isActive = filter === item.value;
              return (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setFilter(item.value)}
                  className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'border-[#e6ca85] bg-[#e6ca85] text-[#07060a] shadow-[0_0_20px_rgba(230,202,133,0.35)]'
                      : 'border-white/10 bg-[#141022] text-stone-300 hover:border-[#e6ca85]/50 hover:text-[#e6ca85]'
                  }`}
                >
                  {item.value === 'video' ? <Film className="h-3.5 w-3.5" /> : <ImageIcon className="h-3.5 w-3.5" />}
                  {item.label}
                </button>
              );
            })}
          </div>
        </header>

        <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item, index) => (
              <motion.button
                key={item.src}
                type="button"
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ delay: Math.min(index * 0.035, 0.35) }}
                onClick={() => setActiveItem(item)}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#11101a] text-left shadow-xl transition-all hover:-translate-y-1 hover:border-[#e6ca85]/60 hover:shadow-[0_18px_45px_rgba(0,0,0,0.45)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#08070c] p-2">
                  <div className="relative h-full w-full overflow-hidden rounded-xl bg-black/40">
                    {item.kind === 'video' ? (
                      <video
                        src={`/image/${item.src}`}
                        muted
                        loop
                        playsInline
                        autoPlay
                        className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <Image
                        src={`/image/${item.src}`}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/55 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-white backdrop-blur-md">
                      {item.kind === 'video' ? <Play className="h-3 w-3 fill-current text-[#df95a6]" /> : <ImageIcon className="h-3 w-3 text-[#e6ca85]" />}
                      {item.kind === 'video' ? 'Video' : 'Photo'}
                    </span>
                    <Maximize2 className="absolute bottom-3 right-3 h-4 w-4 text-[#e6ca85] opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {activeItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl sm:p-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                onClick={(event) => event.stopPropagation()}
                className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-[#e6ca85]/40 bg-[#0c0a12] p-2 shadow-2xl"
              >
                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  aria-label="Close gallery preview"
                  className="absolute right-5 top-5 z-10 rounded-full border border-white/20 bg-black/70 p-2 text-white transition-colors hover:text-[#e6ca85]"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="relative flex max-h-[82vh] min-h-[50vh] items-center justify-center overflow-hidden rounded-xl bg-black">
                  {activeItem.kind === 'video' ? (
                    <video src={`/image/${activeItem.src}`} controls autoPlay playsInline className="max-h-[82vh] w-full object-contain" />
                  ) : (
                    <Image
                      src={`/image/${activeItem.src}`}
                      alt={activeItem.title}
                      width={1600}
                      height={1200}
                      className="max-h-[82vh] w-full object-contain"
                    />
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-14 text-center">
          <Link
            href="/moments"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#e6ca85] to-[#df95a6] px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-[#07060a] shadow-xl transition-transform hover:scale-105"
          >
            <span>Discover Little Things I Love</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
