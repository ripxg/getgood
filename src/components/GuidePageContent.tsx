'use client';

import Link from 'next/link';
import { Guide, Category } from '@/types/guide';
import StepCard from '@/components/StepCard';
import ShareButton from '@/components/ShareButton';
import GuideCard from '@/components/GuideCard';
import { useLanguage } from '@/contexts/LanguageContext';

interface GuidePageContentProps {
  guide: Guide;
  cat: Category | undefined;
  related: Guide[];
}

export default function GuidePageContent({ guide, cat, related }: GuidePageContentProps) {
  const { t } = useLanguage();

  return (
    <main className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[#6B6B6B] mb-8">
        <Link href="/" className="hover:text-[#0a0a0a] transition-colors">{t.guidePage.home}</Link>
        <span className="text-[#E5E2DD]">/</span>
        <Link href={`/category/${guide.categorySlug}`} className="hover:text-[#0a0a0a] transition-colors">{guide.category}</Link>
        <span className="text-[#E5E2DD]">/</span>
        <span className="text-[#0a0a0a] font-medium truncate">{guide.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase px-4 py-2 rounded-full bg-[#0a0a0a] text-[#CCFF00]">
            {cat?.emoji} {guide.category}
          </span>
          <span className="text-sm text-[#6B6B6B]">10 {t.guidePage.steps.toLowerCase()}</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-5 leading-tight tracking-tight">
          {guide.title}
        </h1>
        
        <p className="text-xl text-[#6B6B6B] mb-8 leading-relaxed max-w-2xl">
          {guide.description}
        </p>

        {/* Stats bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-6 bg-white border border-[#E5E2DD] rounded-2xl px-6 py-4">
            <div className="text-center">
              <div className="text-xs font-medium text-[#6B6B6B] uppercase tracking-wide mb-1">{t.guidePage.readingTime}</div>
              <div className="text-base font-bold text-[#0a0a0a]">{guide.timeToNotice}</div>
            </div>
            <div className="w-px h-10 bg-[#E5E2DD]" />
            <div className="text-center">
              <div className="text-xs font-medium text-[#6B6B6B] uppercase tracking-wide mb-1">{t.guidePage.achieveIn}</div>
              <div className="text-base font-bold text-[#0a0a0a]">{guide.timeToAchieve}</div>
            </div>
            <div className="w-px h-10 bg-[#E5E2DD]" />
            <div className="text-center">
              <div className="text-xs font-medium text-[#6B6B6B] uppercase tracking-wide mb-1">{t.guidePage.steps}</div>
              <div className="text-base font-bold text-[#0a0a0a]">{guide.steps.length}</div>
            </div>
          </div>
          <ShareButton />
        </div>
      </header>

      {/* Steps */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-bold text-[#0a0a0a] tracking-tight">{t.guidePage.the10Steps}</h2>
          <div className="flex-1 h-px bg-[#E5E2DD]"></div>
        </div>
        
        <div className="bg-white rounded-3xl border border-[#E5E2DD] p-6 md:p-8">
          {guide.steps.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>
      </section>

      {/* Sources */}
      {guide.sources.length > 0 && (
        <section className="mb-16">
          <h3 className="text-sm font-bold text-[#6B6B6B] uppercase tracking-widest mb-4">{t.guidePage.sourcesReferences}</h3>
          <div className="bg-white rounded-2xl border border-[#E5E2DD] p-6">
            <ul className="space-y-2">
              {guide.sources.map((src) => (
                <li key={src}>
                  <a 
                    href={src} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-[#6B6B6B] hover:text-[#0a0a0a] transition-colors break-all flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#CCFF00] shrink-0"></span>
                    {src}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Related Guides */}
      {related.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#0a0a0a] tracking-tight">{t.guidePage.moreIn} {guide.category}</h2>
            <Link 
              href={`/category/${guide.categorySlug}`}
              className="text-sm font-medium text-[#6B6B6B] hover:text-[#0a0a0a] transition-colors flex items-center gap-2"
            >
              {t.sections.viewAll}
              <span>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {related.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
