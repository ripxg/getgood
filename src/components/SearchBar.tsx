'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Fuse from 'fuse.js';
import { Guide } from '@/types/guide';
import { CATEGORIES } from '@/types/guide';

interface SearchBarProps {
  guides: Guide[];
  placeholder?: string;
  variant?: 'light' | 'dark';
}

export default function SearchBar({ 
  guides, 
  placeholder = 'What do you want to get good at?',
  variant = 'light'
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Guide[]>([]);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const fuse = new Fuse(guides, {
    keys: ['title', 'description', 'tags', 'category'],
    threshold: 0.35,
  });

  useEffect(() => {
    if (query.trim().length > 1) {
      const hits = fuse.search(query).slice(0, 6).map((r) => r.item);
      setResults(hits);
      setOpen(true);
    } else {
      setResults([]);
      setOpen(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isDark = variant === 'dark';

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className={`
            w-full px-6 py-4 text-base font-medium rounded-2xl border-2 transition-all duration-200
            focus:outline-none focus:ring-0 placeholder:font-normal
            ${isDark 
              ? 'bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#CCFF00] focus:bg-white/15' 
              : 'bg-white border-[#E5E2DD] text-[#0a0a0a] placeholder:text-[#6B6B6B] focus:border-[#0a0a0a]'
            }
          `}
          onFocus={() => results.length > 0 && setOpen(true)}
        />
        <span className={`absolute right-5 top-1/2 -translate-y-1/2 text-lg ${isDark ? 'text-white/50' : 'text-[#6B6B6B]'}`}>
          🔍
        </span>
      </div>

      {open && results.length > 0 && (
        <div className="absolute z-50 w-full mt-3 bg-white rounded-2xl border border-[#E5E2DD] shadow-2xl overflow-hidden">
          <div className="py-2">
            {results.map((guide) => {
              const cat = CATEGORIES.find((c) => c.slug === guide.categorySlug);
              return (
                <button
                  key={guide.slug}
                  onClick={() => {
                    setOpen(false);
                    setQuery('');
                    router.push(`/guide/${guide.slug}`);
                  }}
                  className="w-full flex items-center gap-4 px-5 py-3.5 hover:bg-[#FAF8F5] text-left transition-colors group"
                >
                  <span className="text-2xl">{cat?.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-[#0a0a0a] truncate group-hover:text-[#0a0a0a]">
                      {guide.title}
                    </div>
                    <div className="text-xs text-[#6B6B6B] mt-0.5">{guide.category}</div>
                  </div>
                  <span className="text-xs font-medium text-[#CCFF00] bg-[#0a0a0a] px-2 py-1 rounded-full shrink-0">
                    {guide.timeToNotice}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="px-5 py-3 bg-[#FAF8F5] border-t border-[#E5E2DD]">
            <span className="text-xs text-[#6B6B6B]">
              Press <kbd className="px-1.5 py-0.5 bg-white rounded border border-[#E5E2DD] text-[#0a0a0a] font-mono">↵</kbd> to search
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
