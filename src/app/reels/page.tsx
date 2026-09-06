import Link from 'next/link';
import { ArrowRight, Film, Heart, Play } from 'lucide-react';

const REELS = [
  {
    filename: 'last bond 1.mp4',
    title: 'The Last Bond',
    note: 'One more little memory to keep close.',
  },
  {
    filename: 'reels.mp4',
    title: 'Our Reel',
    note: 'A few seconds of us, saved forever.',
  },
];

export default function ReelsPage() {
  return (
    <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e6ca85]/30 bg-[#120e1e] px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-[#e6ca85]">
            <Film className="h-3.5 w-3.5 text-[#df95a6]" />
            <span>Our Little Reels</span>
          </div>
          <h1 className="font-serif-display text-5xl font-bold text-gold-gradient sm:text-7xl">Reels</h1>
          <p className="mt-4 font-serif-display text-base italic leading-relaxed text-stone-300 sm:text-xl">
            Tiny moving memories, kept in one beautiful place.
          </p>
        </header>

        <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 md:gap-10">
          {REELS.map((reel, index) => (
            <article
              key={reel.filename}
              className="group w-full max-w-sm overflow-hidden rounded-[1.5rem] border border-[#e6ca85]/20 bg-[#11101a] shadow-2xl transition-transform duration-500 hover:-translate-y-1 hover:border-[#e6ca85]/60"
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-black">
                <video
                  src={`/image/${encodeURIComponent(reel.filename)}`}
                  controls
                  muted 
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-contain"
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between bg-gradient-to-b from-black/70 to-transparent p-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/45 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-white backdrop-blur-md">
                    <Play className="h-3 w-3 fill-current text-[#df95a6]" />
                    Reel 0{index + 1}
                  </span>
                  <Heart className="h-4 w-4 fill-[#df95a6]/30 text-[#df95a6]" />
                </div>
              </div>
              <div className="p-5">
                <h2 className="font-serif-display text-3xl font-semibold text-gold-gradient">{reel.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-stone-400">{reel.note}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/memories"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#e6ca85] to-[#df95a6] px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-[#07060a] shadow-xl transition-transform hover:scale-105"
          >
            <span>See Every Memory</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}