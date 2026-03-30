'use client';

import Link from 'next/link';
import { Guide } from '@/types/guide';
import { CATEGORIES } from '@/types/guide';
import { useLanguage } from '@/contexts/LanguageContext';

interface GuideCardProps {
  guide: Guide;
}

export default function GuideCard({ guide }: GuideCardProps) {
  const cat = CATEGORIES.find((c) => c.slug === guide.categorySlug);
  const { t } = useLanguage();

  return (
    <Link 
      href={`/guide/${guide.slug}`} 
      className="group block bg-white rounded-2xl border border-[#E5E2DD] hover:border-[#0a0a0a] transition-all duration-300 overflow-hidden card-lift"
    >
      <div className="p-6 md:p-7">
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E5E2DD] text-[#6B6B6B]">
            <span>{cat?.emoji}</span>
            <span>{guide.category}</span>
          </span>
          <span className="text-xs font-medium text-[#CCFF00] bg-[#0a0a0a] px-2.5 py-1 rounded-full">
            10 {t.guideCard.steps}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-[#0a0a0a] group-hover:text-[#0a0a0a] transition-colors mb-3 leading-snug tracking-tight">
          {guide.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#6B6B6B] mb-5 line-clamp-2 leading-relaxed">
          {guide.description}
        </p>

        {/* Time indicators */}
        <div className="flex items-center gap-6 pt-4 border-t border-[#E5E2DD]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]"></span>
            <span className="text-xs font-medium text-[#6B6B6B]">
              {t.guideCard.readingTime}: <span className="text-[#0a0a0a]">{guide.timeToNotice}</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a]"></span>
            <span className="text-xs font-medium text-[#6B6B6B]">
              {t.guideCard.achieveIn}: <span className="text-[#0a0a0a]">{guide.timeToAchieve}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Hover accent bar */}
      <div className="h-1 bg-[#CCFF00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </Link>
  );
}
