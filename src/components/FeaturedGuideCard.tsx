'use client';

import Link from 'next/link';
import { Guide } from '@/types/guide';
import { CATEGORIES } from '@/types/guide';
import { useLanguage } from '@/contexts/LanguageContext';

interface FeaturedGuideCardProps {
  guide: Guide;
  index: number;
}

export default function FeaturedGuideCard({ guide, index }: FeaturedGuideCardProps) {
  const cat = CATEGORIES.find((c) => c.slug === guide.categorySlug);
  const { t } = useLanguage();

  return (
    <Link 
      href={`/guide/${guide.slug}`} 
      className="group block bg-white rounded-2xl border border-[#E5E2DD] hover:border-[#0a0a0a] transition-all duration-300 overflow-hidden card-lift"
    >
      <div className="flex flex-col md:flex-row">
        {/* Left side - Number */}
        <div className="md:w-32 lg:w-40 bg-[#0a0a0a] p-6 md:p-8 flex items-center justify-center shrink-0">
          <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#CCFF00] tracking-tighter">
            0{index + 1}
          </span>
        </div>

        {/* Right side - Content */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
          <div>
            {/* Category & Steps */}
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E5E2DD] text-[#6B6B6B]">
                <span>{cat?.emoji}</span>
                <span>{guide.category}</span>
              </span>
              <span className="text-xs font-medium text-[#6B6B6B]">
                10 {t.guideCard.steps}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0a0a0a] tracking-tight leading-snug mb-3">
              {guide.title}
            </h3>

            {/* Description */}
            <p className="text-base text-[#6B6B6B] leading-relaxed max-w-2xl">
              {guide.description}
            </p>
          </div>

          {/* Time indicators & CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 pt-6 border-t border-[#E5E2DD]">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#CCFF00]"></span>
                <span className="text-sm text-[#6B6B6B]">
                  {t.guideCard.readingTime} <span className="font-medium text-[#0a0a0a]">45 seconds</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0a0a0a]"></span>
                <span className="text-sm text-[#6B6B6B]">
                  {t.guidePage.achieveIn} <span className="font-medium text-[#0a0a0a]">{guide.timeToAchieve}</span>
                </span>
              </div>
            </div>

            {/* Arrow CTA */}
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a0a0a] group-hover:gap-3 transition-all">
              {t.guidePage.startGuide}
              <span className="w-8 h-8 rounded-full bg-[#CCFF00] flex items-center justify-center group-hover:bg-[#0a0a0a] group-hover:text-[#CCFF00] transition-colors">
                →
              </span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
