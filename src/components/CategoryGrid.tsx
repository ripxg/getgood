import Link from 'next/link';
import { CATEGORIES } from '@/types/guide';

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {CATEGORIES.map((cat, i) => (
        <Link
          key={cat.slug}
          href={`/category/${cat.slug}`}
          className="group relative flex flex-col items-start p-6 rounded-2xl bg-white border border-[#E5E2DD] hover:border-[#0a0a0a] transition-all duration-300 overflow-hidden card-lift"
          style={{ animationDelay: `${i * 50}ms` }}
        >
          {/* Hover accent */}
          <div className="absolute inset-0 bg-[#CCFF00] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
          
          {/* Emoji */}
          <span className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
            {cat.emoji}
          </span>
          
          {/* Name */}
          <span className="text-base font-semibold text-[#0a0a0a] tracking-tight leading-tight">
            {cat.name}
          </span>

          {/* Arrow */}
          <span className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-[#FAF8F5] flex items-center justify-center text-xs text-[#6B6B6B] group-hover:bg-[#0a0a0a] group-hover:text-[#CCFF00] transition-all duration-300">
            →
          </span>
        </Link>
      ))}
    </div>
  );
}
