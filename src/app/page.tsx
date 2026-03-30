import { getAllGuides } from '@/lib/guides';
import GuideCard from '@/components/GuideCard';
import FeaturedGuideCard from '@/components/FeaturedGuideCard';
import CategoryGrid from '@/components/CategoryGrid';
import SearchBar from '@/components/SearchBar';
import { CATEGORIES } from '@/types/guide';

export default function HomePage() {
  const guides = getAllGuides();
  const featured = guides.slice(0, 3);
  const recent = guides.slice(3, 9);

  return (
    <main className="relative">
      {/* Hero Section - Editorial Magazine Style */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 lg:px-8 py-20 relative overflow-hidden">
        {/* Giant "10" Background Element */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 select-none pointer-events-none">
          <span className="text-[40vw] md:text-[35vw] font-bold text-[#E5E2DD]/50 leading-none tracking-tighter">
            10
          </span>
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="animate-on-load animate-fade-in-up">
              <span className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-[#6B6B6B] mb-6">
                <span className="w-8 h-px bg-[#6B6B6B]"></span>
                Learn Anything
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="animate-on-load animate-fade-in-up delay-100">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
                Get Good
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mt-2">
                at <span className="relative inline-block">
                  Anything
                  <span className="absolute -bottom-2 left-0 right-0 h-4 bg-[#CCFF00] -z-10 -rotate-1"></span>
                </span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="animate-on-load animate-fade-in-up delay-200 text-xl md:text-2xl text-[#6B6B6B] mt-8 max-w-xl leading-relaxed">
              10 focused steps. See results in <span className="text-[#0a0a0a] font-medium">under a minute</span>. Achieve mastery in <span className="text-[#0a0a0a] font-medium">a single day</span>.
            </p>

            {/* Search Bar */}
            <div className="animate-on-load animate-fade-in-up delay-300 mt-10">
              <SearchBar guides={guides} />
            </div>

            {/* Quick Stats */}
            <div className="animate-on-load animate-fade-in-up delay-400 flex flex-wrap gap-8 mt-12 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#CCFF00]"></span>
                <span className="text-[#6B6B6B]">{guides.length}+ guides</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#CCFF00]"></span>
                <span className="text-[#6B6B6B]">{CATEGORIES.length} categories</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#CCFF00]"></span>
                <span className="text-[#6B6B6B]">Human & AI optimized</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-on-load animate-fade-in delay-500">
          <div className="flex flex-col items-center gap-2 text-[#6B6B6B]">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-[#6B6B6B]/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-[#6B6B6B] animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guides - Horizontal Layout */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-sm font-medium tracking-widest uppercase text-[#CCFF00] bg-[#0a0a0a] px-3 py-1 rounded-full">
              Featured
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
              Start Here
            </h2>
          </div>
          <a href="#all-guides" className="hidden sm:flex items-center gap-2 text-sm font-medium text-[#6B6B6B] hover:text-[#0a0a0a] transition-colors group">
            View all
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {featured.map((guide, i) => (
            <FeaturedGuideCard key={guide.slug} guide={guide} index={i} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 border-t border-[#E5E2DD]">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-sm font-medium tracking-widest uppercase text-[#6B6B6B]">
              Explore
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">
              Browse by Category
            </h2>
          </div>
        </div>
        <CategoryGrid />
      </section>

      {/* All Guides Grid */}
      <section id="all-guides" className="max-w-7xl mx-auto px-6 lg:px-8 py-20 border-t border-[#E5E2DD]">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-sm font-medium tracking-widest uppercase text-[#6B6B6B]">
              Library
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">
              All Guides
            </h2>
          </div>
          <span className="text-sm text-[#6B6B6B]">{guides.length} guides</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="bg-[#0a0a0a] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          {/* Accent shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#CCFF00] rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#CCFF00] rounded-full blur-[100px] opacity-15"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Ready to get good?
            </h2>
            <p className="text-lg text-white/60 max-w-lg mx-auto mb-8">
              Pick a skill, follow the 10 steps, and start seeing results today.
            </p>
            <SearchBar guides={guides} placeholder="What skill will you master?" variant="dark" />
          </div>
        </div>
      </section>
    </main>
  );
}
