import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { AudioProvider } from '@/components/ui/AudioProvider';
import SmoothScroll from '@/components/ui/SmoothScroll';
import CustomCursor from '@/components/ui/CustomCursor';
import NoiseOverlay from '@/components/ui/NoiseOverlay';
import Navigation from '@/components/layout/Navigation';
import PageTransition from '@/components/ui/PageTransition';
import Footer from '@/components/layout/Footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Happy Birthday, My Love | A Cinematic Love Story",
  description: "An interactive luxury digital experience and love story crafted with eternal devotion.",
  keywords: ["Birthday", "Love Story", "Saloni", "Amit", "Cinematic", "Next.js", "Interactive"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} dark`}>
      <body className="bg-[#07060a] text-[#f6f3eb] font-sans antialiased selection:bg-[#df95a6]/30 selection:text-white min-h-screen flex flex-col relative overflow-x-hidden">
        <AudioProvider>
          <SmoothScroll>
            <CustomCursor />
            <NoiseOverlay />
            <Navigation />
            <main className="flex-1 flex flex-col pt-20">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </SmoothScroll>
        </AudioProvider>
      </body>
    </html>
  );
}
