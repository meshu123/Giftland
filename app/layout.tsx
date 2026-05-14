import type { Metadata } from 'next';
import { Inter, Playfair_Display, Dancing_Script } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Giftland Studios & Restaurant | Kisii, Kenya',
  description: 'Premium photography studio and upscale dining experience in Jogoo, Kisii.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${dancingScript.variable}`}>
      <body suppressHydrationWarning className="bg-[#0D0D0D] text-[#F5EDD6] antialiased">
        {children}
      </body>
    </html>
  );
}
