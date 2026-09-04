'use client';

export default function NoiseOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {/* SVG noise texture */}
      <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay" />

      {/* Top ambient golden radial glow */}
      <div className="absolute -top-[20vw] left-1/2 -translate-x-1/2 w-[70vw] h-[35vw] rounded-full bg-radial from-[#e6ca85]/10 via-[#df95a6]/5 to-transparent blur-3xl" />

      {/* Bottom ambient rose radial glow */}
      <div className="absolute -bottom-[20vw] right-0 w-[50vw] h-[40vw] rounded-full bg-radial from-[#df95a6]/10 via-transparent to-transparent blur-3xl" />
    </div>
  );
}
