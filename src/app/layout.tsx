import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'GetGood — Learn Anything Fast',
  description: '10-step guides that show you results in under a minute and get you there in a day. Built for curious humans and AI agents.',
  openGraph: {
    title: 'GetGood — Learn Anything Fast',
    description: '10-step guides that show you results in under a minute and get you there in a day.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-sans bg-[#FAF8F5] text-[#0a0a0a] antialiased noise-bg min-h-screen">
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/80 backdrop-blur-md border-b border-[#E5E2DD]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-xl font-bold tracking-tight">
                Get<span className="text-[#0a0a0a] group-hover:text-[#CCFF00] transition-colors duration-200">Good</span>
              </span>
            </Link>
            <nav className="hidden sm:flex items-center gap-8 text-sm font-medium tracking-wide">
              <Link href="/category/sports-fitness" className="text-[#6B6B6B] hover:text-[#0a0a0a] transition-colors duration-200">
                Fitness
              </Link>
              <Link href="/category/food-cooking" className="text-[#6B6B6B] hover:text-[#0a0a0a] transition-colors duration-200">
                Cooking
              </Link>
              <Link href="/category/tech-tools" className="text-[#6B6B6B] hover:text-[#0a0a0a] transition-colors duration-200">
                Tech
              </Link>
              <Link href="/category/creative" className="text-[#6B6B6B] hover:text-[#0a0a0a] transition-colors duration-200">
                Creative
              </Link>
            </nav>
            <div className="sm:hidden">
              <Link href="/" className="text-sm font-medium text-[#6B6B6B]">
                Menu
              </Link>
            </div>
          </div>
        </header>

        <div className="pt-16 relative z-10">
          {children}
        </div>

        <footer className="border-t border-[#E5E2DD] mt-24 relative z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <span className="text-lg font-bold tracking-tight">GetGood</span>
                <p className="text-sm text-[#6B6B6B] mt-2 max-w-xs">
                  10 steps. Under a minute to see results. A day to achieve mastery.
                </p>
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#6B6B6B]">
                <Link href="/" className="hover:text-[#0a0a0a] transition-colors">All Guides</Link>
                <Link href="/category/sports-fitness" className="hover:text-[#0a0a0a] transition-colors">Fitness</Link>
                <Link href="/category/food-cooking" className="hover:text-[#0a0a0a] transition-colors">Cooking</Link>
                <Link href="/category/tech-tools" className="hover:text-[#0a0a0a] transition-colors">Tech</Link>
                <Link href="/category/creative" className="hover:text-[#0a0a0a] transition-colors">Creative</Link>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-[#E5E2DD] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B6B6B]">
              <p>© {new Date().getFullYear()} GetGood. All rights reserved.</p>
              <p>Built for humans & AI agents</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
